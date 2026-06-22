document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.arriba');
  const techIcons = document.querySelectorAll('.box');

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;

        // Header background
        if (scrollPos > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Nav links active
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

        // Reveal sections
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('show');
          }
        });

        // Tech icons bounce
        techIcons.forEach(function(icon, index) {
          const rect = icon.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            icon.classList.add('visible');
            if (!icon.classList.contains('bounce')) {
              icon.style.animationDelay = `${index * 0.15}s`;
              icon.classList.add('bounce');
            }
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

// Proyectos efecto parallax
if (window.innerWidth >= 768 && typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.column-item').forEach((item, i) => {
    gsap.fromTo(item,
      { y: 100 * (i + 1), opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        }
      }
    );
  });
}
