
// تشغيل السلايدر تلقائيًا مع أزرار تحكم
let images = ["a1.jpg", "j2.jpg", "m3.jpg"];
let index = 0;
let sliderImg = document.getElementById("ص-img");

function nextSlide() {
    index = (index + 1) % images.length;
    sliderImg.src = images[index];
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    sliderImg.src = images[index];
}

// تشغيل تلقائي كل 3 ثواني
setInterval(nextSlide, 3000);

// تحسين البحث
function showResults() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let resultsDiv = document.getElementById("search-results");
    let pages = {
        "الرئيسية": "ex1.html",
        "عن الجولف": "ex2.html",
        "قوانين الجولف": "ex3.html",
        "ملاعب الجولف": "ex4.html",
        "أشهر اللاعبين": "ex5.html",
        "البطولات": "ex6.html",
        "معرض الصور": "ex7.html",
        "الأخبار": "ex8.html",
        "اتصل بنا": "ex9.html"
    };

    resultsDiv.innerHTML = "";
    if (input !== "") {
        for (let page in pages) {
            if (page.toLowerCase().includes(input)) {
                let div = document.createElement("div");
                div.textContent = page;
                div.onclick = function () {
                    window.location.href = pages[page];
                };
                resultsDiv.appendChild(div);
            }
        }
        resultsDiv.style.display = "block";
    } else {
        resultsDiv.style.display = "none";
    }
}

// جعل قائمة التنقل متجاوبة
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
function openBookingForm() {
    alert("تم فتح نموذج الحجز! (يمكنك استبداله بنافذة حقيقية لاحقًا)");
}
function addPlayerFields() {
    let playerCount = document.getElementById("players").value;
    let playerContainer = document.getElementById("player-names");
    
    // مسح أي أسماء سابقة
    playerContainer.innerHTML = "";

    for (let i = 1; i < playerCount; i++) {
        let label = document.createElement("label");
        label.textContent = `اسم اللاعب ${i + 1}:`;

        let input = document.createElement("input");
        input.type = "text";
        input.name = `player${i}`;
        input.required = true;

        playerContainer.appendChild(label);
        playerContainer.appendChild(input);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("supportForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            alert("تم إرسال رسالتك بنجاح! سنرد عليك قريبًا.");
            form.reset();
        } else {
            alert("يرجى ملء جميع الحقول قبل الإرسال.");
        }
    });
});


document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;

    if (name && email && issue) {
        document.getElementById('message').innerHTML = `<p>شكرًا لك، ${name}!</p><p>تم إرسال استفسارك بنجاح.</p>`;
        document.getElementById('support-form').reset();
    } else {
        document.getElementById('message').innerHTML = '<p style="color: red;">يرجى تعبئة جميع الحقول.</p>';
    }
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('response-message').innerHTML = `<p>شكرًا لك، ${name}!</p><p>تم إرسال رسالتك بنجاح. سنرد عليك قريبًا.</p>`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response-message').innerHTML = '<p style="color: red;">يرجى تعبئة جميع الحقول.</p>';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    let logoContainer = document.createElement("div");
    logoContainer.innerHTML = `
        <div class="logo-container">
            <img src="logo.png" alt="sx.jpg" class="logo">
        </div>
    `;
    document.body.prepend(logoContainer);
});

// دالة لإضافة الحقول الخاصة باللاعبين حسب العدد المحدد
function addPlayerFields() {
    var playerCount = document.getElementById("players").value;
    var playerNamesDiv = document.getElementById("player-names");
    playerNamesDiv.innerHTML = ''; // مسح الحقول السابقة

    for (var i = 1; i <= playerCount; i++) {
        var label = document.createElement("label");
        label.setAttribute("for", "player" + i);
        label.textContent = "اسم اللاعب " + i + ":";
        var input = document.createElement("input");
        input.type = "text";
        input.id = "player" + i;
        playerNamesDiv.appendChild(label);
        playerNamesDiv.appendChild(input);
    }
}

document.getElementById("loginButton").addEventListener("click", function () {
    window.location.href = "ex1.html"; // استبدل "index.html" بعنوان الصفحة الرئيسية لديك
});


function addPlayerFields() {
    var playerCount = document.getElementById('players').value;
    var playerNamesDiv = document.getElementById('player-names');
    playerNamesDiv.innerHTML = ''; // تنظيف المحتوى القديم

    for (var i = 0; i < playerCount; i++) {
        var label = document.createElement('label');
        label.setAttribute('for', 'player' + (i + 1));
        label.innerHTML = 'اسم اللاعب ' + (i + 1) + ':';
        
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'player' + (i + 1));
        input.setAttribute('required', 'true');

        playerNamesDiv.appendChild(label);
        playerNamesDiv.appendChild(input);
    }
}

