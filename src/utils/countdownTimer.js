import i18next from 'i18next';

export function getTimeLeft() {
  const now = new Date().getTime();
  const target = new Date('2025-06-21T01:00:00').getTime();
  const timeLeft = target - now;
  const isArabic = i18next.language === 'ar';

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formatKey = (key, value) => {
    const units = {
      days: isArabic
        ? value > 10
          ? 'يوم'
          : 'أيام'
        : value > 10
          ? 'Day'
          : 'Days',
      hours: isArabic
        ? value > 10
          ? 'ساعة'
          : 'ساعات'
        : value > 10
          ? 'Hour'
          : 'Hours',
      minutes: isArabic
        ? value > 10
          ? 'دقيقة'
          : 'دقائق'
        : value > 10
          ? 'Minute'
          : 'Minutes',
      seconds: isArabic
        ? value > 10
          ? 'ثانية'
          : 'ثواني'
        : value > 10
          ? 'Second'
          : 'Seconds',
    };

    return units[key] || key;
  };

  return {
    days: { value: days, unit: formatKey('days', days) },
    hours: { value: hours, unit: formatKey('hours', hours) },
    minutes: { value: minutes, unit: formatKey('minutes', minutes) },
    seconds: { value: seconds, unit: formatKey('seconds', seconds) },
  };
}
