import { useEffect, useState, useRef } from 'react';
import { getTimeLeft } from '../../utils/countdownTimer';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';
import globe from '/icons/globe.svg';
import logo from '/logos/logo_trans.webp';
import { FaTicketAlt } from 'react-icons/fa';
import Loader from '../../utils/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

function Navbar() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangSwitched, setIsLangSwitched] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();

  const menuLinks = t('navbar.menu', { returnObjects: true }) || {};

  const lastScrollY = useRef(window.innerHeight);

  // Handle language switch
  const switchLanguage = () => {
    setIsLangSwitched(true);
    setTimeout(() => setIsLangSwitched(false), 2500);
    const newLang = isArabic ? 'en' : 'ar';
    localStorage.setItem('language', newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0);
      setIsHidden(currentScrollY > lastScrollY.current);

      if (location.pathname === '/') {
        setIsScrolled(currentScrollY > window.innerHeight);
        if (currentScrollY > window.innerHeight) {
          lastScrollY.current = currentScrollY;
        }
      } else {
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update countdown timer and load state
  useEffect(() => {
    const loadTimeout = setTimeout(() => setIsLoaded(true), 100);
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => {
      clearTimeout(loadTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLangSwitched && <Loader />}

      {/* Navbar */}
      <nav
        className={cn(
          'w-full bg-gradient-to-l from-blue-950 to-gray-800 transition-transform duration-500 ease-in-out shadow-lg z-40',
          isHidden ? 'md:-translate-y-full' : 'md:translate-y-0',
          !isScrolled && location.pathname === '/'
            ? 'bg-transparent absolute shadow-none pt-4'
            : 'sticky top-0',
          isMenuOpen ? 'bg-gradient-to-l from-blue-950 to-gray-800' : ''
        )}
      >
        <div className="flex justify-between items-center py-4 px-6 md:py-5 md:px-32">
          {/* Logo Section */}
          <div className="flex flex-col items-center text-center select-none">
            <div className="flex ">
              <Link to="/" className="flex flex-col items-center text-center">
                <img
                  src={logo}
                  alt="INNOVEST Logo"
                  width="96"
                  height="96"
                  className={cn(
                    'transition-all duration-300 ease-out hover:scale-105 active:scale-95',
                    isScrolled ? 'w-14' : 'w-24'
                  )}
                />

                <h1
                  className={cn(
                    'org-font text-gold tracking-wide transition-all duration-300 ease-out',
                    isScrolled ? 'text-lg md:text-2xl' : 'text-2xl md:text-4xl'
                  )}
                >
                  INNOVEST
                </h1>
                {/* Forum Name */}
                <p
                  className={cn(
                    'text-white transition-all duration-300 ease-out',
                    isScrolled ? 'hidden' : 'text-[5px] md:text-[7px]'
                  )}
                >
                  {t('navbar.forum_name', { lng: 'en' })}
                </p>
                <p
                  className={cn(
                    'text-[7px] md:text-[9px] text-white transition-all duration-300 ease-out',
                    isScrolled ? 'hidden' : ''
                  )}
                >
                  {t('navbar.forum_name', { lng: 'ar' })}
                </p>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex justify-center items-center text-lg space-x-8">
            {Object.entries(menuLinks).map(([key, value]) => (
              <Link
                to={`/${key === 'home' ? '' : key}`}
                key={key}
                className="text-zinc-200 hover:text-zinc-50 active:text-zinc-50 font-normal hover:font-bold cursor-pointer transition-all duration-100"
              >
                {value}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Links */}
          <div className="md:hidden flex flex-col items-center">
            <div
              className="flex flex-col justify-center items-center space-y-1 cursor-pointer group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={cn(
                  'w-10 h-1 bg-white transition-transform',
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                )}
              ></div>
              <div
                className={cn(
                  'w-10 h-1 bg-white transition-opacity',
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              ></div>
              <div
                className={cn(
                  'w-10 h-1 bg-white transition-transform',
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                )}
              ></div>
            </div>

            <div
              className={cn(
                'absolute top-16 left-0 w-full transition-all duration-300 bg-gradient-to-l from-blue-950 to-gray-800',
                isMenuOpen
                  ? 'opacity-100 translate-y-6'
                  : 'opacity-0 -translate-y-10 pointer-events-none',
                location.pathname === '/' && isMenuOpen ? 'translate-y-10' : '',
                isMenuOpen && isScrolled ? 'translate-y-6' : ''
              )}
            >
              <div className="flex flex-col justify-center items-center text-lg space-y-5 ">
                {Object.entries(menuLinks).map(([key, value]) => (
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    to={`/${key === 'home' ? '' : key}`}
                    key={key}
                    className="text-zinc-200 hover:text-zinc-50 active:text-zinc-50 font-normal hover:font-bold cursor-pointer transition-all duration-100"
                  >
                    {value}
                  </Link>
                ))}
                <div
                  className={cn(
                    !isScrolled && location.pathname === '/'
                      ? 'w-full h-[1px] bg-white '
                      : ''
                  )}
                ></div>
              </div>
            </div>
          </div>

          {/* Desktop Language Switcher Button */}
          <button
            onClick={switchLanguage}
            className="hidden md:block select-none p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <img
              src={globe}
              alt="Globe Icon"
              width="48"
              height="48"
              className={cn(
                'transition-all duration-500 ease-out transform hover:rotate-180',
                isScrolled ? 'w-8 md:w-8' : 'w-10 md:w-12'
              )}
            />
          </button>
        </div>

        {/* Desktop Countdown Timer */}
        <div
          className={cn(
            'z-40 w-full fixed hidden md:flex bg-gold/90 backdrop-blur-xl justify-between items-center py-4 px-32 transition-all duration-1000 ease-in-out',
            isLoaded ? '' : 'opacity-0 translate-y-10',
            isScrolled
              ? 'opacity-100 pointer-events-auto rounded-b-4xl'
              : 'opacity-0 pointer-events-none rounded-b-none'
          )}
        >
          <div className="flex gap-1">
            {timeLeft &&
              Object.entries(timeLeft).map(
                ([key, { value, unit }], index, arr) => (
                  <div
                    key={key}
                    className={cn(
                      'text-white flex flex-col items-center text-center text-base',
                      index !== arr.length - 1
                        ? isArabic
                          ? 'border-l border-white px-2'
                          : 'border-r border-white px-4'
                        : 'px-4'
                    )}
                  >
                    <span className="text-xl">
                      {value + ' '}
                      {unit}
                    </span>
                  </div>
                )
              )}
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="select-none cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-md font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t('navbar.register')}
              <FaTicketAlt className="text-lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Countdown Timer */}
      <div
        className={cn(
          'z-40  w-full md:hidden bg-gold/90 backdrop-blur-xl flex justify-between items-center px-2 py-5 transition-all duration-500',
          isLoaded ? '' : 'opacity-0 translate-y-10',
          !isScrolled && location.pathname === '/'
            ? '-bottom-30 fixed'
            : 'bottom-0 fixed'
        )}
      >
        <div className="flex">
          {Object.entries(timeLeft).map(
            ([key, { value, unit }], index, arr) => (
              <div
                key={key}
                className={cn(
                  'text-white px-2 flex flex-col items-center text-center text-base',
                  index !== arr.length - 1
                    ? isArabic
                      ? 'border-l border-white/40'
                      : 'border-r border-white/40'
                    : ''
                )}
              >
                <span className={cn(isArabic ? 'text-sm' : 'text-xs')}>
                  {value + ' '}
                  {unit}
                </span>
              </div>
            )
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FaTicketAlt className="text-lg" />
            {t('navbar.register')}
          </button>
        </div>
      </div>

      {/* Mobile Language Switcher Button */}
      <button
        onClick={switchLanguage}
        className={cn(
          'bg-gradient-to-l from-blue-950 to-gray-800 z-40 fixed md:hidden block select-none p-3 rounded-full transition-all duration-1000 active:scale-110 cursor-pointer',
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
          i18n.language === 'ar' ? 'left-5' : 'right-5',
          !isScrolled && location.pathname === '/'
            ? 'bottom-7 border border-white/50 backdrop-blur-md'
            : 'bottom-25'
        )}
      >
        <img
          src={globe}
          alt="Globe Icon"
          width="38"
          height="38"
          className="transition-all duration-500 ease-out transform active:rotate-180 w-8"
        />
      </button>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
