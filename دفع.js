document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
    const paymentMessage = document.getElementById("payment-message");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // جلب القيم المدخلة
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const cardNumber = document.getElementById("card-number").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        // التحقق من إدخال جميع الحقول
        if (!name || !email || !phone || !cardNumber || !expiry || !cvv) {
            showMessage("يجب ملء جميع الحقول!", "red");
            return;
        }

        // التحقق من صحة رقم البطاقة (يجب أن يكون 16 رقمًا)
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            showMessage("رقم البطاقة غير صالح!", "red");
            return;
        }

        // التحقق من صحة CVV (يجب أن يكون 3 أرقام)
        if (cvv.length !== 3 || isNaN(cvv)) {
            showMessage("رمز CVV غير صالح!", "red");
            return;
        }

        // عرض رسالة نجاح ثم الانتقال إلى صفحة التأكيد بعد 5 ثواني
        showMessage("تم الدفع بنجاح!", "green");
        setTimeout(() => {
            window.location.href = "ex4.html";
        }, 5000);
    });

    function showMessage(text, color) {
        paymentMessage.textContent = text;
        paymentMessage.style.color = color;
        paymentMessage.classList.remove("hidden");
        setTimeout(() => {
            paymentMessage.classList.add("hidden");
        }, 5000);
    }
});
