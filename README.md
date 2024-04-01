/**
 * Creates a new Date object using the specified date string.
 * @param {string} dateString - The date string in the format YYYY-MM-DDTHH:mm:ss.sssZ, where Z represents the time zone offset.
 * @returns {Date} The new Date object.
 */
const birthday = new Date("2024-04-07T00:00:00");

/**
 * Updates the countdown display.
 */
const updateCountdown = () => {
  const currentTime = new Date();
  const difference = birthday - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
};

/**
 * Formats the specified time value as a two-digit string.
 * @param {number} time - The time value to format.
 * @returns {string} The formatted time value.
 */
const formatTime = (time) => {
  return time < 10? `0${time}` : time;
};

/**
 * Shows the birthday popup.
 */
function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

/**
 * Checks if today is the birthday.
 * @returns {boolean} True if today is the birthday, false otherwise.
 */
function checkBirthday() {
  const today = new Date();
  return today.getMonth() === 3 && today.getDate() === 7;
}

/**
 * Calls checkBirthday on page load.
 */
checkBirthday();

/**
 * Updates the countdown display every second.
 */
setInterval(updateCountdown, 1000);

/**
 * Initializes the countdown display on page load.
 */
updateCountdown();

/**
 * Performs a confetti animation.
 */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiArray = [];
const confettiColors = ["#e74c3c", "#3498db", "#1abc9c", "#f1c40f", "#9b59b6"];

/**
 * Represents a confetto.
 */
class Confetto {
  /**
   * Initializes a new Confetto instance.
   */
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = (-Math.random() * canvas.height) / 2; // Start above the canvas
    this.size = Math.random() * 10 + 5;
    this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.speed = { x: Math.random() * 6 - 3, y: Math.random() * 3 + 2 };
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 6 - 3;
  }

  /**
   * Draws the confetto on the canvas.
   */
  draw() {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
    ctx.rotate((Math.PI / 180) * this.rotation);
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }

  /**
   * Updates the confetto position and rotation.
   */
  update() {
    this.x += this.speed.x;
    this.y += this.speed.y;
    this.rotation += this.rotationSpeed;
    if (this.y >= canvas.height) {
      this.y = (-Math.random() * canvas.height) / 2;
      this.x = Math.random() * canvas.width;
    }
  }
}

/**
 * Animates the confetti.
 */
const animateConfetti = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < confettiArray.length; i++) {
    confettiArray[i].draw();
    confettiArray[i].update();
  }
  requestAnimationFrame(animateConfetti);
};

/**
 * Creates confetti.
 */
for (let i = 0; i < 200; i++) {
  confettiArray.push(new Confetto());
}

animateConfetti();

What is the purpose of the 'updateCountdown' function?
The updateCountdown function is used to update the countdown display on the page. It calculates the difference between the current date and the birthday date, and then displays the number of days, hours, minutes, and seconds remaining in the countdown.
The function uses several other helper functions, such as formatTime and Math.floor, to calculate and display the remaining time.
Overall, the updateCountdown function is responsible for updating the countdown display on the page and ensuring that it is accurate and up-to-date.

