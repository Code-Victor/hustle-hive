import "./embla.css";
import { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { teamMembers } from "@/lib/data";
import { Instagram } from "iconsax-react";
import { Linkedin } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.4;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const TeamCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [WheelGesturesPlugin(), Autoplay()]
  );
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="relative max-w-[54rem] mx-auto">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-[#f9fafb] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-[#f9fafb] to-transparent z-10"></div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div key={index} className="embla__slide">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    loading="lazy"
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    className="object-cover w-full"
                    width={200}
                    height={200}
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                    <div className="flex justify-center mt-3 space-x-2">
                      <a href="#" className="text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Instagram</span>
                        <Instagram
                          size={16}
                          variant="Outline"
                          color="#99a1af"
                        />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gray-600">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={16} color="#99a1af" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeamCarousel };
