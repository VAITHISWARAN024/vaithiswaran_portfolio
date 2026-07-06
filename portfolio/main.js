const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const year = document.getElementById('year');
const yearsExp = document.getElementById('yearsExp');
const form = document.querySelector('form');
const formStatus = document.getElementById('formStatus');

const applyTheme = (theme) => {
  body.classList.toggle('light', theme === 'light');
  body.setAttribute('data-theme', theme);
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  applyTheme('light');
} else {
  applyTheme('dark');
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (yearsExp) {
  const startYear = 2022;
  const years = new Date().getFullYear() - startYear;
  yearsExp.textContent = `${years}+`;
}

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    formStatus.textContent = `Thanks, ${data.name || 'there'}! I’ll get back to you at ${data.email || 'your inbox'}.`;
    form.reset();
  });
}
