import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/in/harsh-tambade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917249858976",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/harsh_tambade/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/Harsh_tambade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/HarshTambade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-border">
      {/* CTA Block */}
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Get in Touch</p>

          {/* Side-by-side layout: Heading left, Calendar right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
            {/* Left: Heading + Buttons + Contact + Socials */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-foreground mb-8">
                LET'S BUILD<br />SOMETHING<br />IMPACTFUL
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://calendar.app.google/fBXqj6iBaGjYAJeLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-brand text-accent-brand-foreground px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Book a Consultation <ArrowRight size={14} />
                </a>
                <a
                  href="mailto:tambadeharsh30@gmail.com"
                  className="border border-foreground text-foreground px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:bg-foreground hover:text-background transition-colors text-center"
                >
                  Send an Email
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 mb-6">
                <a
                  href="mailto:tambadeharsh30@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={16} />
                  tambadeharsh30@gmail.com
                </a>
                <a
                  href="tel:+917249858976"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={16} />
                  +91 7249858976
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Google Calendar Appointment Scheduling */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Schedule a Meeting</p>
              <div className="w-full flex-1 rounded-lg overflow-hidden border border-border min-h-[500px]">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0AX_L2bFXqdvEqYfczKheIWDgu7w71VrweGPr5nS50060BvUOPkRb3e2LlGJ4V-RA7KuVKabsn?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Google Calendar Appointment Scheduling"
                  className="min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-10 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-heading text-2xl text-foreground">HARSH TAMBADE</p>
            <p className="text-xs text-muted-foreground mt-1">
              IT & Business Consultant · Technical Product Manager · Data Engineer
            </p>
          </div>
          <div className="flex items-center gap-6">
            {/* Footer Social Icons */}
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="divider my-6" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Harsh Tambade. All rights reserved.
          </p>
          <a
            href="mailto:tambadeharsh30@gmail.com"
            className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            TAMBADEHARSH30@GMAIL.COM
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;