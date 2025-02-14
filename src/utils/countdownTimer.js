
export function getTimeLeft() {
  const now = new Date().getTime();
  const targetDate = new Date("2025-05-31T00:00:00").getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes, 
    seconds: seconds,
  };
}