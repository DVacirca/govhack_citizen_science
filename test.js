const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      // seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;

  console.log(difference);
};

console.log(calculateTimeLeft());
