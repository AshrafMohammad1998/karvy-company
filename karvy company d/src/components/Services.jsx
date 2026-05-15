import { motion } from "framer-motion";
import Audit1 from '../../public/audit 1.png'
import Audit2 from '../../public/audit2.png'
import Audit3 from '../../public/audit3.png'
import Audit4 from '../../public/audit4.png'

function Services() {
  return (
    <div className="w-full bg-white">

      {/* ================= AUDIT & ASSURANCE ================= */}
   <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-4">
          Audit & Assurance Services
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          KARVY & CO offers a full suite of audit and assurance services,
          providing comprehensive and independent evaluations to enhance
          financial credibility and operational efficiency.
        </p>
      </div>

      <div className="space-y-20 max-w-7xl mx-auto">
        {[
          {
            title: "Financial & Statutory Audits",
            desc: "Statutory Audits, Tax Audits, GST Audits",
            img: Audit1,
          },
          {
            title: "Review & Specialized Audits",
            desc: "In-depth analysis of financial statements and specialized audits tailored to client needs.",
            img: Audit2,
          },
          {
            title: "Global Reporting Expertise",
            desc: "Guidance on international financial reporting standards and cross-border compliance.",
            img: Audit3,
          },
          {
            title: "Advanced Assurance & Advisory",
            desc: "Risk mitigation, internal controls, and strategic advisory services.",
            img: Audit4,
          },
        ].map((item, i) => {
          const isReverse = i % 2 !== 0;

          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: isReverse ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
      {/* ================= TAXATION ================= */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-4">
            Taxation Advisory (Direct / Indirect)
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            In today’s dynamic financial landscape, tax regulations are
            constantly shifting. Navigating this terrain requires expert
            knowledge and proactive strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Holistic Tax Management",
              desc: "Comprehensive solutions including direct, indirect, personal taxes, and cross-border taxation.",
            },
            {
              title: "Expert Team & Capabilities",
              desc: "Experienced professionals handling planning, compliance, and litigation with precision.",
            },
            {
              title: "Key Tax Services",
              desc: "Corporate tax, advisory, transfer pricing, compliance, litigation, and deal advisory.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TRANSACTION ADVISORY ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-4">
            Transaction Advisory
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            We act as your trusted partner in navigating complex financial
            transactions, offering guidance in valuations, diligence, and
            structuring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Startup & Investor Advisory",
              desc: "Support across fundraising and investment lifecycle.",
            },
            {
              title: "M&A Advisory",
              desc: "Expert guidance through mergers and acquisitions.",
            },
            {
              title: "Business Valuation",
              desc: "Accurate valuation for assets and business entities.",
            },
            {
              title: "Corporate Finance",
              desc: "Strategic financial management and capital optimization.",
            },
            {
              title: "Due Diligence",
              desc: "Risk-focused financial and operational analysis.",
            },
            {
              title: "Strategic CFO Services",
              desc: "Fractional CFO expertise for performance and growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= CORPORATE & SECRETARIAL ================= */}
        <section className="relative w-full h-[80vh] overflow-hidden">

        {/* Background Image */}
        <img
            src="/images/corporate-bg.jpg"   // 👉 put your image in public/images
            alt=""
            className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-16">

            {/* Heading */}
            <motion.h2
            className="text-3xl md:text-5xl font-semibold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            Corporate and Secretarial Advisory
            </motion.h2>

            {/* Description */}
            <motion.p
            className="text-gray-700 max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            >
            Our corporate and secretarial advisory services are designed to navigate
            the intricate landscape of company incorporation, secretarial formalities,
            and statutory compliance, ensuring your business operates smoothly and legally.
            </motion.p>

            {/* Services List */}
            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            >
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Our Services
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Company incorporation and related secretarial formalities</li>
                <li>Statutory and regulatory compliance under Companies Act</li>
                <li>XBRL Filing</li>
                <li>Advice on Corporate Governance</li>
                <li>M&A Advisory</li>
                <li>Valuation</li>
                <li>Restructuring</li>
            </ul>
            </motion.div>

            {/* Startup Section */}
            <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Project-based services for startups
            </h3>

            <p className="text-gray-700">
                We offer tailored project-based services specifically designed to meet
                the unique needs of startups, guiding them through initial and growth phases.
            </p>
            </motion.div>

        </div>
        </section>    
    </div>
  );
}

export default Services;