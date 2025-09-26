// Mostrar/ocultar menú de login al hacer clic en la imagen de perfil
document.addEventListener('DOMContentLoaded', function () {
  const profileBtn = document.getElementById('profileBtn');
  const dashBoardbtn = document.getElementById('dashBoardbtn');
  const loginMenu = document.getElementById('loginMenu');
  if (profileBtn && loginMenu) {
    profileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      loginMenu.classList.toggle('hidden');
    });
    // Ocultar el menú si se hace clic fuera
    document.addEventListener('click', function (e) {
      if (!loginMenu.contains(e.target) && !dashBoardbtn.contains(e.target)) {
        loginMenu.classList.add('hidden');
      }
    });
    // Acción al hacer clic en "Iniciar sesión"
    const loginOption = document.getElementById('loginOption');
    const loginOption1 = document.getElementById('loginOption1');
    if (loginOption1) {
      loginOption1.addEventListener('click', function () {
        window.location.href = 'index.html';
        loginMenu.classList.add('hidden');
      });
    }
    if (loginOption) {
      loginOption.addEventListener('click', function () {
      window.location.href = 'dashboard.html';
      loginMenu.classList.add('hidden');
      });
    }
    // Acción al hacer clic en DashBoard
    if (dashBoardbtn) {
      dashBoardbtn.addEventListener('click', function () {
        window.location.href = 'index.html';
      });
    } 
  } 
});
// Interacciones de ejemplo
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
const statusMsg = document.getElementById('statusMsg');
const contactForm = document.getElementById('contactForm');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

// Alternar tema claro/oscuro con una clase en <html>
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Tailwind modo simple: usamos utilidades condicionales cuando hay clase 'dark' en body
  if (document.body.classList.contains('dark')) {
    root.style.setProperty('color-scheme', 'dark');
    document.body.classList.add('bg-slate-900', 'text-slate-100');
  } else {
    root.style.setProperty('color-scheme', 'light');
    document.body.classList.remove('bg-slate-900', 'text-slate-100');
  }
});

// Formulario de ejemplo (solo front, sin backend)
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault(); // esto es para demo, no envía realmente
  const data = Object.fromEntries(new FormData(contactForm).entries());
  // Simula un envío
  statusMsg.textContent = `¡Gracias, ${data.nombre}! Tu mensaje fue recibido (demo).`;
  statusMsg.className = 'text-green-700';
  contactForm.reset();
});
