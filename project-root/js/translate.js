async function loadLanguage(lang) {
  const res = await fetch(`js/lang/${lang}.json`);
  const data = await res.json();

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (data[key]) el.textContent = data[key];
  });
}

document.getElementById('lang-en').addEventListener('click', () => loadLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => loadLanguage('de'));
