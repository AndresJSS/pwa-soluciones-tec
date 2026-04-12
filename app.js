// Variable global para el idioma actual
let currentLang = 'es'; // Por defecto en español
let activeCourseId = 'biodigestor';

// === BASE DE DATOS LOCAL DINÁMICA ===
function getPortfolioData(lang) {
    const t = translations[lang];
    return {
        'biodigestor': {
            title: t.bio_title, categoryClass: 'cat-ciencia', categoryText: t.cat_science,
            pdfFile: 'manual-practico-biodigestor.pdf',
            modules: [
                { id: 'bio_1', title: t.bio_mod1, status: t.bio_stat1 }, { id: 'bio_2', title: t.bio_mod2, status: t.bio_stat2 },
                { id: 'bio_3', title: t.bio_mod3, status: t.bio_stat3 }, { id: 'bio_4', title: t.bio_mod4, status: t.bio_stat4 },
                { id: 'bio_5', title: t.bio_mod5, status: t.bio_stat5 }, { id: 'bio_6', title: t.bio_mod6, status: t.bio_stat6 },
                { id: 'bio_7', title: t.bio_mod7, status: t.bio_stat7 }
            ]
        },
        // Mantenemos hidroponia y secador genéricos para la prueba visual
        'hidroponia': {
            title: t.hidro_title, categoryClass: 'cat-ciencia', categoryText: t.cat_science,
            pdfFile: 'manual_hidroponia.pdf',
            modules: [ { id: 'hidro_1', title: '1. Module', status: '...' } ]
        },
        'secador': {
            title: t.secador_title, categoryClass: 'cat-comercio', categoryText: t.cat_commerce,
            pdfFile: 'manual_secador.pdf',
            modules: [ { id: 'sec_1', title: '1. Module', status: '...' } ]
        }
    };
}

// === FUNCIÓN PARA CAMBIAR EL IDIOMA ===
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('agrotech_lang', lang); // Guarda el idioma elegido

    const t = translations[lang];
    document.documentElement.lang = lang;

    // Traducir todos los elementos estáticos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // Si hay un curso abierto, volver a renderizarlo para actualizar textos
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
}

function openCourse(courseId) {
    activeCourseId = courseId;

    const portfolioData = getPortfolioData(currentLang);
    const data = portfolioData[courseId];

    document.getElementById('course-title').innerText = data.title;

    const catBadge = document.getElementById('course-category');
    catBadge.className = 'category-pill ' + data.categoryClass;
    catBadge.innerText = data.categoryText;
    
    // ACTUALIZAR ENLACE DEL PDF
    document.getElementById('btn-download').href = data.pdfFile;

    const listContainer = document.getElementById('dynamic-module-list');
    listContainer.innerHTML = '';

    // Recuperamos el progreso guardado (si no existe, usamos un objeto vacío)
    const savedProgress = JSON.parse(localStorage.getItem('agrotech_progress')) || {};

    data.modules.forEach(mod => {
        // Verificamos si este módulo específico (id) está marcado como completado en el almacenamiento
        const isChecked = savedProgress[mod.id] ? 'checked' : '';

        const li = document.createElement('li');
        li.className = 'module-item';
        li.innerHTML = `
            <input type="checkbox" class="module-checkbox" id="${mod.id}" ${isChecked} onchange="updateProgress('${mod.id}')">
            <div class="module-text">${mod.title}<div class="module-status">${mod.status}</div></div>
        `;
        listContainer.appendChild(li);
    });

    updateProgressBarOnly(); // Calculamos la barra de progreso inicial
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-course').classList.add('active');
}

function updateProgress(moduleId) {
    const savedProgress = JSON.parse(localStorage.getItem('agrotech_progress')) || {};
    const checkbox = document.getElementById(moduleId);

    // Guardamos true o false según el estado del checkbox
    savedProgress[moduleId] = checkbox.checked;
    localStorage.setItem('agrotech_progress', JSON.stringify(savedProgress));

    updateProgressBarOnly();

    const checkboxes = document.querySelectorAll('.module-checkbox');
    const checkedCount = document.querySelectorAll('.module-checkbox:checked').length;

    // Mensaje de éxito si se completa el 100%
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
    
    // Reflejamos el progreso en el Dashboard para el proyecto principal
    if (activeCourseId === 'biodigestor') {
        document.getElementById('dash-progress-fill').style.width = percentage + '%';
        document.getElementById('dash-progress-text').innerText = percentage + '%';
    }
}

// Inicialización de la App
window.onload = () => {
    // Intentamos recuperar el idioma guardado previamente
    const savedLang = localStorage.getItem('agrotech_lang') || 'es';
    changeLanguage(savedLang);
    
    // Listener para el Modo Oscuro
    document.getElementById('darkModeToggle').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('agrotech_dark', this.checked);
    });

    // Cargar preferencia de modo oscuro
    if (localStorage.getItem('agrotech_dark') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
};