let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price} `;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeItem(index);
        };

        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}
