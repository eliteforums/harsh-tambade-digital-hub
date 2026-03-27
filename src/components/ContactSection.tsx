import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
            {/* Left: Heading + Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-foreground mb-8">
                LET'S BUILD<br />SOMETHING<br />IMPACTFUL
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendar.app.google/fBXqj6iBaGjYAJeLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-brand text-accent-brand-foreground px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Book a Consultation <ArrowRight size={14} />
                </a>
                <a
                  href="mailto:harsh.tambade@eliteforums.in"
                  className="border border-foreground text-foreground px-8 py-4 text-xs uppercase tracking-wider font-semibold hover:bg-foreground hover:text-background transition-colors text-center"
                >
                  Send an Email
                </a>
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
          <a
            href="mailto:harsh.tambade@eliteforums.in"
            className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            HARSH.TAMBADE@ELITEFORUMS.IN
          </a>
        </div>
        <div className="divider my-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Harsh Tambade. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;