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
            name: 'Tune?',
            status: 'Herramienta de audio · Primera versión',
            description: 'Analizador de tonalidad y tempo para beats y canciones que funciona en el navegador.',
            goal: 'Encontrar una estimación de BPM, tonalidad y código Camelot sin enviar el audio a un servidor.',
            tech: 'React, Essentia.js, WebAssembly, Vite, Web Audio API y Web Workers.',
            features: 'Carga de audio, análisis armónico y rítmico, alternativas de interpretación y reproducción local. Interfaz adaptable a móvil.',
            result: 'Segunda versión contrastada con bases reales: seguimiento del ritmo, perfiles de tonalidad y aviso de lecturas ambiguas. Los resultados siguen siendo estimaciones.',
            href: '/proyecto/tune-interrogacion/',
            linkLabel: 'Abrir Tune?'
        },
        {
            name: 'SCORM a PDF',
            status: 'Herramienta educativa · Disponible',
            description: 'Convierte cursos SCORM en un temario PDF legible, directamente en el navegador.',
            goal: 'Recuperar el contenido de cursos publicados para consultarlo, revisarlo e imprimirlo sin subir archivos a un servidor.',
            tech: 'TypeScript, Vite, JSZip, DOMPurify y pdfmake.',
            features: 'Vista previa, selección de lecciones, imágenes, índice con páginas y anexos opcionales de actividades y soluciones.',
            result: 'Validado con un curso Rise real: seis lecciones, 18 imágenes y 27 preguntas. Admite Rise y SCORM HTML estático; otros formatos pueden necesitar adaptación.',
            href: '/proyecto/scorm-pdf/',
            linkLabel: 'Abrir herramienta'
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
                : `<a href="${project.href}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Abrir ${project.name} en ${project.linkLabel}">${project.linkLabel}</a>`;

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

    // A single persistent wireframe globe grows into the page background,
    // adapts to dark sections and settles back into the contact composition.
    const globeShell = document.querySelector('.page-globe');
    const globeCanvas = document.getElementById('scroll-globe');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    if (globeShell && globeCanvas && projectsSection && contactSection) {
        const context = globeCanvas.getContext('2d');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const baseRotation = -0.45;
        const automaticRotationSpeed = 0.0001;
        const tilt = -0.16;
        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
        const mix = (start, end, progress) => start + (end - start) * progress;
        const smoothstep = (value) => value * value * (3 - 2 * value);
        const colorMix = (light, dark, progress, alpha = 1) => {
            const channels = light.map((channel, index) => Math.round(mix(channel, dark[index], progress)));
            return `rgba(${channels[0]}, ${channels[1]}, ${channels[2]}, ${alpha})`;
        };

        let width = 0;
        let height = 0;
        let currentRotation = baseRotation;
        let targetRotation = baseRotation;
        let automaticRotation = 0;
        let currentScale = 1;
        let targetScale = 1;
        let currentX = 0;
        let targetX = 0;
        let currentY = 0;
        let targetY = 0;
        let currentOpacity = 0;
        let targetOpacity = 0;
        let currentTheme = 0;
        let targetTheme = 0;
        let contactProgress = 0;
        let animationFrame = 0;
        let lastFrameTime = performance.now();
        let lastDrawTime = 0;
        let initialized = false;

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
            const gridFront = colorMix([184, 184, 184], [230, 230, 226], currentTheme);
            const gridBack = colorMix([227, 227, 227], [105, 105, 102], currentTheme);
            const landFront = colorMix([17, 17, 17], [250, 250, 247], currentTheme);
            const landBack = colorMix([209, 209, 209], [135, 135, 131], currentTheme);
            const fillAlpha = mix(0.58, 0.06, currentTheme);

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.fillStyle = colorMix([249, 249, 249], [17, 17, 17], currentTheme, fillAlpha);
            context.fill();

            for (let latitude = -60; latitude <= 60; latitude += 30) {
                const latitudeLine = [];
                for (let longitude = -180; longitude <= 180; longitude += 4) {
                    latitudeLine.push([longitude, latitude]);
                }
                drawCurve(latitudeLine, radius, centerX, centerY, gridFront, gridBack, 0.7);
            }

            for (let longitude = -150; longitude <= 180; longitude += 30) {
                const longitudeLine = [];
                for (let latitude = -90; latitude <= 90; latitude += 3) {
                    longitudeLine.push([longitude, latitude]);
                }
                drawCurve(longitudeLine, radius, centerX, centerY, gridFront, gridBack, 0.7);
            }

            continents.forEach(continent => {
                drawCurve(continent, radius, centerX, centerY, landFront, landBack, 1.45);
            });

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.strokeStyle = landFront;
            context.lineWidth = 1.5;
            context.stroke();

            globeCanvas.dataset.rotation = currentRotation.toFixed(3);
        };

        const updateLayoutTargets = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const maximumSize = globeShell.clientWidth || 1;
            const mobile = viewportWidth <= 768;
            const compact = viewportWidth <= 1180;
            const startSize = mobile
                ? 280
                : compact
                    ? clamp(viewportWidth * 0.3, 280, 390)
                    : clamp(viewportWidth * 0.29, 320, 520);
            const contactSize = mobile
                ? Math.min(360, viewportWidth * 0.82)
                : compact
                    ? Math.min(430, viewportWidth * 0.42)
                    : Math.min(520, viewportWidth * 0.32);
            const growProgress = smoothstep(clamp(window.scrollY / Math.max(viewportHeight * 0.95, 1), 0, 1));
            const projectsBounds = projectsSection.getBoundingClientRect();
            const contactBounds = contactSection.getBoundingClientRect();
            const overDarkSection = projectsBounds.top < viewportHeight * 0.7
                && projectsBounds.bottom > viewportHeight * 0.3;

            contactProgress = smoothstep(clamp(
                (viewportHeight * 0.82 - contactBounds.top) / Math.max(viewportHeight * 0.65, 1),
                0,
                1
            ));

            const startX = viewportWidth * (mobile ? 0.9 : compact ? 0.87 : 0.82);
            const backgroundX = viewportWidth * (mobile ? 1 : compact ? 0.88 : 0.83);
            const contactX = viewportWidth * (mobile ? 0.86 : compact ? 0.82 : 0.8);
            const startY = viewportHeight * (mobile ? 0.62 : 0.5);
            const backgroundY = viewportHeight * 0.5;
            const contactY = viewportHeight * (mobile ? 0.56 : 0.52);
            const startOpacity = mobile ? 0.13 : compact ? 0.4 : 0.72;
            const backgroundOpacity = overDarkSection
                ? mobile ? 0.11 : compact ? 0.16 : 0.2
                : mobile ? 0.055 : compact ? 0.085 : 0.11;
            const contactOpacity = mobile ? 0.14 : compact ? 0.34 : 0.54;

            targetScale = mix(startSize / maximumSize, 1, growProgress);
            targetScale = mix(targetScale, contactSize / maximumSize, contactProgress);
            targetX = mix(startX, backgroundX, growProgress);
            targetX = mix(targetX, contactX, contactProgress);
            targetY = mix(startY, backgroundY, growProgress);
            targetY = mix(targetY, contactY, contactProgress);
            targetOpacity = mix(startOpacity, backgroundOpacity, growProgress);
            targetOpacity = mix(targetOpacity, contactOpacity, contactProgress);
            targetTheme = overDarkSection ? 1 : 0;
            targetRotation = baseRotation
                + (reducedMotion ? 0 : window.scrollY * (mobile ? 0.0018 : 0.0022))
                + automaticRotation;

            const phase = contactProgress > 0.55
                ? 'contact'
                : overDarkSection
                    ? 'dark'
                    : growProgress > 0.85
                        ? 'background'
                        : 'hero';
            globeShell.dataset.phase = phase;
            globeShell.dataset.theme = overDarkSection ? 'dark' : 'light';

            if (!initialized) {
                currentScale = targetScale;
                currentX = targetX;
                currentY = targetY;
                currentOpacity = targetOpacity;
                currentTheme = targetTheme;
                currentRotation = targetRotation;
                initialized = true;
                globeShell.classList.add('is-ready');
            }
        };

        const renderGlobe = (time) => {
            const deltaTime = Math.min(time - lastFrameTime, 40);
            lastFrameTime = time;
            const automatic = !reducedMotion;

            if (automatic) {
                automaticRotation += deltaTime * automaticRotationSpeed;
                targetRotation = baseRotation
                    + window.scrollY * (window.innerWidth <= 768 ? 0.0018 : 0.0022)
                    + automaticRotation;
            }

            const easing = reducedMotion ? 1 : 0.12;
            currentScale += (targetScale - currentScale) * easing;
            currentX += (targetX - currentX) * easing;
            currentY += (targetY - currentY) * easing;
            currentOpacity += (targetOpacity - currentOpacity) * easing;
            currentTheme += (targetTheme - currentTheme) * easing;
            currentRotation += (targetRotation - currentRotation) * (reducedMotion ? 1 : 0.14);

            const layoutMoving = Math.abs(targetScale - currentScale) > 0.0005
                || Math.abs(targetX - currentX) > 0.1
                || Math.abs(targetY - currentY) > 0.1
                || Math.abs(targetOpacity - currentOpacity) > 0.001;
            const themeMoving = Math.abs(targetTheme - currentTheme) > 0.001;
            const rotationMoving = Math.abs(targetRotation - currentRotation) > 0.001;

            if (layoutMoving || !globeShell.dataset.positioned) {
                globeShell.style.setProperty('--globe-x', `${currentX.toFixed(2)}px`);
                globeShell.style.setProperty('--globe-y', `${currentY.toFixed(2)}px`);
                globeShell.style.setProperty('--globe-scale', currentScale.toFixed(4));
                globeShell.style.setProperty('--globe-opacity', currentOpacity.toFixed(4));
                globeShell.dataset.positioned = 'true';
            }

            if (!automatic || time - lastDrawTime >= 32 || themeMoving || layoutMoving) {
                drawGlobe();
                lastDrawTime = time;
            }

            if (automatic || layoutMoving || themeMoving || rotationMoving) {
                animationFrame = window.requestAnimationFrame(renderGlobe);
            } else {
                animationFrame = 0;
            }
        };

        const requestGlobeFrame = () => {
            if (!animationFrame) {
                lastFrameTime = performance.now();
                animationFrame = window.requestAnimationFrame(renderGlobe);
            }
        };

        const syncGlobeWithPage = () => {
            updateLayoutTargets();
            requestGlobeFrame();
        };

        const resizeGlobe = () => {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            width = globeShell.clientWidth;
            height = globeShell.clientHeight;
            globeCanvas.width = Math.round(width * pixelRatio);
            globeCanvas.height = Math.round(height * pixelRatio);
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            syncGlobeWithPage();
        };

        window.addEventListener('scroll', syncGlobeWithPage, { passive: true });
        window.addEventListener('resize', resizeGlobe);
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) requestGlobeFrame();
        });
        resizeGlobe();
    }
});
