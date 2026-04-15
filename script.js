// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 20);
});

// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

// Close mobile menu on link click
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
  });
});

// Contact form
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  alert(`Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`);
  form.reset();
});

// Phone mask
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '');
  if (val.length > 0) {
    if (val[0] === '8') val = '7' + val.slice(1);
    if (val[0] !== '7') val = '7' + val;
  }
  let formatted = '';
  if (val.length > 0) formatted = '+7';
  if (val.length > 1) formatted += ' (' + val.slice(1, 4);
  if (val.length > 4) formatted += ') ' + val.slice(4, 7);
  if (val.length > 7) formatted += '-' + val.slice(7, 9);
  if (val.length > 9) formatted += '-' + val.slice(9, 11);
  e.target.value = formatted;
});
