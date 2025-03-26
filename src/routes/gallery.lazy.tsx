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
      <motion.section
        className="py-8 container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {gallery.map((g, i) => (
          <GalleryImage {...g} index={i} key={i} />
        ))}
        {/* This is where you would add your gallery grid or images */}
      </motion.section>
    </section>
  );
}

function GalleryImage(props: (typeof gallery)[number] & { index: number }) {
  const [hover, setHover] = React.useState(false);

  return (
    <motion.div
      className="aspect-square w-full overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: props.index * 0.1,
        ease: "easeOut",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="w-full h-full relative rounded-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.img
          src={props.image}
          alt={props.alt}
          width={400}
          height={400}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />

        <AnimatePresence>
          {hover && (
            <motion.div
              className="absolute inset-0 bg-black/30 flex items-end justify-start p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="rounded-full px-3 py-1.5 bg-black text-white text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {props.alt}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
