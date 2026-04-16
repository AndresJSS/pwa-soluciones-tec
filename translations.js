// === DICCIONARIO DE TRADUCCIONES (i18n) ===
const translations = {
    es: {
    app_title: "InnovaJoven",
    nav_home: "Inicio", 
    nav_catalog: "Catálogo", 
    nav_settings: "Ajustes",
    nav_projects: "Mis Proyectos", // Unificado

    dash_title: "Proyectos en desarrollo", 
    dash_empty: "No tienes proyectos inscritos",
    
    btn_continue: "Continuar ➡️", 
    btn_explore: "Explorar Catálogo",
    btn_enroll: "Iniciar Proyecto", // Cambiado de 'Inscribirse'
    btn_unenroll: "❌ Abandonar Proyecto",
    
    catalog_title: "Catálogo de Proyectos", // Unificado
    search_placeholder: "🔍 Buscar proyecto...", // Unificado
    
    settings_title: "Mi Perfil y Ajustes", 
    settings_prefs: "Preferencias de la App",
    settings_lang: "Idioma", 
    settings_dark: "Modo Oscuro (Nocturno)",
    
    course_back: "⬅ Volver a mis proyectos", 
    course_download: "⬇️ Descargar Manual",
    course_progress: "Tu avance en el proyecto:", // Unificado
    course_route: "Fases del Proyecto", // Unificado (antes Ruta de Implementación)
    
    progress_label: "Progreso actual",
    badge_enrolled: "✓ Iniciado", // Antes Inscrito
    enroll_success: "¡Has iniciado este proyecto con éxito!",
    unenroll_confirm: "¿Estás seguro de que deseas abandonar este proyecto? Tu progreso actual se perderá permanentemente.",
    
    cat_all: "Todas las categorías",
    cat_science: "Ciencia y Tecnología", 
    cat_commerce: "Comercio y Valor",

    // Datos de proyectos
    bio_title: "Biodigestor tubular a pequeña escala", 
    bio_desc: "Producción de biogás y biofertilizante.",
    bio_tags: "desecho, desperdicio, energía, biogás, fertilizante, abono, basura, gas, luz, circular",

    hidro_title: "Sistema Hidropónico (NFT)", 
    hidro_desc: "Producción acelerada en espacios reducidos.",
    hidro_tags: "agua, producción, alimentos, nutrientes, lechuga, sin tierra, vertical, hortalizas",

    secador_title: "Secador solar de túnel", 
    secador_desc: "Agregación de valor post-cosecha para granos.",
    secador_tags: "sol, calor, conservación, granos, café, cacao, semillas, postcosecha, deshidratar",

    // Módulos
    bio_mod1: "1. Fundamentos y Materiales", bio_stat1: "Lectura y cotización",
    bio_mod2: "2. Preparación del Terreno", bio_stat2: "Trabajo de campo",
    bio_mod3: "3. Ensamble del Sistema", bio_stat3: "Trabajo de campo",
    bio_mod4: "4. Prueba de Hermeticidad", bio_stat4: "Control de calidad",
    bio_mod5: "5. Primer Llenado (Inoculación)", bio_stat5: "Fase biológica",
    bio_mod6: "6. Operación y Seguridad", bio_stat6: "Mantenimiento activo",
    bio_mod7: "7. Cierre y Caso de Éxito", bio_stat7: "Validación de biogás y biol",
    
    success_msg: "¡Felicidades por finalizar tu proyecto!\n\nTu esfuerzo suma a la agricultura de la región. ¿Te gustaría generar un reporte de evidencia y compartir tu caso de éxito con el IICA?"
    },

    en: {
    app_title: "InnovaJoven",
    nav_home: "Home", 
    nav_catalog: "Catalog", 
    nav_settings: "Settings",
    nav_projects: "My Projects",

    dash_title: "Projects in Development", 
    dash_empty: "You have no registered projects",
    
    btn_continue: "Continue ➡️", 
    btn_explore: "Explore Catalog",
    btn_enroll: "➕ Start Project", 
    btn_unenroll: "❌ Drop Project",
    
    catalog_title: "Project Catalog", 
    search_placeholder: "🔍 Search project...", 
    
    settings_title: "My Profile & Settings", 
    settings_prefs: "App Preferences",
    settings_lang: "Language", 
    settings_dark: "Dark Mode (Night)",
    
    course_back: "⬅ Back to my projects", 
    course_download: "⬇️ Download Manual",
    course_progress: "Your project progress:", 
    course_route: "Project Phases", 
    
    progress_label: "Current progress",
    badge_enrolled: "✓ Started", 
    enroll_success: "You have successfully started this project!",
    unenroll_confirm: "Are you sure you want to drop this project? Your current progress will be permanently lost.",
    
    cat_all: "All categories",
    cat_science: "Science & Technology", 
    cat_commerce: "Commerce & Value",

    // Datos de proyectos
    bio_title: "Small-scale tubular biodigester", 
    bio_desc: "Biogas and biofertilizer production.",
    bio_tags: "waste, garbage, energy, biogas, fertilizer, manure, circular, gas, power",

    hidro_title: "Hydroponic System (NFT)", 
    hidro_desc: "Accelerated production in confined spaces.",
    hidro_tags: "water, production, food, nutrients, soilless, vertical, vegetables, lettuce",

    secador_title: "Solar tunnel dryer", 
    secador_desc: "Post-harvest value addition for grains.",
    secador_tags: "sun, heat, conservation, grains, coffee, cocoa, seeds, postharvest, dehydrate",

    // Módulos
    bio_mod1: "1. Fundamentals and Materials", bio_stat1: "Reading and quoting",
    bio_mod2: "2. Land Preparation", bio_stat2: "Fieldwork",
    bio_mod3: "3. System Assembly", bio_stat3: "Fieldwork",
    bio_mod4: "4. Leak Testing", bio_stat4: "Quality control",
    bio_mod5: "5. First Filling (Inoculation)", bio_stat5: "Biological phase",
    bio_mod6: "6. Operation and Safety", bio_stat6: "Active maintenance",
    bio_mod7: "7. Closure and Success Story", bio_stat7: "Biogas and biol validation",
    
    success_msg: "Congratulations on finishing your project!\n\nYour effort adds to the region's agriculture. Would you like to generate an evidence report and share your success story with IICA?"
    },

    pt: {
    app_title: "InnovaJoven",
    nav_home: "Início", 
    nav_catalog: "Catálogo", 
    nav_settings: "Configurações",
    nav_projects: "Meus Projetos",

    dash_title: "Projetos em desenvolvimento", 
    dash_empty: "Você não possui projetos registrados",
    
    btn_continue: "Continuar ➡️", 
    btn_explore: "Explorar Catálogo",
    btn_enroll: "➕ Iniciar Projeto", 
    btn_unenroll: "❌ Abandonar Projeto",
    
    catalog_title: "Catálogo de Projetos", 
    search_placeholder: "🔍 Buscar projeto...", 
    
    settings_title: "Meu Perfil e Configurações", 
    settings_prefs: "Preferências do App",
    settings_lang: "Idioma", 
    settings_dark: "Modo Escuro (Noturno)",
    
    course_back: "⬅ Voltar aos meus projetos", 
    course_download: "⬇️ Baixar Manual",
    course_progress: "Seu avanço no projeto:", 
    course_route: "Fases do Projeto", 
    
    progress_label: "Progresso atual",
    badge_enrolled: "✓ Iniciado", 
    enroll_success: "Você iniciou este projeto com sucesso!",
    unenroll_confirm: "Tem certeza de que deseja abandonar este projeto? Seu progresso atual será perdido permanentemente.",
    
    cat_all: "Todas as categorias",
    cat_science: "Ciência e Tecnologia", 
    cat_commerce: "Comércio e Valor",

    // Datos de projetos
    bio_title: "Biodigestor tubular em pequena escala", 
    bio_desc: "Produção de biogás e biofertilizante.",
    bio_tags: "resíduos, lixo, energia, biogás, fertilizante, adubo, circular, gás, luz",

    hidro_title: "Sistema Hidropônico (NFT)", 
    hidro_desc: "Produção acelerada em espaços reduzidos.",
    hidro_tags: "água, produção, alimentos, nutrientes, sem terra, vertical, hortaliças, alface",

    secador_title: "Secador solar de túnel", 
    secador_desc: "Agregação de valor pós-colheita para grãos.",
    secador_tags: "sol, calor, conservação, grãos, café, cacau, sementes, pós-colheita, desidratar",

    // Módulos
    bio_mod1: "1. Fundamentos e Materiais", bio_stat1: "Leitura e orçamento",
    bio_mod2: "2. Preparação do Terreno", bio_stat2: "Trabalho de campo",
    bio_mod3: "3. Montagem do Sistema", bio_stat3: "Trabalho de campo",
    bio_mod4: "4. Teste de Estanqueidade", bio_stat4: "Controle de qualidade",
    bio_mod5: "5. Primeiro Preenchimento (Inoculação)", bio_stat5: "Fase biológica",
    bio_mod6: "6. Operação e Segurança", bio_stat6: "Manutenção ativa",
    bio_mod7: "7. Encerramento e Caso de Sucesso", bio_stat7: "Validação de biogás e biol",
    
    success_msg: "Parabéns por finalizar seu projeto!\n\nSeu esforço contribui para a agricultura da região. Gostaria de gerar um relatório de evidências e compartilhar seu caso de sucesso com o IICA?"
    }
};