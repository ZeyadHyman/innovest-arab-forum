import { useTranslation } from 'react-i18next';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();
  const menuLinks = t('navbar.menu', { returnObjects: true });

  return (
    <footer className="bg-gray-300/40 text-white py-10 px-5 md:px-20 mt-2 mb-20 lg:mb-0 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-2 mb-6 md:mb-0">
          <img
            src="/logos/logo_trans.webp"
            alt={t('navbar.forum_name')}
            className="w-48 md:w-52"
          />
          <p className="text-lg font-bold text-gold text-center">
            {t('navbar.forum_name')}
          </p>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {Object.entries(menuLinks).map(([key, value]) => (
            <Link
              to={`/${key === 'home' ? '' : key}`}
              key={key}
              className="text-gray-600  hover:text-zinc-700  active:text-zinc-50 font-normal hover:font-bold cursor-pointer transition-all duration-100"
            >
              {value}
            </Link>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-5 md:mt-0">
          <a
            href="https://api.whatsapp.com/message/5LBBYISNGFQSO1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-green-500 border hover:text-white  hover:bg-green-600 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.facebook.com/innovest1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600  border hover:text-white hover:bg-blue-700 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/innovest1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500  border hover:text-white hover:bg-pink-600 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/innovest1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500  border hover:text-white hover:bg-blue-600 p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs lg:text-sm mt-10">
        <p>{t('footer.copyRight')}</p>
      </div>
    </footer>
  );
}

export default Footer;
