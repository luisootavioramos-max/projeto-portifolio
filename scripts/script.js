// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 10; // Ajustei para -10 para uma rolagem mais leve
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Modo escuro
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

// Verificar tema salvo no localStorage
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
  body.classList.add('dark');
  botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Alternar tema ao clicar no botão
botaoTema.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('tema', 'dark');
    botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem('tema', 'light');
    botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});