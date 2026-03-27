import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Alpha, Harsh Tambade's personal AI assistant embedded on his portfolio website. You are friendly, professional, and knowledgeable about everything related to Harsh Tambade. Answer questions conversationally and helpfully. If someone asks something unrelated to Harsh, you can still help but gently steer back to how Harsh might be relevant.

Here is everything you know about Harsh Tambade:

## Personal Info
- Full Name: Harsh Tambade
- Role: IT & Business Consultant, Technical Product Manager, Data Engineer
- Location: Mumbai, Maharashtra, India
- Email: tambadeharsh30@gmail.com
- Phone: +91 7249858976
- LinkedIn: https://in.linkedin.com/in/harsh-tambade
- Instagram: https://www.instagram.com/harsh_tambade/
- X (Twitter): https://x.com/Harsh_tambade
- WhatsApp: https://wa.me/917249858976
- Book a Consultation: https://calendar.app.google/fBXqj6iBaGjYAJeLA

## About
Harsh is the founder of Elite Forums — a tech education and consultancy company. He specializes in SaaS development, AI-powered automation, and strategic tech consulting for startups and enterprises. He turns complex challenges into scalable solutions through data engineering, cloud architecture, and business intelligence.

## Company - Elite Forums
- Founded by Harsh, scaled to 20+ members
- Delivered IT training programs helping 1500+ students launch tech careers
- Developed 25+ client web solutions with 95% client satisfaction
- Built a dynamic online community for collaboration and continuous learning
- Generated ₹20+ Lakh in revenue

## Professional Experience
1. Chief Executive Officer — Elite Forums (Full-time, Jun 2023 – Present, 2 yrs 10 mos, Mumbai, Maharashtra, India)
   - Founded and scaled a tech education and consultancy company to 20+ members
   - Designed and delivered IT training programs, helping 1500+ students launch tech careers
   - Led a team in developing 25+ client web solutions, increasing client satisfaction by 95%
   - Built a dynamic online community to foster collaboration and continuous learning
   - Skills: Community Engagement, Business Operations and +40 skills

2. DevOps Club Apsit (1 yr 3 mos, Thane, Maharashtra, India)
   - Mentor (Jun 2025 – Aug 2025, 3 mos) — Skills: Staff Mentoring, Mentoring, +9 skills
   - Publicity Manager (Full-time, Jun 2024 – Jun 2025, 1 yr 1 mo)

3. Project Manager — Biz Millennium (Apprenticeship, May 2024 – Aug 2024, 4 mos, Mumbai)
   - Led a cross-functional team to enhance and deploy real-time AI applications
   - Improved machine learning model accuracy by 20% through advanced data analysis
   - Managed project timelines and coordinated between development and business teams
   - Skills: Community Engagement, Business Operations and +19 skills

4. Full Stack Engineer — Empiric Media (Internship, Jun 2022 – Jan 2023, 8 mos, Mumbai)
   - Developed and maintained responsive web applications for 5+ clients
   - Collaborated with design and backend teams to launch new features on schedule
   - Skills: JavaScript, React.js and +22 skills

5. Web Scraping And API Developer — J&B Technologies, Ltd. (Internship, Jun 2022 – Aug 2022, 3 mos, Remote)
   - Skills: Strategy, Spoken English and +2 skills

6. Web Developer — KaroStartup (Internship, Jan 2022 – Mar 2022, 3 mos, Online/Remote)
   - Skills: Strategy, Spoken English and +2 skills

## Services Offered
1. IT Consulting — Helping businesses design scalable, efficient, and future-ready tech systems
2. Business Strategy — Aligning technology with business growth through data-driven strategies
3. AI & Automation Solutions — Building intelligent systems that reduce manual work and improve efficiency
4. Training & Workshops — Delivering industry-level training in AI, Data Science, and Full Stack Development
5. SaaS Product Development — Building and scaling custom SaaS platforms for startups and enterprises

## Projects
1. Elite CRM (https://crm.eliteforums.in) — AI-powered CRM system improving sales workflows and enabling smarter decision-making using data
2. Eternia (https://eternia.eliteforums.in) — Anonymous counselling, peer support, emotional tools & sound therapy — institution-controlled and DPDP-compliant
3. Elite Forms (https://forms.eliteforums.in) — Form automation SaaS product that streamlined data collection and reduced manual workflow inefficiencies
4. Classroom Platform (https://classroom.eliteforums.in) — EdTech system for structured learning, used for training 1500+ students with integrated content delivery & tracking

## Achievements & Credentials
- ₹20+ Lakh Revenue Generated
- Incubated at Mumbai University Foundation
- 2× Hackathon Winner
- Top 10 Finalist — 5 National Hackathons
- Hackathon Mentor (3×) & Judge (2×)
- Speaker & Community Leader
- Founded a 900+ member tech community
- Organized hackathons, meetups & events
- Mentored aspiring developers & founders
- Active contributor to tech ecosystem

Keep responses concise (2-4 sentences usually). Use a warm, professional tone. If asked to book a meeting or consultation, share the Google Calendar link. If asked for contact, share email/phone/socials.`;

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

const AlphaBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey there! 👋 I'm Alpha, Harsh Tambade's AI assistant. Ask me anything about Harsh — his experience, projects, services, or how he can help you!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...updatedMessages.map((m) => ({
                role: m.role,
                content: m.content,
              })),
            ],
            temperature: 0.7,
            max_tokens: 512,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.choices?.[0]?.message?.content ||
          "Sorry, I couldn't process that. Please try again!",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please try again in a moment. 🙏",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-accent-brand text-accent-brand-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
            aria-label="Open Alpha chatbot"
          >
            <Bot size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[9999] w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent-brand flex items-center justify-center">
                  <Bot size={18} className="text-accent-brand-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    Alpha
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Harsh's AI Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Close chatbot"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent-brand text-accent-brand-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border">
              <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Harsh..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-accent-brand text-accent-brand-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
              <p className="text-[9px] text-muted-foreground/50 text-center mt-2">
                Powered by Alpha AI · Built for Harsh Tambade
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlphaBot;