let cart = JSON.parse(localStorage.getItem("cart")) || [];

const buttons = document.querySelectorAll(".buy");
const cartCount = document.getElementById("cart-count");

cartCount.textContent = cart.length;

buttons.forEach(button => {

    button.addEventListener("click", () => {

        let card = button.parentElement;

        let name = card.querySelector("h3").textContent;
        let priceText = card.querySelector("h4").textContent;
        let image = card.querySelector(".box").className;

        let price = parseInt(priceText.replace(/\D/g, ""));
       
        let existing = cart.find(item => item.name === name);

if(existing){

    existing.quantity++;

}else{

    cart.push({
        name: name,
        price: price,
        quantity: 1,
        image: image
    });

}

        localStorage.setItem("cart", JSON.stringify(cart));

        cartCount.textContent = cart.length;

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});
