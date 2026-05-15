import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div className="pt-6 bg-white dark:bg-slate-800 dark:text-white flex flex-col min-h-screen">

      {/* ================= HERO / INTRO ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-semibold text-blue-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We value partnership and are eager to discuss how our expertise can
          benefit your organization. Whether you have a specific query or want
          to explore potential collaborations, our team is ready to connect.
        </motion.p>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Head Office */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Head Office – Hyderabad
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Address: No.2, Bhooma Plaza Street No.4, Avenue 7,
              Banjara Hills, Hyderabad
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Phone: +91-9560035577 / +91-8885799942
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Email: info@karvycompany.com
            </p>
          </motion.div>

          {/* Branch Office */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Branch Office – Mumbai
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Address: Chambers, Sir V T Marg, New Marine Lines, Mumbai
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Phone: +91-022-2200 2307 / +91-9821115551
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-blue-900 mb-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Send Us a Message
          </motion.h2>

          <motion.form
            className="bg-white p-8 rounded-xl shadow-md space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* ================= FOOT NOTE ================= */}
      <section className="py-10 text-center">
        <p className="text-gray-600">
          We look forward to hearing from you and building a successful future together.
        </p>
      </section>

    </div>
  );
}

export default ContactUs;