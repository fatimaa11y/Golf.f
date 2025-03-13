// إضافة وظائف للأزرار عند النقر
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function () {
        alert('تم إرسال طلبك!'); // مثال للتفاعل
        // يمكن استبدال ذلك بوظيفة للتوجيه إلى صفحة أخرى أو فتح نموذج للتواصل
    });
});
