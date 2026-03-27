import { motion } from "framer-motion";

import galleryJudging from "@/assets/gallery-judging.jpg";
import galleryAward from "@/assets/gallery-award.jpg";
import galleryHackathon from "@/assets/gallery-hackathon.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";
import gallerySpeaking from "@/assets/gallery-speaking.jpg";
import galleryWinner from "@/assets/gallery-winner.jpg";
import galleryPanel from "@/assets/gallery-panel.jpg";
import galleryPitch from "@/assets/gallery-pitch.jpg";

const images = [
  { src: galleryPitch, alt: "Pitching at Amity University", span: "col-span-2 row-span-1" },
  { src: galleryAward, alt: "Receiving Mentor Award", span: "col-span-1 row-span-2" },
  { src: galleryHackathon, alt: "BNB Chain Hackathon", span: "col-span-1 row-span-1" },
  { src: gallerySpeaking, alt: "Speaking at College Seminar", span: "col-span-1 row-span-1" },
  { src: galleryTraining, alt: "Training 1500+ Students", span: "col-span-2 row-span-1" },
  { src: galleryWinner, alt: "Code-O-Fiesta Winner", span: "col-span-1 row-span-1" },
  { src: galleryPanel, alt: "Panel Discussion", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Gallery</p>
        <h2 className="heading-lg text-foreground">
          MOMENTS &<br />MILESTONES
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`overflow-hidden group ${image.span}`}
          >
            <div className="w-full h-full min-h-[200px] md:min-h-[260px] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
