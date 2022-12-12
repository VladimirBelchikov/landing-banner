const messenger = document.getElementById('messenger');
messenger.addEventListener('change', (e) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const el of messenger.children) {
    el.classList.remove('form__messenger-label_active');
  }
  if (e.target.checked) {
    e.target.labels[0].classList.add('form__messenger-label_active');
  }
});
