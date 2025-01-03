import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-gradient-to-br from-indigo-50 via-white to-white pt-16 pb-24 px-4"
    >
      {/* --------------- Services/Bundles Section --------------- */}
      <section className="max-w-7xl mx-auto" data-aos="zoom-in-down">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold uppercase text-indigo-900 tracking-wider">
            Services
          </h2>
          <div className="flex justify-center mt-2">
            <div className="w-24 border-b-4 border-indigo-900"></div>
          </div>
          <h3 className="mt-6 mx-auto text-base sm:text-lg lg:text-2xl font-semibold max-w-3xl text-indigo-900 leading-relaxed">
            We are deeply committed to the growth and success of our clients.
          </h3>
        </div>

        {/* Services Grid */}
        <div className="space-y-10" data-aos="fade-down" data-aos-delay="600">
          {/* First Row: Basic, Standard, Premium */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Basic Bundle */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden text-gray-700 group">
              <div className="p-6">
                <img
                  alt="Basic Bundle"
                  className="w-32 h-32 mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  src={img}
                />
                <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-indigo-800">
                  Basic Bundle - $350/month
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  Perfect for individuals seeking essential financial support
                  with a focus on quarterly guidance and a few key services.
                  <br />
                  <br />
                  <strong>Included:</strong>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>Quarterly Consulting Sessions</li>
                    <li>Retirement &amp; Tax Planning (basic)</li>
                    <li>Expense Tracking (monthly)</li>
                    <li>Technical Support (48-hour response)</li>
                    <li>Monthly Allocation Advice</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Standard Bundle */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden text-gray-700 group">
              <div className="p-6">
                <img
                  alt="Standard Bundle"
                  className="w-32 h-32 mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  src={img2}
                />
                <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-indigo-800">
                  Standard Bundle - $550/month
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  More frequent consultations, a structured budget plan, and
                  ongoing financial monitoring.
                  <br />
                  <br />
                  <strong>Included:</strong>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>Bi-Monthly Consulting Sessions</li>
                    <li>Retirement &amp; Tax Planning (in-depth)</li>
                    <li>Detailed Monthly Expense Tracking</li>
                    <li>Monthly Budget Plan</li>
                    <li>Monthly Allocation Advice</li>
                    <li>Technical Support (36-hour response)</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Premium Bundle */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden text-gray-700 group">
              <div className="p-6">
                <img
                  alt="Premium Bundle"
                  className="w-32 h-32 mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  src={img3}
                />
                <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-indigo-800">
                  Premium Bundle - $750/month
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  Extensive, hands-on financial support with daily tracking,
                  faster response times, and proactive management.
                  <br />
                  <br />
                  <strong>Included:</strong>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>Monthly Consulting Sessions</li>
                    <li>Comprehensive Retirement &amp; Tax Planning</li>
                    <li>Daily Expense Tracking</li>
                    <li>24-hour Response (call &amp; voicemail)</li>
                    <li>Weekly Budget Plans</li>
                    <li>Monthly Reports &amp; Recommendations</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* Second Row: One-Time Consultation, Tax Services */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
            {/* One-Time Consultation */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden text-gray-700 group">
              <div className="p-6">
                <img
                  alt="One-Time Consultation"
                  className="w-32 h-32 mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  src={img4}
                />
                <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-indigo-800">
                  One-Time Financial Planning - $150
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  A 30-minute session for personalized advice on a specific
                  financial question or situation.
                  <br />
                  <br />
                  <strong>What’s included:</strong>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>1-on-1 Consultation</li>
                    <li>
                      Targeted Financial Planning (budgeting, retirement, tax,
                      etc.)
                    </li>
                    <li>Tailored Advice &amp; Actionable Steps</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Tax Services */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden text-gray-700 group">
              <div className="p-6">
                <img
                  alt="Tax Services"
                  className="w-32 h-32 mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  src={img4}
                />
                <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-indigo-800">
                  Tax Services
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  For inquiries regarding specialized tax filings or questions,
                  schedule a call to speak with an advisor. Pricing may vary
                  based on complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- “We Build” & “We Collaborate” Section --------------- */}
      <section className="max-w-7xl mx-auto mt-16" data-aos="zoom-out">
        <div className="flex flex-col-reverse lg:flex-row py-8 items-center lg:justify-between">
          {/* We Build */}
          <div className="lg:w-1/2 space-y-4 mt-10 lg:mt-0 lg:mr-8 text-center lg:text-left">
            <div className="text-indigo-900 mx-auto lg:mx-0 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
              </svg>
            </div>
            <h3 className="text-3xl text-indigo-900 font-bold">
              We <span className="font-black">Build</span>
            </h3>
            <p className="mx-auto lg:mx-0 max-w-xl text-lg text-gray-700 leading-relaxed">
              With over 10 years’ experience in finance and accounting and a
              deep understanding of the latest trends, we provide customized
              recommendations to help you reduce costs and increase efficiency.
            </p>
          </div>

          {/* We Collaborate */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <div className="text-indigo-900 mx-auto lg:mx-0 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M7.375 16.781 8.625 15.219 4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
              </svg>
            </div>
            <h3 className="text-3xl text-indigo-900 font-bold">
              We <span className="font-black">Collaborate</span>
            </h3>
            <p className="mx-auto lg:mx-0 max-w-xl text-lg text-gray-700 leading-relaxed">
              We work alongside your existing teams to scale financial
              solutions, design custom strategies, and simplify processes so you
              can focus on what you do best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
