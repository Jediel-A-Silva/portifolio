// ==========================
// CARROSSEL MODELO 1 - SOLUÇÃO FINAL ROBUSTA PARA MOBILE
// ==========================
const carrossel1 = document.querySelector('.carrossel.modelo1');

if (carrossel1) {
    const container = carrossel1.querySelector('.carrossel-container');
    const cards = carrossel1.querySelectorAll('.card1');
    const prevBtn = carrossel1.querySelector('.prev');
    const nextBtn = carrossel1.querySelector('.next');

    // Começa no item central (Math.floor garante um índice inteiro)
    let index = Math.floor(cards.length / 2); 
    const total = cards.length;

    function updateCarousel() {
        cards.forEach((card, i) => {
            // Lógica de classes 'active', 'left', 'right', etc.
            card.classList.remove('active', 'left', 'right', 'far-left', 'far-right');

            if (i === index) card.classList.add('active');
            else if (i === index - 1) card.classList.add('left');
            else if (i === index + 1) card.classList.add('right');
            else if (i === index - 2) card.classList.add('far-left');
            else if (i === index + 2) card.classList.add('far-right');
        });

        // 1. LER O GAP DINAMICAMENTE
        const gapStyle = window.getComputedStyle(container).gap;
        const GAP = parseFloat(gapStyle) || (carrossel1.offsetWidth > 600 ? 30 : 15); 
        
        // 2. LARGURAS
        const CARD_WIDTH = cards[0].offsetWidth; 
        const SCALE_FACTOR = 1.15; // transform: scale(1.15)
        const ACTIVE_CARD_WIDTH = CARD_WIDTH * SCALE_FACTOR; 

        // Largura total ocupada por um card
        const cardAndGap = CARD_WIDTH + GAP; 

        // 3. CÁLCULO DA POSIÇÃO DE INÍCIO E CENTRO DO CARD ATIVO:
        const cardStartPosition = index * cardAndGap;
        const cardCenter = cardStartPosition + (ACTIVE_CARD_WIDTH / 2);

        // 4. CENTRO DA ÁREA VISÍVEL
        const containerCenter = carrossel1.offsetWidth / 2;

        // 5. DESLOCAMENTO (offset)
        const offset = -(cardCenter - containerCenter);

        // 6. CORREÇÃO DE DESLOCAMENTO ESTÁTICO (Substitui o left: 8rem do CSS)
        let staticCorrection = 0;
        
        // Se a tela for pequena (<= 600px), adicionamos o deslocamento que funcionou
        if (window.innerWidth <= 600) {
            // 8rem é aproximadamente 128px (8 * 16px).
            // Use 128 ou o valor que visualmente se ajustou melhor.
            // Se 8rem foi o ideal, use 128px.
            staticCorrection = 340; 
        }

        // Aplica o offset calculado + a correção estática (para mover o carrossel mais para a direita)
        container.style.transform = `translateX(${offset + staticCorrection}px)`;
        container.style.styleTransition = "transform 0.6s ease";
    }

    nextBtn.addEventListener('click', () => {
        if (index < total - 1) index++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) index--;
        updateCarousel();
    });

    // Garante que o cálculo é refeito ao redimensionar a janela (responsividade)
    window.addEventListener('resize', updateCarousel);
    
    // Roda a função pela primeira vez para centralizar no carregamento
    updateCarousel(); 
}

// ==========================
// CARROSSEL MODELO 2
// ==========================
// 🔹 Tipo: "Media Carousel" ou "Video Carousel" (centraliza o item ativo)
const carrossel2 = document.querySelector('.carrossel.modelo2');
if (carrossel2) {
  const container2 = carrossel2.querySelector('.carrossel-container');
  const cards2 = carrossel2.querySelectorAll('.card2');
  const prevBtn2 = carrossel2.querySelector('.prev');
  const nextBtn2 = carrossel2.querySelector('.next');

  let index2 = Math.floor(cards2.length / 2);

  function updateCarousel2() {
    cards2.forEach((card, i) => {
      card.classList.remove("active");
      const video = card.querySelector("video");
      const playBtn = card.querySelector(".play-btn");

      if (video) { video.pause(); video.currentTime = 0; }
      if (playBtn) { playBtn.style.display = (i === index2) ? "block" : "none"; }
    });

    cards2[index2].classList.add("active");

    const cardWidth = cards2[0].offsetWidth + (window.innerWidth <= 600 ? 15 : 30);
    const containerWidth = carrossel2.offsetWidth;
    const offset = -(index2 * cardWidth - (containerWidth - cardWidth) / 2 + -135);

// centraliza

    container2.style.transform = `translateX(${offset}px)`;
  }

  prevBtn2.addEventListener("click", () => {
    index2 = (index2 - 1 + cards2.length) % cards2.length;
    updateCarousel2();
  });

  nextBtn2.addEventListener("click", () => {
    index2 = (index2 + 1) % cards2.length;
    updateCarousel2();
  });

  cards2.forEach((card) => {
    const video = card.querySelector("video");
    const playBtn = card.querySelector(".play-btn");
    if (!video || !playBtn) return;

    playBtn.addEventListener("click", () => {
      cards2.forEach(c => {
        const v = c.querySelector("video");
        const b = c.querySelector(".play-btn");
        if (v) { v.pause(); v.currentTime = 0; }
        if (b) b.style.display = (c.classList.contains("active")) ? "block" : "none";
      });

      if (card.classList.contains("active")) {
        video.play();
        playBtn.style.display = "none";
      }
    });

    video.addEventListener("ended", () => {
      if (card.classList.contains("active")) playBtn.style.display = "block";
    });
  });

  window.addEventListener('resize', updateCarousel2);
  updateCarousel2();
}


// ==========================
// CARROSSEL MODELO 3
// ==========================
// 🔹 Tipo: "Simple Carousel"
const carrossel3 = document.querySelector('.carrossel.modelo3');
if (carrossel3) {
  const container3 = carrossel3.querySelector('.carrossel-container');
  const cards3 = carrossel3.querySelectorAll('.card3');
  const prevBtn3 = carrossel3.querySelector('.prev');
  const nextBtn3 = carrossel3.querySelector('.next');
  let index3 = Math.floor(cards3.length / 2);

  function updateCarousel3() {
    if (container3) container3.style.transform = 'none';
    cards3.forEach(card => card.classList.remove('active'));
    if (cards3[index3]) cards3[index3].classList.add('active');
  }

  prevBtn3?.addEventListener('click', () => {
    index3 = (index3 - 1 + cards3.length) % cards3.length;
    updateCarousel3();
  });

  nextBtn3?.addEventListener('click', () => {
    index3 = (index3 + 1) % cards3.length;
    updateCarousel3();
  });

  window.addEventListener('resize', updateCarousel3);
  updateCarousel3();
}
// ==========================
// CARROSSEL MODELO 4 (AUTOPLAY)
// ==========================
// 🔹 Tipo: "Autoplay Carousel" ou "Loop Carousel"
const carrossel5 = document.querySelector('.carrossel.modelo5');
if (carrossel5) {
  const container5 = carrossel5.querySelector('.carrossel-container');
  const cards5 = carrossel5.querySelectorAll('.card5');
  const prevBtn5 = carrossel5.querySelector('.prev');
  const nextBtn5 = carrossel5.querySelector('.next');
  let index5 = Math.floor(cards5.length / 2);

  function updateCarousel5() {
    cards5.forEach(card => card.classList.remove('active'));
    cards5[index5].classList.add('active');

    const cardWidth = cards5[0].offsetWidth + (window.innerWidth <= 600 ? 15 : 30);
    const containerWidth = carrossel5.offsetWidth;
    const offset = -(index5 * cardWidth - (containerWidth / 2 - cards5[0].offsetWidth / 2));
    container5.style.transform = `translateX(${offset}px)`;
  }

  prevBtn5.addEventListener('click', () => {
    index5 = (index5 - 1 + cards5.length) % cards5.length;
    updateCarousel5();
  });

  nextBtn5.addEventListener('click', () => {
    index5 = (index5 + 1) % cards5.length;
    updateCarousel5();
  });

  setInterval(() => {
    index5 = (index5 + 1) % cards5.length;
    updateCarousel5();
  }, 3000);

  window.addEventListener('resize', updateCarousel5);
  updateCarousel5();
}


// ==========================
// BOTÕES PARA TROCA DE CARROSSEL
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".botoes-carrosseis button");
  const carrosseis = document.querySelectorAll(".carrossel-box");

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");

      const tipo = btn.getAttribute("data-carousel");
      carrosseis.forEach(carrossel => {
        carrossel.classList.remove("ativo");
        if (carrossel.classList.contains(tipo)) carrossel.classList.add("ativo");
      });
    });
  });
});
