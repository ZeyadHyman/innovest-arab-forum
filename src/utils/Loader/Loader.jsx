import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '/logos/logo_trans.webp';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const { t } = useTranslation();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [innerAnimationProps, setInnerAnimationProps] = useState({ opacity: 0, scale: 0.9 });
  const [textAnimationOpacity, setTextAnimationOpacity] = useState(1);

  useEffect(() => {
    let timeoutIds = [];
    const isMdScreen = window.innerWidth >= 768;

    timeoutIds.push(
      setTimeout(() => {
        setInnerAnimationProps({ opacity: 1, scale: isMdScreen ? 1.2 : 0.8 });
      }, 500)
    );

    timeoutIds.push(
      setTimeout(() => {
        setInnerAnimationProps({ opacity: 0, scale: 0.9 });
        setIsFadingOut(true);
        setTextAnimationOpacity(0);
      }, 2000)
    );

    timeoutIds.push(
      setTimeout(() => {
        if (typeof onComplete === 'function') onComplete();
      }, 2500)
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [onComplete]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      className="select-none fixed inset-0 z-50 flex items-center justify-center bg-[#13212E]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="absolute text-center lg:px-52"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={innerAnimationProps}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="logo"
          className="w-1/2 md:w-1/4 mx-auto mb-4"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <motion.h1
          className={`px-1 text-4xl md:text-6xl font-extrabold tracking-wide leading-relaxed text-gold`}
          animate={{ opacity: textAnimationOpacity }}
          transition={{ duration: 0.7 }}
        >
          {t('loader.welcome')}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

Loader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
