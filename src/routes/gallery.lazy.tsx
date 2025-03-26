import { gallery } from "@/lib/data";
import { createLazyFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
export const Route = createLazyFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-6">Gallery</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-gray-700">
          Fun moments together as a team.
          <br />
          From working together on projects, to vibes and chill.
        </p>
      </div>
      {/* Gallery Content would go here */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((g, i) => (
          <GalleryImage {...g} key={i} />
        ))}
        {/* This is where you would add your gallery grid or images */}
      </section>
    </section>
  );
}

function GalleryImage(props: (typeof gallery)[number]) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="aspect-square w-full h-full overflow-hidden flex flex-col duration-300  ease-in-out"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        layout="preserve-aspect"
        className="flex-1 rounded-2xl overflow-hidden relative"
      >
        <motion.img
          layout="preserve-aspect"
          loading="lazy"
          src={props.image}
          alt={props.alt}
          width={400}
          height={400}
          className="absolute inste-o w-full h-full object-center object-cover"
        />
      </motion.div>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              padding: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              padding: "8px 0px",
            }}
            exit={{
              opacity: 0,
              y: 10,
              height: 0,
              padding: 0,
            }}
            className="flex items-center duration-300 ease-in-out overflow-hidden py-2"
          >
            <span className="rounded-full px-2 py-1 bg-black text-white">
              {props.alt}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
