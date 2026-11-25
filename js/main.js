let lang = 'id';
let activeFilter = 'all';
function renderExperiences() {
            const container = document.getElementById('experience-container');
            container.innerHTML = experienceData.map(item => `
                <div class="relative pl-7 z-10">
                    <!-- Timeline Node -->
                    <span class="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full flex items-center justify-center }">
                        <span class="w-1.5 h-1.5 rounded-full ${item.current ? 'bg-indigo-300' : 'bg-slate-400'}"></span>
                    </span>

                    <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <div class="flex flex-wrap items-center gap-2">
                        
                            <h3 class="text-[16.5px] font-semibold  ${item.current ?`text-emerald-300 [text-shadow:0_0_7px_rgba(110,231,190,0.6)]`:"text-white"}">
                                ${item.role[lang]}
                            </h3>
                            ${item.current ? `
                                
                            ` : ''}
                        </div>
                        <span class="font-mono text-[12px] text-slate-400 shrink-0">
                            ${item.period[lang]}
                        </span>
                    </div>

                    <div class="text-[13.5px] font-medium text-indigo-300/90 mb-2.5">
                        ${item.company} <span class="text-slate-500 font-normal">• ${item.type[lang]} • ${item.location}</span>
                    </div>

                    <ul class="space-y-1.5 text-[14px] text-slate-400 leading-relaxed mb-3">
                        ${item.points[lang].map(pt => `
                            <li class="flex items-start gap-2.5">
                                <span class="w-1 h-1 rounded-full bg-slate-500 mt-2.5 shrink-0"></span>
                                <span>${pt}</span>
                            </li>
                        `).join('')}
                    </ul>

                    <div class="flex flex-wrap gap-1.5">
                        ${item.skills.map(skill => `
                            <span class="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-300 text-[11.5px]">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
 function renderProjects() {
            const container = document.getElementById('projects-container');
            const filtered = activeFilter === 'all'
                ? projectsData
                : projectsData.filter(p => p.category.includes(activeFilter));

            container.innerHTML = filtered.map(proj => `
                <article onclick="openModal('${proj.id}')" class="glass-card glass-card-interactive rounded-2xl p-6 flex flex-col justify-between cursor-pointer group">
                    <div class="relative z-10">
                        <div class="flex items-center justify-between gap-2 mb-3.5">
                            <span class="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/[0.045] border border-white/[0.08] text-indigo-300">
                                ${proj.tag[lang]}
                            </span>
                            <span class="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all">
                                <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M7 7h10v10"/>
                                </svg>
                            </span>
                        </div>

                        <h3 class="text-[18px] font-semibold text-white tracking-tight mb-2 group-hover:text-indigo-200 transition-colors">
                            ${proj.title}
                        </h3>

                        <p class="text-[14px] text-slate-400 leading-relaxed mb-5">
                            ${proj.summary[lang]}
                        </p>
                    </div>

                    <div class="relative z-10 flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.07]">
                        ${proj.stack.map(tech => `
                            <span class="px-2.5 py-1 rounded-lg bg-white/[0.035] text-slate-300 font-mono text-[11.5px]">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </article>
            `).join('');

            attachSpotlightListeners();
        }

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skillsData.map(group => `
        <div class="ios-card p-6">
            <h3 class="text-[15px] font-semibold text-ios-text mb-3.5">
                ${group.title[lang]}
            </h3>
            <div class="flex flex-wrap gap-2">
                ${group.items.map(skill => `
                    <span class="px-3 py-1.5 rounded-xl bg-ios-pill text-ios-text text-[13px] font-medium">
                        ${skill}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}


        function renderSkills() {
            const container = document.getElementById('skills-container');
            container.innerHTML = skillsData.map(group => `
                <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
                    <div class="relative z-10">
                        <div class="w-9 h-9 rounded-xl border ${group.accent} flex items-center justify-center mb-4">
                            ${group.icon}
                        </div>
                        <h3 class="text-[16px] font-semibold text-white mb-4">
                            ${group.title[lang]}
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            ${group.items.map(skill => `
                                <span class="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 text-[12.5px] font-medium transition-colors">
                                    ${skill}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');

            attachSpotlightListeners();
        }

function setProjectFilter(filter) {
    activeFilter = filter;
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderProjects();
    lucide.createIcons();
}

function setLanguage(newLang) {
    lang = newLang;
    document.documentElement.lang = lang;

    document.getElementById('btn-lang-id')?.classList.toggle('active', lang === 'id');
    document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[lang][key]) {
            el.textContent = dictionary[lang][key];
        }
    });

    renderExperiences();
    renderProjects();
    renderSkills();
    lucide.createIcons();
}

        function openModal(projectId) {
            const proj = projectsData.find(p => p.id === projectId);
            if (!proj) return;

            const modal = document.getElementById('project-modal');
            const body = document.getElementById('modal-body');

            body.innerHTML = `
                <div class="pr-8">
                    <span class="font-mono text-[11px] uppercase tracking-wider text-indigo-300">${proj.tag[lang]}</span>
                    <h3 class="text-2xl font-bold text-white tracking-tight mt-1">${proj.title}</h3>
                </div>

                <p class="text-[15px] text-slate-300 leading-relaxed">
                    ${proj.summary[lang]}
                </p>

                <div class="rounded-2xl bg-white/[0.035] border border-white/[0.08] p-4 sm:p-5 space-y-3">
                    <h4 class="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                        ${dictionary[lang]['modal.highlights']}
                    </h4>
                    <ul class="space-y-2.5 text-[14px] text-slate-200 leading-relaxed">
                        ${proj.details[lang].map(detail => `
                            <li class="flex items-start gap-2.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                                <span>${detail}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-2.5">
                        ${dictionary[lang]['modal.tools']}
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        ${proj.stack.map(s => `
                            <span class="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.09] text-slate-200 font-mono text-[12px]">
                                ${s}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <div class="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
                    <button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.09] text-slate-300 hover:text-white text-[13px] font-medium transition-colors">
                        ${dictionary[lang]['modal.close']}
                    </button>
                    <a href="${proj.url}" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-500/25 hover:bg-indigo-500/35 border border-indigo-400/35 text-white text-[13px] font-medium transition-colors">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        <span>${dictionary[lang]['modal.github']}</span>
                    </a>
                </div>
            `;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}


        function attachSpotlightListeners() {
            document.querySelectorAll('.glass-card').forEach(card => {
                if (card.dataset.spotlightBound) return;
                card.dataset.spotlightBound = 'true';
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
            });
        }

function toggleMobileMenu() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
}

function closeMobileMenu() {
    document.getElementById('mobile-menu')?.classList.add('hidden');
}

function initEventListeners() {
    // Language Switcher
    document.getElementById('btn-lang-id')?.addEventListener('click', () => setLanguage('id'));
    document.getElementById('btn-lang-en')?.addEventListener('click', () => setLanguage('en'));

    // Mobile Menu
    document.getElementById('mobile-menu-toggle')?.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Project Filter Tabs
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.filter) {
                setProjectFilter(btn.dataset.filter);
            }
        });
    });

    // Project Card Click Delegation
    document.getElementById('projects-container')?.addEventListener('click', e => {
        const card = e.target.closest('[data-project-id]');
        if (card) {
            openModal(card.dataset.projectId);
        }
    });

    // Modal Dismiss Interactions
    const modal = document.getElementById('project-modal');
    modal?.addEventListener('click', e => {
        if (e.target === modal || e.target.closest('[data-close-modal]')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    renderExperiences();
    renderProjects();
    renderSkills();
    lucide.createIcons();
});
