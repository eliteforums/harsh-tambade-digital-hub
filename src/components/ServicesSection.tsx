import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const services = [
  {
    num: "01",
    title: "IT CONSULTING",
    description: "Helping businesses design scalable, efficient, and future-ready tech systems.",
    overview:
      "We partner with businesses to evaluate, design, and implement technology solutions that drive growth. From cloud migrations to security audits, our consulting ensures your tech infrastructure is robust, scalable, and aligned with your vision.",
    highlights: [
      {
        heading: "Tech Stack Evaluation",
        text: "Tailored recommendations based on your business needs, budget, and growth trajectory.",
      },
      {
        heading: "Cloud Strategy",
        text: "Infrastructure planning and migration across AWS, Azure, and GCP for optimal performance.",
      },
      {
        heading: "System Architecture",
        text: "Designing for scalability, security, and high availability from day one.",
      },
      {
        heading: "IT Roadmapping",
        text: "Aligning technology milestones with your 1-year and 5-year business goals.",
      },
      {
        heading: "Vendor Advisory",
        text: "Evaluation and procurement guidance to ensure the best technology partnerships.",
      },
      {
        heading: "Cybersecurity",
        text: "Comprehensive assessment and implementation of industry best practices.",
      },
    ],
  },
  {
    num: "02",
    title: "BUSINESS STRATEGY",
    description: "Aligning technology with business growth through data-driven strategies.",
    overview:
      "We bridge the gap between technology and business outcomes. Using data analytics and market intelligence, we craft strategies that accelerate revenue, optimize operations, and position your company for sustainable growth.",
    highlights: [
      {
        heading: "Market Intelligence",
        text: "Competitive analysis and data-driven insights to inform strategic decisions.",
      },
      {
        heading: "Revenue Optimization",
        text: "Pricing strategy development and revenue model refinement for maximum impact.",
      },
      {
        heading: "Go-to-Market",
        text: "Launch strategies for tech products and SaaS platforms that capture market share.",
      },
      {
        heading: "KPI Frameworks",
        text: "Performance tracking dashboards and metrics that matter for your business.",
      },
      {
        heading: "Process Engineering",
        text: "Re-engineering workflows to eliminate inefficiencies and reduce operational costs.",
      },
      {
        heading: "Investor Readiness",
        text: "Pitch preparation, financial modeling, and strategic positioning for fundraising.",
      },
    ],
  },
  {
    num: "03",
    title: "AI & AUTOMATION SOLUTIONS",
    description: "Building intelligent systems that reduce manual work and improve efficiency.",
    overview:
      "We design and deploy AI-powered solutions that transform how businesses operate. From predictive analytics to intelligent automation, we help you harness the power of machine learning to gain a competitive edge.",
    highlights: [
      {
        heading: "Predictive Analytics",
        text: "Custom AI/ML models for forecasting, demand planning, and decision support.",
      },
      {
        heading: "Intelligent Chatbots",
        text: "Virtual assistants that handle customer support, onboarding, and engagement 24/7.",
      },
      {
        heading: "Process Automation",
        text: "RPA solutions that streamline repetitive tasks and free up your team's time.",
      },
      {
        heading: "NLP Solutions",
        text: "Document analysis, sentiment tracking, and text intelligence at scale.",
      },
      {
        heading: "Computer Vision",
        text: "Image recognition and quality control applications for manufacturing and retail.",
      },
      {
        heading: "MLOps Pipelines",
        text: "End-to-end model deployment, monitoring, and continuous improvement workflows.",
      },
    ],
  },
  {
    num: "04",
    title: "TRAINING & WORKSHOPS",
    description: "Delivering industry-level training in AI, Data Science, and Full Stack Development.",
    overview:
      "We deliver hands-on, industry-relevant training programs designed to upskill teams and individuals. Whether it's a weekend workshop or a multi-week bootcamp, our programs combine theory with real-world projects.",
    highlights: [
      {
        heading: "AI & ML Workshops",
        text: "Hands-on sessions covering Python, Machine Learning, and Deep Learning fundamentals.",
      },
      {
        heading: "Full Stack Bootcamps",
        text: "Comprehensive training in React, Node.js, databases, and cloud deployment.",
      },
      {
        heading: "Corporate Programs",
        text: "Customized training aligned with your team's specific skill gaps and goals.",
      },
      {
        heading: "Data Science",
        text: "Analytics training with real-world case studies and portfolio-ready projects.",
      },
      {
        heading: "Cloud Certifications",
        text: "Preparation programs for AWS, Azure, and GCP professional certifications.",
      },
      {
        heading: "Hackathons",
        text: "Innovation-driven events with mentorship to foster creative problem-solving.",
      },
    ],
  },
  {
    num: "05",
    title: "SAAS PRODUCT DEVELOPMENT",
    description: "Building and scaling custom SaaS platforms for startups and enterprises.",
    overview:
      "From concept to launch, we build scalable SaaS products that delight users and drive recurring revenue. Our full-cycle development covers architecture, billing, security, and everything in between.",
    highlights: [
      {
        heading: "Product Development",
        text: "End-to-end SaaS design, development, and launch with agile methodology.",
      },
      {
        heading: "Multi-Tenant Architecture",
        text: "Cloud-native applications built for scalability and tenant isolation.",
      },
      {
        heading: "Billing Integration",
        text: "Subscription management with Stripe, Razorpay, and custom billing flows.",
      },
      {
        heading: "Auth & Security",
        text: "Role-based access control, SSO, and security hardening from the ground up.",
      },
      {
        heading: "API Development",
        text: "RESTful and GraphQL API design with third-party integration capabilities.",
      },
      {
        heading: "DevOps & CI/CD",
        text: "Automated deployment pipelines, load testing, and auto-scaling strategies.",
      },
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
                  <div className="px-4 -mx-4 pb-10 pt-2">
                    {/* Overview paragraph */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 }}
                      className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-8 md:ml-[8.33%] lg:ml-[8.33%]"
                    >
                      {service.overview}
                    </motion.p>

                    {/* Highlights grid - article card style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-[8.33%]">
                      {service.highlights.map((item, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.08 + j * 0.05 }}
                          className="group/card relative p-5 rounded-md border border-border/60 bg-secondary/20 hover:bg-secondary/40 hover:border-border transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="text-accent-brand mt-0.5 flex-shrink-0"
                            />
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-1.5">
                                {item.heading}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
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