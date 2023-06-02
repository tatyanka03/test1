var cart = [];

// Функция для обработки клика на кнопку "Добавить в корзину"
function addToCart(button) {
    var id = button.getAttribute('data-id');
    var image = button.getAttribute('data-image');
    var name = button.getAttribute('data-name');
    var size = button.getAttribute('data-size');
    var price = parseFloat(button.getAttribute('data-price'));
    var quantity = 1;
    
    if (!size) {
    alert('Пожалуйста, выберите размер.');
    return;
    }

    var item = {
        id: id,
        image: image,
        name: name,
        size: size,
        price: price,
        quantity: quantity
    };

  // Проверяем, есть ли товар уже в корзине
var existingItemIndex = findItemIndex(id, size);
if (existingItemIndex !== -1) {
    // Если товар уже в корзине, увеличиваем его количество
    cart[existingItemIndex].quantity++;
} else {
    // Если товара еще нет в корзине, добавляем его
    cart.push(item);
}

  // Обновляем отображение корзины
updateCartView();
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    // Сохраняем обновленное состояние корзины в локальном хранилище
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartView();
}
// Функция для поиска индекса товара в корзине по его id и размеру
function findItemIndex(id, size) {
for (var i = 0; i < cart.length; i++) {
if (cart[i].id === id && cart[i].size === size) {
return i;
}
}
return -1;
}

// Функция для обновления отображения корзины
function updateCartView() {
var cartElement = document.getElementById('cart');
var cartBody = cartElement.getElementsByTagName('tbody')[0];
cartBody.innerHTML = '';
var totalSum = 0;

for (var i = 0; i < cart.length; i++) {
    var item = cart[i];

    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.id}</td>
        <td><img src="${item.image}" class="cart-item-image" style="max-width: 50px; max-height: 50px;"></td>
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td>${item.price} руб.</td>
        <td><input type="number" value="${item.quantity}" min="1" onchange="changeQuantity(${i}, this.value)"></td>
        <td>${item.price * item.quantity} руб.</td>
        <td><button class="btn btn-danger" onclick="removeFromCart(${i})">Удалить</button></td>
    `;

    cartBody.appendChild(row);

    totalSum += item.price * item.quantity;
}

var totalSumElement = document.getElementById('total-sum');
totalSumElement.textContent = totalSum.toFixed(2);
localStorage.setItem('cart', JSON.stringify(cart));
}

// Функция для изменения количества товара
function changeQuantity(index, quantity) {
cart[index].quantity = parseInt(quantity);
updateCartView();
}

// Проверяем, есть ли данные в localStorage
if (localStorage.getItem('cart')) {
// Если есть, загружаем их
cart = JSON.parse(localStorage.getItem('cart'));
}

// Обновляем отображение корзины при загрузке страницы
updateCartView();