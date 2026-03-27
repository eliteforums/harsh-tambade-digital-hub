import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    num: "01",
    title: "IT CONSULTING",
    description: "Helping businesses design scalable, efficient, and future-ready tech systems.",
    details: [
      "Technology stack evaluation and recommendation tailored to your business needs and budget",
      "Cloud infrastructure planning and migration strategies (AWS, Azure, GCP)",
      "System architecture design for scalability, security, and high availability",
      "IT roadmap development aligned with your 1-year and 5-year business goals",
      "Vendor evaluation and technology procurement advisory",
      "Legacy system modernization and digital transformation planning",
      "Cybersecurity assessment and implementation of best practices",
    ],
  },
  {
    num: "02",
    title: "BUSINESS STRATEGY",
    description: "Aligning technology with business growth through data-driven strategies.",
    details: [
      "Market analysis and competitive intelligence using data analytics",
      "Revenue model optimization and pricing strategy development",
      "Go-to-market strategy for tech products and SaaS platforms",
      "KPI framework design and performance tracking dashboards",
      "Business process re-engineering to eliminate inefficiencies",
      "Strategic partnerships and ecosystem development advisory",
      "Investor pitch preparation and financial modeling for tech startups",
    ],
  },
  {
    num: "03",
    title: "AI & AUTOMATION SOLUTIONS",
    description: "Building intelligent systems that reduce manual work and improve efficiency.",
    details: [
      "Custom AI/ML model development for predictive analytics and forecasting",
      "Intelligent chatbots and virtual assistants for customer support automation",
      "Robotic Process Automation (RPA) to streamline repetitive business tasks",
      "Natural Language Processing (NLP) solutions for document analysis and insights",
      "Computer vision applications for quality control and image recognition",
      "AI-powered recommendation engines for e-commerce and content platforms",
      "End-to-end MLOps pipeline setup for model deployment and monitoring",
    ],
  },
  {
    num: "04",
    title: "TRAINING & WORKSHOPS",
    description: "Delivering industry-level training in AI, Data Science, and Full Stack Development.",
    details: [
      "Hands-on workshops on Python, Machine Learning, and Deep Learning",
      "Full Stack Development bootcamps (React, Node.js, databases, deployment)",
      "Corporate training programs customized to your team's skill gaps",
      "Data Science and Analytics training with real-world case studies",
      "Cloud computing certification preparation (AWS, Azure, GCP)",
      "AI literacy programs for non-technical business leaders and managers",
      "Hackathon organization and mentorship for innovation-driven teams",
    ],
  },
  {
    num: "05",
    title: "SAAS PRODUCT DEVELOPMENT",
    description: "Building and scaling custom SaaS platforms for startups and enterprises.",
    details: [
      "End-to-end SaaS product design, development, and launch",
      "Multi-tenant architecture design for scalable cloud-native applications",
      "Subscription billing and payment integration (Stripe, Razorpay)",
      "User authentication, role-based access control, and security hardening",
      "API design and third-party integration development",
      "Performance optimization, load testing, and auto-scaling strategies",
      "Continuous deployment pipelines and DevOps best practices implementation",
    ],
  },
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
            className="border-t border-border"
          >
            <button
              onClick={() => toggleExpand(i)}
              className="w-full grid grid-cols-12 gap-4 py-8 group cursor-pointer hover:bg-secondary/30 transition-all duration-300 px-4 -mx-4 text-left"
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
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform duration-300 ${
                    expandedIndex === i ? "rotate-180 text-foreground" : "group-hover:text-foreground"
                  }`}
                />
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-12 gap-4 px-4 -mx-4 pb-8">
                    <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
                      <div className="bg-secondary/40 rounded-lg p-6 md:p-8 border border-border/50">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 font-semibold">
                          What's Included
                        </p>
                        <ul className="space-y-3">
                          {service.details.map((detail, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: j * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-2 flex-shrink-0" />
                              <span className="body-sm text-muted-foreground">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;