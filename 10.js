// دالة لإضافة حقول أسماء اللاعبين بناءً على العدد المختار
function addPlayerFields() {
    var playerCount = document.getElementById('players').value;
    var playerNamesDiv = document.getElementById('player-names');
    playerNamesDiv.innerHTML = ''; // تنظيف المحتوى القديم

    // إضافة الحقول حسب عدد اللاعبين
    for (var i = 0; i < playerCount; i++) {
        var label = document.createElement('label');
        label.setAttribute('for', 'player' + (i + 1));
        label.innerHTML = 'اسم اللاعب ' + (i + 1) + ':';
        
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'player' + (i + 1));
        input.setAttribute('name', 'player' + (i + 1));
        input.setAttribute('required', 'true');

        playerNamesDiv.appendChild(label);
        playerNamesDiv.appendChild(input);
    }
}

// دالة لمعالجة إرسال النموذج وعرض رسالة التأكيد
function handleSubmit(event) {
    event.preventDefault(); // منع إرسال النموذج بالطريقة التقليدية

    // إخفاء النموذج
    document.getElementById('booking-form').style.display = 'none';

    // إظهار رسالة التأكيد
    document.getElementById('confirmation-message').style.display = 'block';
}
