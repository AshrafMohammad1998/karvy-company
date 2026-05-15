import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import index from '../../src/index.css'

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 👉 Adjust paths if needed
import navImage from "../../public/karvy logo.jpg";
import KarvyImage from "../../public/Karvy Image.png";

const slides = [
  {
    image: KarvyImage,
    text: "We do things differently...",
  },
  {
    image: navImage,
    text: "We take the road less travelled",
  },
  {
    image: "/images/img/line3.jpg",
    text: "We are 1st among a billion people to file tax returns",
  },
  {
    image: "/images/img/line4.jpg",
    text: "We are a lock-less, paper-less, solar powered office",
  },
];

function Home() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const text = "Why KARVY & CO Stands Apart";
  return (
    <div className="relative">
      {/* ================= HERO SLIDER ================= */}
      <div className="relative  h-[80vh] overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slides[index].image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Text */}
            <motion.h1
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-light text-center px-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {slides[index].text}
            </motion.h1>
          </motion.div>
        </AnimatePresence>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-md transition"
        >
          <ArrowBackIosNewIcon className="text-white" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-md transition"
        >
          <ArrowForwardIosIcon className="text-white" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full cursor-pointer transition ${
                i === index ? "bg-cyan-400 scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= WHY KARVY SECTION ================= */}
      <div className="mt-10">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center px-4 overflow-y-hidden">
          <motion.h2 className="text-5xl font-semibold text-blue-900 flex flex-wrap justify-center gap-2 pb-5">
            {text.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 120
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            At KARVY & CO, our foundation is built on a blend of profound experience,
            specialized expertise, and a relentless commitment to our clients' success.
            Discover what makes us the preferred partner for financial excellence.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 px-6">
          {[
            {
              title: "Decades of Excellence",
              desc: "46 years of uninterrupted excellence in chartered accountancy, marked by a steadfast commitment to quality and integrity.",
            },
            {
              title: "Trusted Client Network",
              desc: "A loyal client base of 300+ organizations across diverse sectors, reflecting deep trust and enduring partnerships.",
            },
            {
              title: "Specialized Expertise",
              desc: "Our team of 6 FCA partners brings specialized insights in audit, taxation, and corporate advisory, ensuring comprehensive solutions.",
            },
            {
              title: "Proven Track Record",
              desc: "A history of proven success, adeptly serving listed companies and complex public sector organizations.",
            },
            {
              title: "Strategic Presence",
              desc: "Multi-city operations in Hyderabad and Mumbai, positioning us closer to clients in key economic centers.",
            },
            {
              title: "Measurable Business Value",
              desc: "Our commitment extends beyond compliance, focusing on delivering tangible, measurable business value to every client.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="w-8 h-[2px] bg-cyan-400 mt-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;