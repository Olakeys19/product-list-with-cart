"use strict";
const confirmButton = document.querySelector(".confirm-button");
const productOutline = document.querySelector(".product-outline");
const addToCart = document.querySelectorAll(".product-button");
const productImg = document.querySelectorAll(".product-image");
const quantitySelector = document.querySelectorAll(".quantity-selector");
const decreaseBtn = document.querySelectorAll(".decrease");
const increaseBtn = document.querySelectorAll(".increase");

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

let quantity = 1;
let quantityList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let amount = Number(document.querySelector(".quantity-number").textContent);
const quantityDisplay = document.querySelectorAll(".quantity-number");

confirmButton.classList.add("hidden");

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    productImg[i].classList.add("product-outline");
    cart[i] = Number(`${i}`);
    cartItems[i] = productNames[i];
    quantityList[i] = 1;
    // console.log(cart);
    console.log(cartItems);
    addToCart[i].classList.add("hidden");
    quantitySelector[i].classList.remove("hidden");
    console.log(quantityList);
  });
}

for (let i = 0; i < increaseBtn.length; i++) {
  increaseBtn[i].addEventListener("click", function () {
    quantityList[i] = quantityList[i] + 1;
    quantityDisplay[i].textContent = quantityList[i];
    cartItems[i] = `${productNames[i]} x ${quantityList[i]}`;
    console.log(quantityList);
    console.log(cartItems);
  });
}

for (let i = 0; i < decreaseBtn.length; i++) {
  decreaseBtn[i].addEventListener("click", function () {
    if (quantityList[i] > 1) {
      quantityList[i] = quantityList[i] - 1;
      quantityDisplay[i].textContent = quantityList[i];
      cartItems[i] = `${productNames[i]} x ${quantityList[i]}`;
      console.log(quantityList);
      console.log(cartItems);
    } else {
      quantityList[i] = 0;
      productImg[i].classList.remove("product-outline");
      cart[i] = 0;
      cartItems[i] = "";
      addToCart[i].classList.remove("hidden");
      quantitySelector[i].classList.add("hidden");
      console.log(quantityList);
      console.log(cartItems);
    }
  });
}
