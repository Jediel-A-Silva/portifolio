


/* ==============================
   SESSÃO 1 – Carrossel Bloco1
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

/* =============Cards de Eventos=================*/

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".botoes-categorias button");
  const cardEvento = document.querySelector(".card-evento img");
  if (!botoes.length || !cardEvento) return;

  const cards = {
    aniversario: "/portifolio/4-anos.png",
    casamento: "/portifolio/casamento.png",
    formatura: "/portifolio/formatura.png",
    chárevelação: "/portifolio/charev.png"
  };

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      // remover classe ativo de todos
      botoes.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      const tipo = botao.dataset.card?.toLowerCase();
      if (cards[tipo]) {
        cardEvento.src = cards[tipo];
      }
    });
  });
});


  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");

      const tipo = btn.getAttribute("data-card");
      const c = cards[tipo];

      cardEvento.classList.add("fade");
      setTimeout(() => {
        cardEvento.innerHTML = `
          <img src="${c.img}" alt="${c.titulo}">
          <h3>${c.titulo}</h3>
          <ul>
            <li>${c.data}</li>
            <li>${c.hora}</li>
            <li>${c.local}</li>
          </ul>
          <button class="btn-convidar">${c.botao}</button>
        `;
        cardEvento.classList.remove("fade");
      }, 300);
    });
  });