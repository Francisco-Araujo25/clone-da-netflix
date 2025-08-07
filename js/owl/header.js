function initHeader() {
  const header = document.querySelector('.header');
  const profileBtn = document.getElementById('profile-btn');
  const dropdown = document.getElementById('dropdown-menu');

  if (profileBtn && dropdown) {
    profileBtn.addEventListener('click', () => {
      dropdown.classList.toggle('show');
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

initHeader(); // Chama manualmente
