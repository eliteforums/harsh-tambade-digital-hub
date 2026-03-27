import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "ELITE CRM",
    subtitle: "AI-POWERED CRM SYSTEM",
    link: "https://crm.eliteforums.in",
    description: "Built AI-powered CRM system improving sales workflows and enabling smarter decision-making using data.",
  },
  {
    num: "02",
    title: "ETERNIA",
    subtitle: "ANONYMOUS COUNSELLING & PEER SUPPORT",
    link: "https://eternia.eliteforums.in",
    description: "Anonymous counselling, peer support, emotional tools & sound therapy — institution-controlled and DPDP-compliant.",
  },
  {
    num: "03",
    title: "ELITE FORMS",
    subtitle: "FORM AUTOMATION SAAS",
    link: "https://forms.eliteforums.in",
    description: "Form automation SaaS product that streamlined data collection and reduced manual workflow inefficiencies.",
  },
  {
    num: "04",
    title: "CLASSROOM PLATFORM",
    subtitle: "EDTECH LEARNING SYSTEM",
    link: "https://classroom.eliteforums.in",
    description: "EdTech system for structured learning, used for training 1500+ students with integrated content delivery & tracking.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Selected Work</p>
        <h2 className="heading-lg text-foreground">
          SUCCESS STORIES
        </h2>
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.a
            key={project.num}
            href={project.link || undefined}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid grid-cols-12 gap-4 py-8 border-t border-border group cursor-pointer hover:bg-secondary/30 transition-all duration-300 px-4 -mx-4"
          >
            <div className="col-span-2 md:col-span-1 flex items-center">
              <span className="text-xs text-muted-foreground tracking-wider">{project.num}</span>
            </div>
            <div className="col-span-8 md:col-span-4 flex items-center">
              <div>
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground">{project.title}</h3>
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-1">{project.subtitle}</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-6 flex items-center">
              <p className="body-sm text-muted-foreground">{project.description}</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-end">
              {project.link && (
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
