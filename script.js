const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

themeBtn?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

document.getElementById('year').textContent = new Date().getFullYear();

const search = document.getElementById('search');
const cards = [...document.querySelectorAll('#projectGrid .card')];

search?.addEventListener('input', (event) => {
  const q = event.target.value.trim().toLowerCase();
  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    const tags = card.getAttribute('data-tags') || '';
    card.style.display = text.includes(q) || tags.includes(q) ? '' : 'none';
  });
});
