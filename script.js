// ==============================
// SEUS PROJETOS (EDITE AQUI)
// ==============================
const projetos = [
  {
    titulo: "Jogo do Adivinha (Guessing Game)",
    descricao: "Jogo de adivinhação desenvolvido com JavaScript puro.",
    categoria: "js",
    emoji: "🧮",
    cor: "#f0e6ff",
    imagem: "img/jododoadivinha.png", // print do projeto
    github: "https://github.com/limajessicaa/game_adivinha",
    demo: "limajessicaa.github.io/game_adivinha"
  },
  {
    titulo: "Landing Page",
    descricao: "Página moderna e responsiva com HTML e CSS.",
    categoria: "html",
    emoji: "🎨",
    cor: "#ffe6ee",
    imagem: "img/landing.png",
    github: "https://github.com/limajessicaa/landing-page",
    demo: "#"
  },
  {
    titulo: "Lista de Tarefas",
    descricao: "App de tarefas com manipulação do DOM.",
    categoria: "js",
    emoji: "✅",
    cor: "#e6f0ff",
    imagem: "img/todo.png",
    github: "https://github.com/limajessicaa/todo-list",
    demo: "https://limajessicaa.github.io/todo-list/"
  },
];

let filtroAtual = "todos";

// ==============================
// RENDERIZAR PROJETOS
// ==============================
function renderizarProjetos(filtro = "todos") {
  const container = document.getElementById("lista-projetos");
  container.innerHTML = "";

  const filtrados = filtro === "todos"
    ? projetos
    : projetos.filter(p => p.categoria === filtro);

  filtrados.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-thumb">
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
      </div>

      <div class="card-body">
        <p class="card-tag">${projeto.categoria === "js" ? "JavaScript" : "HTML/CSS"}</p>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>

        <div class="card-links">
          <a href="${projeto.github}" target="_blank" class="card-link primary">GitHub</a>
          <a href="${projeto.demo}" target="_blank" class="card-link secondary">Ver Projeto</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==============================
// FILTRO DE PROJETOS
// ==============================
function filtrar(categoria, botao) {
  filtroAtual = categoria;

  document.querySelectorAll(".tab").forEach(btn => {
    btn.classList.remove("active");
  });

  botao.classList.add("active");

  renderizarProjetos(categoria);
}

// ==============================
// FORMULÁRIO (SIMULA ENVIO)
// ==============================
function enviarForm(e) {
  e.preventDefault();

  const btn = document.querySelector(".form-submit");

  btn.textContent = "Enviando...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "✓ Mensagem enviada!";
    btn.style.background = "#22c55e";

    setTimeout(() => {
      btn.textContent = "Enviar";
      btn.disabled = false;
      btn.style.background = "";
      e.target.reset();
    }, 2500);
  }, 1500);
}

// ==============================
// ANIMAÇÃO AO ROLAR (SCROLL)
// ==============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

// ==============================
// INICIAR
// ==============================
renderizarProjetos();