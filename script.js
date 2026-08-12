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
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
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

    // Project content is kept locally so private repositories and GitHub rate limits
    // never leave the portfolio without information.
    const projectsContainer = document.getElementById('github-projects');
    const projects = [
        {
            name: 'PERA ERP',
            status: 'Proyecto principal · Backend en desarrollo',
            description: 'Modernización de un ERP industrial y comercial mediante un backend multiempresa dividido en servicios con límites de dominio explícitos.',
            goal: 'Cubrir el flujo completo desde el acceso y los datos maestros hasta presupuesto, albarán, factura, vencimientos y seguimiento de cobro, manteniendo aislados los datos de cada empresa.',
            tech: 'Java 21, Spring Boot 4.1, Spring Cloud Gateway, Spring Security, PostgreSQL 17, Flyway, Maven, Docker Compose, OpenAPI y JUnit.',
            features: 'API Gateway, autenticación JWT con roles, permisos y empresa activa; servicios de identidad, maestros, ventas y finanzas; base lógica por servicio, outbox transaccional y cálculos monetarios con BigDecimal.',
            result: 'Primer hito validado con build limpio de siete módulos, cuatro migraciones Flyway, pruebas de importes y vencimientos y ejecución real en PostgreSQL. Más de 4.000 líneas de backend y configuración.',
            href: 'https://github.com/CODIGOAFRX/PERA',
            linkLabel: 'Ver GitHub',
            featured: true
        },
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
            name: 'Historia de la Moda',
            status: 'En producción',
            description: 'Web oficial de Carlos Sánchez de Medina Alcina que reúne su trayectoria, contenido editorial y oferta formativa sobre historia de la moda.',
            goal: 'Construir una plataforma propia que conecte portfolio, podcasts, conferencias, biblioteca y aula online dentro de una experiencia editorial coherente y administrable.',
            tech: 'React 19, TypeScript, Vinext, Vite, Cloudflare Workers, D1, Drizzle ORM, Resend, Playwright y Node.js.',
            features: 'Archivo de podcasts y conferencias, biblioteca y cursos gestionables desde un panel privado, lanzamiento de contenidos SCORM, formulario de contacto transaccional, sitemap y diseño responsive.',
            result: 'Proyecto desplegado en historiadelamoda.net, con persistencia en Cloudflare D1, administración de contenidos y comprobaciones automatizadas de build, interfaz y accesibilidad.',
            href: 'https://historiadelamoda.net/',
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
            article.className = `project-item${project.featured ? ' project-featured' : ''} hidden-element`;

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

    // Minimal wireframe globe. Its horizontal rotation follows the page scroll.
    const globeCanvas = document.getElementById('scroll-globe');

    if (globeCanvas) {
        const context = globeCanvas.getContext('2d');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const baseRotation = -0.45;
        const tilt = -0.16;
        let width = 0;
        let height = 0;
        let currentRotation = baseRotation;
        let targetRotation = baseRotation;
        let animationFrame = 0;

        const continents = [
            [[-168, 70], [-145, 61], [-128, 52], [-124, 42], [-112, 31], [-98, 20], [-82, 25], [-80, 38], [-65, 48], [-58, 60], [-90, 72], [-130, 73], [-168, 70]],
            [[-82, 12], [-68, 8], [-50, -5], [-38, -15], [-50, -25], [-58, -40], [-70, -55], [-75, -35], [-80, -5], [-82, 12]],
            [[-12, 36], [5, 44], [30, 45], [45, 55], [80, 58], [120, 50], [145, 58], [160, 48], [130, 35], [105, 22], [80, 10], [55, 25], [38, 35], [25, 32], [15, 37], [-12, 36]],
            [[-17, 35], [10, 37], [32, 30], [45, 10], [38, -12], [25, -35], [12, -34], [0, -20], [-8, 5], [-17, 35]],
            [[112, -12], [135, -10], [153, -25], [145, -42], [118, -35], [112, -12]],
            [[-52, 82], [-20, 78], [-28, 65], [-48, 60], [-60, 70], [-52, 82]]
        ];

        const projectPoint = (longitude, latitude, radius, centerX, centerY) => {
            const lon = longitude * Math.PI / 180 + currentRotation;
            const lat = latitude * Math.PI / 180;
            const sphereX = Math.cos(lat) * Math.sin(lon);
            const sphereY = Math.sin(lat);
            const sphereZ = Math.cos(lat) * Math.cos(lon);
            const tiltedY = sphereY * Math.cos(tilt) - sphereZ * Math.sin(tilt);
            const tiltedZ = sphereY * Math.sin(tilt) + sphereZ * Math.cos(tilt);

            return {
                x: centerX + sphereX * radius,
                y: centerY - tiltedY * radius,
                z: tiltedZ
            };
        };

        const drawCurve = (points, radius, centerX, centerY, frontColor, backColor, lineWidth) => {
            for (let index = 1; index < points.length; index += 1) {
                const start = projectPoint(points[index - 1][0], points[index - 1][1], radius, centerX, centerY);
                const end = projectPoint(points[index][0], points[index][1], radius, centerX, centerY);

                context.beginPath();
                context.moveTo(start.x, start.y);
                context.lineTo(end.x, end.y);
                context.strokeStyle = (start.z + end.z) / 2 >= 0 ? frontColor : backColor;
                context.lineWidth = lineWidth;
                context.stroke();
            }
        };

        const drawGlobe = () => {
            if (!width || !height) return;

            context.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = Math.min(width, height) * 0.445;

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(249, 249, 249, 0.58)';
            context.fill();

            for (let latitude = -60; latitude <= 60; latitude += 30) {
                const latitudeLine = [];
                for (let longitude = -180; longitude <= 180; longitude += 4) {
                    latitudeLine.push([longitude, latitude]);
                }
                drawCurve(latitudeLine, radius, centerX, centerY, '#b8b8b8', '#e3e3e3', 0.7);
            }

            for (let longitude = -150; longitude <= 180; longitude += 30) {
                const longitudeLine = [];
                for (let latitude = -90; latitude <= 90; latitude += 3) {
                    longitudeLine.push([longitude, latitude]);
                }
                drawCurve(longitudeLine, radius, centerX, centerY, '#b8b8b8', '#e3e3e3', 0.7);
            }

            continents.forEach(continent => {
                drawCurve(continent, radius, centerX, centerY, '#111111', '#d1d1d1', 1.45);
            });

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.strokeStyle = '#111111';
            context.lineWidth = 1.5;
            context.stroke();

            globeCanvas.dataset.rotation = currentRotation.toFixed(3);
        };

        const renderRotation = () => {
            currentRotation += (targetRotation - currentRotation) * 0.14;
            drawGlobe();

            if (Math.abs(targetRotation - currentRotation) > 0.001) {
                animationFrame = window.requestAnimationFrame(renderRotation);
            } else {
                currentRotation = targetRotation;
                drawGlobe();
                animationFrame = 0;
            }
        };

        const requestRotationFrame = () => {
            if (!animationFrame) {
                animationFrame = window.requestAnimationFrame(renderRotation);
            }
        };

        const syncRotationWithScroll = () => {
            if (!reducedMotion) {
                targetRotation = baseRotation + window.scrollY * 0.0022;
                requestRotationFrame();
            }
        };

        const resizeGlobe = () => {
            const bounds = globeCanvas.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            width = bounds.width;
            height = bounds.height;
            globeCanvas.width = Math.round(width * pixelRatio);
            globeCanvas.height = Math.round(height * pixelRatio);
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            drawGlobe();
        };

        window.addEventListener('scroll', syncRotationWithScroll, { passive: true });
        window.addEventListener('resize', resizeGlobe);
        resizeGlobe();
        syncRotationWithScroll();
    }
});
