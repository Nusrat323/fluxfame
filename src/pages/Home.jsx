import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Process from "../components/home/Process";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <MainLayout>

      {/* HOME */}
      <div id="home">
        <Hero />
      </div>

      {/* SERVICES */}
      <section id="services" className="relative">
        <div className="glass-wrapper w-full">
          <ServicesPreview />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <Process />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

    </MainLayout>
  );
}