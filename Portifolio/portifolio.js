(function() {
  const container = document.querySelector(".carrossel-container");
  if (!container) return;

  const cards = container.querySelectorAll(".card");
  const prevBtn = container.parentElement.querySelector(".carrossel-botoes .prev");
  const nextBtn = container.parentElement.querySelector(".carrossel-botoes .next");

  let index = Math.floor(cards.length / 2);

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === index) card.classList.add("active");
    });

    const cardWidth = cards[0].offsetWidth + 30; // largura + margem
    const containerWidth = container.parentElement.offsetWidth;
    const offset = -(index * cardWidth - (containerWidth / 2 - cardWidth / 2));
    container.style.transform = `translateX(${offset}px)`;
  }

  if (prevBtn) prevBtn.addEventListener("click", () => {
    if (index > 0) index--;
    updateCarousel();
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    if (index < cards.length - 1) index++;
    updateCarousel();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && index > 0) index--;
    if (e.key === "ArrowRight" && index < cards.length - 1) index++;
    updateCarousel();
  });

  updateCarousel();
})();


/* ==============================
   SESSÃO 2 – Carrossel Bloco3
   ============================== */
(function() {
  const carrosselBox = document.querySelector('#caixinhaCarrosselBox');
  if (!carrosselBox) return;

  const slidesBox = carrosselBox.querySelectorAll('.slideBox');
  let indexBox = 0;

  function updateCarouselBox() {
    slidesBox.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === indexBox);
    });
  }

  function prevSlideBox() {
    indexBox = (indexBox - 1 + slidesBox.length) % slidesBox.length;
    updateCarouselBox();
  }

  function nextSlideBox() {
    indexBox = (indexBox + 1) % slidesBox.length;
    updateCarouselBox();
  }

  const prevBtnBox = carrosselBox.parentElement.querySelector('.navigation .prev');
  const nextBtnBox = carrosselBox.parentElement.querySelector('.navigation .next');

  if (prevBtnBox) prevBtnBox.addEventListener('click', prevSlideBox);
  if (nextBtnBox) nextBtnBox.addEventListener('click', nextSlideBox);

  // Teclado global, mas só para este carrossel
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlideBox();
    if (e.key === 'ArrowRight') nextSlideBox();
  });

  updateCarouselBox();
})();