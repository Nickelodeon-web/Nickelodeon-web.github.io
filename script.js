gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- DONNÉES ---
const projectsData = [
    {
        title: "Appli-Rapport de visite",
        badge: "C# / MySQL / Figma",
        listBadge: "C# / MySQL",
        shortDesc: "Application desktop pour la gestion de rapports techniques avec design Figma.",
        desc: "Application de gestion des rapports de visite pour techniciens itinérants. Conception UX/UI complète sur Figma avant intégration. Développement de l'interface logicielle en C# et persistance des données sécurisée via MySQL.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Supermarché en ligne",
        badge: "PHP / MySQL / HTML / CSS",
        listBadge: "PHP / MySQL / HTML",
        shortDesc: "Plateforme e-commerce native pour la gestion de commandes et de produits.",
        desc: "Conception et développement d'un site e-commerce de A à Z sans framework. Gestion des sessions utilisateurs, panier dynamique, catalogue produits et back-office administrateur.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Jeu de Tir sur Cible",
        badge: "JS / PHP / MySQL",
        listBadge: "JS / PHP / MySQL",
        shortDesc: "Jeu interactif full-stack : moteur physique JS et backend PHP sécurisé.",
        desc: "Développement itératif d'un jeu de tir complet. Frontend animé en JS (moteur physique, système de vent aléatoire). Backend robuste en PHP/MySQL assurant la sécurité et la gestion des scores.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"
    }
];

const experiences = [
    { id: 0, date: "MAI 2025 - JUIN 2025", role: "Stagiaire Développement no-code", company: "Equans (Courbevoie)", desc: "Développement d'applications métiers rapides pour optimiser les processus internes. Automatisation de flux de données.", tags: ["Power Apps", "Power Automate", "SharePoint"] },
    { id: 1, date: "JANVIER - FEVRIER 2024", role: "Stagiaire Développement", company: "Deezer (Paris)", desc: "Optimisation de requêtes SQL complexes pour l'analyse de données. Gestion des environnements conteneurisés.", tags: ["SQL", "Python", "Git"] },
    { id: 2, date: "SEPTEMBRE - OCTOBRE 2023", role: "Stagiaire Support & Dev", company: "Evolukid (Nanterre)", desc: "Support technique et scripts correctifs.", tags: ["JavaScript", "Support", "Debugging"] },
    { id: 3, date: "NOV 2022 - MARS 2023", role: "Stagiaire – Projet logistique", company: "Bred Banque Populaire", desc: "Gestion de parc et logistique informatique.", tags: ["Gestion de Parc", "Excel"] },
    { id: 4, date: "AVRIL - MAI 2022", role: "Stagiaire Support Utilisateur", company: "Experis France", desc: "Résolution d'incidents niveau 1. Installation de postes.", tags: ["Windows 10", "GLPI", "Active Directory"] }
];

const veilleData = [
    "Transition vers les architectures <strong>Serverless</strong> et <strong>Event-Driven</strong>. Comparatif technique AWS vs Azure.",
    "Industrialisation via <strong>CI/CD</strong> (GitLab CI, Azure DevOps). Mise en œuvre de l'<strong>Infrastructure as Code (IaC)</strong>.",
    "Agrégation via Feedly, tendances GitHub et veille sécurité (<strong>CVE/OWASP</strong>)."
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

function initVeille() {
    for (let i = 0; i < veilleData.length; i++) {
        const el = document.getElementById('veille-desc-' + i);
        if (el) el.innerHTML = veilleData[i];
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
            <div class="flex flex-wrap gap-3">${tagsHtml}</div>`;
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

// --- MODIFICATION ICI : Lien vers le fichier CV local ---
function openCV() { 
    // Remplace 'cv.pdf' par le nom exact de ton fichier si différent
    window.open('cv.pdf', '_blank'); 
}