// بيانات الكليات والتخصصات مع الأيقونات المخصصة لكل تخصص
const facultiesData = [
    {
        name: "كلية الطب",
        icon: "🩺",
        majors: [
            { name: "دكتور في الطب", icon: "👨‍⚕️", image: "images/medicine_md.png" },
            { name: "الإدارة والسياسات الصحية", icon: "📊", image: "images/health_policy.png" }
        ]
    },
    {
        name: "كلية العلوم الطبية التطبيقية",
        icon: "🔬",
        majors: [
            { name: "العلوم الطبية المخبرية", icon: "🧪", image: "images/lab_sciences.png" },
            { name: "الإسعاف والطوارئ", icon: "🚑", image: "images/emergency.png" },
            { name: "تكنولوجيا الأشعة", icon: "🩻", image: "images/radiology.png" },
            { name: "البصريات", icon: "👓", image: "images/optometry.png" },
            { name: "العلاج الطبيعي", icon: "🦵", image: "images/physical_therapy.png" },
            { name: "العلاج الوظيفي", icon: "👐", image: "images/occupational_therapy.png" },
            { name: "السمع والنطق", icon: "🗣️", image: "images/speech_audiology.png" },
            { name: "العلاج التنفسي", icon: "🫁", image: "images/respiratory_therapy.png" },
            { name: "تكنولوجيا التخدير", icon: "💉", image: "images/anesthesia.png" },
            { name: "علم النفس السريري", icon: "🧠", image: "images/clinical_psychology.png" },
            { name: "التكنولوجيا الرقمية في صناعة الأسنان", icon: "🦷", image: "images/dental_tech.png" },
            { name: "فني صحة الفم والأسنان", icon: "🪥", image: "images/dental_hygiene.png" }
        ]
    },
    {
        name: "كلية الهندسة",
        icon: "⚙️",
        majors: [
            { name: "الهندسة الكيميائية", icon: "⚗️", image: "images/chem_eng.png" },
            { name: "الهندسة المدنية", icon: "🏗️", image: "images/civil_eng.png" },
            { name: "الهندسة الكهربائية", icon: "⚡", image: "images/elec_eng.png" },
            { name: "الهندسة الميكانيكية", icon: "⚙️", image: "images/mech_eng.png" },
            { name: "الهندسة الطبية الحيوية", icon: "🦾", image: "images/biomed_eng.png" },
            { name: "الهندسة الصناعية", icon: "🏭", image: "images/industrial_eng.png" },
            { name: "هندسة الطيران", icon: "✈️", image: "images/aero_eng.png" },
            { name: "تكنولوجيا صيانة الطائرات", icon: "🛠️", image: "images/aircraft_maint.png" },
            { name: "هندسة تصميم وتطوير المنتج", icon: "📐", image: "images/product_design.png" },
            { name: "الهندسة النووية", icon: "☢️", image: "images/nuclear_eng.png" },
            { name: "تكنولوجيا الأنظمة الكهربائية الذكية", icon: "🔌", image: "images/smart_grid.png" },
            { name: "تكنولوجيا الطائرات المسيرة", icon: "🚁", image: "images/drone_tech.png" }
        ]
    },
    {
        name: "كلية الصيدلة",
        icon: "💊",
        majors: [
            { name: "الصيدلة", icon: "💊", image: "images/pharmacy.png" },
            { name: "دكتور صيدلة", icon: "👨‍🔬", image: "images/pharm_d.png" },
            { name: "التصنيع الدوائي والبيولوجي", icon: "🧫", image: "images/biopharm.png" },
            { name: "علم التجميل التطبيقي", icon: "💄", image: "images/cosmetics.png" }
        ]
    },
    {
        name: "كلية التمريض",
        icon: "🏥",
        majors: [
            { name: "التمريض", icon: "👩‍⚕️", image: "images/nursing.png" },
            { name: "القبالة", icon: "👶", image: "images/midwifery.png" }
        ]
    },
    {
        name: "كلية طب الأسنان",
        icon: "🦷",
        majors: [
            { name: "دكتور في طب الأسنان", icon: "🦷", image: "images/dentistry.png" }
        ]
    },
    {
        name: "كلية الزراعة",
        icon: "🌱",
        majors: [
            { name: "التربة والري", icon: "💧", image: "images/soil_irrigation.png" },
            { name: "الزراعة الرقمية", icon: "🚜", image: "images/digital_agri.png" },
            { name: "التغذية السريرية", icon: "🥗", image: "images/clinical_nutrition.png" },
            { name: "تكنولوجيا وعلوم النبات", icon: "🌿", image: "images/plant_sciences.png" },
            { name: "تكنولوجيا وعلوم الحيوان", icon: "🐄", image: "images/animal_sciences.png" }
        ]
    },
    {
        name: "كلية الطب البيطري",
        icon: "🐾",
        majors: [
            { name: "دكتور في الطب البيطري", icon: "🐾", image: "images/vet_med.png" }
        ]
    },
    {
        name: "كلية تكنولوجيا الحاسوب والمعلومات",
        icon: "💻",
        majors: [
            { name: "هندسة الحاسوب", icon: "💻", image: "images/comp_eng.png" },
            { name: "علوم الحاسوب", icon: "🖥️", image: "images/cs.png" },
            { name: "هندسة وأمن شبكات الحاسوب", icon: "🌐", image: "images/network_security.png" },
            { name: "هندسة البرمجيات", icon: "⌨️", image: "images/se.png" },
            { name: "الأمن السيبراني", icon: "🛡️", image: "images/cyber_security.png" },
            { name: "علم البيانات", icon: "📈", image: "images/data_science.png" },
            { name: "الذكاء الاصطناعي", icon: "🤖", image: "images/ai.png" },
            { name: "إنترنت الأشياء", icon: "📡", image: "images/iot.png" },
            { name: "تصميم وتطوير ألعاب الحاسوب", icon: "🎮", image: "images/game_dev.png" },
            { name: "نظم المعلومات الصحية", icon: "🏥", image: "images/health_informatics.png" },
            { name: "علم الروبوتات", icon: "🤖", image: "images/robotics.png" }
        ]
    },
    {
        name: "كلية العلوم والآداب",
        icon: "📐",
        majors: [
            { name: "اللغة الإنجليزية واللغويات التطبيقية", icon: "📚", image: "images/english.png" },
            { name: "الرياضيات", icon: "🔢", image: "images/math.png" },
            { name: "التقانات الحيوية والهندسة الوراثية", icon: "🧬", image: "images/biotech.png" },
            { name: "الكيمياء التطبيقية", icon: "🧪", image: "images/chemistry.png" },
            { name: "الفيزياء التطبيقية", icon: "⚛️", image: "images/physics.png" }
        ]
    },
    {
        name: "معهد النانوتكنولوجي",
        icon: "⚛️",
        majors: [
            { name: "النانوتكنولوجي وعلم المواد", icon: "🔬", image: "images/nanotech.png" }
        ]
    },
    {
        name: "كلية العمارة والتصميم",
        icon: "🏛️",
        majors: [
            { name: "العمارة", icon: "🏛️", image: "images/architecture.png" },
            { name: "هندسة التخطيط الحضري والبيئي", icon: "🏙️", image: "images/urban_planning.png" },
            { name: "تكنولوجيا الأفلام والوسائط المتعددة", icon: "🎬", image: "images/film_tech.png" },
            { name: "تصميم الرسوم المتحركة والألعاب", icon: "🎨", image: "images/animation_design.png" }
        ]
    }
];

let currentView = "faculties"; 
let selectedFacultyIndex = null;

// تشغيل الواجهة عند الفتح
window.onload = function() {
    renderFaculties();
};

// عرض كروت الكليات
function renderFaculties() {
    currentView = "faculties";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("facultiesSection").style.display = "block";
    document.getElementById("majorsSection").style.display = "none";
    document.getElementById("planSection").style.display = "none";

    const facultiesGrid = document.getElementById("facultiesGrid");
    facultiesGrid.innerHTML = "";

    facultiesData.forEach((faculty, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openFaculty(index);
        card.innerHTML = `
            <div class="card-icon">${faculty.icon}</div>
            <div class="card-title">${faculty.name}</div>
        `;
        facultiesGrid.appendChild(card);
    });
}

// فتح كروت التخصصات مع أيقونة كل تخصص
function openFaculty(facultyIndex) {
    currentView = "majors";
    selectedFacultyIndex = facultyIndex;
    const faculty = facultiesData[facultyIndex];

    document.getElementById("facultiesSection").style.display = "none";
    document.getElementById("majorsSection").style.display = "block";
    document.getElementById("planSection").style.display = "none";
    
    // تحديث شريط المسار
    document.getElementById("navBar").style.display = "flex";
    document.getElementById("currentPath").textContent = `الكليات ➔ ${faculty.name}`;
    document.getElementById("facultyTitle").textContent = `تخصصات ${faculty.name}`;

    const majorsGrid = document.getElementById("majorsGrid");
    majorsGrid.innerHTML = "";

    faculty.majors.forEach((major, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openPlan(index);
        card.innerHTML = `
            <div class="card-icon">${major.icon}</div>
            <div class="card-title">${major.name}</div>
        `;
        majorsGrid.appendChild(card);
    });
}

// عرض صورة الخطة
function openPlan(majorIndex) {
    currentView = "plan";
    const faculty = facultiesData[selectedFacultyIndex];
    const major = faculty.majors[majorIndex];

    document.getElementById("majorsSection").style.display = "none";
    document.getElementById("planSection").style.display = "block";

    document.getElementById("currentPath").textContent = `الكليات ➔ ${faculty.name} ➔ ${major.name}`;
    document.getElementById("selectedTitle").textContent = `خطة تخصص: ${major.name}`;
    
    const planImage = document.getElementById("planImage");
    const downloadBtn = document.getElementById("downloadBtn");

    planImage.src = major.image;
    downloadBtn.href = major.image;
}

// زر الرجوع للخلف
function goBack() {
    if (currentView === "plan") {
        openFaculty(selectedFacultyIndex);
    } else if (currentView === "majors") {
        renderFaculties();
    }
}

// فتح الصورة في نافذة مستقلة
function openFullscreen(img) {
    window.open(img.src, '_blank');
}
