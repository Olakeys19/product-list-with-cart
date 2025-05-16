"use strict";
const confirmButton = document.querySelector(".confirm-button");
const startNewOrderButton = document.querySelector(".start-new-order");
const productOutline = document.querySelector(".product-outline");
const addToCart = document.querySelectorAll(".product-button");
const productImg = document.querySelectorAll(".product-image");
const quantitySelector = document.querySelectorAll(".quantity-selector");
const decreaseBtn = document.querySelectorAll(".decrease");
const increaseBtn = document.querySelectorAll(".increase");
const cartImg = document.querySelector(".cart-img");
let addedItems = document.getElementById("added-items").textContent;
let prod = document.querySelectorAll(".prod");
let quant = document.querySelectorAll(".quant");
let iprod = document.querySelectorAll(".iprod");
let iquant = document.querySelectorAll(".iquant");

const cartProducts = document.querySelectorAll(".cart-items");
const icartProducts = document.querySelectorAll(".confirmed-item-container");
const price = document.querySelectorAll(".amt");
const iprice = document.querySelectorAll(".iamt");
const itmAmt = document.querySelectorAll(".xquantity");
const iitmAmt = document.querySelectorAll(".ixquantity");
const total = document.querySelector(".total");
const carbonNeutral = document.querySelector(".carbon-neutral");
const totalPrice = document.querySelector(".total-price");
const itotalPrice = document.querySelector(".itotal-price");

const cancelButton = document.querySelectorAll(".cancel-button");
const btnAmount = document.querySelectorAll(".quantity-number");

const productsCartContainer = document.querySelector(
  ".products-cart-container"
);

function reset() {
  sum = 0;
  totalAmt = 0;
  quantity = 0;
  quantityList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  confirmButton.classList.add("hidden"); // hide the confirm order button
  document.querySelector(".center-wrapper").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
  for (let i = 0; i < addToCart.length; i++) {
    productImg[i].classList.remove("product-outline");
    cartProducts[i].classList.add("hidden"); // add hidden class from added cart product
    icartProducts[i].classList.add("hidden"); // add hidden class from added cart product
    addToCart[i].classList.remove("hidden");
    quantitySelector[i].classList.add("hidden");
  }
  total.classList.add("hidden");
  document.querySelector(".quantity").textContent = `Your Cart (${quantity})`; // display the updated cart quantity;
  // document.getElementById("added-items").textContent = cartItems; // display the added items in the cart;
  cartImg.classList.remove("hidden"); // remove cart empty image
  document.getElementById("added-items").textContent =
    "Your added items will appear here";
  carbonNeutral.classList.add("hidden");
  productsCartContainer.classList.add("products-cart-container");
  productsCartContainer.classList.remove("hidden");
}

let sum = 0;
let totalAmt = 0;
console.log(cartProducts);

console.log(prod);

let cartQuantity = document.querySelector(".quantity").textContent;
console.log(cartQuantity);
let quantity = 0;

const cart = [];
const cartItems = [];
const productNames = [
  "Waffle with Berries",
  "Vanilla Bean Crème Brûlée",
  "Macaron Mix of Five",
  "Classic Tiramisu",
  "Pistachio Baklava",
  "Lemon Meringue Pie",
  "Red Velvet Cake",
  "Salted Caramel Brownie",
  "Vanilla Panna Cotta",
];

const productPrices = [6.5, 7.0, 8.0, 5.5, 4.0, 5.0, 4.5, 4.5, 6.5];

const SelProdPrices = [];

let quantityList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const quantityDisplay = document.querySelectorAll(".quantity-number");

confirmButton.classList.add("hidden"); // hide the confirm order button

for (let i = 0; i < addToCart.length; i++) {
  quantity = 0;
  addToCart[i].addEventListener("click", function () {
    productImg[i].classList.add("product-outline");
    cart[i] = Number(`${i}`);
    cartItems[i] = productNames[i];
    quantityList[i] = 1;
    quantity++; // update the quantity after each iteration
    btnAmount[i].textContent = 1;
    document.querySelector(".quantity").textContent = `Your Cart (${quantity})`; // display the updated cart quantity;
    // document.getElementById("added-items").textContent = cartItems; // display the added items in the cart;
    cartImg.classList.add("hidden"); // remove cart empty image
    confirmButton.classList.remove("hidden"); // display the confirm order button once an item is added to the cart
    // console.log(cart);
    document.getElementById("added-items").textContent = ""; // hide your added items will appear here
    prod[i].textContent = productNames[i]; // display product names in cart
    quant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product in the cart
    price[i].textContent = `@ $${productPrices[i].toFixed(2)}`; // display the price of each item

    //CONFIRMED LOG
    iprod[i].textContent = productNames[i]; // display product names
    iquant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product
    iprice[i].textContent = `@ $${productPrices[i].toFixed(2)}`; // display the price of each item

    //
    itmAmt[i].textContent = `$${(
      Number(productPrices[i]) * Number(quantityList[i])
    ).toFixed(2)}`; // display the price amount of each item
    //
    iitmAmt[i].textContent = `$${(
      Number(productPrices[i]) * Number(quantityList[i])
    ).toFixed(2)}`; // display the price

    //
    sum = sum + Number(productPrices[i]);
    totalPrice.textContent = `$${sum.toFixed(2)}`;
    itotalPrice.textContent = `$${sum.toFixed(2)}`;

    //
    SelProdPrices[i] = Number(productPrices[i]);

    total.classList.remove("hidden");
    cartProducts[i].classList.remove("hidden"); // remove hidden class from added cart product
    icartProducts[i].classList.remove("hidden"); // remove hidden class from added cart product

    //
    console.log(cartItems);
    addToCart[i].classList.add("hidden");
    quantitySelector[i].classList.remove("hidden");
    carbonNeutral.classList.remove("hidden");

    // console.log(quantityList);
    console.log(sum);
    console.log(SelProdPrices);
  });
}

for (let i = 0; i < cancelButton.length; i++) {
  cancelButton[i].addEventListener("click", function () {
    console.log("not clicked");
    cartProducts[i].classList.add("hidden");
    // sum = sum - SelProdPrices[i];
    // SelProdPrices[i] = 0;
    sum = sum - Number(productPrices[i]) * quantityList[i];
    quantity -= quantityList[i];
    SelProdPrices[i] = 0;
    quantityList[i] = 0;

    console.log(sum);
    console.log(SelProdPrices);
    quantitySelector[i].classList.add("hidden");
    addToCart[i].classList.remove("hidden");
    productImg[i].classList.remove("product-outline");
    // btnAmount[i].textContent = quantity[i];
    btnAmount[i].textContent = 0;

    document.querySelector(".quantity").textContent = `Your Cart (${quantity})`; // display the updated cart quantity;

    totalPrice.textContent = `$${sum.toFixed(2)}`;
    itotalPrice.textContent = `$${sum.toFixed(2)}`;

    //
    document.querySelector(".quantity").textContent = `Your Cart (${quantity})`; // display the updated cart quantity;
    if (sum === 0) {
      total.classList.add("hidden");
      carbonNeutral.classList.add("hidden");
      quantity = 0;
      if (quantity === 0) {
        document.getElementById("added-items").textContent =
          "Your added items will appear here"; // show empty cart text if the cart is empty
        cartImg.classList.remove("hidden"); // display empty cart image if the cart is empty
        confirmButton.classList.add("hidden"); // hide the confirm order button if there is no item in the cart
        total.classList.add("hidden");
        carbonNeutral.classList.add("hidden");
        document.querySelector(
          ".quantity"
        ).textContent = `Your Cart (${quantity})`; // display the updated cart quantity;
      }
    }
  });
}

for (let i = 0; i < increaseBtn.length; i++) {
  increaseBtn[i].addEventListener("click", function () {
    quantityList[i] = quantityList[i] + 1;
    quantityDisplay[i].textContent = quantityList[i];
    cartItems[i] = `${productNames[i]} x ${quantityList[i]}`;

    quantity++; // increase quantity after each iteration
    document.querySelector(".quantity").textContent = `Your Cart (${quantity})`; // display updated cart quantity

    quant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product in the cart
    iquant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product

    itmAmt[i].textContent = `$${(
      Number(productPrices[i]) * Number(quantityList[i])
    ).toFixed(2)}`; // display the price amount of each item
    iitmAmt[i].textContent = `$${(
      Number(productPrices[i]) * Number(quantityList[i])
    ).toFixed(2)}`; // display the price amount of each item

    //
    sum = sum + Number(productPrices[i]); // add the price of product after each iteration
    totalPrice.textContent = `$${sum.toFixed(2)}`; // display total price
    itotalPrice.textContent = `$${sum.toFixed(2)}`; // display total price

    console.log(quantityList);
    console.log(cartItems);
    console.log(sum);
  });
}

for (let i = 0; i < decreaseBtn.length; i++) {
  decreaseBtn[i].addEventListener("click", function () {
    if (quantityList[i] > 1) {
      quantityList[i] = quantityList[i] - 1;
      quantityDisplay[i].textContent = quantityList[i];
      cartItems[i] = `${productNames[i]} x ${quantityList[i]}`;

      quantity--; // decrease quantity after each iteration
      document.querySelector(
        ".quantity"
      ).textContent = `Your Cart (${quantity})`; // display updated cart quantity
      // document.getElementById("added-items").textContent = cartItems; // display the added items in the cart;
      quant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product in the cart
      iquant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product

      itmAmt[i].textContent = `$${(
        Number(productPrices[i]) * Number(quantityList[i])
      ).toFixed(2)}`; // display the price amount of each item
      iitmAmt[i].textContent = `$${(
        Number(productPrices[i]) * Number(quantityList[i])
      ).toFixed(2)}`; //

      //
      sum = sum - Number(productPrices[i]); // add the price of product after each iteration
      totalPrice.textContent = `$${sum.toFixed(2)}`; // display total price
      itotalPrice.textContent = `$${sum.toFixed(2)}`; //

      console.log(quantityList);
      console.log(cartItems);
    } else {
      quantityList[i] = 0;
      productImg[i].classList.remove("product-outline");
      cart[i] = 0;
      cartItems[i] = "";
      addToCart[i].classList.remove("hidden");
      quantitySelector[i].classList.add("hidden");

      quantity--; // decrease quantity after each iteration
      document.querySelector(
        ".quantity"
      ).textContent = `Your Cart (${quantity})`; // display updated cart quantity
      // document.getElementById("added-items").textContent = cartItems; // display the added items in the cart;
      quant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product in the cart
      iquant[i].textContent = `${quantityList[i]}x`; // display the quantity of the product in the cart

      //
      cartProducts[i].classList.add("hidden"); // remove hidden class from added cart product
      sum = sum - Number(productPrices[i]); // add the price of product after each iteration
      totalPrice.textContent = `$${sum.toFixed(2)}`; // display total price
      itotalPrice.textContent = `$${sum.toFixed(2)}`; // display total price

      console.log(quantityList);
      console.log(cartItems);

      if (quantity === 0) {
        document.getElementById("added-items").textContent =
          "Your added items will appear here"; // show empty cart text if the cart is empty
        cartImg.classList.remove("hidden"); // display empty cart image if the cart is empty
        confirmButton.classList.add("hidden"); // hide the confirm order button if there is no item in the cart
        total.classList.add("hidden");
        carbonNeutral.classList.add("hidden");
        document.querySelector(
          ".quantity"
        ).textContent = `Your Cart (${quantity})`; // display updated cart quantity
      }
    }
  });
}

// CONFIRM ORDER
confirmButton.addEventListener("click", function () {
  document.querySelector(".center-wrapper").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
  productsCartContainer.classList.add("hidden");
  productsCartContainer.classList.remove("products-cart-container");
});

startNewOrderButton.addEventListener("click", reset);
