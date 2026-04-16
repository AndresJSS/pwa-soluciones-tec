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
            pdfFile: 'manual-practico-sistema-hidroponico.pdf',
            modules: [
                { id: 'hidro_1', title: t.hidro_mod1, status: t.hidro_stat1 }, { id: 'hidro_2', title: t.hidro_mod2, status: t.hidro_stat2 },
                { id: 'hidro_3', title: t.hidro_mod3, status: t.hidro_stat3 }, { id: 'hidro_4', title: t.hidro_mod4, status: t.hidro_stat4 },
                { id: 'hidro_5', title: t.hidro_mod5, status: t.hidro_stat5 }, { id: 'hidro_6', title: t.hidro_mod6, status: t.hidro_stat6 },
                { id: 'hidro_7', title: t.hidro_mod7, status: t.hidro_stat7 }
            ]
        },
        'secador': {
            title: t.secador_title, 
            description: t.secador_desc,
            tags: t.secador_tags,
            categoryClass: 'cat-comercio', 
            categoryText: t.cat_commerce,
            pdfFile: 'manual-practico-secador-solar-tunel.pdf',
            modules: [
                { id: 'secador_1', title: t.secador_mod1, status: t.secador_stat1 }, { id: 'secador_2', title: t.secador_mod2, status: t.secador_stat2 },
                { id: 'secador_3', title: t.secador_mod3, status: t.secador_stat3 }, { id: 'secador_4', title: t.secador_mod4, status: t.secador_stat4 },
                { id: 'secador_5', title: t.secador_mod5, status: t.secador_stat5 }, { id: 'secador_6', title: t.secador_mod6, status: t.secador_stat6 },
                { id: 'secador_7', title: t.secador_mod7, status: t.secador_stat7 }
            ]
        },
        'acuaponia': {
            title: t.acua_title, 
            description: t.acua_desc, 
            tags: t.acua_tags,
            categoryClass: 'cat-ciencia', // o la clase que prefieras
            categoryText: t.cat_science,
            pdfFile: 'manual-practico-sistema-acuaponico-integrado.pdf', // Aquí puedes enlazar un PDF de ejemplo
            modules: [
                { id: 'acua_1', title: t.acua_mod1, status: t.acua_stat1 }, { id: 'acua_2', title: t.acua_mod2, status: t.acua_stat2 },
                { id: 'acua_3', title: t.acua_mod3, status: t.acua_stat3 }, { id: 'acua_4', title: t.acua_mod4, status: t.acua_stat4 },
                { id: 'acua_5', title: t.acua_mod5, status: t.acua_stat5 }, { id: 'acua_6', title: t.acua_mod6, status: t.acua_stat6 },
                { id: 'acua_7', title: t.acua_mod7, status: t.acua_stat7 }
            ]
        },
        'huerto_vertical': {
            title: t.vertical_title, 
            description: t.vertical_desc, 
            tags: t.vertical_tags,
            categoryClass: 'cat-ciencia', 
            categoryText: t.cat_science,
            pdfFile: 'manual-practico-huerto-vertical.pdf',
            modules: [
                { id: 'vertical_1', title: t.vertical_mod1, status: t.vertical_stat1 }, { id: 'vertical_2', title: t.vertical_mod2, status: t.vertical_stat2 },
                { id: 'vertical_3', title: t.vertical_mod3, status: t.vertical_stat3 }, { id: 'vertical_4', title: t.vertical_mod4, status: t.vertical_stat4 },
                { id: 'vertical_5', title: t.vertical_mod5, status: t.vertical_stat5 }, { id: 'vertical_6', title: t.vertical_mod6, status: t.vertical_stat6 },
                { id: 'vertical_7', title: t.vertical_mod7, status: t.vertical_stat7 }
            ]
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
        
        // Obtenemos las traducciones actuales
        const t = translations[currentLang];
        
        // REEMPLAZO: Cambiamos alert por nuestro modal personalizado
        showModal({
            type: 'success',
            icon: '🌱',
            title: currentLang === 'en' ? 'Project Started!' : (currentLang === 'pt' ? 'Projeto Iniciado!' : '¡Proyecto Iniciado!'),
            message: t.enroll_success
        });
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

    // Guardamos el estado (marcado o desmarcado)
    savedProgress[moduleId] = checkbox.checked;
    localStorage.setItem('agrotech_progress', JSON.stringify(savedProgress));

    // Actualizamos visualmente la barra
    updateProgressBarOnly();

    // Verificamos si se completó el 100%
    const checkboxes = document.querySelectorAll('.module-checkbox');
    const checkedCount = document.querySelectorAll('.module-checkbox:checked').length;

    const modalKey = `modal_shown_${activeCourseId}`; // Llave única por proyecto

    if (checkedCount === checkboxes.length) {
        // Solo mostramos el modal si NO se ha mostrado antes para este proyecto
        if (!localStorage.getItem(modalKey)) {
            // Mantenemos el retraso de 500ms para que la barra se llene visualmente primero
            setTimeout(() => {
                const t = translations[currentLang];
                
                showModal({
                    type: 'primary',
                    icon: '🏆',
                    title: currentLang === 'en' ? 'Congratulations!' : (currentLang === 'pt' ? 'Parabéns!' : '¡Felicidades!'),
                    message: t.success_msg,
                    btnText: currentLang === 'en' ? 'Accept' : (currentLang === 'pt' ? 'Aceitar' : 'Aceptar'),
                });
                
                // Activamos el candado para que no vuelva a salir
                localStorage.setItem(modalKey, 'true');
            }, 500); 
        }
    } else {
        // DETALLE UX: Si el usuario desmarca una casilla por error, quitamos el candado.
        // Así, cuando vuelva a marcarla y llegue al 100% de nuevo, el sistema lo felicitará.
        localStorage.removeItem(modalKey);
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
    
    showModal({
        type: 'danger',
        icon: '⚠️',
        title: currentLang === 'en' ? 'Drop Project' : (currentLang === 'pt' ? 'Abandonar Projeto' : 'Abandonar Proyecto'),
        message: t.unenroll_confirm || "¿Estás seguro de que deseas abandonar este proyecto? Tu progreso actual se perderá permanentemente.",
        btnText: currentLang === 'en' ? 'Yes, drop it' : (currentLang === 'pt' ? 'Sim, abandonar' : 'Sí, abandonar'),
        onConfirm: () => {
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
    });
}

// === CONTROLADOR DE MODALES PERSONALIZADOS ===
function showModal(options) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-title').innerText = options.title;
    document.getElementById('modal-message').innerText = options.message;
    document.getElementById('modal-icon').innerText = options.icon || 'ℹ️';
    
    const footer = document.getElementById('modal-footer');
    footer.innerHTML = ''; // Limpiamos botones anteriores

    // Detectamos el idioma para los botones genéricos
    const lang = document.documentElement.lang || 'es';
    const txtCancel = lang === 'en' ? 'Cancel' : (lang === 'pt' ? 'Cancelar' : 'Cancelar');
    const txtAccept = lang === 'en' ? 'Accept' : (lang === 'pt' ? 'Aceitar' : 'Aceptar');

    // Si es una acción destructiva (Abandonar) o requiere confirmación, agregamos botón Cancelar
    if (options.type === 'danger' || options.type === 'primary') {
        const btnCancel = document.createElement('button');
        btnCancel.className = 'btn-modal cancel';
        btnCancel.innerText = txtCancel;
        btnCancel.onclick = () => modal.classList.remove('active');
        footer.appendChild(btnCancel);
    }

    // Botón de Acción Principal
    const btnMain = document.createElement('button');
    btnMain.className = `btn-modal ${options.type || 'success'}`;
    btnMain.innerText = options.btnText || txtAccept;
    
    btnMain.onclick = () => {
        if (options.onConfirm) options.onConfirm();
        modal.classList.remove('active');
    };
    
    footer.appendChild(btnMain);
    modal.classList.add('active'); // Mostramos el modal
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