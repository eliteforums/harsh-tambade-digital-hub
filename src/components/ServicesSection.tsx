import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Services</p>
        <h2 className="heading-lg text-foreground">
          HOW I SOLVE YOUR<br />CHALLENGES
        </h2>
      </motion.div>

      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid grid-cols-12 gap-4 py-8 border-t border-border group cursor-pointer hover:bg-secondary/30 transition-all duration-300 px-4 -mx-4"
          >
            <div className="col-span-2 md:col-span-1 flex items-center">
              <span className="text-xs text-muted-foreground tracking-wider">{service.num}</span>
            </div>
            <div className="col-span-8 md:col-span-4 flex items-center">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground">{service.title}</h3>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-6 flex items-center">
              <p className="body-sm text-muted-foreground">{service.description}</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-end">
              <ArrowUpRight
                size={20}
                className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
