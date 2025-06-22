// Header background scroll

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) { // Cuando el scroll pase 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Header hover active

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Función que se ejecuta en cada evento de scroll
    function onScroll() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const section = document.querySelector(href);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop - 150 && scrollPos < sectionTop + sectionHeight - 150) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        }
      });
    }
  
    // Escuchamos el evento scroll
    window.addEventListener('scroll', onScroll);
    // Ejecutamos una vez al cargar la página
    onScroll();
});

// Animación para arriba

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".arriba");

  const revealSection = () => {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight * 0.75; // Ajusta el punto de activación

          if (sectionTop < triggerPoint) {
              section.classList.add("show");
          }
      });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Para activar las secciones visibles al cargar
});

// Animación izquierda INTRO

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los elementos con las clases .izquierda, .izquierda2, .izquierda3
  const sections = document.querySelectorAll(".izquierda, .izquierda2, .izquierda3");

  const revealSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 1; // Ajusta el punto de activación

      if (sectionTop < triggerPoint) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Para activar las secciones visibles al cargar
});

// Proyectos efecto parallax

if (window.innerWidth >= 767) {

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".column-item").forEach((item, i) => {
  gsap.fromTo(item,
    { y: 100 * (i + 1), opacity: 0 }, // Empiezan más abajo
    { 
      y: 0, // Se mueven hacia arriba lentamente
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top bottom", // Inicia cuando el elemento entra en la pantalla
        end: "center center", // Termina cuando llega al centro
        scrub: true, // Hace que la animación siga el scroll
      }
    }
  );
});

}

// Animación tecnologias botando

window.addEventListener('scroll', function() {
  const icons = document.querySelectorAll('.box');
  
  icons.forEach(function(icon, index) {
      const rect = icon.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Añadir la clase visible para que el icono aparezca
          icon.classList.add('visible');
          
          // Añadir la animación de "bounce" con un retraso escalonado
          if (!icon.classList.contains('bounce')) {
              icon.style.animationDelay = `${index * 0.15}s`; // Aumentar el retraso para cada icono
              icon.classList.add('bounce');
          }
      }
  });
});