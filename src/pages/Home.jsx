import Hero from "../components/home/Hero";
import Process from "../components/home/Process";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQ from "../components/home/FAQ";
import TechStackMarquee from "../components/common/TechStackMarquee";
import ProblemSolution from "../components/home/ProblemSolution";
import ShowcasePreviewSection from "../components/home/ShowcasePreviewSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <TechStackMarquee />

      <ProblemSolution />

      <section id="process">
        <Process />
      </section>

      <ShowcasePreviewSection />

      <section id="faq">
        <FAQ />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <CTASection />
    </>
  );
}




