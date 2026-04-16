// ==============================
// BASE DE DADOS DOS PROJETOS
// Edite aqui para adicionar novos projetos
// ==============================
const projetos = [
  {
    titulo: "Jogo do Adivinha (Guessing Game)",
    descricao: "Jogo de adivinhação desenvolvido com JavaScript puro.",
    categoria: "js",
    imagem: "assert/game_adivinha.png",
    github: "https://github.com/limajessicaa/game_adivinha",
    demo: "https://limajessicaa.github.io/game_adivinha/"
  },
  {
    titulo: "Decodificador",
    descricao: "Codificador e Decodificador moderno e responsivo com HTML e CSS.",
    categoria: "html",
    imagem: "assert/decodificador.png",
    github: "https://github.com/limajessicaa/decodificador",
    demo: "https://limajessicaa.github.io/Decodificador-/"
  },
  {
    titulo: "Meu Portfólio",
    descricao: "PORTFÓLIO PESSOAL desenvolvido com HTML, CSS e JavaScript, mostrando meus projetos e habilidades.",
    categoria: "React",
    imagem: "assert/primeiro-portfolio.png",
    github: "https://github.com/limajessicaa/todo-list",
    demo: "https://limajessicaa.github.io/portfolio/"
  },
];

// Estado atual do filtro
let filtroAtual = "todos";

// ==============================
// FUNÇÃO: Renderizar Projetos
// Mostra os projetos na tela
// ==============================
function renderizarProjetos(filtro = "todos") {

  const container = document.getElementById("lista-projetos");

  // Segurança: verifica se o elemento existe
  if (!container) return;

  // Limpa conteúdo antes de renderizar
  container.innerHTML = "";

  // Filtra os projetos
  const filtrados = filtro === "todos"
    ? projetos
    : projetos.filter(p => p.categoria === filtro);

  // Percorre e cria os cards
  filtrados.forEach(projeto => {

    const card = document.createElement("div");
    card.classList.add("card");

    // Mapeamento de categorias
    const categorias = {
      js: "JavaScript",
      html: "HTML/CSS",
      react: "React"
    };

    card.innerHTML = `
      <div class="card-thumb">
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
      </div>

      <div class="card-body">
        <p class="card-tag">${categorias[projeto.categoria] || "Projeto"}</p>
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
// FUNÇÃO: Filtrar Projetos
// Ativa botão e filtra cards
// ==============================
function filtrar(categoria, botao) {

  filtroAtual = categoria;

  // Remove classe ativa de todos os botões
  document.querySelectorAll(".tab").forEach(btn => {
    btn.classList.remove("active");
  });

  // Adiciona classe ativa ao botão clicado
  botao.classList.add("active");

  // Renderiza projetos filtrados
  renderizarProjetos(categoria);
}

// ==============================
// FUNÇÃO: Simular envio de formulário
// ==============================
function enviarForm(e) {
  e.preventDefault();

  const btn = document.querySelector(".form-submit");

  btn.textContent = "Enviando...";
  btn.disabled = true;

  // Simula delay de envio
  setTimeout(() => {
    btn.textContent = "✓ Mensagem enviada!";
    btn.style.background = "#22c55e";

    // Reset após alguns segundos
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

// Aplica animação nas seções
document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

// ==============================
// INICIALIZAÇÃO DO SITE
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  renderizarProjetos();
});