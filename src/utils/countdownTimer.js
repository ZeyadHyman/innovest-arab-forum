export function getTimeLeft() {
    const now = new Date().getTime();
    const targetDate = new Date("2025-05-31T00:00:00").getTime();
  
    const timeLeft = targetDate - now;
  
    return timeLeft > 0
      ? {
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
          seconds: Math.floor((timeLeft / 1000) % 60),
        }
      : null;
  }
  