document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveals using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                // Optional: Stop observing once animated in to keep it visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Special handling for #timeline: scroll past the blank space
                // so the sticky content is fully docked and the slide animation completes
                if (targetId === '#timeline') {
                    const rect = targetElement.getBoundingClientRect();
                    const absoluteTop = rect.top + window.pageYOffset;
                    // Scroll to a point where the sticky element has docked (1 viewport height into the section)
                    // plus a bit extra so the experience column animation finishes
                    const scrollTarget = absoluteTop + window.innerHeight;
                    window.scrollTo({
                        top: scrollTarget,
                        behavior: 'smooth'
                    });
                } else {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handle Navbar hide/show on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
            // Downscroll -> hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Upscroll -> show navbar
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, { passive: true });

    // Horizontal Scroll Animation for Timeline Section
    const timelineSection = document.getElementById('timeline');
    const slideCol = document.getElementById('slide-col');
    
    if (timelineSection && slideCol) {
        let currentTranslate = 100;
        let targetTranslate = 100;
        let ticking = false;

        const calculateProgress = () => {
            if (window.innerWidth <= 1024) return 0;
            const rect = timelineSection.getBoundingClientRect();
            let progress = 0;
            if (rect.top <= 0) {
                // Animate over strictly 1 window height. The remaining container size is dead-pause space.
                const animDistance = window.innerHeight;
                const scrolled = -rect.top;
                progress = Math.min(1, Math.max(0, scrolled / animDistance));
            }
            return progress;
        };

        const updateAnimation = () => {
            // Apply smoothing interpolation
            currentTranslate += (targetTranslate - currentTranslate) * 0.08;
            
            // Snap to zero/target when close
            if (Math.abs(targetTranslate - currentTranslate) < 0.05) {
                currentTranslate = targetTranslate;
            }
            
            const indicator = document.getElementById('scroll-indicator');
            if (currentTranslate === 0) {
                slideCol.style.transform = 'translateX(0px)';
                slideCol.style.willChange = 'auto';
                document.getElementById('static-col')?.classList.add('inverted');
                if (indicator) indicator.classList.add('visible');
            } else {
                slideCol.style.transform = `translateX(${currentTranslate}%)`;
                slideCol.style.willChange = 'transform';
                document.getElementById('static-col')?.classList.remove('inverted');
                if (indicator) indicator.classList.remove('visible');
            }
            
            if (currentTranslate !== targetTranslate) {
                requestAnimationFrame(updateAnimation);
            } else {
                ticking = false;
            }
        };

        // Initialize immediately
        targetTranslate = 100 * (1 - calculateProgress());
        currentTranslate = targetTranslate;
        slideCol.style.transform = `translateX(${currentTranslate}%)`;

        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 1024) return;
            targetTranslate = 100 * (1 - calculateProgress());
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateAnimation);
            }
        }, { passive: true });
    }

    // Project content is kept locally so private repositories and GitHub rate limits
    // never leave the portfolio without information.
    const projectsContainer = document.getElementById('github-projects');
    const projects = [
        {
            name: 'AfroPX Web',
            status: 'En producción',
            description: 'Web oficial de artista, plataforma de mezcla y mastering y sistema completo de reservas para estudio.',
            goal: 'Reunir identidad artística, lanzamientos, servicios profesionales de audio y reservas reales dentro de una experiencia coherente y administrable.',
            tech: 'HTML, CSS, JavaScript, TypeScript, Cloudflare Pages y Functions, D1, Resend, Turnstile y Vitest.',
            features: 'Smart links, calendario con disponibilidad real, prevención de dobles reservas, panel privado, correos automáticos, analítica agregada, QR y tarjetas promocionales.',
            result: 'Proyecto desplegado y operativo en producción sobre el dominio afropxmusic.com.',
            href: 'https://afropxmusic.com/',
            linkLabel: 'Ver web'
        },
        {
            name: 'Biblioteca App',
            status: 'En uso · privado',
            description: 'Biblioteca virtual creada para gestionar el catálogo de la escuela en la que trabajo e integrarse con su plataforma interna.',
            goal: 'Digitalizar la biblioteca escolar y ofrecer una API única para usuarios, libros, revistas y trabajos de fin de estudios.',
            tech: 'PHP, PostgreSQL, Composer y Docker. El proyecto nació como backend en Java y Spring Boot.',
            features: 'Autenticación y registro, gestión de perfil, CRUD de libros, revistas y TFE, además de carga de portadas para cada recurso.',
            result: 'La migración a PHP mantiene las rutas del backend Java y mejora la integración con la infraestructura de la escuela.',
            private: true
        },
        {
            name: 'TrackMix',
            status: 'En desarrollo',
            description: 'API REST de analítica musical que transforma eventos de escucha en estadísticas y resúmenes personalizados.',
            goal: 'Construir un backend de analítica musical similar a una versión simplificada de Spotify Wrapped.',
            tech: 'Java 17, Spring Boot, Spring Data JPA, Hibernate, PostgreSQL o MySQL, Maven, Lombok y OpenAPI.',
            features: 'Usuarios, artistas, canciones, escuchas individuales, tops, uso diario y horario, distribución por género y resumen anual.',
            result: 'Arquitectura por capas y modelo relacional preparados para ampliar las métricas y consumidores de la API.',
            href: 'https://github.com/CODIGOAFRX/TrackMix',
            linkLabel: 'Ver GitHub'
        },
        {
            name: 'Portfolio Web',
            status: 'En evolución',
            description: 'Portfolio personal para presentar experiencia, proyectos y decisiones técnicas con una interfaz editorial y directa.',
            goal: 'Mantener un espacio propio, rápido y legible que explique qué construyo y cómo afronto cada proyecto.',
            tech: 'HTML, CSS y JavaScript, con despliegue estático en Vercel.',
            features: 'Diseño responsive, navegación fluida, animaciones discretas y fichas de proyecto desplegables.',
            result: 'Contenido actualizado para reflejar los productos y herramientas en los que trabajo actualmente.',
            href: 'https://github.com/CODIGOAFRX/portfolio',
            linkLabel: 'Ver GitHub'
        },
        {
            name: 'PetCare Manager',
            status: 'Prototipo funcional',
            description: 'Backend REST para controlar mascotas, visitas veterinarias, medicaciones, eventos y próximos avisos.',
            goal: 'Centralizar el historial básico de cada mascota y facilitar el seguimiento de medicaciones y revisiones.',
            tech: 'Java 21, Spring Boot, Spring Web, JPA / Hibernate, PostgreSQL, Lombok y Bean Validation.',
            features: 'CRUD de mascotas, visitas, medicaciones y eventos, alertas de dosis y timeline cronológico unificado.',
            result: 'Una tarea programada detecta medicaciones atrasadas o próximas y permite añadir notificaciones en el futuro.',
            href: 'https://github.com/CODIGOAFRX/petcare-manager',
            linkLabel: 'Ver GitHub'
        },
        {
            name: 'Music Stats',
            status: 'Concepto inicial',
            description: 'Exploración temprana de un backend de estadísticas musicales para distintos servicios de streaming.',
            goal: 'Probar la base técnica de un servicio de estadísticas musicales.',
            tech: 'Java 21, Spring Boot, Spring Data JPA, PostgreSQL, Lombok y Maven.',
            features: 'Estructura inicial del servicio y configuración de persistencia.',
            result: 'La línea de producto y analítica más completa continúa actualmente en TrackMix.',
            href: 'https://github.com/CODIGOAFRX/Music-Stats',
            linkLabel: 'Ver GitHub'
        }
    ];

    if (projectsContainer) {
        projects.forEach(project => {
            const article = document.createElement('article');
            article.className = 'project-item hidden-element';

            const projectAction = project.private
                ? '<span class="project-link project-link-disabled" aria-label="Repositorio privado">Privado</span>'
                : `<a href="${project.href}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="${project.linkLabel}: ${project.name}">${project.linkLabel}</a>`;

            article.innerHTML = `
                <div class="project-header">
                    <div class="project-info">
                        <h3 class="project-title">
                            ${project.name}
                            <span class="stars">${project.status}</span>
                        </h3>
                        <p class="project-desc">${project.description}</p>
                    </div>
                    ${projectAction}
                </div>
                <div class="project-details">
                    <div class="detail-block">
                        <span class="detail-label">Objetivo</span>
                        <p class="detail-content">${project.goal}</p>
                    </div>
                    <div class="detail-block">
                        <span class="detail-label">Stack Tecnológico</span>
                        <p class="detail-content">${project.tech}</p>
                    </div>
                    <div class="detail-block">
                        <span class="detail-label">Características Clave</span>
                        <p class="detail-content">${project.features}</p>
                    </div>
                    <div class="detail-block">
                        <span class="detail-label">Estado / Resultado</span>
                        <p class="detail-content">${project.result}</p>
                    </div>
                </div>
            `;

            article.addEventListener('click', (event) => {
                if (event.target.closest('.project-link')) return;

                document.querySelectorAll('.project-item.expanded').forEach(item => {
                    if (item !== article) item.classList.remove('expanded');
                });
                article.classList.toggle('expanded');
            });

            projectsContainer.appendChild(article);
            setTimeout(() => observer.observe(article), 50);
        });
    }
});
