import { motion } from "framer-motion";

const metrics = [
  { value: "₹20L+", label: "Revenue Generated" },
  { value: "25+", label: "Clients Served" },
  { value: "1500+", label: "Professionals Trained" },
  { value: "900+", label: "Community Members" },
  { value: "95%", label: "Client Satisfaction" },
];

const MetricsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-border">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-none">
              {metric.value}
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
