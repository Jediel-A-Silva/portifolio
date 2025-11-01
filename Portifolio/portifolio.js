


/* ==============================
   SESSÃO 1 – Carrossel Bloco1
   ============================== */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideBox");
  const dots = document.querySelectorAll(".dot");
  let index = 0;
  const tempoTroca = 2500; // 2,5 segundos
  function mostrarSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle("ativo", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("ativo", idx === i));
  }

  function proximoSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      mostrarSlide(index);
    });
  });

  // autoplay
  setInterval(proximoSlide, tempoTroca);
});

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