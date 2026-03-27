import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import harshImg from "@/assets/harsh-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-20 pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
        {/* Left: Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-6 xl:col-span-5"
        >
          <h1 className="heading-xl text-foreground leading-[0.85]">
            DRIVE<br />
            GROWTH.<br />
            BUILD<br />
            SYSTEMS.
          </h1>
        </motion.div>

        {/* Center: Photo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-3 xl:col-span-4"
        >
          <div className="w-full max-w-[400px] aspect-[3/4] overflow-hidden">
            <img
              src={harshImg}
              alt="Harsh Tambade - IT & Business Consultant"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-3 flex flex-col justify-end gap-6"
        >
          <div>
            <p className="font-heading text-xl md:text-2xl text-foreground mb-2">
              HARSH TAMBADE
            </p>
            <p className="body-sm text-muted-foreground max-w-xs">
              IT & Business Consultant helping companies leverage AI, data, and digital transformation to scale efficiently.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendar.app.google/fBXqj6iBaGjYAJeLA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-brand text-accent-brand-foreground px-6 py-3.5 text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Book a Consultation <ArrowRight size={14} />
            </a>
            <a
              href="mailto:harsh.tambade@eliteforums.in"
              className="border border-foreground text-foreground px-6 py-3.5 text-xs uppercase tracking-wider font-semibold hover:bg-foreground hover:text-background transition-colors text-center"
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
