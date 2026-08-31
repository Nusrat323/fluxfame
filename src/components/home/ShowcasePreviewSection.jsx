import AnimatedSection from "../common/AnimatedSection";

import CaseStudyPreview from "./CaseStudyPreview";
import WebsiteShowcasePreview from "./Websitecasestudypreview";

export default function ShowcasePreviewSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      

      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-1/3
          h-80
          w-80
          rounded-full
          bg-lime-400/8
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          bottom-1/4
          h-80
          w-80
          rounded-full
          bg-lime-400/8
          blur-[140px]
        "
      />

      <div className="container-custom relative z-10">
       
        <AnimatedSection
          direction="up"
          y={35}
          duration={0.8}
          amount={0.2}
        >
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div
              className="
                mb-4
                inline-flex
                items-center
                rounded-full
                border
                border-lime-400/20
                bg-lime-400/[0.06]
                px-4
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-lime-400
              "
            >
              Built For Growth
            </div>

            <h2
              className="
                text-3xl
                font-black
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              See What Your Business
              <br />
              <span className="gradient-text">
                Can Look Like With FluxFame
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-relaxed
                text-gray-400
                sm:text-base
              "
            >
              From capturing and qualifying leads automatically to giving
              your business a modern online presence — we build the systems
              and experiences that help businesses look better, respond
              faster, and grow smarter.
            </p>
          </div>
        </AnimatedSection>

        <div
          className="
            grid
            items-stretch
            gap-7
            lg:grid-cols-2
          "
        >
          
          <AnimatedSection
            direction="left"
            x={70}
            duration={0.9}
            amount={0.15}
          >
            <CaseStudyPreview />
          </AnimatedSection>

          

          <AnimatedSection
            direction="right"
            x={70}
            delay={0.08}
            duration={0.9}
            amount={0.15}
          >
            <WebsiteShowcasePreview />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}