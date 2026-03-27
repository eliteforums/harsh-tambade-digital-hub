import { motion } from "framer-motion";
import harshSecondary from "@/assets/harsh-secondary.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={harshSecondary}
              alt="Harsh Tambade"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About Me</p>
          <h2 className="heading-lg text-foreground mb-10">
            WHO AM I AND<br />HOW CAN I BE<br />OF HELP?
          </h2>
          <div className="space-y-5 body-sm text-muted-foreground">
            <p>
              You're not just looking at another developer or consultant — I'm a builder.
            </p>
            <p>
              I started <span className="text-foreground font-medium">Elite Forums</span> with a clear ambition: to bring high-quality technology solutions to businesses at the right cost, speed, and impact.
            </p>
            <p>
              India is one of the largest tech hubs in the world, yet many businesses fail to fully leverage technology. I saw that gap — not just in skills, but in execution, strategy, and real-world application.
            </p>
            <p>
              So I built Elite Forums — a collective of skilled technologists focused on delivering practical AI solutions, scalable digital systems, and business-driven technology.
            </p>
            <p className="text-foreground font-medium">
              What drives me is simple: building systems that create impact — for businesses, individuals, and the ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
