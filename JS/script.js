gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- DONNÉES PROJETS ---
const projectsData = [
    {
        title: "Appli-Rapport de visite",
        badge: "C# / MySQL / Figma",
        listBadge: "C# / MySQL",
        shortDesc: "Application desktop pour la gestion de rapports techniques avec design Figma.",
        desc: "Application de gestion des rapports de visite pour techniciens itinérants. Conception UX/UI complète sur Figma avant intégration. Développement de l'interface logicielle en C# et persistance des données sécurisée via MySQL.",
        image: "img/photo-pharmasi.avif", 
        githubLink: "https://github.com/Flaimeur/PharmaSI2", 
        detailsLink: "details/Documentation pharmasi.pdf" 
    },
    {
        title: "Supermarché en ligne",
        badge: "PHP / MySQL / HTML / CSS",
        listBadge: "PHP / MySQL / HTML",
        shortDesc: "Plateforme e-commerce native pour la gestion de commandes et de produits.",
        desc: "Conception et développement d'un site e-commerce de A à Z sans framework. Gestion des sessions utilisateurs, panier dynamique, catalogue produits et back-office administrateur.",
        image: "img/photo-superMarche.avif", 
        githubLink: "https://github.com/Flaimeur/Supermarche", 
        detailsLink: "details/"
    },
    {
        title: "Jeu de Tir sur Cible",
        badge: "JS / PHP / MySQL",
        listBadge: "JS / PHP / MySQL",
        shortDesc: "Jeu interactif full-stack : moteur physique JS et backend PHP sécurisé.",
        desc: "Développement itératif d'un jeu de tir complet. Frontend animé en JS (moteur physique, système de vent aléatoire). Backend robuste en PHP/MySQL assurant la sécurité et la gestion des scores.",
        image: "img/photo-cible-game.avif", 
        githubLink: "https://github.com/Nickelodeon-web/Jeu-de-Tir-sur-Cible", 
        detailsLink: "details/documentation-jeux-cible.pdf" 
    },
    // NOUVEAU PROJET AJOUTÉ ICI
    {
        title: "Gestion de Parc (GLPI)",
        badge: "ITSM / GLPI / XAMPP",
        listBadge: "ITSM / GLPI",
        shortDesc: "Installation et configuration d'une solution de gestion de parc et helpdesk.",
        desc: "Mise en place complète de l'outil GLPI pour la gestion d'une infrastructure informatique. Configuration de l'inventaire automatique, gestion des tickets (assistance) et mise en place d'une base de connaissances.",
        image: "img/photo-glpi.avif", // Assure-toi d'avoir cette image dans ton dossier img
        githubLink: "#", // À remplir si tu as un dépôt de config
        detailsLink: "details/Documentation GLPI.pdf" // À adapter selon ton fichier
    }
];

// --- DONNÉES EXPERIENCES ---
const experiences = [
    { 
        id: 0, 
        date: "DÉC 2025 - FÉV 2026", 
        role: "Stage en développement web", 
        company: "La Dictée Géante", 
        desc: "Développement d'interfaces web interactives en HTML, CSS et JavaScript. Conception et réalisation des maquettes en amont sur Figma pour valider l'expérience utilisateur.", 
        tags: ["HTML/CSS", "JavaScript", "Figma"],
        reportLink: "rapport de stage/rapport de stage dictée géante.pdf"
    },
    { 
        id: 1, 
        date: "MAI 2025 - JUIN 2025", 
        role: "Stagiaire Développement Low-code", 
        company: "Equans (Courbevoie)", 
        desc: "Développement d'applications métiers rapides pour optimiser les processus internes. Automatisation de flux de données.", 
        tags: ["Power Apps", "Power Automate", "SharePoint"],
        reportLink: "rapport de stage/rapport de stage Equans .pdf"
    },
    { 
        id: 2, 
        date: "JANVIER - FEVRIER 2024", 
        role: "Stagiaire Développement", 
        company: "Deezer (Paris)", 
        desc: "Optimisation de requêtes SQL complexes pour l'analyse de données. Gestion des environnements conteneurisés.", 
        tags: ["SQL", "Python", "Git"],
        reportLink: "rapport de stage/Rapport_PFMP4-SANTAKI-YANIS-TR3_2023-2024.pdf"
    },
    { 
        id: 3, 
        date: "SEPTEMBRE - OCTOBRE 2023", 
        role: "Stagiaire Support & Dev", 
        company: "Evolukid (Nanterre)", 
        desc: "Support technique et scripts correctifs.", 
        tags: ["JavaScript", "Support", "Debugging"],
        reportLink: "rapport de stage/Rapport PFMP3-SANTAKI-Yanis-TR3 2023.pdf"
    },
    { 
        id: 4, 
        date: "NOV 2022 - MARS 2023", 
        role: "Stagiaire – Projet logistique", 
        company: "Bred Banque Populaire", 
        desc: "Gestion de parc et logistique informatique.", 
        tags: ["Gestion de Parc", "Excel"],
        reportLink: "rapport de stage/Rapport PFMP1-SANTAKI-Yanis-1R3 2023.PDF.pdf"
    },
    { 
        id: 5, 
        date: "AVRIL - MAI 2022", 
        role: "Stagiaire Support Utilisateur", 
        company: "Experis France", 
        desc: "Résolution d'incidents niveau 1. Installation de postes.", 
        tags: ["Windows 10", "GLPI", "Active Directory"],
        reportLink: "chemin/vers/rapport6.pdf"
    }
];

let activeExpIndex = 0;

window.onload = function() {
    const sections = document.querySelectorAll(".panel");
    const wrapper = document.getElementById("main-wrapper");

    if (window.innerWidth > 1024) {
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: { trigger: wrapper, pin: true, scrub: 0.1, end: () => "+=" + wrapper.offsetWidth }
        });
    }

    renderProjectList();
    renderExperienceNav();
    updateExperienceDisplay(0);
    initVeille();
    updateProject(0);
};

// Fonction Veille Automatisée avec gestion du vide/erreurs
function initVeille() {
    const veilleConfigs = [
        {
            url: "https://www.google.com/alerts/feeds/04529051921103295237/7866444721482751126",
            titleId: 'veille-title-cloud',
            descId: 'veille-desc-cloud',
            linkId: 'veille-link-cloud'
        },
        {
            url: "https://www.google.com/alerts/feeds/04529051921103295237/7866444721482747998",
            titleId: 'veille-title-devops',
            descId: 'veille-desc-devops',
            linkId: 'veille-link-devops'
        }
    ];

    for (let i = 0; i < veilleConfigs.length; i++) {
        const config = veilleConfigs[i];
        const apiUrl = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(config.url);

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const titleEl = document.getElementById(config.titleId);
                const descEl = document.getElementById(config.descId);

                if (data && data.items && data.items.length > 0) {
                    const latest = data.items[0];
                    
                    function stripHtml(html) {
                        let tmp = document.createElement("DIV");
                        tmp.innerHTML = html;
                        return tmp.textContent || tmp.innerText || "";
                    }

                    titleEl.innerText = stripHtml(latest.title);
                    descEl.innerText = stripHtml(latest.content || latest.description);
                    document.getElementById(config.linkId).href = latest.link;
                } else {
                    // SI LE FLUX EST VIDE (pas encore d'alertes trouvées par Google)
                    titleEl.innerText = "En attente d'actualités...";
                    descEl.innerText = "Google Alerts n'a pas encore trouvé de nouveaux articles pour ce sujet aujourd'hui.";
                }
            })
            .catch(error => {
                console.error("Erreur RSS:", error);
                document.getElementById(config.titleId).innerText = "Flux temporairement indisponible";
                document.getElementById(config.descId).innerText = "Impossible de charger les données. Vérifiez votre connexion ou le lien RSS.";
            });
    }
}

function renderProjectList() {
    const container = document.getElementById('project-list-container');
    let html = '';
    for (let i = 0; i < projectsData.length; i++) {
        const p = projectsData[i];
        html += `
        <div onclick="updateProject(${i})" class="p-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all cursor-pointer group">
            <div class="flex justify-between items-center mb-2">
                <h4 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">${p.title}</h4>
                <span class="mono text-[10px] text-zinc-500 border border-zinc-800 px-2 py-1 rounded whitespace-nowrap">${p.listBadge}</span>
            </div>
            <p class="text-sm text-zinc-500 mt-1 line-clamp-2">${p.shortDesc}</p>
        </div>`;
    }
    container.innerHTML = html;
}

function updateProject(index) {
    const project = projectsData[index];
    const displayArea = document.getElementById('project-display-area');

    gsap.to(displayArea, { opacity: 0, y: 10, duration: 0.2, onComplete: () => {
        document.getElementById('project-display-img').src = project.image;
        document.getElementById('project-display-title').innerText = project.title;
        document.getElementById('project-display-badge').innerText = project.badge;
        document.getElementById('project-display-desc').innerText = project.desc;
        document.getElementById('project-display-details').href = project.detailsLink; 
        document.getElementById('project-display-github').href = project.githubLink; 
        gsap.to(displayArea, { opacity: 1, y: 0, duration: 0.4 });
    }});
}

function renderExperienceNav() {
    const listContainer = document.getElementById('timeline-list');
    let html = '';
    for (let i = 0; i < experiences.length; i++) {
        html += `<div class="exp-nav-item" onclick="changeExperience(${i})" id="exp-item-${i}">
            <span class="mono text-[10px] text-blue-500 mb-1 block font-bold">${experiences[i].date}</span>
            <h3 class="text-xl font-bold text-zinc-500">${experiences[i].role}</h3>
        </div>`;
    }
    listContainer.innerHTML = html;
}

function changeExperience(index) {
    if (activeExpIndex === index) return;
    activeExpIndex = index;
    updateExperienceDisplay(index);
}

function updateExperienceDisplay(index) {
    const exp = experiences[index];
    const contentDiv = document.getElementById('exp-content');
    const progressLine = document.getElementById('timeline-progress');
    const allItems = document.querySelectorAll('.exp-nav-item');
    
    for (let i = 0; i < allItems.length; i++) { allItems[i].classList.remove('active'); }
    
    const activeItem = document.getElementById(`exp-item-${index}`);
    if(activeItem) {
        activeItem.classList.add('active');
        if (index === experiences.length - 1) {
            progressLine.style.height = "100%";
        } else {
            const containerRect = document.getElementById('timeline-list').parentElement.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const centerHeight = (itemRect.top - containerRect.top) + (itemRect.height / 2);
            progressLine.style.height = centerHeight + "px";
        }
    }

    gsap.to(contentDiv, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
        let tagsHtml = '';
        for (let j = 0; j < exp.tags.length; j++) {
            tagsHtml += `<span class="px-4 py-2 bg-black border border-zinc-800 rounded-lg text-xs mono text-blue-400 font-bold">${exp.tags[j]}</span>`;
        }
        contentDiv.innerHTML = `
            <div class="mb-4"><span class="mono text-[10px] text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full uppercase bg-zinc-900/50">${exp.date}</span></div>
            <h3 class="text-4xl md:text-5xl font-black text-white mb-2 uppercase leading-tight">${exp.role}</h3>
            <h4 class="text-xl text-blue-500 mb-8 font-bold">${exp.company}</h4>
            <p class="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">${exp.desc}</p>
            <div class="flex flex-wrap gap-3 mb-8">${tagsHtml}</div>
            <a href="${exp.reportLink}" class="inline-flex px-5 py-2 bg-blue-600 rounded-xl text-xs md:text-sm font-bold text-white hover:bg-blue-500 transition-all items-center gap-2">
                RAPPORT DE STAGE
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </a>`;
        gsap.to(contentDiv, { opacity: 1, y: 0, duration: 0.4 });
    }});
}

function goToSection(index) {
    const wrapper = document.getElementById("main-wrapper");
    if (window.innerWidth > 1024) {
        gsap.to(window, { scrollTo: (index / 4) * wrapper.offsetWidth, duration: 1.2 });
    } else {
        const ids = ["hero", "about", "projects", "experience", "veille"];
        const target = document.getElementById(ids[index]);
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    }
}

function openContact() { document.getElementById("contact-page").classList.remove("translate-y-full"); }
function closeContact() { document.getElementById("contact-page").classList.add("translate-y-full"); }

function openCV() { 
    window.location.href = 'CV-portfolio.pdf'; 
}
