import { motion } from "framer-motion";

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
    subtitle: "FULL-SCALE DIGITAL PLATFORM",
    link: "https://eternia.eliteforums.in",
    description: "Full-scale digital platform with focus on scalable architecture and enhanced user engagement.",
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
    link: null,
    description: "EdTech system for structured learning, used for training 1500+ students with integrated content delivery & tracking.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="section-padding border-t border-border">
      <motion.h2
        className="heading-lg text-foreground mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        SUCCESS STORIES
      </motion.h2>
      <p className="body-sm text-muted-foreground mb-16 max-w-lg">
        Selected projects that showcase technology-driven solutions delivering real business impact.
      </p>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-12 gap-4 py-8 border-t border-border group hover:bg-secondary/50 transition-colors px-2 -mx-2"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="text-sm text-muted-foreground">{project.num}</span>
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-heading text-xl md:text-2xl text-foreground">{project.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 tracking-wider">{project.subtitle}</p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-6">
              <p className="body-sm text-muted-foreground">{project.description}</p>
            </div>
            <div className="col-span-12 md:col-span-2 md:col-start-11 flex items-center">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-foreground underline underline-offset-4 hover:text-accent-brand transition-colors"
                >
                  Visit →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
