 const dictionary = {
            id: {
                'nav.about': 'Tentang',
                'nav.projects': 'Karya',
                'nav.experience': 'Pengalaman',
                'nav.skills': 'Keahlian',
                'hero.status': 'Surabaya, Indonesia • Terbuka untuk Peluang',
                'hero.role': 'Mahasiswa Teknik Komputer di PENS • Embedded Systems & Web Developer',
                'hero.bio': 'Menempuh studi Teknik Komputer di Politeknik Elektronika Negeri Surabaya (PENS). Saya merancang sistem tertanam dan perangkat keras untuk robotika otonom, membangun aplikasi web maupun mobile yang presisi, serta tengah mendalami bahasa Jepang (JLPT N5–N4) sebagai persiapan berkarier di lingkungan rekayasa global.',
                'hero.ctaProjects': 'Lihat Karya',
                'section.projects': 'Karya & Proyek Pilihan',
                'section.projectsSub': 'Eksplorasi sistem tertanam, robotika kompetitif, simulasi, dan aplikasi full-stack.',
                'filter.all': 'Semua',
                'filter.embedded': 'Embedded & Robotika',
                'filter.web': 'Web & Aplikasi',
                'section.experience': 'Pengalaman',
                'section.experienceSub': 'Perjalanan di riset robotika, pengajaran, pelatihan bahasa Jepang, dan kepemimpinan organisasi.',
                'section.skills': 'Keahlian & Teknologi',
                'section.skillsSub': 'Perangkat keras, bahasa pemrograman, desain visual, dan kemampuan bahasa.',
                'footer.title': 'Mari Berdiskusi & Berkolaborasi',
                'footer.desc': 'Tertarik membahas proyek embedded systems, robotika, pengembangan perangkat lunak, atau peluang kolaborasi? Silakan hubungi saya.',
                'footer.top': 'Kembali ke atas ↑',
                'badge.present': 'Saat ini',
                'modal.highlights': 'Sorotan Teknis',
                'modal.tools': 'Teknologi & Perangkat',
                'modal.github': 'Buka di GitHub',
                'modal.close': 'Tutup'
            },
            en: {
                'nav.about': 'About',
                'nav.projects': 'Works',
                'nav.experience': 'Experience',
                'nav.skills': 'Skills',
                'hero.status': 'Surabaya, Indonesia • Open to Opportunities',
                'hero.role': 'Computer Engineering Student at PENS • Embedded Systems & Web Developer',
                'hero.bio': 'Studying Computer Engineering at Politeknik Elektronika Negeri Surabaya (PENS). I design embedded systems and hardware for autonomous robotics, build precise web and mobile applications, and am studying Japanese (JLPT N5–N4) in preparation for a global engineering career.',
                'hero.ctaProjects': 'Explore Works',
                'section.projects': 'Selected Works & Projects',
                'section.projectsSub': 'Explorations across embedded systems, competitive robotics, simulation, and full-stack apps.',
                'filter.all': 'All',
                'filter.embedded': 'Embedded & Robotics',
                'filter.web': 'Web & Apps',
                'section.experience': 'Experience',
                'section.experienceSub': 'Journey across robotics research, teaching, Japanese language training, and leadership.',
                'section.skills': 'Skills & Stack',
                'section.skillsSub': 'Hardware platforms, programming languages, visual design, and spoken languages.',
                'footer.title': "Let's Discuss & Collaborate",
                'footer.desc': 'Interested in embedded systems, robotics, software engineering, or potential collaborations? Feel free to reach out.',
                'footer.top': 'Back to top ↑',
                'badge.present': 'Present',
                'modal.highlights': 'Technical Highlights',
                'modal.tools': 'Stack & Tools',
                'modal.github': 'View on GitHub',
                'modal.close': 'Close'
            }
        };

        const projectsData = [
            {
                id: 'ersow',
                title: 'ERSOW — Wheeled Soccer Robot',
                category: ['embedded'],
                tag: { id: 'Embedded & Robotika', en: 'Embedded & Robotics' },
                summary: {
                    id: 'Pengembangan perangkat keras dan sistem tertanam real-time (STM32, FreeRTOS) pada robot sepak bola beroda untuk Kontes Robot Indonesia (KRI).',
                    en: 'Hardware and real-time embedded systems development (STM32, FreeRTOS) for wheeled soccer robots competing in the Indonesian Robot Contest (KRI).'
                },
                details: {
                    id: [
                        'Perancangan integrasi perangkat keras dan mikrokontroler STM32 untuk manuver robot beroda kecepatan tinggi.',
                        'Pengembangan firmware deterministik menggunakan C/C++, FreeRTOS, dan CMSIS-RTOS v1 untuk pembacaan sensor dan kontrol aktuator.',
                        'Pengujian keandalan sistem di lapangan selama siklus kompetisi Kontes Robot Indonesia (KRI).'
                    ],
                    en: [
                        'Hardware integration and STM32 microcontroller interfacing for high-speed omnidirectional wheeled robots.',
                        'Deterministic firmware development using C/C++, FreeRTOS, and CMSIS-RTOS v1 for sensor fusion and actuator control.',
                        'Field reliability tuning and hardware diagnostics during Indonesian Robot Contest (KRI) cycles.'
                    ]
                },
                stack: ['STM32', 'C / C++', 'FreeRTOS', 'CMSIS-RTOS v1'],
                url: 'https://github.com/Jeul-Si-666'
            },
            {
                id: 'kotoba-flow',
                title: 'KOTOBA Flow',
                category: ['web'],
                tag: { id: 'Web & Aplikasi', en: 'Web & Apps' },
                summary: {
                    id: 'Aplikasi pembelajaran kosakata bahasa Jepang terinspirasi Duolingo untuk kata kerja & kata sifat Minna no Nihongo (N5–N4) dengan level bertahap.',
                    en: 'Duolingo-inspired Japanese vocabulary learning app covering Minna no Nihongo (N5–N4) verbs & adjectives with progressive levels and spaced recall.'
                },
                details: {
                    id: [
                        'Kurikulum terstruktur berdasarkan bab dan level kata kerja serta kata sifat dari buku Minna no Nihongo (JLPT N5–N4).',
                        'Mekanisme pengulangan berkala (spaced recall) untuk memperkuat daya ingat kosakata secara bertahap.',
                        'Antarmuka latihan interaktif yang ringkas dan nyaman digunakan di perangkat web maupun mobile.'
                    ],
                    en: [
                        'Structured progression modules organized by verb and adjective levels from Minna no Nihongo (JLPT N5–N4).',
                        'Spaced-recall practice mechanics engineered to strengthen long-term vocabulary retention.',
                        'Clean, tactile interactive quiz experience designed for both web and mobile browsers.'
                    ]
                },
                stack: ['JavaScript', 'Spaced Recall', 'JLPT N5–N4'],
                url: 'https://github.com/Jeul-Si-666'
            },
            {
                id: 'line-follower-sim',
                title: 'Line-Follower Track Simulator',
                category: ['web', 'embedded'],
                tag: { id: 'Web & Robotika', en: 'Web & Robotics' },
                summary: {
                    id: 'Simulator lintasan robot line-follower berbasis HTML5 Canvas modular (ViewCanvas, RawCanvas, BinaryCanvas) dengan impor PDF.js.',
                    en: 'Modular JavaScript HTML5 Canvas line-follower simulator (ViewCanvas, RawCanvas, BinaryCanvas) with PDF.js map importing and binary thresholding.'
                },
                details: {
                    id: [
                        'Arsitektur kanvas berlapis yang memisahkan lapisan tampilan (ViewCanvas), gambar mentah (RawCanvas), dan hasil biner (BinaryCanvas).',
                        'Mendukung impor langsung cetak biru lintasan berformat PDF menggunakan PDF.js.',
                        'Pipeline thresholding hitam-putih untuk ekstraksi garis lintasan dan simulasi pembacaan array sensor secara akurat.'
                    ],
                    en: [
                        'Layered canvas architecture separating display rendering (ViewCanvas), source image (RawCanvas), and binary mask (BinaryCanvas).',
                        'Direct PDF track blueprint importing powered by PDF.js.',
                        'Black-and-white thresholding pipeline for crisp line extraction and virtual sensor array testing.'
                    ]
                },
                stack: ['JavaScript', 'HTML5 Canvas', 'PDF.js'],
                url: 'https://github.com/Jeul-Si-666'
            },
            {
                id: 'dc-motor-pid',
                title: 'DC Motor PID Control & Serial Dashboard',
                category: ['embedded'],
                tag: { id: 'Embedded & Robotika', en: 'Embedded & Robotics' },
                summary: {
                    id: 'Sistem kendali RPM motor DC loop-tertutup real-time menggunakan Arduino Due, quadrature encoder, LCD lokal, dan dashboard telemetri USB.',
                    en: 'Real-time closed-loop DC motor RPM control using Arduino Due, quadrature encoder, onboard LCD/buttons, and bidirectional USB serial telemetry.'
                },
                details: {
                    id: [
                        'Pembacaan sinyal quadrature encoder berbasis interupsi perangkat keras pada Arduino Due untuk akurasi RPM real-time.',
                        'Algoritma kendali PID loop-tertutup dengan penalaan parameter langsung melalui tombol dan layar LCD onboard.',
                        'Komunikasi serial USB dua arah ke dashboard telemetri di laptop untuk pemantauan grafik respons kecepatan.'
                    ],
                    en: [
                        'Hardware-interrupt quadrature encoder decoding on Arduino Due for high-resolution real-time RPM feedback.',
                        'Closed-loop PID controller with live parameter tuning via onboard physical buttons and LCD readout.',
                        'Bidirectional USB serial telemetry streaming to a laptop dashboard for live step-response plotting.'
                    ]
                },
                stack: ['C++', 'Arduino Due', 'PID Control', 'USB Serial'],
                url: 'https://github.com/Jeul-Si-666'
            },
            {
                id: 'crm-catalog',
                title: 'Full-Stack CRM & Catalog Platform',
                category: ['web'],
                tag: { id: 'Web & Aplikasi', en: 'Web & Apps' },
                summary: {
                    id: 'Aplikasi web full-stack berbasis Django dan TypeScript dengan alur kerja CRM modular dan sistem pengelolaan media katalog produk.',
                    en: 'Full-stack Django and TypeScript web application featuring modular CRM workflows and structured product media management.'
                },
                details: {
                    id: [
                        'Arsitektur backend Django yang terstruktur untuk pengelolaan data pelanggan, riwayat interaksi, dan inventaris katalog.',
                        'Antarmuka frontend TypeScript dengan komponen unggah dan kurasi foto produk yang responsif.',
                        'Alur kerja CRM modular untuk mempermudah pelacakan prospek dan operasional bisnis.'
                    ],
                    en: [
                        'Structured Django backend architecture handling customer records, interaction logs, and product catalog data.',
                        'TypeScript frontend featuring responsive product media upload and gallery curation components.',
                        'Modular CRM pipelines designed to streamline lead tracking and daily operations.'
                    ]
                },
                stack: ['Django', 'TypeScript', 'Python'],
                url: 'https://github.com/Jeul-Si-666'
            },
            {
                id: 'nice-music',
                title: 'NiCe Music',
                category: ['web'],
                tag: { id: 'Mobile & Audio', en: 'Mobile & Audio' },
                summary: {
                    id: 'Pemutar musik lokal berbasis Flutter dengan antarmuka dark glassmorphism yang halus dan pipeline audio stream kustom.',
                    en: 'Local Flutter music streaming player featuring a smooth dark glassmorphism UI and a custom audio stream pipeline.'
                },
                details: {
                    id: [
                        'Antarmuka pemutar audio bergaya dark glassmorphism dengan transisi halus dan kontrol pemutaran yang responsif.',
                        'Pipeline audio stream kustom untuk pemutaran berkas musik lokal dengan latensi rendah.',
                        'Manajemen daftar putar dan ekstraksi metadata audio yang ringan di perangkat mobile.'
                    ],
                    en: [
                        'Dark glassmorphism audio player interface with fluid transitions and responsive playback controls.',
                        'Custom audio stream pipeline built for low-latency local music playback.',
                        'Lightweight playlist organization and local audio metadata indexing on mobile devices.'
                    ]
                },
                stack: ['Flutter', 'Dart', 'Audio Stream'],
                url: 'https://github.com/Jeul-Si-666'
            }
        ];

        const experienceData = [
            {
                role: { id: 'Japanese Language Trainee', en: 'Japanese Language Trainee' },
                company: 'JAPAN CREATE, LTD.',
                type: { id: 'Paruh Waktu', en: 'Part-time' },
                period: { id: 'Nov 2026 – Saat ini', en: 'Nov 2026 – Present' },
                location: 'Surabaya, Jawa Timur',
                current: true,
                points: {
                    id: [
                        'Mengikuti program pelatihan intensif bahasa Jepang yang diselenggarakan JAPAN CREATE bekerja sama dengan PENS.',
                        'Berfokus pada persiapan JLPT dan komunikasi profesional di lingkungan industri Jepang.'
                    ],
                    en: [
                        'Participating in an intensive Japanese language training program organized by JAPAN CREATE in collaboration with PENS.',
                        'Focusing on JLPT readiness and professional workplace communication in Japanese engineering environments.'
                    ]
                },
                skills: ['JLPT N5–N4', 'Bahasa Jepang']
            },
            {
                role: { id: 'Coach Robotik', en: 'Robotics Coach' },
                company: 'SD Muhammadiyah 4 Pucang Surabaya',
                type: { id: 'Paruh Waktu', en: 'Part-time' },
                period: { id: 'Sep 2026 – Saat ini', en: 'Sep 2026 – Present' },
                location: 'Surabaya',
                current: true,
                points: {
                    id: [
                        'Memperkenalkan logika dasar pemrograman kepada siswa melalui platform Maze-Solving Robot.',
                        'Melatih kemampuan berpikir kritis siswa kelas 4 SD dalam menyusun algoritma pencarian rute terpendek.'
                    ],
                    en: [
                        'Introducing fundamental programming logic to students using a Maze-Solving Robot platform.',
                        'Developing fourth-grade students’ critical thinking skills by challenging them to devise shortest-path strategies.'
                    ]
                },
                skills: ['Mobile Robotics', 'Pemrograman']
            },
            {
                role: { id: 'Hardware Embedded', en: 'Hardware Embedded' },
                company: 'EEPIS Robot Soccer On Wheeled (ERSOW)',
                type: { id: 'Purnawaktu', en: 'Full-time' },
                period: { id: 'Des 2024 – Mei 2026 · 1 thn 6 bln', en: 'Dec 2024 – May 2026 · 1 yr 6 mos' },
                location: 'Surabaya (PENS)',
                current: false,
                points: {
                    id: [
                        'Berkontribusi dalam riset dan pengembangan robot sepak bola beroda untuk Kontes Robot Indonesia (KRI).',
                        'Menangani integrasi elektronika, sistem tertanam, serta pemrograman firmware tingkat rendah menggunakan C dan C++.'
                    ],
                    en: [
                        'Contributed to the R&D of autonomous wheeled soccer robots for the Indonesian Robot Contest (KRI).',
                        'Handled electronics integration, embedded systems architecture, and low-level C/C++ firmware development.'
                    ]
                },
                skills: ['Electronics', 'Embedded Systems', 'C', 'C++']
            },
            {
                role: { id: 'Design and Documentation Staff', en: 'Design and Documentation Staff' },
                company: 'CAMPUS EXPO SMAPA',
                type: { id: 'Pekerja Lepas', en: 'Freelance' },
                period: { id: 'Mei 2024 – Feb 2026 · 1 thn 10 bln', en: 'May 2024 – Feb 2026 · 1 yr 10 mos' },
                location: 'Lamongan, Jawa Timur',
                current: false,
                points: {
                    id: [
                        'Merancang aset visual media sosial, poster promosi, dan event signage untuk menjaga konsistensi identitas acara.',
                        'Melaksanakan dokumentasi fotografi selama rangkaian kegiatan berlangsung.'
                    ],
                    en: [
                        'Designed social media graphics, promotional posters, and event signage to maintain a cohesive visual identity.',
                        'Covered event photography and visual documentation across the expo.'
                    ]
                },
                skills: ['Desain Grafis', 'Fotografi Acara']
            },
            {
                role: { id: 'Koor Seksi Bidang TIK', en: 'ICT Division Coordinator' },
                company: 'OSIS SMAN 1 Paciran',
                type: { id: 'Paruh Waktu', en: 'Part-time' },
                period: { id: '2021 – 2023', en: '2021 – 2023' },
                location: 'Lamongan',
                current: false,
                points: {
                    id: [
                        'Mengoordinasikan infrastruktur TIK organisasi, publikasi digital, serta produksi dan pengeditan video kegiatan.'
                    ],
                    en: [
                        'Coordinated student organization ICT operations, digital media, and event video production.'
                    ]
                },
                skills: ['Kepemimpinan', 'Pengeditan Video']
            }
        ];

        const skillsData = [
            {
                title: { id: 'Embedded & Robotika', en: 'Embedded & Robotics' },
                accent: 'text-indigo-300 border-indigo-400/20 bg-indigo-500/[0.08]',
                icon: `<svg class="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`,
                items: ['C', 'C++', 'STM32CubeMX', 'FreeRTOS', 'Arduino Due', 'PID Control']
            },
            {
                title: { id: 'Web & App Development', en: 'Web & App Development' },
                accent: 'text-sky-300 border-sky-400/20 bg-sky-500/[0.08]',
                icon: `<svg class="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
                items: ['Python', 'Django', 'JavaScript', 'TypeScript', 'Flutter', 'HTML5 Canvas', 'Tailwind CSS']
            },
            {
                title: { id: 'Desain, Tools & Bahasa', en: 'Design, Tools & Languages' },
                accent: 'text-violet-300 border-violet-400/20 bg-violet-500/[0.08]',
                icon: `<svg class="w-4 h-4 text-violet-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
                items: ['Git', 'Obsidian', 'Visual Identity & Media', 'Japanese (JLPT N5–N4)', 'English', 'Indonesian']
            }
        ];