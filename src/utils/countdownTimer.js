import i18n from "../i18n"; // Import your i18n instance

export function getTimeLeft() {
  const now = new Date().getTime();
  const targetDate = new Date("2025-05-31T00:00:00").getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const isArabic = i18n.language === "ar";

  return {
    days: isArabic ? `${days} يوم${days !== 1 ? "ًا" : ""}` : `${days} Day${days !== 1 ? "s" : ""}`,
    hours: isArabic ? `${hours} ساعة${hours !== 1 ? "ً" : ""}` : `${hours} Hour${hours !== 1 ? "s" : ""}`,
    minutes: isArabic ? `${minutes} دقيقة${minutes !== 1 ? "ً" : ""}` : `${minutes} Minute${minutes !== 1 ? "s" : ""}`,
    seconds: isArabic ? `${seconds} ثانية${seconds !== 1 ? "ً" : ""}` : `${seconds} Second${seconds !== 1 ? "s" : ""}`,
  };
}
