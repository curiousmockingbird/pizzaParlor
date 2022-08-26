// Business Logic for Pizza ------------
function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.setPizzaProperties = function(toppings,size) {
  this.toppings = [toppings];
  this.size = [size];
};

Pizza.prototype.setToppingPrice = function() {
  if (this.toppings.includes(1)) {
    return 10;
  } else if (this.toppings.includes(2)) {
    return 15;
  } else if (this.toppings.includes(3)) {
    return 20;
  } else {
    return 25;
  }
};

Pizza.prototype.setSizePrice = function() {
  if (this.size.includes("Small")) {
    return 3;
  } else if (this.size.includes("Medium")) {
    return 5;
  } else {
    return 7;
  } 
};

Pizza.prototype.setTotalPrice = function() {
  return this.setToppingPrice() + this.setSizePrice();
};

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  console.log("Test");

  let pizza = new Pizza();
  let toppingSelection = document.querySelector("input[name='select-topping']:checked").value;

  console.log(toppingSelection);
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
})

