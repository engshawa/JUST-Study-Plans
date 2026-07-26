// بيانات الكليات والتخصصات مع الأيقونات المخصصة لكل تخصص
const facultiesData = [
    {
        name: "كلية الطب",
        icon: "🩺",
        majors: [
            { name: "دكتور في الطب", icon: "👨‍⚕️", image: "images/medicine_md.jpg" },
            { name: "الإدارة والسياسات الصحية", icon: "📊", image: "images/health_policy.jpg" }
        ]
    },
    {
        name: "كلية العلوم الطبية التطبيقية",
        icon: "🔬",
        majors: [
            { name: "العلوم الطبية المخبرية", icon: "🧪", image: "images/lab_sciences.jpg" },
            { name: "الإسعاف والطوارئ", icon: "🚑", image: "images/emergency.jpg" },
            { name: "تكنولوجيا الأشعة", icon: "🩻", image: "images/radiology.jpg" },
            { name: "البصريات", icon: "👓", image: "images/optometry.jpg" },
            { name: "العلاج الطبيعي", icon: "🦵", image: "images/physical_therapy.jpg" },
            { name: "العلاج الوظيفي", icon: "👐", image: "images/occupational_therapy.jpg" },
            { name: "السمع والنطق", icon: "🗣️", image: "images/speech_audiology.jpg" },
            { name: "العلاج التنفسي", icon: "🫁", image: "images/respiratory_therapy.jpg" },
            { name: "تكنولوجيا التخدير", icon: "💉", image: "images/anesthesia.jpg" }
        ]
    },
    {
        name: "كلية الهندسة",
        icon: "⚙️",
        majors: [
            { name: "الهندسة الكيميائية", icon: "⚗️", image: "images/chem_eng.jpg" },
            { name: "الهندسة المدنية", icon: "🏗️", image: "images/civil_eng.jpg" },
            { name: "الهندسة الكهربائية", icon: "⚡", image: "images/elec_eng.jpg" },
            { name: "الهندسة الميكانيكية", icon: "⚙️", image: "images/mech_eng.jpg" },
            { name: "الهندسة الطبية الحيوية", icon: "🦾", image: "images/biomed_eng.jpg" },
            { name: "الهندسة الصناعية", icon: "🏭", image: "images/industrial_eng.jpg" },
            { name: "هندسة الطيران", icon: "✈️", image: "images/aero_eng.jpg" },
            { name: "تكنولوجيا صيانة الطائرات", icon: "🛠️", image: "images/aircraft_maint.jpg" },
            { name: "هندسة تصميم وتطوير المنتج", icon: "📐", image: "images/product_design.jpg" },
            { name: "الهندسة النووية", icon: "☢️", image: "images/nuclear_eng.jpg" },
            { name: "تكنولوجيا الطائرات المسيرة", icon: "🚁", image: "images/drone_tech.jpg" }
        ]
    },
    {
        name: "كلية الصيدلة",
        icon: "💊",
        majors: [
            { name: "الصيدلة", icon: "💊", image: "images/pharmacy.jpg" },
            { name: "دكتور صيدلة", icon: "👨‍🔬", image: "images/pharm_d.jpg" },
            { name: "التصنيع الدوائي والبيولوجي", icon: "🧫", image: "images/biopharm.jpg" }
        ]
    },
    {
        name: "كلية التمريض",
        icon: "🏥",
        majors: [
            { name: "التمريض", icon: "👩‍⚕️", image: "images/nursing.jpg" },
            { name: "القبالة", icon: "👶", image: "images/midwifery.jpg" }
        ]
    },
    {
        name: "كلية طب الأسنان",
        icon: "🦷",
        majors: [
            { name: "دكتور في طب الأسنان", icon: "🦷", image: "images/dentistry.jpg" }
        ]
    },
    {
        name: "كلية الزراعة",
        icon: "🌱",
        majors: [
            { name: "التغذية السريرية", icon: "🥗", image: "images/clinical_nutrition.jpg" },
            { name: "تكنولوجيا وعلوم النبات", icon: "🌿", image: "images/plant_sciences.jpg" },
            { name: "تكنولوجيا وعلوم الحيوان", icon: "🐄", image: "images/animal_sciences.jpg" }
        ]
    },
    {
        name: "كلية الطب البيطري",
        icon: "🐾",
        majors: [
            { name: "دكتور في الطب البيطري", icon: "🐾", image: "images/vet_med.jpg" }
        ]
    },
    {
        name: "كلية تكنولوجيا الحاسوب والمعلومات",
        icon: "💻",
        majors: [
            { name: "هندسة الحاسوب", icon: "💻", image: "images/comp_eng.jpg" },
            { name: "علوم الحاسوب", icon: "🖥️", image: "images/cs.jpg" },
            { name: "هندسة وأمن شبكات الحاسوب", icon: "🌐", image: "images/network_security.jpg" },
            { name: "هندسة البرمجيات", icon: "⌨️", image: "images/se.jpg" },
            { name: "الأمن السيبراني", icon: "🛡️", image: "images/cyber_security.jpg" },
            { name: "علم البيانات", icon: "📈", image: "images/data_science.jpg" },
            { name: "الذكاء الاصطناعي", icon: "🤖", image: "images/ai.jpg" },
            { name: "إنترنت الأشياء", icon: "📡", image: "images/iot.jpg" },
            { name: "تصميم وتطوير ألعاب الحاسوب", icon: "🎮", image: "images/game_dev.jpg" },
            { name: "نظم المعلومات الصحية", icon: "🏥", image: "images/health_informatics.jpg" },
            { name: "علم الروبوتات", icon: "🤖", image: "images/robotics.jpg" }
        ]
    },
    {
        name: "كلية العلوم والآداب",
        icon: "📐",
        majors: [
            { name: "اللغة الإنجليزية واللغويات التطبيقية", icon: "📚", image: "images/english.jpg" },
            { name: "الرياضيات", icon: "🔢", image: "images/math.jpg" },
            { name: "التقانات الحيوية والهندسة الوراثية", icon: "🧬", image: "images/biotech.jpg" },
            { name: "الكيمياء التطبيقية", icon: "🧪", image: "images/chemistry.jpg" },
            { name: "الفيزياء التطبيقية", icon: "⚛️", image: "images/physics.jpg" }
        ]
    },
    {
        name: "كلية العمارة والتصميم",
        icon: "🏛️",
        majors: [
            { name: "العمارة", icon: "🏛️", image: "images/architecture.jpg" },
            { name: "هندسة التخطيط الحضري والبيئي", icon: "🏙️", image: "images/urban_planning.jpg" }
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
