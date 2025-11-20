const programList = [
    {
        icon: "fas fa-drafting-compass",
        title: "Desain Pemodelan dan Informasi Bangunan",
        desc: "Mempelajari perencanaan dan perancangan bangunan dengan teknologi informasi.",
        skills: ["Gambar Teknik", "AutoCAD", "3D Modeling", "Struktur Bangunan"]
    },
    {
        icon: "fas fa-code",
        title: "Pengembangan Perangkat Lunak dan GIM",
        desc: "Mempelajari pengembangan aplikasi dan sistem informasi berbasis komputer.",
        skills: ["Pemrograman Berorientasi Objek", "Basis Data", "Pemrograman Web & Mobile", "Rekayasa Perangkat Lunak"]
    },
    {
        icon: "fas fa-microchip",
        title: "Teknik Elektronika",
        desc: "Mempelajari sistem elektronika, rangkaian digital, dan perangkat elektronik.",
        skills: ["Rangkaian Elektronika", "Digital dan Mikroprosesor", "Instrumentasi", "Kontrol Otomatis"]
    },
    {
        icon: "fas fa-solar-panel",
        title: "Teknik Energi Terbarukan",
        desc: "Mempelajari pemanfaatan sumber energi ramah lingkungan dan terbarukan.",
        skills: ["Energi Surya", "Energi Angin", "Energi Biomassa", "Konservasi Energi"]
    },
    {
        icon: "fas fa-map-marked-alt",
        title: "Teknik Geomatika",
        desc: "Mempelajari pengukuran, pemetaan, dan sistem informasi geografis.",
        skills: ["Survey dan Pemetaan", "Sistem Informasi Geografis", "Penginderaan Jauh", "Kartografi Digital"]
    },
    {
        icon: "fas fa-bolt",
        title: "Teknik Ketenagalistrikan",
        desc: "Mempelajari sistem pembangkit, transmisi, dan distribusi tenaga listrik.",
        skills: ["Instalasi Listrik", "Pembangkit Tenaga Listrik", "Transmisi dan Distribusi", "Kontrol Motor Listrik"]
    },
    {
        icon: "fas fa-hard-hat",
        title: "Teknik Konstruksi dan Perumahan",
        desc: "Mempelajari teknik konstruksi bangunan dan pengembangan perumahan.",
        skills: ["Konstruksi Bangunan", "Manajemen Konstruksi", "Utilitas Bangunan", "Estimat Biaya"]
    },
    {
        icon: "fas fa-car",
        title: "Teknik Otomotif",
        desc: "Mempelajari perawatan, perbaikan, dan teknologi kendaraan bermotor.",
        skills: ["Mesin Otomotif", "Kelistrikan Kendaraan", "Sistem Pemindah Tenaga", "Service dan Perawatan"]
    },
    {
        icon: "fas fa-cogs",
        title: "Teknik Pemesinan",
        desc: "Mempelajari proses pembuatan komponen dengan mesin perkakas.",
        skills: ["Gambar Teknik", "Mesin Bubut dan Frais", "CNC Programming", "Metrologi Industri"]
    },
    {
        icon: "fas fa-fire",
        title: "Teknik Pengelasan dan Fabrikasi Logam",
        desc: "Mempelajari teknik penyambungan logam dan pembuatan struktur logam.",
        skills: ["Teknik Pengelasan", "Fabrikasi Logam", "Kualitas Las", "Gambar Fabrikasi"]
    },
    {
        icon: "fas fa-building",
        title: "Teknik Perawatan Gedung",
        desc: "Mempelajari pemeliharaan dan perawatan sistem utilitas gedung.",
        skills: ["Utilitas Gedung", "AC dan Ventilasi", "Plumbing System", "Manajemen Perawatan"]
    }
];

let menuItems = [
    { text: "Beranda", href: "homepage.html" },
    {
        text: "Profil",
        href: "#",
        submenu: [
            { text: "Lihat Profil", href: "profil_singkat" },
            { text: "Struktur Organisasi", href: "struktur_organisasi" },
            { text: "Visi & Misi", href: "visi_misi" },
            { text: "Galeri", href: "galeri" }
        ]
    },
    { text: "Jurusan", href: "jurusan.html" },
    { text: "Fasilitas", href: "fasilitas" },
    { text: "Pendaftaran", href: "pendaftaran" },
    { text: "Berita", href: "berita" }
];

let quickLinks = [
    { text: "Beranda", link: "homepage" },
    { text: "Profil", link: "profil_singkat" },
    { text: "Kompetensi Keahlian", link: "jurusan" },
    { text: "Fasilitas", link: "fasilitas" },
    { text: "Berita", link: "berita" }
];

let socials = [
    {
        icon: "fab fa-youtube fa-lg",
        link: "https://www.youtube.com/@officialsmkn1palangkaraya272/videos"
    },
    {
        icon: "fab fa-instagram fa-lg",
        link: "https://www.instagram.com/official_smkn1palangkaraya"
    },
    {
        icon: "fab fa-facebook fa-lg",
        link: "https://www.facebook.com/EsemkaOnePKY/"
    }
];

let contacts = [
    { icon: "fas fa-map-marker-alt", text: "Jl. Tambun Bungai No. 77, Kelurahan Langkai, Kecamatan Pahandut, Kota Palangkaraya, Provinsi Kalimantan Tengah. " },
    { icon: "fas fa-phone", text: "(0536) 4271170" },
    { icon: "fas fa-envelope", text: "smkn.1palangkaraya@yahoo.co.id" },
    { icon: "fas fa-clock", text: "Senin - Jumat: 07.00 - 16.00" }
];

const bootstrapLink = document.createElement("link");
bootstrapLink.rel = "stylesheet";
bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css";
document.head.appendChild(bootstrapLink);

const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
document.head.appendChild(faLink);

const aosCss = document.createElement("link");
aosCss.rel = "stylesheet";
aosCss.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
document.head.appendChild(aosCss);

const aosJs = document.createElement("script");
aosJs.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
aosJs.defer = true;
document.body.appendChild(aosJs);

aosJs.onload = () => {
    document.querySelectorAll(".card").forEach(card => {
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "800");
    });
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
};

document.addEventListener("DOMContentLoaded", () => {
    document.title = "SMK Negeri 1 Palangka Raya";

    document.body.prepend(createNavbar());
    const footerContainer = document.getElementById("footerContainer")
    if (footerContainer) footerContainer.appendChild(createFooter());
    else console.warn("Footer with id 'footerContainer' not found. You may need to create it manually.");
});

function createNavbar() {
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top";

    const container = document.createElement("div");
    container.className = "container";

    const brand = document.createElement("a");
    brand.className = "navbar-brand fw-bold";
    brand.href = "homepage";
    brand.innerHTML = "SMK Negeri 1 Palangka Raya"

    const toggler = document.createElement("button");
    toggler.className = "navbar-toggler";
    toggler.type = "button";
    toggler.setAttribute("data-bs-toggle", "collapse");
    toggler.setAttribute("data-bs-target", "#navbarNav");
    toggler.innerHTML = `<span class="navbar-toggler-icon"></span>`;

    const collapse = document.createElement("div");
    collapse.className = "collapse navbar-collapse";
    collapse.id = "navbarNav";

    const ul = document.createElement("ul");
    ul.className = "navbar-nav ms-auto";

    menuItems.forEach(item => {
        const li = document.createElement("li");

        if (item.submenu) {
            li.className = "nav-item dropdown";

            const a = document.createElement("a");
            a.className = "nav-link dropdown-toggle";
            a.href = item.href;
            a.textContent = item.text;
            a.setAttribute("data-bs-toggle", "dropdown");
            a.setAttribute("role", "button");
            a.setAttribute("aria-expanded", "false");

            const dropdown = document.createElement("ul");
            dropdown.className = "dropdown-menu";

            item.submenu.forEach(sub => {
                const subLi = document.createElement("li");
                const subA = document.createElement("a");
                subA.className = "dropdown-item";
                subA.href = sub.href;
                subA.textContent = sub.text;
                subLi.appendChild(subA);
                dropdown.appendChild(subLi);
            });

            li.appendChild(a);
            li.appendChild(dropdown);
        }

        else {
            li.className = "nav-item";
            const a = document.createElement("a");
            a.className = "nav-link";
            a.href = item.href;
            a.textContent = item.text;
            a.target = "_self";
            a.rel = "noopener";
            li.appendChild(a);
        }

        ul.appendChild(li);
    });
    collapse.appendChild(ul);
    container.appendChild(brand);
    container.appendChild(toggler);
    container.appendChild(collapse);
    nav.appendChild(container);

    return nav;
}

function createHero(breadcrumbs) {

    const section = document.createElement("section");
    section.className = "hero-section";

    const container = document.createElement("div");
    container.className = "container";

    const h1 = document.createElement("h1");
    h1.className = "display-4 fw-bold mb-4";
    h1.textContent = "SMK Negeri 1 Palangka Raya";

    const p = document.createElement("p");
    p.className = "lead mb-4";
    p.textContent = "Mencetak lulusan yang berakhlak mulia, profesional, dan berwawasan global. SILU BELIA PROBAL";

    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "breadcrumb");

    const ol = document.createElement("ol");
    ol.className = "breadcrumb text-white justify-content-center";

    breadcrumbs.forEach((bc, index) => {
        const li = document.createElement("li");
        li.className = "breadcrumb-item";

        const isLast = index === breadcrumbs.length - 1;

        if (!isLast) {
            const a = document.createElement("a");
            a.className = "text-white";
            a.href = bc.href;
            a.textContent = bc.text;
            a.target = "_self";
            a.rel = "noopener";
            li.appendChild(a);
        } else {
            li.classList.add("active", "text-white");
            li.setAttribute("aria-current", "page");
            li.textContent = bc.text;
        }

        ol.appendChild(li);
    });

    nav.appendChild(ol);

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(nav);
    section.appendChild(container);

    return section;
}

function createFooter() {
    const outerContainer = document.createElement("footer");
    outerContainer.className = "bg-dark text-white pt-5 pb-3";

    const container = document.createElement("div");
    container.className = "container";

    const row = document.createElement("div");
    row.className = "row";

    const colInfo = document.createElement("div");
    colInfo.className = "col-lg-4 col-md-6 mb-4";

    const infoHeader = document.createElement("div");
    infoHeader.className = "d-flex align-items-center mb-3";

    const infoIcon = document.createElement("i");
    infoIcon.className = "fas fa-school fa-2x text-white me-3";

    const infoTitle = document.createElement("h5");
    infoTitle.className = "fw-bold mb-0";
    infoTitle.appendChild(document.createTextNode("SMK Negeri 1 Palangka Raya"));

    infoHeader.appendChild(infoIcon);
    infoHeader.appendChild(infoTitle);

    const infoText = document.createElement("p");
    infoText.className = "text-light";
    infoText.appendChild(
        document.createTextNode(
            `"Maju Bersama, Skensa Bisa, Hebat!" - Mencetak generasi unggul yang siap kerja dan berwirausaha dengan kompetensi keahlian yang relevan dengan kebutuhan industri.`
        )
    );

    const socialDiv = document.createElement("div");
    socialDiv.className = "mt-4";

    socials.forEach(social => {
        const a = document.createElement("a");
        a.href = social.link;
        a.className = "text-white me-3";
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        const icon = document.createElement("i");
        icon.className = social.icon;

        a.appendChild(icon);
        socialDiv.appendChild(a);
    });

    colInfo.appendChild(infoHeader);
    colInfo.appendChild(infoText);
    colInfo.appendChild(socialDiv);

    const colLinks = document.createElement("div");
    colLinks.className = "col-lg-2 col-md-6 mb-4";

    const linkTitle = document.createElement("h5");
    linkTitle.className = "fw-bold border-bottom border-white pb-2 mb-3";
    linkTitle.appendChild(document.createTextNode("Tautan Cepat"));

    const ulLinks = document.createElement("ul");
    ulLinks.className = "list-unstyled";

    quickLinks.forEach(quickLink => {
        const li = document.createElement("li");
        li.className = "mb-2";

        const a = document.createElement("a");
        a.href = quickLink.link;
        a.className = "text-white text-decoration-none";
        a.target = "_self";
        a.rel = "noopener noreferrer";

        const icon = document.createElement("i");
        icon.className = "fas fa-chevron-right text-white me-2";

        a.appendChild(icon);
        a.appendChild(document.createTextNode(quickLink.text));

        li.appendChild(a);
        ulLinks.appendChild(li);
    });

    colLinks.appendChild(linkTitle);
    colLinks.appendChild(ulLinks);

    const colContact = document.createElement("div");
    colContact.className = "col-lg-3 col-md-6 mb-4";

    const contactTitle = document.createElement("h5");
    contactTitle.className = "fw-bold border-bottom border-white pb-2 mb-3";
    contactTitle.appendChild(document.createTextNode("Kontak Kami"));

    const ulContact = document.createElement("ul");
    ulContact.className = "list-unstyled";

    contacts.forEach(item => {
        const li = document.createElement("li");
        li.className = "mb-3 d-flex";

        const icon = document.createElement("i");
        icon.className = item.icon + " text-white me-3 mt-1";

        const span = document.createElement("span");
        span.appendChild(document.createTextNode(item.text));

        li.appendChild(icon);
        li.appendChild(span);
        ulContact.appendChild(li);
    });

    colContact.appendChild(contactTitle);
    colContact.appendChild(ulContact);

    const colMap = document.createElement("div");
    colMap.className = "col-lg-3 col-md-6 mb-4";

    const mapTitle = document.createElement("h5");
    mapTitle.className = "fw-bold border-bottom border-white pb-2 mb-3";
    mapTitle.appendChild(document.createTextNode("Lokasi Kami"));

    const ratio = document.createElement("div");
    ratio.className = "ratio ratio-16x9 rounded-3 overflow-hidden";

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.844306083429!2d113.92105567423928!3d-2.2123792373380358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb2593a3d0619%3A0x4629c76a335e11ac!2sSMK%20Negeri%201%20Palangka%20Raya!5e0!3m2!1sen!2sid!4v1763602996100!5m2!1sen!2sid";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    ratio.appendChild(iframe);
    colMap.appendChild(mapTitle);
    colMap.appendChild(ratio);

    row.appendChild(colInfo);
    row.appendChild(colLinks);
    row.appendChild(colContact);
    row.appendChild(colMap);

    const hr = document.createElement("hr");
    hr.className = "my-4";

    const bottomRow = document.createElement("div");
    bottomRow.className = "align-items-center";

    const copyright = document.createElement("p");
    copyright.className = "mb-0 text-center";
    copyright.appendChild(document.createTextNode("© 2025 Muhammad Amin | Powered by Gamelab."));
    bottomRow.appendChild(copyright);

    container.appendChild(row);
    container.appendChild(hr);
    container.appendChild(bottomRow);
    outerContainer.appendChild(container);

    return outerContainer;
}

function createSectionHeader(title, description) {
    const wrapper = document.createElement("div");
    wrapper.className = "section-header text-center mb-5";

    const h2 = document.createElement("h2");
    h2.className = "mb-3";
    h2.textContent = title;
    wrapper.appendChild(h2);

    const p = document.createElement("p");
    p.className = "mb-0";
    p.textContent = description;
    wrapper.appendChild(p);

    return wrapper;
}

function createMajorSection(isAlreadyExpanded = false) {
    const section = document.createElement("section");
    section.className = "py-5";

    const container = document.createElement("div");
    container.className = "container";

    const sectionHeader = createSectionHeader("Kompetensi Keahlian", `Kami menyediakan ${programList.length} kompetensi keahlian unggulan untuk masa depan Anda`);
    container.appendChild(sectionHeader);

    const row = document.createElement("div");
    row.className = "row g-3";
    row.id = "program-grid";

    const initialCount = 3;
    const itemsToShow = isAlreadyExpanded ? programList.length : initialCount;

    programList.slice(0, itemsToShow).forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        const card = document.createElement("div");
        card.className = "card h-100";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "800");

        const cardBody = document.createElement("div");
        cardBody.className = "card-body text-center p-4";

        const icon = document.createElement("i");
        icon.className = `${item.icon} fa-3x text-primary mb-3`;

        const title = document.createElement("h4");
        title.className = "card-title";
        title.textContent = item.title;

        const desc = document.createElement("p");
        desc.className = "card-text";
        desc.textContent = item.desc;

        const ul = document.createElement("ul");
        ul.className = "requirement-list text-start";
        item.skills.forEach(req => {
            const li = document.createElement("li");
            li.textContent = req;
            ul.appendChild(li);
        });

        cardBody.append(icon, title, desc, ul);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    container.appendChild(row);

    if (!isAlreadyExpanded) {
        const btnWrapper = document.createElement("div");
        btnWrapper.className = "text-center pt-4";

        const btn = document.createElement("button");
        btn.id = "btnShowMore";
        btn.className = "btn btn-primary px-4 py-2";
        btn.textContent = "Lihat Jurusan Lainnya";

        btn.addEventListener("click", () => {
            const newSection = createMajorSection(true);
            section.replaceWith(newSection);
        });

        btnWrapper.appendChild(btn);
        container.appendChild(btnWrapper);
    }

    section.appendChild(container);
    return section;
}

function createSimpleMajorSection() {
    const ul = document.createElement("ul");
    ul.className = "list-group";

    programList.forEach(jurusan => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = jurusan.title;
        ul.appendChild(li);
    });

    return ul;
}

function createVideoCard(videoUrl, title, description) {
    const card = document.createElement("div");
    card.className = "card h-100 video-card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-0";

    const ratio = document.createElement("div");
    ratio.className = "ratio ratio-16x9";

    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = videoUrl;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    ratio.appendChild(iframe);

    const contentDiv = document.createElement("div");
    contentDiv.className = "p-3";

    const h5 = document.createElement("h5");
    h5.textContent = title;

    const p = document.createElement("p");
    p.className = "text-muted";
    p.textContent = description;

    contentDiv.append(h5, p);
    cardBody.append(ratio, contentDiv);
    card.appendChild(cardBody);

    return card;
}
