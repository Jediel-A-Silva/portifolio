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

