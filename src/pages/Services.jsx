import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  Globe2,
  Layout,
  MessageSquare,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
  Star,
  Megaphone,
  Users,
  BarChart3,
  PhoneCall,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1];

const serviceTabs = [
  {
    id: "automation",
    label: "AI Automation",
    shortLabel: "Automation",
    icon: Bot,
    eyebrow: "AI AUTOMATION & BUSINESS SYSTEMS",
    title: "Turn repetitive business work into intelligent systems.",
    description:
      "We build intelligent business systems that help you capture leads, respond to customers, qualify opportunities, book appointments, manage follow-ups, request reviews, reactivate old leads, and keep your customer data organized — with less manual work from your team.",
  },
  {
    id: "website",
    label: "Web Development",
    shortLabel: "Websites",
    icon: Globe2,
    eyebrow: "COMPLETE WEBSITE DEVELOPMENT",
    title:
      "Give your business a website that works as hard as your team does.",
    description:
      "We create complete, business-ready websites designed to attract the right customers, build trust, generate inquiries, support bookings, capture leads from campaigns, manage information, and give your business a professional online presence.",
  },
];

const automationServices = [
  {
    icon: Bot,
    title: "AI Customer Assistants",
    description:
      "Give your business a 24/7 digital assistant that can answer customer questions, understand intent, collect information, and guide potential customers toward the right next step.",
    benefits: [
      "Respond to customers instantly, even outside business hours",
      "Answer common questions without involving your team",
      "Collect important customer and lead information",
      "Qualify prospects before they reach your sales team",
      "Guide customers toward booking or contacting you",
      "Deliver consistent answers based on your business",
    ],
  },
  {
    icon: Target,
    title: "Lead Capture & Qualification",
    description:
      "Make sure valuable opportunities do not disappear inside inboxes, forms, or spreadsheets. We connect your customer entry points with organized lead workflows.",
    benefits: [
      "Capture leads from your website and campaigns",
      "Automatically organize new prospects",
      "Ask qualification questions automatically",
      "Identify high-intent opportunities",
      "Route leads to the right pipeline or workflow",
      "Reduce the chances of leads being forgotten",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Ad Lead Capture",
    description:
      "Turn Facebook and Instagram advertising into an organized lead-generation system. New ad leads can automatically enter your CRM and receive an immediate response.",
    benefits: [
      "Capture leads from Facebook and Instagram campaigns",
      "Automatically send new leads into your CRM",
      "Instantly respond after form submission",
      "Notify your sales team about new opportunities",
      "Automatically qualify and segment leads",
      "Move leads into the correct sales pipeline",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Automation",
    description:
      "Make booking easier for customers and your team. Qualified prospects can move from conversation to appointment without unnecessary back-and-forth.",
    benefits: [
      "Automated appointment booking",
      "Real-time calendar availability",
      "Instant booking confirmations",
      "Automated appointment reminders",
      "Rescheduling workflows",
      "Reduce missed appointments and manual coordination",
    ],
  },
  {
    icon: RefreshCw,
    title: "Follow-Up & Lead Nurturing",
    description:
      "A lead that is not ready today may become a customer later. We create follow-up systems that keep your business connected with prospects automatically.",
    benefits: [
      "Automated follow-up sequences",
      "Different workflows for different lead types",
      "Timed email and message follow-ups",
      "Re-engagement for inactive prospects",
      "Long-term lead nurturing",
      "Reduce opportunities lost through inconsistent follow-up",
    ],
  },
  {
    icon: Workflow,
    title: "CRM & Pipeline Automation",
    description:
      "Turn your CRM into an organized source of truth for your business. Leads, conversations, appointments, and opportunities can move through the right stages automatically.",
    benefits: [
      "Automatically update customer records",
      "Move opportunities through your pipeline",
      "Lead tagging and segmentation",
      "Automated tasks and notifications",
      "Track customer and opportunity status",
      "Keep important business information organized",
    ],
  },
  {
    icon: Star,
    title: "Google Review Request Automation",
    description:
      "Turn completed jobs and happy customers into a consistent review-generation process. After a customer interaction, your system can automatically request feedback and guide customers toward leaving a Google review.",
    benefits: [
      "Automatically request reviews after completed services",
      "Send review requests at the right time",
      "Create reminder workflows for customers who do not respond",
      "Make it easier for happy customers to leave a review",
      "Build consistent social proof for your business",
      "Strengthen your online reputation over time",
    ],
  },
  {
    icon: Users,
    title: "Lead Reactivation",
    description:
      "Old leads are often forgotten even though many may still be potential customers. We build reactivation campaigns that reconnect with inactive prospects automatically.",
    benefits: [
      "Identify inactive leads inside your CRM",
      "Create automated reactivation campaigns",
      "Send personalized follow-up sequences",
      "Reconnect with prospects who never booked",
      "Separate active and inactive opportunities",
      "Recover potential revenue from existing leads",
    ],
  },
  {
    icon: PhoneCall,
    title: "Missed Inquiry & Call Follow-Up",
    description:
      "When a customer reaches out and your team cannot respond immediately, automated follow-up helps prevent that opportunity from disappearing.",
    benefits: [
      "Follow up after missed calls or inquiries",
      "Send immediate acknowledgement messages",
      "Capture customer information automatically",
      "Direct customers toward booking or contact",
      "Notify the appropriate team member",
      "Reduce lost opportunities caused by slow response",
    ],
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description:
      "We connect the important parts of your customer journey into one practical system, helping your team spend less time on repetitive work and more time on customers and growth.",
    benefits: [
      "Reduce repetitive administrative work",
      "Connect different stages of your business process",
      "Create consistent customer journeys",
      "Reduce missed opportunities",
      "Save valuable team time",
      "Build systems that can grow with your business",
    ],
  },
];

const websiteServices = [
  {
    icon: Layout,
    title: "Complete Business Websites",
    description:
      "Your website should do more than display information. We create complete business websites that clearly communicate your offer, build trust, generate inquiries, and support the way your business actually operates.",
    benefits: [
      "Complete multi-page business websites",
      "Custom pages based on your business needs",
      "Clear service and value proposition sections",
      "Strategic calls-to-action",
      "Professional navigation and user experience",
      "Mobile, tablet, and desktop optimization",
    ],
  },
  {
    icon: Sparkles,
    title: "Conversion-Focused Landing Pages",
    description:
      "When the goal is leads, bookings, or sales, we create focused landing experiences that make your offer easy to understand and guide visitors toward taking action.",
    benefits: [
      "Campaign-specific landing pages",
      "Lead generation sections",
      "Strategic calls-to-action",
      "Trust and social-proof sections",
      "Clear offer presentation",
      "Customer-focused conversion journey",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Ad Landing Pages",
    description:
      "When customers arrive from Facebook or Instagram ads, the landing page needs to continue the same message and guide them toward one clear action.",
    benefits: [
      "Ad-specific landing experiences",
      "Message-match between ads and landing pages",
      "Lead capture forms",
      "Clear offer and CTA structure",
      "Trust-building sections",
      "Mobile-first campaign experience",
    ],
  },
  {
    icon: Code2,
    title: "Interactive Website Experiences",
    description:
      "We turn your ideas into polished, interactive website experiences that feel modern while remaining practical, easy to use, and aligned with your business goals.",
    benefits: [
      "Modern interactive interfaces",
      "Smooth animations and interactions",
      "Reusable website components",
      "Responsive layouts",
      "Clean and maintainable implementation",
      "Consistent experience across devices",
    ],
  },
  {
    icon: SmartphoneIcon,
    title: "Responsive Customer Experience",
    description:
      "Your customers may discover your business from a phone, tablet, or desktop. We make sure your website remains easy to navigate, read, and use on every screen.",
    benefits: [
      "Mobile-first experience",
      "Tablet-friendly layouts",
      "Desktop optimization",
      "Touch-friendly interactions",
      "Responsive navigation",
      "Consistent visual experience",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Customer Accounts & Authentication",
    description:
      "If your business needs customers to sign in, access private information, manage their profile, or interact with your services, we can build those experiences directly into your website.",
    benefits: [
      "Secure user authentication",
      "Customer registration and login",
      "Protected customer areas",
      "User profile management",
      "Role-based access where required",
      "Personalized customer experiences",
    ],
  },
  {
    icon: Database,
    title: "Admin Dashboard & Business Management",
    description:
      "Your website should not always require a developer to make everyday updates. We can provide an admin area where your team can manage important business information and customer data.",
    benefits: [
      "Centralized admin dashboard",
      "Manage website content and information",
      "Manage customer or user records",
      "Review inquiries and submissions",
      "Manage services, listings, or other business data",
      "Make everyday updates more easily",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Booking & Appointment Systems",
    description:
      "If your business depends on appointments, consultations, or scheduled services, we can build a customer-friendly booking experience that makes scheduling easier.",
    benefits: [
      "Online appointment requests",
      "Service-based booking flows",
      "Customer booking information",
      "Calendar-focused experiences",
      "Booking confirmation flows",
      "Reduce manual scheduling work",
    ],
  },
  {
    icon: FileText,
    title: "Lead Generation & Contact Forms",
    description:
      "Make it easy for potential customers to contact your business, request information, submit their details, or start a conversation directly from your website.",
    benefits: [
      "Custom lead capture forms",
      "Contact and inquiry forms",
      "Service request forms",
      "Form validation and user feedback",
      "Clear conversion-focused CTAs",
      "Organized lead submission experience",
    ],
  },
  {
    icon: Search,
    title: "SEO-Friendly Website Structure",
    description:
      "We structure your website so both customers and search engines can understand your pages, services, content, and business more clearly.",
    benefits: [
      "Logical page structure",
      "Semantic HTML",
      "Clear content hierarchy",
      "Search-friendly page organization",
      "Descriptive page structure",
      "Accessible user experience",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    description:
      "Understand how visitors interact with your website and where important customer actions happen so your digital presence can be improved over time.",
    benefits: [
      "Track important customer actions",
      "Monitor lead-generation activity",
      "Measure conversion-focused interactions",
      "Understand visitor behavior",
      "Identify important customer journeys",
      "Create a foundation for future optimization",
    ],
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    description:
      "A professional website should feel fast and reliable. We pay attention to assets, structure, loading behavior, and implementation so customers can move through your website smoothly.",
    benefits: [
      "Optimized images and assets",
      "Efficient component structure",
      "Reduced unnecessary code",
      "Smooth interactions",
      "Performance-conscious development",
      "Better overall user experience",
    ],
  },
];

const automationProcess = [
  {
    number: "01",
    title: "Understand your business",
    text:
      "We first understand how customers currently find you, how your team handles leads, where manual work happens, and where potential customers may be getting lost.",
  },
  {
    number: "02",
    title: "Map the customer journey",
    text:
      "We turn your existing process into a clear customer journey — from first contact to qualification, booking, follow-up, conversion, review request, and reactivation.",
  },
  {
    number: "03",
    title: "Design the system",
    text:
      "We decide where AI, CRM workflows, forms, calendars, messages, pipelines, review requests, and automated actions can create the most value for your business.",
  },
  {
    number: "04",
    title: "Build & connect everything",
    text:
      "We configure the required assistants, triggers, actions, messages, pipelines, calendars, customer records, review workflows, and automation systems around your actual process.",
  },
  {
    number: "05",
    title: "Test & improve",
    text:
      "We test important customer paths and edge cases before launch, then refine the system so it behaves reliably when real customers interact with it.",
  },
];

const websiteProcess = [
  {
    number: "01",
    title: "Understand your business",
    text:
      "We learn about your business, audience, competitors, services, goals, customers, and the actions you want visitors to take.",
  },
  {
    number: "02",
    title: "Plan the website",
    text:
      "We organize the pages, content hierarchy, navigation, customer journey, calls-to-action, and functionality before development begins.",
  },
  {
    number: "03",
    title: "Build the experience",
    text:
      "We transform the approved direction into a polished, responsive website with the functionality your business actually needs.",
  },
  {
    number: "04",
    title: "Connect business functionality",
    text:
      "Where required, we connect customer accounts, forms, data, booking flows, admin functionality, content management, analytics, and other website features.",
  },
  {
    number: "05",
    title: "Test & launch",
    text:
      "We review the website across devices, test important user flows, fix issues, and prepare the final website for launch.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState("automation");

  const isAutomation = activeService === "automation";

  const activeTab = serviceTabs.find(
    (tab) => tab.id === activeService
  );

  return (
    <div className="relative overflow-hidden bg-[#080c08] text-white">
      <Background />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative z-10 px-4 pb-10 pt-36 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-14 lg:pt-32">
        <div className="mx-auto max-w-7xl">

          {/* Ambient hero glow */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: [0.04, 0.08, 0.04],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-[8%] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-lime-400 blur-[150px]"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05,
                },
              },
            }}
            className="relative mx-auto max-w-4xl text-center"
          >
            {/* Eyebrow */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 22,
                  scale: 0.94,
                  filter: "blur(6px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.65,
                ease,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.06] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-300 backdrop-blur-xl sm:text-[10px]"
            >
              <motion.span
                animate={{
                  rotate: [0, 12, -12, 0],
                  scale: [1, 1.12, 1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={12} />
              </motion.span>

              What We Do
            </motion.div>

            {/* =====================================================
                MAIN TITLE
            ===================================================== */}
            <motion.h1
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.12,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="relative text-[2.65rem] font-black leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-[5.3rem]"
            >
              {/* First line */}
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 55,
                    scale: 0.94,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="block"
              >
                Digital systems built for
              </motion.span>

              {/* Second line */}
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 55,
                    scale: 0.94,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
                transition={{
                  duration: 0.85,
                  ease,
                }}
                className="relative mt-1 inline-block"
              >
                <span className="relative inline-block bg-gradient-to-r from-lime-200 via-lime-400 to-green-400 bg-clip-text text-transparent">
                  real business growth

                  {/* Animated underline */}
                  <motion.span
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 1.05,
                      ease,
                    }}
                    className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-lime-400/80 to-transparent blur-[1px]"
                  />

                  {/* Moving shine */}
                  <motion.span
                    initial={{
                      x: "-120%",
                      opacity: 0,
                    }}
                    animate={{
                      x: "120%",
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 1.3,
                      delay: 1.2,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text"
                  />
                </span>
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                  filter: "blur(5px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
            >
              From complete business websites to intelligent automation,
              we build digital systems that help you attract customers,
              respond faster, capture and nurture leads, build trust,
              reduce manual work, stay organized, and create a better
              customer experience.
            </motion.p>
          </motion.div>

          {/* Service tabs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease,
            }}
            className="relative mx-auto mt-10 flex max-w-md rounded-2xl border border-white/[0.12] bg-white/[0.025] p-1.5 shadow-2xl backdrop-blur-xl"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(163,230,53,0)",
                  "0 0 30px rgba(163,230,53,0.05)",
                  "0 0 0 rgba(163,230,53,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-0 rounded-2xl"
            />

            {serviceTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeService === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveService(tab.id)}
                  className="group relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[11px] font-semibold transition-colors duration-200 sm:text-xs"
                >
                  {active && (
                    <motion.div
                      layoutId="service-tab"
                      className="absolute inset-0 rounded-xl bg-lime-400/[0.12] ring-1 ring-lime-400/20"
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-transform duration-200 group-hover:scale-110 ${
                      active
                        ? "text-lime-300"
                        : "text-white/35"
                    }`}
                  >
                    <Icon size={15} />
                  </span>

                  <span
                    className={`relative z-10 ${
                      active
                        ? "text-white"
                        : "text-white/40"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          DYNAMIC CONTENT
      ========================================================= */}
      <AnimatePresence mode="wait">
        {isAutomation ? (
          <motion.div
            key="automation"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
          >
            <AutomationSection />
          </motion.div>
        ) : (
          <motion.div
            key="website"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
          >
            <WebsiteSection />
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTA service={activeTab} />
    </div>
  );
}

function AutomationSection() {
  return (
    <>
      <section className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionIntro
            eyebrow="AI AUTOMATION"
            title="Your team shouldn't have to do everything manually"
            description="We build connected business systems that handle repetitive work, capture and qualify leads, respond to customers, book appointments, request reviews, reactivate old opportunities, and keep your customer journey moving — so your team can focus on customers, decisions, and growth."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <AutomationOverview />

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {automationServices.slice(0, 4).map(
                (service, index) => (
                  <DetailedServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                  />
                )
              )}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {automationServices.slice(4).map(
              (service, index) => (
                <DetailedServiceCard
                  key={service.title}
                  service={service}
                  index={index + 4}
                />
              )
            )}
          </div>
        </div>
      </section>

      <BenefitsSection
        type="automation"
        title="What automation changes for your business"
        description="The purpose of automation is not simply to add more technology. It is to help your business respond faster, capture more opportunities, follow up consistently, build stronger social proof, reduce repetitive work, and create more opportunities without putting more pressure on your team."
        benefits={[
          {
            icon: Clock3,
            title: "Respond faster",
            text:
              "Customers can receive an immediate response instead of waiting for someone on your team to become available.",
          },
          {
            icon: TrendingUp,
            title: "Capture more opportunities",
            text:
              "Leads from websites, campaigns, and other channels can be captured, organized, and followed up instead of getting lost.",
          },
          {
            icon: RefreshCw,
            title: "Follow up consistently",
            text:
              "Your prospects can receive the right follow-up at the right time even when your team is busy or offline.",
          },
          {
            icon: Star,
            title: "Build more reviews",
            text:
              "Automated review requests make it easier to consistently ask satisfied customers for Google reviews after completed services.",
          },
          {
            icon: Zap,
            title: "Save team time",
            text:
              "Your team spends less time repeating administrative tasks and more time on customers, sales, strategy, and important decisions.",
          },
          {
            icon: Target,
            title: "Reduce missed opportunities",
            text:
              "Automated workflows help make sure important leads, inquiries, appointments, and follow-ups do not depend entirely on someone remembering to do them manually.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="HOW WE WORK"
        title="From business problem to working system"
        description="Every automation project starts with your existing business process. We identify where automation can create real value instead of forcing your business into a generic workflow."
        steps={automationProcess}
      />

      <SystemMap />
    </>
  );
}

function WebsiteSection() {
  return (
    <>
      <section className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionIntro
            eyebrow="COMPLETE WEBSITE DEVELOPMENT"
            title="Your website should do more than look good"
            description="We create complete, business-ready websites that help customers understand your business, trust your brand, take action, capture leads, book services, and interact with your business — while giving your team the functionality needed to manage the website after launch."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <WebsiteOverview />

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {websiteServices.slice(0, 4).map(
                (service, index) => (
                  <DetailedServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                  />
                )
              )}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {websiteServices.slice(4).map(
              (service, index) => (
                <DetailedServiceCard
                  key={service.title}
                  service={service}
                  index={index + 4}
                />
              )
            )}
          </div>
        </div>
      </section>

      <BenefitsSection
        type="website"
        title="What a better website can change"
        description="A professional website should become a useful part of your business — not simply an online brochure. It should help customers understand you, trust you, discover your services, contact you, book with you, and move toward becoming a customer."
        benefits={[
          {
            icon: Target,
            title: "Make your offer clear",
            text:
              "Visitors should quickly understand what you offer, who you help, and why your business is worth considering.",
          },
          {
            icon: ShieldCheck,
            title: "Build trust faster",
            text:
              "Professional design, clear information, proof, consistent branding, and a polished experience help reduce customer hesitation.",
          },
          {
            icon: TrendingUp,
            title: "Generate more inquiries",
            text:
              "Strategic page structure and clear calls-to-action make it easier for interested visitors to contact your business or request your service.",
          },
          {
            icon: SmartphoneIcon,
            title: "Serve customers on every device",
            text:
              "Your customers can have a smooth experience whether they discover your business from a phone, tablet, or desktop.",
          },
          {
            icon: Megaphone,
            title: "Support your ad campaigns",
            text:
              "Dedicated landing pages can turn paid social traffic into focused customer journeys instead of sending every visitor to a generic homepage.",
          },
          {
            icon: Database,
            title: "Give your team more control",
            text:
              "With the right website functionality and admin tools, your team can manage important information and customer activity more efficiently.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="OUR WEBSITE PROCESS"
        title="A website built around your business — not a template"
        description="We combine business strategy, user experience, design, development, functionality, responsiveness, and conversion thinking into one process."
        steps={websiteProcess}
      />

      <WebsiteArchitecture />
    </>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.45,
        ease,
      }}
      className="max-w-3xl"
    >
      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-300/65 sm:text-[10px]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem]">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/38 sm:text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}

function AutomationOverview() {
  const steps = [
    "Customer sees your ad or website",
    "Lead information is captured",
    "AI responds instantly",
    "Opportunity is qualified",
    "Appointment is booked",
    "CRM is updated",
    "Follow-up continues",
    "Customer receives review request",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.5,
        ease,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-lime-400/25 bg-gradient-to-br from-lime-400/[0.08] via-white/[0.025] to-transparent p-6 transition-all duration-300 hover:border-lime-400/40 sm:p-7 lg:col-span-4 lg:p-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime-400/[0.10] blur-[80px]"
      />

      <div className="relative">
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.06,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/25 bg-lime-400/[0.08] text-lime-300"
        >
          <Bot size={22} strokeWidth={1.7} />
        </motion.div>

        <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-300/60">
          THE BUSINESS SYSTEM
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white">
          One connected customer journey
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/35">
          Instead of making your team manually manage every customer
          interaction, we connect the important parts of the journey
          into practical workflows that keep working throughout the day.
        </p>

        <div className="mt-7 space-y-3">
          {steps.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease,
              }}
              className="group/step flex items-center gap-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/[0.06] font-mono text-[8px] text-lime-300/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs text-white/55 transition-colors duration-200 group-hover/step:text-white/75">
                {item}
              </span>

              {index !== steps.length - 1 && (
                <ChevronRight
                  size={12}
                  className="ml-auto text-white/15 transition-all duration-200 group-hover/step:translate-x-1 group-hover/step:text-lime-300/40"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function WebsiteOverview() {
  const features = [
    "Professional first impression",
    "Clear business positioning",
    "Trust-building content",
    "Service & offer presentation",
    "Social ad landing experiences",
    "Lead & contact functionality",
    "Customer accounts when needed",
    "Admin management",
    "Mobile-first experience",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.5,
        ease,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-lime-400/25 bg-gradient-to-br from-lime-400/[0.08] via-white/[0.025] to-transparent p-6 transition-all duration-300 hover:border-lime-400/40 sm:p-7 lg:col-span-4 lg:p-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime-400/[0.10] blur-[80px]"
      />

      <div className="relative">
        <motion.div
          whileHover={{
            rotate: -5,
            scale: 1.06,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/25 bg-lime-400/[0.08] text-lime-300"
        >
          <Globe2 size={22} strokeWidth={1.7} />
        </motion.div>

        <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-300/60">
          THE COMPLETE WEBSITE
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white">
          More than a digital brochure
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/35">
          Your website can become a practical part of your business —
          helping customers discover you, understand your services,
          trust your brand, contact you, book appointments, create
          accounts, and interact with your business.
        </p>

        <div className="mt-7 space-y-3">
          {features.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease,
              }}
              className="group/step flex items-center gap-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/[0.06]">
                <Check
                  size={11}
                  className="text-lime-300 transition-transform duration-200 group-hover/step:scale-125"
                />
              </span>

              <span className="text-xs text-white/55 transition-colors duration-200 group-hover/step:text-white/75">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DetailedServiceCard({ service, index }) {
  const Icon = service.icon;
  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: fromLeft ? -35 : 35,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.04,
        margin: "0px 0px -50px 0px",
      }}
      transition={{
        duration: 0.42,
        delay: Math.min(index * 0.035, 0.12),
        ease,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-white/[0.14] bg-white/[0.018] p-5 transition-all duration-300 hover:border-lime-400/35 hover:bg-white/[0.032] sm:p-6"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-5">
          <motion.div
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.08,
            }}
            transition={{
              duration: 0.3,
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/[0.05] text-lime-300/80 transition-all duration-300 group-hover:border-lime-400/35 group-hover:bg-lime-400/[0.09] group-hover:text-lime-300"
          >
            <Icon size={19} strokeWidth={1.7} />
          </motion.div>

          <span className="font-mono text-[8px] tracking-[0.15em] text-white/20 transition-colors duration-200 group-hover:text-lime-300/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-bold tracking-[-0.025em] text-white/80 transition-colors duration-200 group-hover:text-white">
          {service.title}
        </h3>

        <p className="mt-2.5 text-xs leading-6 text-white/32 sm:text-[13px]">
          {service.description}
        </p>

        <div className="mt-5 space-y-2.5">
          {service.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-2.5"
            >
              <Check
                size={13}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-lime-400/70 transition-transform duration-200 group-hover:scale-110"
              />

              <span className="text-[11px] leading-5 text-white/42 transition-colors duration-200 group-hover:text-white/55">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function BenefitsSection({
  title,
  description,
  benefits,
  type,
}) {
  return (
    <section className="relative z-10 border-y border-white/[0.08] bg-[#0b100b]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionIntro
          eyebrow={
            type === "automation"
              ? "BUSINESS IMPACT"
              : "WHY YOUR WEBSITE MATTERS"
          }
          title={title}
          description={description}
        />

        <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -25 : 25,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.04,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.035,
                  ease,
                }}
                whileHover={{
                  y: -3,
                }}
                className="group border-t border-white/[0.13] py-5 transition-colors duration-200 hover:border-lime-400/30"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.025] text-lime-300/75 transition-all duration-200 group-hover:border-lime-400/30 group-hover:bg-lime-400/[0.06]"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </motion.div>

                <h3 className="mt-4 text-base font-semibold text-white/75 transition-colors group-hover:text-white">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/30">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  eyebrow,
  title,
  description,
  steps,
}) {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-9">
          {steps.map((step, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.04,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.035,
                  ease,
                }}
                whileHover={{
                  x: 4,
                }}
                className="group relative grid gap-4 border-t border-white/[0.12] py-5 transition-all duration-200 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-lime-400/45 transition-colors group-hover:text-lime-300/70">
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold tracking-[-0.02em] text-white/75 transition-colors group-hover:text-white">
                  {step.title}
                </h3>

                <p className="max-w-xl text-xs leading-6 text-white/30 transition-colors group-hover:text-white/40">
                  {step.text}
                </p>

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  className="pointer-events-none absolute bottom-0 left-0 h-px bg-gradient-to-r from-lime-400/40 to-transparent"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SystemMap() {
  const systemSteps = [
    ["Ad / Website", Megaphone],
    ["Lead", Target],
    ["Conversation", MessageSquare],
    ["Qualification", Sparkles],
    ["Booking", CalendarCheck],
    ["CRM", Database],
    ["Follow-up", RefreshCw],
    ["Review", Star],
  ];

  return (
    <section className="relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.04,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.14] bg-[#0d130d] p-6 sm:p-8 lg:p-11"
        >
          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-lime-400 blur-[100px]"
          />

          <div className="relative text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-300/60">
              THE RESULT
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] sm:text-4xl">
              A customer journey that keeps moving
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/32">
              The exact workflow depends on your business, but the
              principle is simple: capture interest, respond quickly,
              understand the opportunity, convert efficiently, build
              trust, and keep the relationship moving.
            </p>

            <div className="mx-auto mt-9 flex max-w-5xl flex-wrap items-center justify-center gap-3">
              {systemSteps.map(([label, Icon], index) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                    ease,
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                    }}
                    className="flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2.5 transition-all duration-200 hover:border-lime-400/30 hover:bg-lime-400/[0.05]"
                  >
                    <Icon
                      size={13}
                      className="text-lime-300/75"
                    />

                    <span className="text-[10px] font-medium text-white/45">
                      {label}
                    </span>
                  </motion.div>

                  {index !== systemSteps.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="hidden text-white/15 sm:block"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WebsiteArchitecture() {
  const layers = [
    {
      number: "01",
      title: "Business Strategy",
      text:
        "Make it immediately clear who you help, what you offer, and what action customers should take.",
    },
    {
      number: "02",
      title: "Trust & Credibility",
      text:
        "Use professional presentation, proof, useful information, reviews, and consistent branding to reduce customer hesitation.",
    },
    {
      number: "03",
      title: "Customer Experience",
      text:
        "Make navigation, content, interactions, forms, accounts, booking flows, and mobile behavior feel natural.",
    },
    {
      number: "04",
      title: "Lead Generation",
      text:
        "Create clear pathways for visitors from organic search, social media, paid advertising, and direct traffic to become leads.",
    },
    {
      number: "05",
      title: "Business Functionality",
      text:
        "Add the functionality your business actually needs — from customer accounts and data management to admin tools and booking.",
    },
    {
      number: "06",
      title: "Conversion",
      text:
        "Give visitors a clear next step, whether that means contacting you, booking a service, requesting information, or becoming a customer.",
    },
  ];

  return (
    <section className="relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.04,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
          className="grid overflow-hidden rounded-[30px] border border-white/[0.14] bg-[#0d130d] lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="relative overflow-hidden border-b border-white/[0.10] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-white/[0.10] lg:p-11">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.05, 0.09, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-lime-400 blur-[80px]"
            />

            <div className="relative">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-300/60">
                HOW WE THINK ABOUT WEBSITES
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                Your website should support the business
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/32">
                We don't treat a website as a collection of decorative
                sections. It should help your business communicate,
                build trust, generate opportunities, serve customers,
                support campaigns, and make everyday operations easier.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-11">
            <div className="space-y-6">
              {layers.map((layer, index) => {
                const fromLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={layer.number}
                    initial={{
                      opacity: 0,
                      x: fromLeft ? -20 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.04,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                      ease,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    className="group grid gap-4 transition-transform duration-200 sm:grid-cols-[50px_0.7fr_1.3fr]"
                  >
                    <span className="font-mono text-[9px] tracking-[0.15em] text-lime-400/45 group-hover:text-lime-300/70">
                      {layer.number}
                    </span>

                    <h4 className="text-sm font-semibold text-white/70 group-hover:text-white">
                      {layer.title}
                    </h4>

                    <p className="text-xs leading-6 text-white/30 group-hover:text-white/40">
                      {layer.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA({ service }) {
  const automation = service?.id === "automation";

  return (
    <section className="relative z-10 border-t border-white/[0.09] bg-[#0b100b] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 blur-[130px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.05,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.div
          animate={{
            y: [0, -4, 0],
            boxShadow: [
              "0 0 0 rgba(163,230,53,0)",
              "0 0 30px rgba(163,230,53,0.08)",
              "0 0 0 rgba(163,230,53,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/[0.07] text-lime-300"
        >
          {automation ? (
            <Bot size={20} />
          ) : (
            <Globe2 size={20} />
          )}
        </motion.div>

        <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-300/60">
          LET'S BUILD SOMETHING USEFUL
        </p>

        <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem]">
          Ready to improve your
          <br />

          <span className="bg-gradient-to-r from-lime-200 via-lime-400 to-green-400 bg-clip-text text-transparent">
            {automation
              ? "business operations?"
              : "online presence?"}
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/35">
          Tell us about your business, what you're trying to improve,
          and where things currently get stuck. We'll help you identify
          the right website, functionality, or automation system for
          your goals — without unnecessary complexity.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-xs font-bold text-black shadow-[0_0_35px_rgba(163,230,53,0.16)] transition-all duration-300 hover:bg-lime-200 hover:shadow-[0_0_45px_rgba(163,230,53,0.25)]"
          >
            Book Your Free Call

            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-6 py-3.5 text-xs font-semibold text-white/55 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            See Our Work

            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function Background() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 78%)",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.035, 0.075, 0.035],
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-72 top-[10%] h-[600px] w-[600px] rounded-full bg-lime-400/[0.06] blur-[160px]"
      />

      <motion.div
        animate={{
          opacity: [0.025, 0.06, 0.025],
          x: [0, -20, 0],
          y: [0, 25, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-72 top-[35%] h-[650px] w-[650px] rounded-full bg-green-400/[0.05] blur-[170px]"
      />

      <motion.div
        animate={{
          opacity: [0, 0.035, 0],
          x: ["-20%", "20%", "-20%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[20%] h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-lime-300 blur-[150px]"
      />
    </>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
      />

      <line
        x1="9"
        y1="18"
        x2="15"
        y2="18"
      />
    </svg>
  );
}