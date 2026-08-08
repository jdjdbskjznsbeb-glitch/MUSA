let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

function displayCart(){

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if(cart.length === 0){

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cart.forEach((item,index)=>{

            let product = document.createElement("div");

            product.className = "cart-item";

            product.innerHTML = `
                <div class="cart-info">
                    <div class="cart-image ${item.image}"></div>
                    <h3>${item.name}</h3>

                    <p>Price: ₹${item.price}</p>
                    <p class="item-subtotal">
                    Item total: ₹${item.price * (item.quantity || 1)}
            </p>

            <div class="quantity-control">
                    <button onclick="decrease(${index})">−</button>
                    <span>${item.quantity || 1}</span>
                    <button onclick="increase(${index})">+</button>
            </div>

                    <button onclick="removeItem(${index})">Remove</button>
             </div>
            `;

            cartItems.appendChild(product);

            totalPrice += item.price * (item.quantity || 1);

        });

    }

    total.textContent = "Total: ₹" + totalPrice;

}


function increase(index){

    if(!cart[index].quantity){
        cart[index].quantity = 1;
    }

    cart[index].quantity++;

    saveCart();

}


function decrease(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    saveCart();

}


function removeItem(index){

    cart.splice(index,1);

    saveCart();

}


function saveCart(){

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


displayCart();