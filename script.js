// Menu hamburguer responsivo
const nav = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

const menuBtn = document.createElement('button');
menuBtn.innerHTML = '☰';
menuBtn.classList.add('menu-btn');
nav.prepend(menuBtn);

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Scroll suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Efeito de fade-in ao rolar
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
