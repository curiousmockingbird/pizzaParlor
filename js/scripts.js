// Business Logic for Pizza ------------
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.setPizzaProperties = function (toppings, size) {
  this.toppings = [toppings];
  this.size = [size];
};

Pizza.prototype.setToppingPrice = function () {
  if (this.toppings.includes(1)) {
    return 10;
  } else if (this.toppings.includes(2)) {
    return 15;
  } else if (this.toppings.includes(3)) {
    return 20;
  } else if (this.toppings.includes(4)) {
    return 25;
  } else {
    return 0;
  }
};

Pizza.prototype.setSizePrice = function () {
  if (this.size.includes("Small")) {
    return 3;
  } else if (this.size.includes("Medium")) {
    return 5;
  } else {
    return 7;
  }
};

Pizza.prototype.setTotalPrice = function () {
  return this.setToppingPrice() + this.setSizePrice();
};

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();

  // Access constructor
  let pizza = new Pizza();
  // Get the value from the checkboxes
  let toppingSelection = document.querySelectorAll("input[name='select-topping']");
  // Get the value from the radio buttons
  let sizeSelection = document.querySelector("input[name='select-size']:checked").value;

  // Return an array. The array's length determines the amount of checkboxes/toppings selected
  let checkedToppings = [];
  toppingSelection.forEach(item => {
    if (item.checked) {
      let data = {
        item: parseInt(item.value),
      }
      checkedToppings.push(data);
    }
  })

  // Store the values for topping and size
  pizza.setPizzaProperties(checkedToppings.length, sizeSelection);
  // Set the price for the topping 
  let toppingPrice = pizza.setToppingPrice();
  // Set the price for the size
  let sizePrice = pizza.setSizePrice();
  // Set total price
  let totalPrice = pizza.setTotalPrice();

  // Unhide order details
  document.getElementById("hiddenDiv").removeAttribute("class","hidden")
  // Place amount of toppings in order details
  document.getElementById("amount-of-toppings").innerHTML = checkedToppings.length;
  // Place pizza size in order details
  document.getElementById("pizzaSize").innerHTML = sizeSelection.toLowerCase();
  // Place subtotal per amount of toppings in order details
  document.getElementById("price-per-topping").innerHTML = toppingPrice;
  // Place subtotal per size in order details
  document.getElementById("price-per-size").innerHTML = sizePrice;
  // Place total price in order details
  document.getElementById("totalPrice").innerHTML = totalPrice;
}

function resetForm() {
  document.querySelector("form").reset();
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
  form.addEventListener("submit", resetForm);
})

