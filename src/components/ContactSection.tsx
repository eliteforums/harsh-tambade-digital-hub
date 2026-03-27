import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-border">
      {/* CTA Block */}
      <div className="section-padding bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="heading-lg text-foreground mb-6">
            SCHEDULE<br />A CONSULTATION
          </h2>
          <p className="body-sm text-muted-foreground mb-8 max-w-md">
            Ready to scale your business with technology? Let's discuss how I can help you build systems that deliver real impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendar.app.google/fBXqj6iBaGjYAJeLA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-brand text-accent-brand-foreground px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </a>
            <a
              href="mailto:harsh.tambade@eliteforums.in"
              className="border border-foreground text-foreground px-8 py-4 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="section-padding py-12 bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-heading text-3xl md:text-4xl mb-2">HARSH TAMBADE</p>
            <p className="body-sm opacity-70">
              IT & Business Consultant | Technical Product Manager | Data Engineer
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a
              href="mailto:harsh.tambade@eliteforums.in"
              className="font-heading text-2xl md:text-3xl hover:text-highlight transition-colors"
            >
              HARSH.TAMBADE@ELITEFORUMS.IN
            </a>
          </div>
        </div>
        <div className="divider opacity-20 my-8" />
        <p className="body-sm opacity-50">
          © {new Date().getFullYear()} Harsh Tambade. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
