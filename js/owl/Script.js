document.addEventListener('DOMContentLoaded', () => {
  // === Perfil Dropdown ===
  const profileBtn = document.getElementById('profile-btn');
  const dropdown = document.getElementById('dropdown-menu');

  profileBtn?.addEventListener('click', () => {
    dropdown?.classList.toggle('hidden');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#profile-btn') && !event.target.closest('#dropdown-menu')) {
      dropdown?.classList.add('hidden');
    }
  });

  // === Header Scroll Transparente → Preto ===
  const header = document.querySelector('.header') || document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 100);
  });

  // === Menu Mobile (Hambúrguer) ===
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggleBtn?.addEventListener('click', () => {
    menu?.classList.toggle('show');
  });

  // === Botão de Notificações ===
  const notifBtn = document.getElementById('notif-btn');
  notifBtn?.addEventListener('click', () => {
    alert("Você ainda não tem novas notificações!");
  });

  // === Campo de Busca ===
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  searchBtn?.addEventListener('click', () => {
    searchInput?.classList.toggle('show');
    if (searchInput?.classList.contains('show')) {
      searchInput.focus();
    }
    alert("Função de busca ainda em desenvolvimento...");
  });

  searchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      alert(`Buscando por: ${searchInput.value}`);
    }
  });

  searchInput?.addEventListener('blur', () => {
    searchInput.classList.remove('show');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header') && !event.target.closest('#search-input')) {
      searchInput?.classList.remove('show');
    }
  });

  // === Botões "Assistir" ===
document.querySelectorAll('[data-trailer]').forEach(botao => {
  botao.addEventListener('click', () => {
    const urlTrailer = botao.getAttribute('data-trailer');
    if (urlTrailer) {
      window.open(urlTrailer, '_blank');
    } else {
      alert("Trailer não disponível 😢");
    }
  });
});

  // === Inicializar Owl Carousel (sem repetições) ===
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  });
});

// === Função para gerar slugs (caso necessário) ===
function slugify(text) {
  return text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
