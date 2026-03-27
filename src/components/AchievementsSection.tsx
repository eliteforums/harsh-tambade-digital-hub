import { motion } from "framer-motion";

const achievements = [
  "₹20+ Lakh Revenue Generated",
  "Incubated at Mumbai University Foundation",
  "2× Hackathon Winner",
  "Top 10 Finalist — 5 National Hackathons",
  "Hackathon Mentor (3×) & Judge (2×)",
  "Speaker & Community Leader",
];

const community = [
  "Founded a 900+ member tech community",
  "Organized hackathons, meetups & events",
  "Mentored aspiring developers & founders",
  "Active contributor to tech ecosystem",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Credentials</p>
          <h2 className="heading-lg text-foreground mb-12">
            TRUSTED<br />CREDENTIALS<br />& RECOGNITION
          </h2>
          <div className="space-y-5">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 py-2 border-b border-border/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-2 shrink-0" />
                <p className="body-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Community</p>
          <h2 className="heading-lg text-foreground mb-12">
            BUILDING<br />COMMUNITIES,<br />NOT JUST<br />PRODUCTS
          </h2>
          <div className="space-y-5">
            {community.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 py-2 border-b border-border/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                <p className="body-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
