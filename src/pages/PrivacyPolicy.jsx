import MainLayout from "../layouts/MainLayout";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-gray-300">

        
        <h1 className="text-4xl font-bold text-white mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="leading-relaxed mb-6">
          FluxFame ("we", "our", or "us") respects your privacy.
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website and services.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Information We Collect
        </h2>

        <p className="leading-relaxed mb-6">
          We may collect basic information such as your name, email address,
          and message details when you contact us through forms or email.
          We do not collect sensitive personal data.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          How We Use Information
        </h2>

        <p className="leading-relaxed mb-6">
          We use your information to respond to inquiries, provide services,
          improve our systems, and communicate project-related updates.
          We do not sell or share your personal data with third parties.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Data Protection
        </h2>

        <p className="leading-relaxed mb-6">
          We implement reasonable security measures to protect your data.
          However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Cookies
        </h2>

        <p className="leading-relaxed mb-6">
          We may use cookies to improve user experience and website performance.
          You can disable cookies in your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">
          Contact Us
        </h2>

        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy, contact us at{" "}
          <span className="text-lime-400">fluxfame@gmail.com</span>.
        </p>

      </section>
    </MainLayout>
  );
}