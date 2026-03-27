import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "IT CONSULTING",
    description: "Helping businesses design scalable, efficient, and future-ready tech systems.",
  },
  {
    num: "02",
    title: "BUSINESS STRATEGY",
    description: "Aligning technology with business growth through data-driven strategies.",
  },
  {
    num: "03",
    title: "AI & AUTOMATION SOLUTIONS",
    description: "Building intelligent systems that reduce manual work and improve efficiency.",
  },
  {
    num: "04",
    title: "TRAINING & WORKSHOPS",
    description: "Delivering industry-level training in AI, Data Science, and Full Stack Development.",
  },
  {
    num: "05",
    title: "SAAS PRODUCT DEVELOPMENT",
    description: "Building and scaling custom SaaS platforms for startups and enterprises.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding border-t border-border">
      <motion.h2
        className="heading-lg text-foreground mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        HOW I SOLVE YOUR<br />CHALLENGES
      </motion.h2>

      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-12 gap-4 py-8 border-t border-border group hover:bg-secondary/50 transition-colors px-2 -mx-2"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="text-sm text-muted-foreground font-medium">{service.num}</span>
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-heading text-xl md:text-2xl text-foreground">{service.title}</h3>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="body-sm text-muted-foreground">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
