import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExperienceRole {
  title: string;
  type?: string;
  duration: string;
  period: string;
  skills?: string[];
}

interface ExperienceItem {
  company: string;
  totalDuration?: string;
  location: string;
  roles: ExperienceRole[];
  description?: string[];
  topSkills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Elite Forums",
    location: "Mumbai, Maharashtra, India · On-site",
    roles: [
      {
        title: "Chief Executive Officer",
        type: "Full-time",
        duration: "2 yrs 10 mos",
        period: "Jun 2023 – Present",
      },
    ],
    description: [
      "Founded and scaled a tech education and consultancy company to 20+ members.",
      "Designed and delivered IT training programs, helping 1500+ students launch tech careers.",
      "Led a team in developing 25+ client web solutions, increasing client satisfaction by 95%.",
      "Built a dynamic online community to foster collaboration and continuous learning.",
    ],
    topSkills: [
      "Community Engagement",
      "Business Operations",
      "Team Leadership",
      "Strategic Planning",
      "Project Management",
      "Client Relations",
      "Web Development",
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "AWS",
      "Docker",
      "Git",
      "CI/CD",
      "Agile Methodologies",
      "Scrum",
      "Product Management",
      "UI/UX Design",
      "Figma",
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Public Speaking",
      "Mentoring",
      "Curriculum Development",
      "Data Analysis",
      "Machine Learning",
      "REST APIs",
      "GraphQL",
      "Next.js",
      "Express.js",
      "Startup Development",
      "Business Development",
    ],
  },
  {
    company: "DevOps Club Apsit",
    totalDuration: "1 yr 3 mos",
    location: "Thane, Maharashtra, India · On-site",
    roles: [
      {
        title: "Mentor",
        duration: "3 mos",
        period: "Jun 2025 – Aug 2025",
        skills: [
          "Staff Mentoring",
          "Mentoring",
          "Technical Training",
          "DevOps",
          "Linux",
          "Docker",
          "Kubernetes",
          "CI/CD Pipelines",
          "Cloud Computing",
          "Team Building",
          "Workshop Facilitation",
        ],
      },
      {
        title: "Publicity Manager",
        type: "Full-time",
        duration: "1 yr 1 mo",
        period: "Jun 2024 – Jun 2025",
      },
    ],
  },
  {
    company: "Biz Millennium",
    location: "Mumbai, Maharashtra, India · On-site",
    roles: [
      {
        title: "Project Manager",
        type: "Apprenticeship",
        duration: "4 mos",
        period: "May 2024 – Aug 2024",
      },
    ],
    description: [
      "Led a cross-functional team to enhance and deploy real-time AI applications.",
      "Improved machine learning model accuracy by 20% through advanced data analysis.",
      "Managed project timelines and coordinated between development and business teams.",
    ],
    topSkills: [
      "Community Engagement",
      "Business Operations",
      "Project Management",
      "AI/ML Development",
      "Data Analysis",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Cross-functional Leadership",
      "Agile Methodologies",
      "Stakeholder Communication",
      "Risk Management",
      "Technical Documentation",
      "Team Coordination",
      "Sprint Planning",
      "Quality Assurance",
      "Performance Optimization",
      "Model Deployment",
      "Data Visualization",
    ],
  },
  {
    company: "Empiric Media",
    location: "Mumbai, Maharashtra, India",
    roles: [
      {
        title: "Full Stack Engineer",
        type: "Internship",
        duration: "8 mos",
        period: "Jun 2022 – Jan 2023",
      },
    ],
    description: [
      "Developed and maintained responsive web applications for 5+ clients.",
      "Collaborated with design and backend teams to launch new features on schedule.",
    ],
    topSkills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "MongoDB",
      "REST APIs",
      "Responsive Design",
      "Git",
      "Webpack",
      "Bootstrap",
      "jQuery",
      "SASS",
      "Firebase",
      "Heroku",
      "Agile Development",
      "Code Reviews",
      "Cross-browser Compatibility",
      "Performance Optimization",
      "UI/UX Collaboration",
      "Debugging",
      "Unit Testing",
      "API Integration",
    ],
  },
  {
    company: "J&B Technologies, Ltd.",
    location: "Remote",
    roles: [
      {
        title: "Web Scraping And API Developer",
        type: "Internship",
        duration: "3 mos",
        period: "Jun 2022 – Aug 2022",
        skills: ["Strategy", "Spoken English", "Python", "Web Scraping"],
      },
    ],
  },
  {
    company: "KaroStartup",
    location: "Online · Remote",
    roles: [
      {
        title: "Web Developer",
        type: "Internship",
        duration: "3 mos",
        period: "Jan 2022 – Mar 2022",
        skills: ["Strategy", "Spoken English", "HTML", "CSS"],
      },
    ],
  },
];

const INITIAL_SKILL_COUNT = 3;

const SkillTags = ({ skills }: { skills: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = skills.length > INITIAL_SKILL_COUNT;
  const visibleSkills = expanded ? skills : skills.slice(0, INITIAL_SKILL_COUNT);
  const hiddenCount = skills.length - INITIAL_SKILL_COUNT;

  return (
    <div className="mt-3">
      <p className="text-xs text-muted-foreground font-medium mb-2">Top Skills:</p>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {visibleSkills.map((skill) => (
            <motion.span
              key={skill}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </AnimatePresence>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-border bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors duration-200 cursor-pointer font-medium"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronDown size={12} className="rotate-180 transition-transform duration-200" />
              </>
            ) : (
              <>
                +{hiddenCount} more
                <ChevronDown size={12} className="transition-transform duration-200" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Experience
        </p>
        <h2 className="heading-lg text-foreground">
          PROFESSIONAL<br />JOURNEY
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-0"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative border-b border-border py-10 first:pt-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12">
              {/* Left: Company Info */}
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {exp.company}
                </h3>
                {exp.totalDuration && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {exp.totalDuration}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {exp.location}
                </p>
              </div>

              {/* Right: Roles & Details */}
              <div className="space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    {exp.roles.length > 1 && (
                      <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-muted-foreground/50" />
                    )}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-base font-medium text-foreground">
                        {role.title}
                      </h4>
                      {role.type && (
                        <span className="text-xs text-muted-foreground">
                          · {role.type}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {role.period} · {role.duration}
                    </p>
                    {role.skills && role.skills.length > 0 && (
                      <SkillTags skills={role.skills} />
                    )}
                  </div>
                ))}

                {exp.description && (
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="body-sm text-muted-foreground flex gap-3"
                      >
                        <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.topSkills && exp.topSkills.length > 0 && (
                  <SkillTags skills={exp.topSkills} />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;