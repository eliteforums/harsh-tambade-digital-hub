import { motion } from "framer-motion";
import harshImg from "@/assets/harsh-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-primary w-full aspect-[4/5] overflow-hidden relative">
            <img
              src={harshImg}
              alt="Harsh Tambade"
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h2 className="heading-lg text-primary-foreground text-center">
                WHO AM I AND<br />HOW CAN I BE<br />OF HELP?
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="font-heading text-lg text-muted-foreground mb-4">ABOUT ME</p>
          <div className="space-y-4 body-sm text-muted-foreground">
            <p>
              You're not just looking at another developer or consultant — I'm a builder.
            </p>
            <p>
              I started <strong className="text-foreground">Elite Forums</strong> with a clear ambition: to bring high-quality technology solutions to businesses at the right cost, speed, and impact.
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
