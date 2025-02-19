import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-300 text-white py-10 px-5 md:px-20 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-2 mb-6 md:mb-0">
          <img
            src="/logos/logo_trans.webp"
            alt={t("navbar.forum_name")}
            className="w-48 md:w-52"
          />
          <p className="text-lg font-bold text-gold">
            {t("navbar.forum_name")}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-5 md:mt-0">
          <a
            href="https://api.whatsapp.com/message/5LBBYISNGFQSO1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white bg-green-500 hover:bg-green-600 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.facebook.com/innovest1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/innovest1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/innovest1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        <p>{t("footer.copyRight")}</p>
      </div>
    </footer>
  );
}

export default Footer;
