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

    // Datos de proyectos y módulos
    // Biodigestor
    bio_title: "Biodigestor tubular a pequeña escala", 
    bio_desc: "Producción de biogás y biofertilizante.",
    bio_tags: "desecho, desperdicio, energía, biogás, fertilizante, abono, basura, gas, luz, circular",
    bio_mod1: "1. Fundamentos y Materiales", bio_stat1: "Lectura y cotización",
    bio_mod2: "2. Preparación del Terreno", bio_stat2: "Trabajo de campo",
    bio_mod3: "3. Ensamble del Sistema", bio_stat3: "Trabajo de campo",
    bio_mod4: "4. Prueba de Hermeticidad", bio_stat4: "Control de calidad",
    bio_mod5: "5. Primer Llenado (Inoculación)", bio_stat5: "Fase biológica",
    bio_mod6: "6. Operación y Seguridad", bio_stat6: "Mantenimiento activo",
    bio_mod7: "7. Cierre y Caso de Éxito", bio_stat7: "Validación de biogás y biol",
    
    // Hidroponía
    hidro_title: "Sistema hidropónico (NFT)", 
    hidro_desc: "Producción acelerada en espacios reducidos.",
    hidro_tags: "agua, producción, alimentos, nutrientes, lechuga, sin tierra, vertical, hortalizas",
    hidro_mod1: "1. Diseño e Instalación", hidro_stat1: "Planificación",
    hidro_mod2: "2. Ensamble de Estructura", hidro_stat2: "Construcción",
    hidro_mod3: "3. Sistema Hidráulico", hidro_stat3: "Prueba de flujo",
    hidro_mod4: "4. Solución Nutritiva", hidro_stat4: "Balance químico",
    hidro_mod5: "5. Trasplante de Plántulas", hidro_stat5: "Fase vegetal",
    hidro_mod6: "6. Control de pH y EC", hidro_stat6: "Mantenimiento",
    hidro_mod7: "7. Cosecha y Post-cosecha", hidro_stat7: "Producción final",

    // Secador solar    
    secador_title: "Secador solar de túnel", 
    secador_desc: "Agregación de valor post-cosecha para granos.",
    secador_tags: "sol, calor, conservación, granos, café, cacao, semillas, postcosecha, deshidratar",
    secador_mod1: "1. Teoría del Secado", secador_stat1: "Fundamentos",
    secador_mod2: "2. Estructura y Arcos", secador_stat2: "Construcción",
    secador_mod3: "3. Piso y Colector", secador_stat3: "Absorción térmica",
    secador_mod4: "4. Cubierta y Sellado", secador_stat4: "Aislamiento",
    secador_mod5: "5. Carga de Producto", secador_stat5: "Manejo inicial",
    secador_mod6: "6. Control de Humedad", secador_stat6: "Monitoreo",
    secador_mod7: "7. Almacenaje Seguro", secador_stat7: "Calidad final",
    
    // Acuaponía
    acua_title: "Sistema acuapónico integrado", 
    acua_desc: "Cultivo simultáneo de peces y hortalizas en ciclo cerrado.",
    acua_tags: "acuaponía, peces, hortalizas, sin tierra, agua, circular, innovación, tilapia, estanque",
    acua_mod1: "1. Diseño del Ecosistema", acua_stat1: "Fundamentos",
    acua_mod2: "2. Instalación de Tanques", acua_stat2: "Infraestructura",
    acua_mod3: "3. Sistema de Recirculación", acua_stat3: "Hidráulica",
    acua_mod4: "4. Ciclado Bacteriano", acua_stat4: "Fase biológica",
    acua_mod5: "5. Introducción de Peces", acua_stat5: "Manejo animal",
    acua_mod6: "6. Siembra en Camas", acua_stat6: "Fase vegetal",
    acua_mod7: "7. Equilibrio del Sistema", acua_stat7: "Operación",

    // Huerto vertical    
    vertical_title: "Huerto vertical con reciclaje", 
    vertical_desc: "Producción de hortalizas en espacios mínimos usando PET.",
    vertical_tags: "reciclaje, espacio reducido, urbano, tomates, botellas, bajo costo, vertical, plástico, huerto",
    vertical_mod1: "1. Recolección de PET", vertical_stat1: "Residuos",
    vertical_mod2: "2. Preparación de Envases", vertical_stat2: "Manualidades",
    vertical_mod3: "3. Mezcla de Sustrato", vertical_stat3: "Nutrición",
    vertical_mod4: "4. Montaje de Columnas", vertical_stat4: "Estructura",
    vertical_mod5: "5. Siembra y Riego", vertical_stat5: "Instalación",
    vertical_mod6: "6. Manejo de Plagas", vertical_stat6: "Mantenimiento",
    vertical_mod7: "7. Cosecha Continua", vertical_stat7: "Resultados",
    
    success_msg: "¡Felicidades por finalizar tu proyecto!\n\nTu esfuerzo suma a la agricultura de la región."
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

    // Datos de proyectos y módulos
    
    // Biodigestor
    bio_title: "Small-scale tubular biodigester", 
    bio_desc: "Biogas and biofertilizer production.",
    bio_tags: "waste, garbage, energy, biogas, fertilizer, manure, circular, gas, power",
    bio_mod1: "1. Fundamentals and Materials", bio_stat1: "Reading and quoting",
    bio_mod2: "2. Land Preparation", bio_stat2: "Fieldwork",
    bio_mod3: "3. System Assembly", bio_stat3: "Fieldwork",
    bio_mod4: "4. Leak Testing", bio_stat4: "Quality control",
    bio_mod5: "5. First Filling (Inoculation)", bio_stat5: "Biological phase",
    bio_mod6: "6. Operation and Safety", bio_stat6: "Active maintenance",
    bio_mod7: "7. Closure and Success Story", bio_stat7: "Biogas and biol validation",
    
    // Hidroponía
    hidro_title: "Hydroponic system (NFT)", 
    hidro_desc: "Accelerated production in confined spaces.",
    hidro_tags: "water, production, food, nutrients, soilless, vertical, vegetables, lettuce",
    hidro_mod1: "1. Design and Installation", hidro_stat1: "Planning",
    hidro_mod2: "2. Structure Assembly", hidro_stat2: "Construction",
    hidro_mod3: "3. Hydraulic System", hidro_stat3: "Flow test",
    hidro_mod4: "4. Nutrient Solution", hidro_stat4: "Chemical balance",
    hidro_mod5: "5. Seedling Transplanting", hidro_stat5: "Vegetal phase",
    hidro_mod6: "6. pH & EC Control", hidro_stat6: "Maintenance",
    hidro_mod7: "7. Harvest & Post-harvest", hidro_stat7: "Final production",

    // Secador solar
    secador_title: "Solar tunnel dryer", 
    secador_desc: "Post-harvest value addition for grains.",
    secador_tags: "sun, heat, conservation, grains, coffee, cocoa, seeds, postharvest, dehydrate",
    secador_mod1: "1. Drying Theory", secador_stat1: "Fundamentals",
    secador_mod2: "2. Structure and Arches", secador_stat2: "Construction",
    secador_mod3: "3. Floor and Collector", secador_stat3: "Thermal absorption",
    secador_mod4: "4. Cover and Sealing", secador_stat4: "Insulation",
    secador_mod5: "5. Product Loading", secador_stat5: "Initial handling",
    secador_mod6: "6. Humidity Control", secador_stat6: "Monitoring",
    secador_mod7: "7. Safe Storage", secador_stat7: "Final quality",

    // Acuaponía    
    acua_title: "Integrated aquaponic system", 
    acua_desc: "Simultaneous cultivation of fish and vegetables in a closed loop.",
    acua_tags: "aquaponics, fish, vegetables, soilless, water, circular, innovation, tilapia, pond",
    acua_mod1: "1. Ecosystem Design", acua_stat1: "Fundamentals",
    acua_mod2: "2. Tank Installation", acua_stat2: "Infrastructure",
    acua_mod3: "3. Recirculation System", acua_stat3: "Hydraulics",
    acua_mod4: "4. Bacterial Cycling", acua_stat4: "Biological phase",
    acua_mod5: "5. Fish Introduction", acua_stat5: "Animal management",
    acua_mod6: "6. Bed Planting", acua_stat6: "Vegetal phase",
    acua_mod7: "7. System Balance", acua_stat7: "Operation",

    // Huerto vertical
    vertical_title: "Recycled vertical garden", 
    vertical_desc: "Vegetable production in minimal spaces using PET bottles.",
    vertical_tags: "recycling, small space, urban, tomatoes, bottles, low cost, vertical, plastic, garden",
    vertical_mod1: "1. PET Collection", vertical_stat1: "Waste",
    vertical_mod2: "2. Bottle Preparation", vertical_stat2: "Handicrafts",
    vertical_mod3: "3. Substrate Mixing", vertical_stat3: "Nutrition",
    vertical_mod4: "4. Column Assembly", vertical_stat4: "Structure",
    vertical_mod5: "5. Planting and Watering", vertical_stat5: "Installation",
    vertical_mod6: "6. Pest Management", vertical_stat6: "Maintenance",
    vertical_mod7: "7. Continuous Harvest", vertical_stat7: "Results",
    
    success_msg: "Congratulations on finishing your project!\n\nYour effort adds to the region's agriculture."
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

    // Datos de projetos y módulos
    
    // Biodigestor
    bio_title: "Biodigestor tubular em pequena escala", 
    bio_desc: "Produção de biogás e biofertilizante.",
    bio_tags: "resíduos, lixo, energia, biogás, fertilizante, adubo, circular, gás, luz",
    bio_mod1: "1. Fundamentos e Materiais", bio_stat1: "Leitura e orçamento",
    bio_mod2: "2. Preparação do Terreno", bio_stat2: "Trabalho de campo",
    bio_mod3: "3. Montagem do Sistema", bio_stat3: "Trabalho de campo",
    bio_mod4: "4. Teste de Estanqueidade", bio_stat4: "Controle de qualidade",
    bio_mod5: "5. Primeiro Preenchimento (Inoculação)", bio_stat5: "Fase biológica",
    bio_mod6: "6. Operação e Segurança", bio_stat6: "Manutenção ativa",
    bio_mod7: "7. Encerramento e Caso de Sucesso", bio_stat7: "Validação de biogás e biol",

    // Hidroponía
    hidro_title: "Sistema hidropônico (NFT)", 
    hidro_desc: "Produção acelerada em espaços reduzidos.",
    hidro_tags: "água, produção, alimentos, nutrientes, sem terra, vertical, hortaliças, alface",
    hidro_mod1: "1. Design e Instalação", hidro_stat1: "Planejamento",
    hidro_mod2: "2. Montagem da Estrutura", hidro_stat2: "Construção",
    hidro_mod3: "3. Sistema Hidráulico", hidro_stat3: "Teste de fluxo",
    hidro_mod4: "4. Solução Nutritiva", hidro_stat4: "Balanço químico",
    hidro_mod5: "5. Transplante de Mudas", hidro_stat5: "Fase vegetal",
    hidro_mod6: "6. Controle de pH e EC", hidro_stat6: "Manutenção",
    hidro_mod7: "7. Colheita e Pós-colheita", hidro_stat7: "Produção final",

    // Secador solar
    secador_title: "Secador solar de túnel", 
    secador_desc: "Agregação de valor pós-colheita para grãos.",
    secador_tags: "sol, calor, conservação, grãos, café, cacau, sementes, pós-colheita, desidratar",
    secador_mod1: "1. Teoria da Secagem", secador_stat1: "Fundamentos",
    secador_mod2: "2. Estrutura e Arcos", secador_stat2: "Construção",
    secador_mod3: "3. Piso e Coletor", secador_stat3: "Absorção térmica",
    secador_mod4: "4. Cobertura e Vedação", secador_stat4: "Isolamento",
    secador_mod5: "5. Carga de Produto", secador_stat5: "Manejo inicial",
    secador_mod6: "6. Controle de Humidade", secador_stat6: "Monitoramento",
    secador_mod7: "7. Armazenamento Seguro", secador_stat7: "Qualidade final",

    // Acuaponía    
    acua_title: "Sistema aquapônico integrado", 
    acua_desc: "Cultivo simultâneo de peixes e hortaliças em ciclo fechado.",
    acua_tags: "aquaponia, peixes, hortaliças, sem terra, água, circular, inovação, tilápia, tanque",
    acua_mod1: "1. Design do Ecossistema", acua_stat1: "Fundamentos",
    acua_mod2: "2. Instalação de Tanques", acua_stat2: "Infraestrutura",
    acua_mod3: "3. Sistema de Recirculação", acua_stat3: "Hidráulica",
    acua_mod4: "4. Ciclagem Bacteriana", acua_stat4: "Fase biológica",
    acua_mod5: "5. Introdução de Peixes", acua_stat5: "Manejo animal",
    acua_mod6: "6. Plantio em Camas", acua_stat6: "Fase vegetal",
    acua_mod7: "7. Equilíbrio del Sistema", acua_stat7: "Operação",

    // Huerto vertical
    vertical_title: "Horta vertical com reciclagem", 
    vertical_desc: "Produção de hortaliças em espaços mínimos usando PET.",
    vertical_tags: "reciclagem, espaço reduzido, urbano, tomates, garrafas, baixo custo, vertical, plástico, horta",
    vertical_mod1: "1. Coleta de PET", vertical_stat1: "Resíduos",
    vertical_mod2: "2. Preparação de Garrafas", vertical_stat2: "Artesanato",
    vertical_mod3: "3. Mistura de Substrato", vertical_stat3: "Nutrição",
    vertical_mod4: "4. Montagem de Colunas", vertical_stat4: "Estrutura",
    vertical_mod5: "5. Plantio e Irrigação", vertical_stat5: "Instalação",
    vertical_mod6: "6. Manejo de Pragas", vertical_stat6: "Manutenção",
    vertical_mod7: "7. Colheita Contínua", vertical_stat7: "Resultados",
    
    success_msg: "Parabéns por finalizar seu projeto!\n\nSeu esforço contribui para a agricultura da região."
    }
};