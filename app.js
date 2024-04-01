const birthday = new Date("2024-04-07T00:00:00");

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

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

// Check if today is the birthday
function checkBirthday() {
  const today = new Date();
  if (today.getMonth() === 3 && today.getDate() === 7) {
    showPopup();
  }
}

// Call checkBirthday on page load
checkBirthday();

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown on page load
updateCountdown();

// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiArray = [];
const confettiColors = ["#e74c3c", "#3498db", "#1abc9c", "#f1c40f", "#9b59b6"];

class Confetto {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = (-Math.random() * canvas.height) / 2; // Start above the canvas
    this.size = Math.random() * 10 + 5;
    this.color =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.speed = { x: Math.random() * 6 - 3, y: Math.random() * 3 + 2 };
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 6 - 3;
  }

  draw() {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
    ctx.rotate((Math.PI / 180) * this.rotation);
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }

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

const animateConfetti = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < confettiArray.length; i++) {
    confettiArray[i].draw();
    confettiArray[i].update();
  }
  requestAnimationFrame(animateConfetti);
}

// Create confetti
for (let i = 0; i < 200; i++) {
  confettiArray.push(new Confetto());
}

animateConfetti();
