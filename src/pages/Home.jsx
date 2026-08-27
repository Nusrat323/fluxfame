import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Process from "../components/home/Process";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQ from "../components/home/FAQ";
import TechStackMarquee from "../components/common/TechStackMarquee";

export default function Home() {
  return (
    <MainLayout>

     
      <div id="home">
        <Hero />
        
      </div>

     
      <section id="services" className="relative">
        <div className="glass-wrapper w-full">
        <TechStackMarquee/>
          <ServicesPreview />
        </div>
      </section>

      
      <section id="process">
        <Process />
      </section>

      
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      
      <section id="faq">
        <FAQ />
      </section>

    </MainLayout>
  );
}




