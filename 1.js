document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo img");
    const buttons = document.querySelectorAll(".button");

    // تأثير التحريك عند تمرير الماوس على الشعار
    logo.addEventListener("mouseover", function () {
        logo.style.transform = "scale(1.1)";
    });

    logo.addEventListener("mouseout", function () {
        logo.style.transform = "scale(1)";
    });

    // تأثير التحريك عند تمرير الماوس على الأزرار
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
            button.style.backgroundColor = "#ff3300";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
            button.style.backgroundColor = "#ff6600";
        });
    });
});
