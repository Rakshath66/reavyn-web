
import React from "react";

export const metadata = {
  title: "TermsOfService | Reavyn Tech Alliance",
 };

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black pt-40 text-gray-200 flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <h1 className="text-6xl max-md:text-4xl font-semibold text-center mb-2">
          Terms of Service
        </h1>
        <p className="text-center text-xl text-gray-400 mb-10">
            Effective Date: September 20,2025<br/>
          Last Updated: August 19, 2025
        </p>

        {/* Acceptance Section */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3 uppercase">
            Acceptance of Terms
          </h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            By using our services, you confirm that you are at least 18 years old
            and agree to comply with these Terms of Service. Please read them
            carefully as they include your rights and obligations.
          </p>
        </section>

        {/* Our Services */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">1. Our Services</h2>
          <ul className="list-disc list-inside text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 space-y-2">
            <li>Custom website and app development.</li>
            <li>UI/UX design and consultation.</li>
            <li>Digital marketing and SEO optimization.</li>
            <li>Branding and visual content creation.</li>
            <li>Ongoing Support and Maintenance.</li>
          </ul>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 mt-3 leading-relaxed">
            We reserve the right to modify or discontinue any service at our
            discretion, with or without notice. This may not affect users of
            significant standing or existing contracts.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            2. User Responsibilities
          </h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            Users must provide accurate and complete information when using our
            services. You agree not to engage in unlawful, harmful, or abusive
            activities while interacting with our platforms.
          </p>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 mt-2 leading-relaxed">
            Any content submitted (feedback, comments, or shared data) remains
            your responsibility. You are solely liable for your interactions,
            submissions, and communications.
          </p>
        </section>

        {/* Payment and Fees */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">3. Payment and Fees</h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            All fees are payable as agreed. Fees are non-refundable unless stated
            otherwise in the contract. Delayed payments may incur penalties or
            service suspension. We use secure payment gateways to protect your
            transactions.
          </p>
        </section>

        {/* Ownership and Usage */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">4. Ownership and Usage</h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            All content, designs, and code created by Fave Mart Solutions remain
            our intellectual property until full payment is received. Upon full
            payment, rights are transferred to the client as per agreement.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            Fave Mart Solutions is not liable for any incidental, indirect, or
            consequential damages arising from the use of our services. Total
            liability shall not exceed the amount paid for the specific service.
          </p>
        </section>

        {/* Ending Relationship */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">
            6. Ending Our Relationship / Termination
          </h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            We may terminate or suspend user access to our services in case of
            non-compliance or misuse. Users may terminate at any time by written
            notice. Fees for work already completed remain due.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">7. Changes to Terms</h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            We may update these Terms periodically. Continued use of our services
            constitutes acceptance of the updated terms.
          </p>
        </section>

        {/* Legal Jurisdiction */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">8. Legal Jurisdiction</h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            These terms are governed by the laws of India. Any dispute will be
            handled in the jurisdiction of Bengaluru, India.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-4xl max-md:text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-300 leading-relaxed">
            Email: support@favemart.com <br />
            Address: Bengaluru, India
          </p>
        </section>

        <p className="text-xl ml-10 max-md:ml-3 max-md:text-base text-gray-400 text-center mt-10">
          © {new Date().getFullYear()} Fave Mart Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
