import { motion } from "framer-motion";

import galleryAward from "@/assets/gallery-award.jpg";
import galleryHackathon from "@/assets/gallery-hackathon.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";
import gallerySpeaking from "@/assets/gallery-speaking.jpg";
import galleryWinner from "@/assets/gallery-winner.jpg";
import galleryPanel from "@/assets/gallery-panel.jpg";
import galleryPitch from "@/assets/gallery-pitch.jpg";
import galleryAiTalk from "@/assets/gallery-ai-talk.jpg";
import galleryIncubation from "@/assets/gallery-incubation.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryNirman from "@/assets/gallery-nirman.jpg";

const images = [
  { src: galleryPitch, alt: "Pitching at Amity University" },
  { src: galleryAward, alt: "Receiving Mentor Award" },
  { src: galleryHackathon, alt: "BNB Chain Hackathon" },
  { src: gallerySpeaking, alt: "Speaking at College Seminar" },
  { src: galleryNirman, alt: "Nirman'25 Hackathon Winner" },
  { src: galleryTraining, alt: "Training 1500+ Students" },
  { src: galleryWinner, alt: "Code-O-Fiesta Winner" },
  { src: galleryIncubation, alt: "Mumbai University Incubation Centre" },
  { src: galleryWorkshop, alt: "Workshop Session" },
  { src: galleryAiTalk, alt: "AI-Driven Transformation Talk" },
  { src: galleryPanel, alt: "Panel Discussion" },
];

// Duplicate for seamless loop
const duplicated = [...images, ...images];

const GallerySection = () => {
  return (
    <section className="border-t border-border py-16 md:py-24 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Gallery</p>
          <h2 className="heading-lg text-foreground">
            MOMENTS &<br />MILESTONES
          </h2>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee with manual scroll support */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-track {
          animation: marquee-scroll 40s linear infinite;
        }
        .gallery-container:hover .gallery-track,
        .gallery-container:active .gallery-track {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="gallery-container relative w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="gallery-track flex gap-4 w-max">
          {duplicated.map((image, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] h-[220px] md:h-[280px] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={400}
                height={280}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;