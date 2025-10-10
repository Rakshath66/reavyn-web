
import React from "react";

export const metadata = {
  title: "PrivacyPolicy | Reavyn Tech Alliance",
 };

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black pt-40 text-gray-200 flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <h1 className="text-6xl max-md:text-4xl  text-center mb-2">
          Privacy Policy
        </h1>
        <p className="text-center text-xl text-gray-400 mb-10">
          Effective Date: September 20,2025<br/>
          Last Updated: August 19, 2025
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl mb-3">1. Introduction</h2>
          <p className="leading-relaxed text-gray-300 text-xl ml-10  max-md:ml-3 max-md:text-base">
            At Fave Mart Solutions, we are committed to protecting your privacy
            and ensuring that your personal information is handled securely. This
            Privacy Policy explains how we collect, use, and share your
            information when you use our website and services. By using our
            website, you agree to this Privacy Policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            2. Information We Collect
          </h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base mb-2 text-gray-300">
            We may collect the following information:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-300 text-xl ml-10  max-md:ml-3 max-md:text-base">
            <li>
              <span className="font-medium">Personal Information:</span> Name,
              email address, phone number, and other details you provide during
              signup or contact.
            </li>
            <li>
              <span className="font-medium">Usage Data:</span> Browser type,
              device information, and how you use our website.
            </li>
            <li>
              <span className="font-medium">Communication Data:</span> Messages,
              emails, or other correspondence with our team.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-xl ml-10  max-md:ml-3 max-md:text-base">
            <li>To provide, improve, and personalize our services.</li>
            <li>To communicate with you about updates or offers.</li>
            <li>To ensure website security and performance.</li>
            <li>
              To comply with legal obligations or protect our rights and users.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            4. How We Share Your Information
          </h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            We do not sell your personal data. We may share limited information
            with trusted third-party services (e.g., payment processors or
            analytics providers) to operate our business securely. We ensure
            these partners protect your data as required by law.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            We implement robust security measures, including encryption and
            secure servers, to safeguard your personal data. However, please
            note that no system is completely secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            6. Your Rights and Choices
          </h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-300 mb-2">
            You can control how we use your data:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Request to access or correct your data.</li>
            <li>Opt out of marketing emails or communications.</li>
            <li>Request deletion of your account or personal data.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">7. Cookies and Tracking</h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            We use cookies to analyze user experience, display content, and
            personalize your visit. You can modify cookie preferences in your
            browser settings.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            8. Updates to Our Policy
          </h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            We may update this Privacy Policy occasionally. The updated version
            will be posted here with the latest date.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            Email: support@favemart.com <br />
            Address: Bengaluru, India
          </p>
        </section>

        <p className="text-xl ml-10  max-md:ml-3 max-md:text-base text-gray-400 text-center mt-10">
          © {new Date().getFullYear()} Fave Mart Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
