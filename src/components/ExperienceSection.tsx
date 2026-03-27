import { motion } from "framer-motion";

interface ExperienceRole {
  title: string;
  type?: string;
  duration: string;
  period: string;
  skills?: string;
}

interface ExperienceItem {
  company: string;
  totalDuration?: string;
  location: string;
  roles: ExperienceRole[];
  description?: string[];
  topSkills?: string;
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
    topSkills: "Community Engagement, Business Operations and +40 skills",
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
        skills: "Staff Mentoring, Mentoring, +9 skills",
      },
      {
        title: "Publicity Manager",
        type: "Full-time",
        duration: "1 yr 1 mo",
        period: "Jun 2024 – Jun 2025",
        skills: "Event Management, Public Relations, +5 skills",
      },
    ],
  },
  {
    company: "A. P. Shah Institute of Technology (APSIT)",
    location: "Thane, Maharashtra, India · On-site",
    roles: [
      {
        title: "Student Coordinator",
        duration: "1 yr",
        period: "Jun 2024 – Jun 2025",
        skills: "Leadership, Event Planning, Team Management",
      },
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    roles: [
      {
        title: "Web Developer",
        type: "Freelance",
        duration: "2 yrs",
        period: "Jan 2023 – Present",
        skills: "React, Node.js, Full Stack Development",
      },
    ],
    description: [
      "Developed and deployed 25+ web applications for clients across various industries.",
      "Specialized in React, Next.js, and modern full-stack development.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
                    {role.skills && (
                      <p className="text-xs text-muted-foreground/70 mt-2">
                        <span className="text-muted-foreground font-medium">Skills:</span>{" "}
                        {role.skills}
                      </p>
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

                {exp.topSkills && (
                  <p className="text-xs text-muted-foreground/70 mt-3">
                    <span className="text-muted-foreground font-medium">Top Skills:</span>{" "}
                    {exp.topSkills}
                  </p>
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