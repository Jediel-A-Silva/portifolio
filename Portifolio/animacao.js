// ======== ANIMAÇÕES ESTILO XAMÃ.AI ========

// Efeito de digitação no título
document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector(".nome");
  if (nome) {
    const texto = nome.textContent;
    nome.textContent = "";
    let i = 0;

    function digitar() {
      if (i < texto.length) {
        nome.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 120);
      }
    }
    digitar();
  }
});

// Efeito "fade-up" quando os blocos entram na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".bloco, .carrossel, .footer, .foto-glow").forEach(el => {
  observer.observe(el);
});

// Brilho dinâmico na logo
const logo = document.querySelector(".logo");
if (logo) {
  setInterval(() => {
    logo.style.textShadow = `
      0 0 10px #00ffcc,
      0 0 20px #00ffff,
      0 0 30px #00ffcc
    `;
    setTimeout(() => logo.style.textShadow = "none", 700);
  }, 4000);
}

// ===== Carrossel portfólio =====
const track = document.querySelector('.portfolioShowcase-track');
const prevBtn = document.querySelector('.portfolioShowcase-prev');
const nextBtn = document.querySelector('.portfolioShowcase-next');
const cards = Array.from(document.querySelectorAll('.portfolioShowcase-card'));

let currentIndex = 0;

// Quantos cards visíveis por vez (ajuste se quiser)
const visibleCards = 3;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // largura do card + gap
  const maxIndex = cards.length - visibleCards;

  // Garante que currentIndex não ultrapasse limites
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  if (currentIndex < 0) currentIndex = 0;

  const offset = -currentIndex * cardWidth;
  track.style.transform = `translateX(${offset}px)`;
}

// Clique no botão "next"
nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

// Clique no botão "prev"
prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

// Atualiza ao redimensionar a tela
window.addEventListener('resize', updateCarousel);

// Inicializa
updateCarousel();




