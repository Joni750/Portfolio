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
        // Obtenemos la sección que coincide con el href del enlace
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
  
          // Ajusta el valor del offset (por ejemplo, 50) según tus necesidades
          if (scrollPos >= sectionTop - 150 && scrollPos < sectionTop + sectionHeight - 150) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
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
