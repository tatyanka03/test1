// Обработчик отправки формы заказа
function submitOrderForm(event) {
    event.preventDefault();

    // Проверка наличия пустых полей
    var name = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var phone = document.getElementById('input-phone').value;
    var address = document.getElementById('input-address').value;

    if (name.trim() === '' || email.trim() === '' || address.trim() === '') {
        var orderMessage = document.getElementById('order-message');
        orderMessage.textContent = 'Ошибка: Заполните все обязательные поля';
        orderMessage.classList.add('alert-danger');
        return;
    }

    // Все поля заполнены, можно отправить заказ
    // Добавьте свой код для обработки отправки заказа здесь

    var orderForm = document.getElementById('order-form');
    orderForm.reset(); // Очищаем форму после успешной отправки

    var orderMessage = document.getElementById('order-message');
    orderMessage.textContent = 'Ваш заказ успешно оформлен!';
    orderMessage.classList.remove('alert-danger');
    orderMessage.classList.add('alert-success');
}

// Находим форму заказа по ID
var orderForm = document.getElementById('order-form');

// Добавляем обработчик отправки формы
orderForm.addEventListener('submit', submitOrderForm);