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

    // GitHub API Integration for Projects
    const projectsContainer = document.getElementById('github-projects');
    const targetRepos = ['ORBIS', 'sesgo_framework', 'TrackMix', 'petcare-manager'];
    
    // Detailed tech metadata not available from GitHub API
    const projectMetadata = {
        'ORBIS': {
            goal: 'Crear una representación visual interactiva sincronizada con audio en tiempo real evitando latencias.',
            tech: 'Python, Blender API, Librosa, NumPy',
            features: 'Análisis FFT en tiempo real, manipulación de mallas 3D, mapeo reactivo al espectro de sonido.',
            learned: 'Integración entre scripts de Python externos y la API interna de Blender, optimizando el rendimiento computacional para mantener la fluidez visual a 60FPS.'
        },
        'sesgo_framework': {
            goal: 'Desarrollar una herramienta local para auditar y mitigar el sesgo en modelos de clasificación automatizados de RRHH.',
            tech: 'Python, Scikit-Learn, Pandas, API estructurada',
            features: 'Cálculo de métricas de equidad, visualización de impacto dispar, mitigación preventiva de sesgo.',
            learned: 'Entendimiento profundo de las métricas de Fairness en Machine Learning y la complejidad de equilibrar la precisión técnica de los modelos con métricas éticas.'
        },
        'TrackMix': {
            goal: 'Diseñar y construir una arquitectura de aplicación robusta para la gestión musical usando herramientas empresariales.',
            tech: 'Java 8+, Maven, JUnit 5',
            features: 'Estructura altamente modular, gestión estricta de dependencias y configuración centralizada de construcción.',
            learned: 'Mejores prácticas en la arquitectura de software tradicional Java, ciclo de vida completo de construcción con Maven y patrones sólidos orientados a objetos.'
        },
        'petcare-manager': {
            goal: 'Proporcionar un backend integral y altamente escalable para automatizar la gestión de clínicas veterinarias.',
            tech: 'Java 21, Spring Boot, PostgreSQL, JPA/Hibernate',
            features: 'Programación automatizada de eventos, gestión unificada de historiales clínicos del paciente y una API RESTful completamente segura.',
            learned: 'Aprovechamiento de las características modernas de Java 21, resolviendo problemas complejos de optimización N+1 de consultas en JPA y estructuración eficiente del esquema de BBDD relacional.'
        }
    };

    if (projectsContainer) {
        Promise.all(
            targetRepos.map(repo => 
                fetch(`https://api.github.com/repos/CODIGOAFRX/${repo}`)
                    .then(response => response.ok ? response.json() : null)
                    .catch(() => null)
            )
        )
        .then(repos => {
            const displayRepos = targetRepos.map(repoName => {
                const fetched = repos.find(r => r && r.name === repoName);
                if (fetched) return fetched;
                // Graceful fallback for rate limits
                return {
                    name: repoName,
                    stargazers_count: '-',
                    description: 'Descripción detallada en mi perfil de GitHub.',
                    html_url: `https://github.com/CODIGOAFRX/${repoName}`,
                    language: '-'
                };
            });

            displayRepos.forEach(repo => {
                const meta = projectMetadata[repo.name] || { goal: 'N/A', tech: repo.language || 'N/A', features: 'N/A', learned: 'N/A' };
                
                const article = document.createElement('article');
                article.className = 'project-item hidden-element';
                
                article.innerHTML = `
                    <div class="project-header">
                        <div class="project-info">
                            <h3 class="project-title">
                                ${repo.name} 
                                <span class="stars">★ ${repo.stargazers_count}</span>
                            </h3>
                            <p class="project-desc">${repo.description || 'Sin descripción disponible.'}</p>
                        </div>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver proyecto ${repo.name} en GitHub">Ver GitHub</a>
                    </div>
                    <div class="project-details">
                        <div class="detail-block">
                            <span class="detail-label">Objetivo de Ingeniería</span>
                            <p class="detail-content">${meta.goal}</p>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Stack Tecnológico</span>
                            <p class="detail-content">${meta.tech}</p>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Características Clave</span>
                            <p class="detail-content">${meta.features}</p>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Resultados y Aprendizaje</span>
                            <p class="detail-content">${meta.learned}</p>
                        </div>
                    </div>
                `;

                // Click event for accordion expansion
                article.addEventListener('click', (e) => {
                    // Ignore click if clicking precisely on GitHub button
                    if (e.target.classList.contains('project-link')) return;
                    
                    document.querySelectorAll('.project-item.expanded').forEach(item => {
                        if (item !== article) item.classList.remove('expanded');
                    });
                    article.classList.toggle('expanded');
                });

                projectsContainer.appendChild(article);
                // Add observer slightly delayed so DOM updates don't preempt intersections
                setTimeout(() => observer.observe(article), 50);
            });
        })
        .catch(error => {
            console.error('API Error:', error);
            projectsContainer.innerHTML = '<p class="text-secondary" style="color:var(--text-secondary); margin-top:2rem;">No se pudieron cargar los proyectos de GitHub en este momento.</p>';
        });
    }
});
