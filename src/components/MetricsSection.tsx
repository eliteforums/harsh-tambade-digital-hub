import { motion } from "framer-motion";

const metrics = [
  { value: "₹20L+", label: "Revenue\nGenerated" },
  { value: "25+", label: "Clients\nServed" },
  { value: "1500+", label: "Professionals\nTrained" },
  { value: "900+", label: "Community\nMembers" },
  { value: "95%", label: "Client\nSatisfaction" },
];

const MetricsSection = () => {
  return (
    <section className="section-padding py-12 md:py-16 border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
              {metric.value}
            </p>
            <p className="body-sm text-muted-foreground mt-1 whitespace-pre-line">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
