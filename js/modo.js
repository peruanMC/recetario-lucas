const btn = document.getElementById('modo-btn');
  const body = document.body;

  // Guardar preferencia en localStorage
  if (localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('dark-mode');
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('modo', 'oscuro');
    } else {
      localStorage.setItem('modo', 'claro');
    }
  });