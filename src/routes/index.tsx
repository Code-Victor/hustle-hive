import LandingPage from "@/assets/landing-page.png";
import { createFileRoute } from "@tanstack/react-router";
import { Magicpen, People, Setting } from "iconsax-react";
import { motion } from "motion/react";
import { useState } from "react";
import Problem from "@/assets/problem.png";
import Mission from "@/assets/mission.png";
import { TeamCarousel } from "@/components/carousel";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <TeamSection />
      <ValuesSection />
    </>
  );
}

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Building Sustainable Employment for Future Generations.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Hustle-Hive solves the problem of job creation in Rwanda by maximizing
          agricultural produce thereby creating a brighter future for the
          Rwandan Youth
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-3xl overflow-hidden">
        <img
          loading="eager"
          src={LandingPage}
          alt="Agricultural landscape with wind turbines at sunset"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-16 bg-gray-50 h-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Team</h2>
          <p className="text-gray-700">
            We are students of the African Leadership University united by a
            joint mission to solve the problem of job creation through
            agriculture.
          </p>
        </div>
        <TeamCarousel />
      </div>
    </section>
  );
}

type TabType = "team-values" | "problem" | "mission";
const title = {
  "team-values": "Our Values",
  problem: "Problem Statement",
  mission: "Our Mission",
};
function ValuesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("team-values");

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {title[activeTab]}
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setActiveTab("team-values")}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeTab === "team-values"
                  ? "bg-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Team Values
            </button>
            <button
              onClick={() => setActiveTab("problem")}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeTab === "problem"
                  ? "bg-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Problem
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeTab === "mission"
                  ? "bg-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Mission
            </button>
          </div>
        </div>

        {/* Values Content */}
        {activeTab === "team-values" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Innovation Card */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full">
                  <Setting variant="Bold" color="#949896" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 text-center">
                We prioritize forward-thinking solutions to diversify
                agricultural systems, optimize local production, and create
                sustainable employment opportunities. Innovation drives our
                ability to address Rwanda’s labor market challenges effectively.
              </p>
            </div>
            {/* Creativity Card */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full">
                  <Magicpen variant="Bold" color="#949896" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Creativity
              </h3>
              <p className="text-gray-600 text-center">
                Creativity is our magic wand. By thinking outside the box, we
                develop unique value-added products, and unlock new
                opportunities for job creation. Creativity helps us to adapt to
                challenges and find impactful ways to empower communities.
              </p>
            </div>
            {/* Collaboration Card */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full">
                  <People variant="Bold" color="#949896" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 text-center">
                We believe in the power of working together. By fostering strong
                partnerships with communities, stakeholders, and organizations,
                we amplify our impact and create a shared vision for sustainable
                job creation and economic growth in Rwanda.
              </p>
            </div>
          </motion.div>
        )}
        {/* Problem Content */}
        {activeTab === "problem" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-6 items-center"
          >
            <div className="space-y-6 ">
              <h3 className="text-2xl font-bold text-center mb-4">
                Problem Statement
              </h3>

              <p className="text-gray-600 text-justify md:text-xl">
                We're addressing the challenge of job creation in Rwanda by
                focusing on maximizing agricultural produce. Through innovative
                approaches to agriculture, we aim to create sustainable
                employment opportunities for the Rwandan youth while
                contributing to the country's economic growth.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src={Problem}
                // alt="Agricultural landscape with wind turbines at sunset"
                width={1000}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        )}
        {/* Mission Content */}
        {activeTab === "mission" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-6 items-center"
          >
            <div className="space-y-6 ">
              <h3 className="text-2xl font-bold text-center mb-4">
                Mission Statement
              </h3>

              <p className="text-gray-600 text-justify md:text-xl">
                Our mission is to enhance job creation in Rwanda by diversifying
                agricultural food systems. We aim to optimize local production
                by leveraging our agricultural resources in diverse ways. By
                cultivating a variety of crops and developing value-added
                products, we will expand employment opportunities and empower
                communities.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src={Mission}
                // alt="Agricultural landscape with wind turbines at sunset"
                width={1000}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
