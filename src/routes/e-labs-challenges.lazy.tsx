import { Button } from "@/components/ui/button";
import { challenges } from "@/lib/constant";
import { createLazyFileRoute } from "@tanstack/react-router";
import Challenge6 from "@/assets/challenge-6.png";

export const Route = createLazyFileRoute("/e-labs-challenges")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Challenges We Tackled</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700">
            Together as a team, we worked on a total of six challenges. These
            challenges broadened our skillset, exposed us to hands-on problem
            solving and innovative thinking.
          </p>
        </div>
        <ChallengeShowcase />
      </section>
      <div className="mt-8 bg-[#FFF5CC]">
        <div className="container mx-auto px-4 py-12 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-2xl font-medium max-w-3xl">
            View a detailed documentation about our roadmap and processes here
            &gt;&gt;&gt;
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800">Our Journey</Button>
        </div>
      </div>
    </>
  );
}

export default function ChallengeShowcase() {
  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 mt-8">
      <div className="space-y-24">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className={`w-full md:w-1/2 ${index === 5 ? "relative" : ""}`}>
              {index === 5 ? (
                // Special case for Challenge 6
                <div className="relative border  rounded-xl overflow-hidden aspect-image">
                  <img
                    src={Challenge6}
                    alt={challenge.title}
                    width={600}
                    height={400}
                    className="rounded-xl overflow-hidden w-full h-auto"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm">
                    HustleHive's Digital Print
                  </div>
                </div>
              ) : (
                // YouTube iframe for other challenges
                <div className="rounded-xl overflow-hidden aspect-video">
                  <iframe
                    src={getYouTubeEmbedUrl(challenge.video)}
                    title={challenge.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 space-y-2">
              <h2 className="text-2xl font-bold">{challenge.title}</h2>
              <p className="text-gray-500">{challenge.subtitle}</p>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
