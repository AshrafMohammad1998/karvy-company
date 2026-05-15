import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="dark:bg-slate-800 relative w-full w=[80vh] overflow-x-hidden mt-5" >
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="grid sm:grid-cols-2 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              KARVY & Co
            </h3>
            <p className="text-sm leading-relaxed">
              Karvy & Co. Chartered Accountants is a multi-service,
              professionally managed organization, established in 1979.
              It has offices in Hyderabad and Mumbai.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/industries" className="hover:text-white transition">
                  Industries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid sm:grid-cols-2 gap-8">
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Audit & Assurance Services
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Taxation Advisory (Direct/Indirect)
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Management Advisory
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Corporate & Secretarial Advisory
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Address
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                📍 KARVY Company, #2 Bhooma Plaza, Road No. 1, St.No. 4,
                Avenue 7, Banjara Hills, Hyderabad - 500034
              </li>
              <li>📞 +91-40-2335 8625 / 2335 4995</li>
              <li>✉️ info@karvycompany.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2012 KARVY & Co. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;