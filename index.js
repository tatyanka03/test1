// сортировка 
const goodsList = document.getElementById("goods");
const sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", function() {
    const sortBy = this.value;

    if (sortBy === "price_asc" || sortBy === "price_desc") {
        sortGoodsByPrice(sortBy === "price_asc");
    } else if (sortBy === "good_asc" || sortBy === "good_desc") {
        sortGoodsByName(sortBy === "good_asc");
    }
});

function sortGoodsByPrice(isAsc) {
    const goodsItems = Array.from(goodsList.querySelectorAll(".small-good-item"));
    goodsItems.sort(function(a, b) {
        const priceA = Number(a.querySelector(".small-good-item__price").textContent.replace(/\D/g, ""));
        const priceB = Number(b.querySelector(".small-good-item__price").textContent.replace(/\D/g, ""));
        return isAsc ? priceA - priceB : priceB - priceA;
    });

    goodsList.innerHTML = "";
    for (let i = 0; i < goodsItems.length; i++) {
        goodsList.appendChild(goodsItems[i]);
    }
}

function sortGoodsByName(isAsc) {
    const goodsItems = Array.from(goodsList.querySelectorAll(".small-good-item"));
    goodsItems.sort(function(a, b) {
        const nameA = a.querySelector(".small-good-item__name").textContent.trim();
        const nameB = b.querySelector(".small-good-item__name").textContent.trim();
        return isAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    goodsList.innerHTML = "";
    for (let i = 0; i < goodsItems.length; i++) {
        goodsList.appendChild(goodsItems[i]);
    }
}
// Категории-все товары
const allProductsButton = document.querySelector('.js-category[data-category="7"]');
const allListItems = goodsList.querySelectorAll('li');

allProductsButton.addEventListener('click', function() {
    allListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });
});

// Категории-толстовки
const sweatshirtsButton = document.querySelector('.js-category[data-category="0"]');

sweatshirtsButton.addEventListener('click', function() {
    const sweatshirtsListItems = goodsList.querySelectorAll('[name="sweatshirts"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="sweatshirts"])');

    sweatshirtsListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});
// Категории-свитера

const sweaterButton = document.querySelector('.js-category[data-category="1"]');

sweaterButton.addEventListener('click', function() {
    const sweaterListItems = goodsList.querySelectorAll('[name="sweater"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="sweater"])');

    sweaterListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});
// Категории-юбка

const skirtButton = document.querySelector('.js-category[data-category="2"]');

skirtButton.addEventListener('click', function() {
    const skirtListItems = goodsList.querySelectorAll('[name="skirt"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="skirt"])');

    skirtListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});

// Категории-брюки

const trousersButton = document.querySelector('.js-category[data-category="3"]');

trousersButton.addEventListener('click', function() {
    const trousersListItems = goodsList.querySelectorAll('[name="trousers"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="trousers"])');

    trousersListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});
// Категории-джинсы

const jeansButton = document.querySelector('.js-category[data-category="4"]');

jeansButton.addEventListener('click', function() {
    const jeansListItems = goodsList.querySelectorAll('[name="jeans"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="jeans"])');

    jeansListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});
// Категории-платья

const dressesButton = document.querySelector('.js-category[data-category="5"]');

dressesButton.addEventListener('click', function() {
    const dressesListItems = goodsList.querySelectorAll('[name="dresses"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="dresses"])');

    dressesListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});
// Категории-аксессуары


const accessoriesButton = document.querySelector('.js-category[data-category="6"]');

accessoriesButton.addEventListener('click', function() {
    const accessoriesListItems = goodsList.querySelectorAll('[name="accessories"]');
    const otherListItems = goodsList.querySelectorAll('li:not([name="accessories"])');

    accessoriesListItems.forEach(function(listItem) {
        listItem.style.display = 'block';
    });

    otherListItems.forEach(function(listItem) {
        listItem.style.display = 'none';
    });
});

// поиск
const searchInput = document.getElementById('search-bar');


searchInput.addEventListener('keyup', function() {
    const searchText = searchInput.value.toLowerCase();
    const goodsItems = goodsList.querySelectorAll('.small-good-item');

    goodsItems.forEach(function(item) {
        const itemName = item.querySelector('.small-good-item__name').textContent.toLowerCase();

        if (itemName.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


// добавление в корзину
// Обработчик клика на кнопку размера
function sizeButtonClick(event) {
    var sizeButtons = event.currentTarget.parentElement.getElementsByClassName('js-size-btn');
    for (var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.remove('active');
    }
    event.target.classList.add('active');
}

// Находим все кнопки размера
var sizeButtons = document.getElementsByClassName('js-size-btn');

// Добавляем обработчик события для каждой кнопки размера
for (var i = 0; i < sizeButtons.length; i++) {
    var sizeButton = sizeButtons[i];
    sizeButton.addEventListener('click', sizeButtonClick);
}

var addToCartButtons = document.getElementsByClassName('js-add-to-cart');

// Обработчик клика на кнопку "Добавить в корзину"
var addToCartHandler = function(event) {
    var button = event.target;
    var id = button.getAttribute('data-id');
    var image = button.getAttribute('data-image');
    var name = button.getAttribute('data-name');
    var price = parseFloat(button.getAttribute('data-price'));

    var item = {
        id: id,
        image: image,
        name: name,
        price: price,
        count: 1
    };

    // Сохраняем выбранный товар в localStorage только при переходе в корзину
    localStorage.setItem('selectedItem', JSON.stringify(item));
};

// Привязка обработчика к кнопкам "Добавить в корзину"
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCartHandler);
}
// Обработчик клика на кнопку "Добавить в корзину"
function addToCart(event) {
    var button = event.target;
    var id = button.getAttribute('data-id');
    var image = button.getAttribute('data-image');
    var name = button.getAttribute('data-name');
    var price = parseFloat(button.getAttribute('data-price'));
    var selectedSizeButton = document.querySelector('.small-good-item__size button.active');
    
    if (!selectedSizeButton) {
    alert('Пожалуйста, выберите размер.');
    return;
    }
    
    var size = selectedSizeButton.getAttribute('data-size');
    
    var item = {
    id: id,
    image: image,
    name: name,
    price: price,
    size: size,
    count: 1
    };
    
    var existingItem = getItemFromCart(id);
    if (existingItem && existingItem.size === size) {
    existingItem.count++;
    } else {
    cart.push(item);
    }
    
    // Сохраняем обновленное значение корзины в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Обновляем отображение корзины
    renderCart();
}

// Функция для получения товара из корзины по его ID
function getItemFromCart(itemId) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === itemId) {
            return cart[i];
        }
    }
    return null;
}

// Находим все кнопки с классом "js-add-to-cart"
var addToCartButtons = document.getElementsByClassName('js-add-to-cart');

// Добавляем обработчик события для каждой кнопки
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCart);
}