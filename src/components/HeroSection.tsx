import { motion } from "framer-motion";
import harshImg from "@/assets/harsh-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding pt-28 md:pt-32 pb-12 md:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="heading-xl text-foreground">
            DRIVE<br />
            GROWTH.<br />
            BUILD<br />
            SYSTEMS.
          </h1>
        </motion.div>

        {/* Right: Photo + intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="w-full max-w-sm overflow-hidden">
            <img
              src={harshImg}
              alt="Harsh Tambade - IT & Business Consultant"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <p className="font-heading text-xl md:text-2xl text-foreground mb-2">
              HARSH TAMBADE
            </p>
            <p className="body-sm text-muted-foreground max-w-md">
              IT & Business Consultant helping companies leverage AI, data, and digital transformation to scale efficiently.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://calendar.app.google/fBXqj6iBaGjYAJeLA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-brand text-accent-brand-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </a>
            <a
              href="mailto:harsh.tambade@eliteforums.in"
              className="border border-foreground text-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
