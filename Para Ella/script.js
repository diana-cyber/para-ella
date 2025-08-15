// Gift click handler to reveal bouquet and card
const gift = document.querySelector('.gift-img');
const initialScreen = document.getElementById('initial-screen');
const giftOpenScreen = document.getElementById('gift-open-screen');
const letterContainer = document.getElementById('letter-container');
const letter = document.getElementById('letter');
const letterFront = document.getElementById('letter-front');
const letterBack = document.getElementById('letter-back');
const bgMusic = document.getElementById('bg-music');

// Mostrar ramo y carta al hacer clic en el regalo
gift.addEventListener('click', openGift);
gift.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    openGift();
  }
});

function openGift() {
  initialScreen.style.display = 'none';
  giftOpenScreen.style.display = 'flex';
  bgMusic.play();
  letterContainer.focus();
}

// Abrir/cerrar la carta
let letterOpen = false;
letterContainer.addEventListener('click', toggleLetter);
letterContainer.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleLetter();
  }
});

function toggleLetter() {
  letterOpen = !letterOpen;
  if (letterOpen) {
    letter.classList.add('open');
    letterContainer.setAttribute('aria-label', 'Carta abierta. Presiona para cerrar');
  } else {
    letter.classList.remove('open');
    letterContainer.setAttribute('aria-label', 'Carta cerrada. Presiona para abrir');
  }
}

// Corazones flotando
const heartContainer = document.querySelector('.heart-container');
const maxHearts = 50;
for (let i = 0; i < maxHearts; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 8 + 's';
  heartContainer.appendChild(heart);
}

// Pétalos flotando
const petalContainer = document.querySelector('.petal-container');
const maxPetals = 30;
for (let i = 0; i < maxPetals; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDelay = Math.random() * 10 + 's';
  petalContainer.appendChild(petal);
}

// Fuegos artificiales
const fireworksContainer = document.querySelector('.fireworks-container');
function launchFirework() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight * 0.6;
  for (let i = 0; i < 18; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.background = `radial-gradient(circle, hsl(${Math.random()*360},80%,70%) 60%, transparent 100%)`;
    firework.style.animationDelay = (i * 0.04) + 's';
    fireworksContainer.appendChild(firework);
    setTimeout(() => firework.remove(), 1400);
  }
}
setInterval(launchFirework, 2200);