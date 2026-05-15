import { motion } from "framer-motion";
import Building1 from "../../public/Building1.png";
import Building2 from "../../public/Building2.png";

const smooth = {
  duration: 0.8,
  ease: "easeOut",
};

function AboutUs() {
  return (
    <div className="overflow-x-hidden bg-gray-50 text-gray-700">

      {/* ================= HEADER ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-semibold text-blue-900 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          KARVY & CO Chartered Accountants
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          KARVY & CO is a distinguished Partnership Firm committed to delivering
          unparalleled financial expertise and comprehensive service solutions.
          We pride ourselves on our dedication to client success and adherence to
          the highest professional standards.
        </motion.p>
      </section>

      {/* ================= OFFICES ================= */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-10 text-center">
        {[
          {
            title: "Head Office",
            img: Building1,
            desc: "No.2, Bhooma Plaza Street No.4, Avenue 7, Banjara Hills, HYDERABAD – 500 034",
          },
          {
            title: "Mumbai Branch",
            img: Building2,
            desc: "6 D/2, Court Chambers, Plot No.15A, 35 New Marine Lines, Mumbai – 400 020",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={smooth}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt=""
              className="h-24 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= TEAM & EXPERIENCE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-10">
          Our Team and Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={smooth}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-3">Man Power</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>FCAs: 6</li>
              <li>ACAs: 6</li>
              <li>Semi Qualified Assistants: 30</li>
              <li>Semi Qualified Paid Assistant: 4</li>
              <li>Other Audit Staff: 5</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={smooth}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-3">Years of Operation</h3>
            <p className="text-sm">46 Years (Estd: 01/08/1979)</p>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-10">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-sm">
          {[
            {
              name: "Kutumba Rao Vellanki, FCA",
              desc: "Founding Partner with expertise in corporate tax advisory, planning and business consulting.",
            },
            {
              name: "Ajay Kumar Kosaraju, FCA",
              desc: "Leads audit and assurance services ensuring compliance and reporting.",
            },
            {
              name: "T.V.R.S Bhanu Murthy, FCA",
              desc: "Leads Mumbai practice specializing in international taxation.",
            },
            {
              name: "Sanjeev Kumar Sreepati, FCA",
              desc: "Expert in direct tax advisory and corporate tax strategies.",
            },
            {
              name: "Dedeepya Nalluri, FCA",
              desc: "Experienced in audit, taxation, and forensic accounting.",
            },
            {
              name: "Ruchir Indravadan Joshi, FCA",
              desc: "Specializes in international taxation, mergers and acquisitions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={smooth}
                viewport={{ once: true }}
            >
              <h3 className="font-semibold text-blue-900 mb-2">
                {item.name}
              </h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CLIENT PORTFOLIO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-10">
          Our Diverse Client Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={smooth}
  viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-3">Number of Clients</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Corporate Clients: 145</li>
              <li>Partnership Firms: 15</li>
              <li>Individual Clients: 140</li>
              <li>Trusts/Societies: 30+</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 40 }}
            transition={smooth}
  viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-3">
              Professional Experience
            </h3>
            <p className="text-sm">
              Over the past four decades, the firm has engaged with several
              Government, Semi-Government institutions, insurance companies and
              banks across diverse professional capacities.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default AboutUs;