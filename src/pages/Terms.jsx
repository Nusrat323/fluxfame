import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
    <Helmet>
      <title>Terms & Conditions | FluxFame</title>
      <meta
        name="description"
        content="Review the FluxFame Terms & Conditions for our AI automation, CRM automation, and business growth services."
      />
      <link rel="canonical" href="https://fluxfame.site/terms" />
    </Helmet>
    <MainLayout>
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-gray-300">

        
        <h1 className="text-4xl font-bold text-white mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="leading-relaxed mb-6">
          By accessing or using FluxFame services, you agree to be bound by
          these Terms & Conditions. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Services
        </h2>

        <p className="leading-relaxed mb-6">
          We provide automation systems, CRM workflows, AI integrations,
          funnel building, and business growth solutions using platforms like GoHighLevel.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          User Responsibilities
        </h2>

        <p className="leading-relaxed mb-6">
          You agree to provide accurate information and not misuse our services
          for illegal or harmful activities.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Payments
        </h2>

        <p className="leading-relaxed mb-6">
          All payments for services must be made as agreed in project contracts.
          Refunds are handled on a case-by-case basis depending on work progress.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Intellectual Property
        </h2>

        <p className="leading-relaxed mb-6">
          All systems, workflows, and designs created by FluxFame remain
          our intellectual property until full payment is completed.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Limitation of Liability
        </h2>

        <p className="leading-relaxed mb-6">
          We are not responsible for indirect damages, losses, or service interruptions
          caused by third-party platforms.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Contact
        </h2>

        <p className="leading-relaxed">
          For questions about these Terms, contact{" "}
          <span className="text-lime-400">fluxfame01@gmail.com</span>.
        </p>

      </section>
    </MainLayout>
    </>
  );
}