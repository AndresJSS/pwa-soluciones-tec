// Variable global para el idioma actual
let currentLang = 'es'; // Por defecto en español
let activeCourseId = 'biodigestor';

// === BASE DE DATOS LOCAL DINÁMICA ===
function getPortfolioData(lang) {
    const t = translations[lang];
    return {
        'biodigestor': {
            title: t.bio_title, 
            description: t.bio_desc,
            tags: t.bio_tags,
            categoryClass: 'cat-ciencia', 
            categoryText: t.cat_science,
            pdfFile: 'manual-practico-biodigestor.pdf',
            modules: [
                { id: 'bio_1', title: t.bio_mod1, status: t.bio_stat1 }, { id: 'bio_2', title: t.bio_mod2, status: t.bio_stat2 },
                { id: 'bio_3', title: t.bio_mod3, status: t.bio_stat3 }, { id: 'bio_4', title: t.bio_mod4, status: t.bio_stat4 },
                { id: 'bio_5', title: t.bio_mod5, status: t.bio_stat5 }, { id: 'bio_6', title: t.bio_mod6, status: t.bio_stat6 },
                { id: 'bio_7', title: t.bio_mod7, status: t.bio_stat7 }
            ]
        },
        'hidroponia': {
            title: t.hidro_title, 
            description: t.hidro_desc,
            tags: t.hidro_tags,
            categoryClass: 'cat-ciencia', 
            categoryText: t.cat_science,
            pdfFile: 'manual_hidroponia.pdf',
            modules: [ { id: 'hidro_1', title: '1. Module', status: '...' } ]
        },
        'secador': {
            title: t.secador_title, 
            description: t.secador_desc,
            tags: t.secador_tags,
            categoryClass: 'cat-comercio', 
            categoryText: t.cat_commerce,
            pdfFile: 'manual_secador.pdf',
            modules: [ { id: 'sec_1', title: '1. Module', status: '...' } ]
        }
    };
}

// === SISTEMA DE MATRICULACIÓN (NUEVO) ===
function getEnrolledList() {
    // Lee la base de datos local para ver los cursos matriculados
    return JSON.parse(localStorage.getItem('agrotech_enrolled')) || [];
}

function enrollCourse(courseId) {
    let enrolled = getEnrolledList();
    if (!enrolled.includes(courseId)) {
        enrolled.push(courseId);
        localStorage.setItem('agrotech_enrolled', JSON.stringify(enrolled));
        
        // Actualizamos las vistas inmediatamente
        renderCatalog();
        renderProjects();
        
        // Alerta de éxito traducida
        alert(translations[currentLang].enroll_success || "¡Te has inscrito con éxito!");
    }
}

// === RENDERIZADO DINÁMICO DE PANTALLAS (NUEVO) ===
function renderCatalog() {
    const container = document.getElementById('catalog-container');
    if (!container) return; 

    const enrolled = getEnrolledList();
    const data = getPortfolioData(currentLang);
    const t = translations[currentLang];
    
    // NUEVO: Capturamos los valores del buscador y del filtro
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    
    container.innerHTML = ''; 

    Object.keys(data).forEach(id => {
        const course = data[id];
        
        // NUEVO: Lógica de filtrado combinada
        // 1. Revisa si el texto coincide con el título o la descripción
        const matchesSearch = course.title.toLowerCase().includes(searchQuery) || 
                              (course.description && course.description.toLowerCase().includes(searchQuery)) ||
                              (course.tags && course.tags.toLowerCase().includes(searchQuery));
        // 2. Revisa si la categoría coincide (o si está en "Todas")
        const matchesCategory = selectedCategory === 'all' || course.categoryClass === selectedCategory;
        
        // Solo dibujamos la tarjeta si cumple AMBAS condiciones
        if (matchesSearch && matchesCategory) {
            const isInscribed = enrolled.includes(id);
            
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <span class="category-pill ${course.categoryClass}">${course.categoryText}</span>
                    ${isInscribed ? `<span class="enrolled-badge">${t.badge_enrolled || '✓ Inscrito'}</span>` : ''}
                </div>
                <h3 class="card-title">${course.title}</h3>
                <p class="card-subtitle">${course.description || ''}</p>
                ${!isInscribed ? 
                    `<button class="btn-enroll" onclick="event.stopPropagation(); enrollCourse('${id}')">${t.btn_enroll || '➕ Inscribirse'}</button>` : 
                    `<p class="card-action">${t.btn_continue || 'Continuar ➡️'}</p>`
                }
            `;
            
            if (isInscribed) {
                card.onclick = () => openCourse(id);
            } else {
                card.style.cursor = 'default';
            }
            
            container.appendChild(card);
        }
    });

    // Pequeño detalle UX: Mostrar mensaje si la búsqueda no arroja resultados
    if (container.innerHTML === '') {
        container.innerHTML = `
            <div class="empty-state">
                <p style="margin:0;">No se encontraron proyectos con esos filtros.</p>
            </div>
        `;
    }
}

function renderProjects() {
    const container = document.getElementById('enrolled-container');
    const emptyState = document.getElementById('empty-projects');
    if (!container) return;

    const enrolledIds = getEnrolledList();
    const data = getPortfolioData(currentLang);
    const t = translations[currentLang];
    
    container.innerHTML = '';
    
    // Si no hay cursos, mostramos el mensaje de "Explorar Catálogo"
    if (enrolledIds.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Dibujamos solo los cursos matriculados
    enrolledIds.forEach(id => {
        const course = data[id];
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openCourse(id);
        card.innerHTML = `
            <span class="category-pill ${course.categoryClass}">${course.categoryText}</span>
            <h3 class="card-title">${course.title}</h3>
            <p class="card-action">${t.btn_continue || 'Continuar ➡️'}</p>
        `;
        container.appendChild(card);
    });
}

// === FUNCIÓN PARA CAMBIAR EL IDIOMA ===
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('agrotech_lang', lang);

    const t = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // NUEVO: Al cambiar el idioma, redibujamos el catálogo y proyectos para que se traduzcan
    renderCatalog();
    renderProjects();

    if (document.getElementById('view-course').classList.contains('active')) {
        openCourse(activeCourseId);
    }
}

function switchNav(viewId, btnIndex) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    if(btns[btnIndex]) btns[btnIndex].classList.add('active');

    // NUEVO: Aseguramos que las vistas estén actualizadas al navegar
    if (viewId === 'view-catalog') renderCatalog();
    if (viewId === 'view-projects') renderProjects();
}

function openCourse(courseId) {
    activeCourseId = courseId;

    const portfolioData = getPortfolioData(currentLang);
    const data = portfolioData[courseId];

    document.getElementById('course-title').innerText = data.title;

    const catBadge = document.getElementById('course-category');
    catBadge.className = 'category-pill ' + data.categoryClass;
    catBadge.innerText = data.categoryText;
    
    document.getElementById('btn-download').href = data.pdfFile;

    const listContainer = document.getElementById('dynamic-module-list');
    listContainer.innerHTML = '';

    const savedProgress = JSON.parse(localStorage.getItem('agrotech_progress')) || {};

    data.modules.forEach(mod => {
        const isChecked = savedProgress[mod.id] ? 'checked' : '';

        const li = document.createElement('li');
        li.className = 'module-item';
        li.innerHTML = `
            <input type="checkbox" class="module-checkbox" id="${mod.id}" ${isChecked} onchange="updateProgress('${mod.id}')">
            <div class="module-text">${mod.title}<div class="module-status">${mod.status}</div></div>
        `;
        listContainer.appendChild(li);
    });

    updateProgressBarOnly();
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-course').classList.add('active');
}

function updateProgress(moduleId) {
    const savedProgress = JSON.parse(localStorage.getItem('agrotech_progress')) || {};
    const checkbox = document.getElementById(moduleId);

    savedProgress[moduleId] = checkbox.checked;
    localStorage.setItem('agrotech_progress', JSON.stringify(savedProgress));

    updateProgressBarOnly();

    const checkboxes = document.querySelectorAll('.module-checkbox');
    const checkedCount = document.querySelectorAll('.module-checkbox:checked').length;

    if (checkedCount === checkboxes.length) {
        setTimeout(() => alert(translations[currentLang].success_msg), 500);
    }
}

/**
 * ACTUALIZAR BARRA DE PROGRESO
 */
function updateProgressBarOnly() {
    const checkboxes = document.querySelectorAll('.module-checkbox');
    if (checkboxes.length === 0) return;

    const checkedCount = document.querySelectorAll('.module-checkbox:checked').length;
    const percentage = Math.round((checkedCount / checkboxes.length) * 100);
    
    document.getElementById('course-progress-fill').style.width = percentage + '%';
    document.getElementById('course-progress-text').innerText = percentage + '%';
    
    // NUEVO: Verificación de seguridad para evitar errores en la consola
    const dashFill = document.getElementById('dash-progress-fill');
    if (activeCourseId === 'biodigestor' && dashFill) {
        dashFill.style.width = percentage + '%';
        document.getElementById('dash-progress-text').innerText = percentage + '%';
    }
}

// === FUNCIÓN PARA DARSE DE BAJA (NUEVO) ===
function unenrollCourse() {
    const t = translations[currentLang];
    // Mensaje de confirmación de seguridad
    const confirmMsg = t.unenroll_confirm || "¿Estás seguro de que deseas abandonar este proyecto? Tu progreso actual se perderá permanentemente.";
    
    if (confirm(confirmMsg)) {
        // 1. Lo quitamos de la lista de matriculados
        let enrolled = getEnrolledList();
        enrolled = enrolled.filter(id => id !== activeCourseId);
        localStorage.setItem('agrotech_enrolled', JSON.stringify(enrolled));
        
        // 2. Limpiamos su progreso para no guardar "datos basura"
        const savedProgress = JSON.parse(localStorage.getItem('agrotech_progress')) || {};
        const data = getPortfolioData(currentLang);
        const modules = data[activeCourseId].modules;
        
        modules.forEach(mod => {
            delete savedProgress[mod.id];
        });
        localStorage.setItem('agrotech_progress', JSON.stringify(savedProgress));

        // 3. Actualizamos pantallas y lo devolvemos a su Dashboard
        renderCatalog();
        renderProjects();
        switchNav('view-projects', 1);
    }
}

// Inicialización de la App
window.onload = () => {
    const savedLang = localStorage.getItem('agrotech_lang') || 'es';
    changeLanguage(savedLang);
    
    // NUEVO: Dibujamos las pantallas apenas abre la aplicación
    renderCatalog();
    renderProjects();
    
    document.getElementById('darkModeToggle').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('agrotech_dark', this.checked);
    });

    if (localStorage.getItem('agrotech_dark') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
};