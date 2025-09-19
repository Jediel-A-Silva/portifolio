// ==========================
// CARROSSEL MODELO 1
// ==========================
const carrossel1 = document.querySelector('.carrossel.modelo1');
if (carrossel1) {
  const container = carrossel1.querySelector('.carrossel-container');
  const cards = carrossel1.querySelectorAll('.card1');
  const prevBtn = carrossel1.querySelector('.prev');
  const nextBtn = carrossel1.querySelector('.next');

  let index = Math.floor(cards.length / 2);
  const total = cards.length;

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove('active', 'left', 'right', 'far-left', 'far-right');

      if (i === index) {
        card.classList.add('active');
      } else if (i === index - 1) {
        card.classList.add('left');
      } else if (i === index + 1) {
        card.classList.add('right');
      } else if (i === index - 2) {
        card.classList.add('far-left');
      } else if (i === index + 2) {
        card.classList.add('far-right');
      }
    });

    const cardWidth = cards[0].offsetWidth + 30;
    const containerWidth = carrossel1.offsetWidth;
    const offset = -(index * cardWidth - (containerWidth / 2 - cards[0].offsetWidth / 2));
    container.style.transform = `translateX(${offset}px)`;
    container.style.transition = "transform 0.6s ease"; // 🔹 transição suave
  }

  nextBtn.addEventListener('click', () => {
    if (index < total - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}



// ==========================
// CARROSSEL MODELO 2
// ==========================
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
    const offset = -(index2 * cardWidth - (containerWidth / 2 - cards2[0].offsetWidth / 2));
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
// CARROSSEL MODELO 4
// ==========================
const carrossel4 = document.querySelector('.carrossel.modelo4');
const container4 = carrossel4.querySelector('.carrossel-container');
const cards4 = carrossel4.querySelectorAll('.card4');
const prevBtn4 = carrossel4.querySelector('.prev');
const nextBtn4 = carrossel4.querySelector('.next');

let index4 = 1; // card central inicialmente

function updateCarousel4() {
  cards4.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index4) card.classList.add('active');
  });

  const cardWidth = cards4[0].offsetWidth + 20; // largura + gap
  const containerWidth = carrossel4.offsetWidth;
  const offset =
    -(index4 * cardWidth - (containerWidth / 2 - cards4[0].offsetWidth / 2));
  container4.style.transform = `translateX(${offset}px)`;
}

function prevCard4() {
  index4 = (index4 - 1 + cards4.length) % cards4.length;
  updateCarousel4();
}

function nextCard4() {
  index4 = (index4 + 1) % cards4.length;
  updateCarousel4();
}

// Botões
prevBtn4.addEventListener('click', prevCard4);
nextBtn4.addEventListener('click', nextCard4);

// Teclado (setas esquerda/direita)
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevCard4();
  } else if (e.key === 'ArrowRight') {
    nextCard4();
  }
});

window.addEventListener('resize', updateCarousel4);
updateCarousel4();



// ==========================
// CARROSSEL MODELO 5 (AUTOPLAY)
// ==========================
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

  // Autoplay
  setInterval(() => {
    index5 = (index5 + 1) % cards5.length;
    updateCarousel5();
  }, 3000);

  window.addEventListener('resize', updateCarousel5);
  updateCarousel5();
}
