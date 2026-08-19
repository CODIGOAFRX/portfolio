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
            status: 'Proyecto principal · En desarrollo',
            description: 'Backend multiempresa para modernizar un ERP industrial y comercial sin perder la lógica crítica del negocio.',
            goal: 'Conectar identidad, datos maestros, ventas y finanzas manteniendo aislada la información de cada empresa.',
            tech: 'Java 21, Spring Boot 4.1, Spring Cloud Gateway, Spring Security, PostgreSQL 17, Flyway, Maven, Docker Compose, OpenAPI y JUnit.',
            features: 'Siete módulos Maven, API Gateway, JWT con roles y empresa activa, límites de dominio, outbox transaccional y cálculos monetarios con BigDecimal.',
            result: 'Primer hito ejecutado sobre PostgreSQL con migraciones Flyway, pruebas de importes y vencimientos y más de 4.000 líneas de backend y configuración.',
            href: 'https://github.com/CODIGOAFRX/PERA',
            linkLabel: 'GitHub',
            featured: true
        },
        {
            name: 'ORBIS',
            status: 'Prototipo técnico · Proyecto final DAM',
            description: 'Visualizador que transforma el espectro de una señal de audio en geometría 3D orgánica en tiempo real.',
            goal: 'Hacer visible el equilibrio de una mezcla y explorar nuevas aplicaciones educativas y creativas para el análisis de audio.',
            tech: 'Python 3.11, NumPy, SciPy, SoundDevice, Blender 3.6, Geometry Nodes, sockets y JSON.',
            features: 'FFT, RMS y frecuencia dominante; exportación continua cada 100 ms y enlace en vivo con una malla deformable en Blender.',
            result: 'Prototipo alpha funcional desarrollado junto a David Erik García como proyecto final de Desarrollo de Aplicaciones Multiplataforma.',
            href: 'https://github.com/CODIGOAFRX/ORBIS',
            linkLabel: 'GitHub'
        },
        {
            name: 'GSMFair',
            status: 'Machine Learning responsable',
            description: 'Mini-framework local para auditar y reducir disparidades entre grupos en sistemas automáticos de clasificación de CV.',
            goal: 'Mitigar diferencias en tasas de falsos positivos y falsos negativos sin reentrenar el modelo original ni enviar datos a la nube.',
            tech: 'Python, NumPy, Pandas, Scikit-learn y procesamiento reproducible de CSV.',
            features: 'Ajuste de umbrales por grupo, mitigación con predicciones binarias e informes comparativos antes y después del tratamiento.',
            result: 'En el ejemplo documentado reduce a la mitad las brechas de FPR y FNR, manteniendo todo el flujo en local.',
            href: 'https://github.com/CODIGOAFRX/sesgo_framework',
            linkLabel: 'GitHub'
        },
        {
            name: 'Biblioteca App',
            status: 'En uso · privado',
            description: 'Sistema para gestionar el catálogo de una escuela e integrarlo con su plataforma interna.',
            goal: 'Ofrecer una API única para usuarios, libros, revistas y trabajos de fin de estudios.',
            tech: 'PHP, PostgreSQL, Composer y Docker. El proyecto nació como backend en Java y Spring Boot.',
            features: 'Autenticación, perfiles, catálogo completo, trabajos académicos y carga de portadas.',
            result: 'La adaptación a PHP conserva el contrato del backend original en Java y encaja con la infraestructura existente.',
            private: true
        },
        {
            name: 'TrackMix',
            status: 'En desarrollo',
            description: 'API de analítica musical que transforma cada escucha en hábitos, rankings y resúmenes personalizados.',
            goal: 'Construir un backend de analítica musical similar a una versión simplificada de Spotify Wrapped.',
            tech: 'Java 17, Spring Boot, Spring Data JPA, Hibernate, PostgreSQL o MySQL, Maven, Lombok y OpenAPI.',
            features: 'Usuarios, artistas, canciones, escuchas individuales, tops, uso diario y horario, distribución por género y resumen anual.',
            result: 'Arquitectura por capas y modelo relacional preparados para ampliar las métricas y consumidores de la API.',
            href: 'https://github.com/CODIGOAFRX/TrackMix',
            linkLabel: 'GitHub'
        }
    ];

    if (projectsContainer) {
        projects.forEach((project, index) => {
            const article = document.createElement('article');
            article.className = `project-item${project.featured ? ' project-featured' : ''} hidden-element`;
            const detailsId = `project-details-${index}`;

            const projectAction = project.private
                ? '<span class="project-link project-link-disabled" aria-label="Repositorio privado">Privado</span>'
                : `<a href="${project.href}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Abrir ${project.name} en ${project.linkLabel}">${project.linkLabel} ↗</a>`;

            article.innerHTML = `
                <div class="project-header">
                    <div class="project-info">
                        <h3 class="project-title">
                            ${project.name}
                            <span class="stars">${project.status}</span>
                        </h3>
                        <p class="project-desc">${project.description}</p>
                    </div>
                    <div class="project-actions">
                        ${projectAction}
                        <button class="project-toggle" type="button" aria-expanded="false" aria-controls="${detailsId}">
                            <span>Ver detalles</span><span aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>
                <div class="project-details" id="${detailsId}">
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

            const toggle = article.querySelector('.project-toggle');
            toggle.addEventListener('click', () => {
                document.querySelectorAll('.project-item.expanded').forEach(item => {
                    if (item !== article) {
                        item.classList.remove('expanded');
                        const otherToggle = item.querySelector('.project-toggle');
                        if (otherToggle) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                            otherToggle.querySelector('span:first-child').textContent = 'Ver detalles';
                            otherToggle.querySelector('span:last-child').textContent = '+';
                        }
                    }
                });
                article.classList.toggle('expanded');
                const expanded = article.classList.contains('expanded');
                toggle.setAttribute('aria-expanded', String(expanded));
                toggle.querySelector('span:first-child').textContent = expanded ? 'Ocultar detalles' : 'Ver detalles';
                toggle.querySelector('span:last-child').textContent = expanded ? '−' : '+';
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
