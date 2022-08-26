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
  let toppingSelection = document.querySelectorAll("input[name='select-topping']");

  let checkedToppings = [];
  toppingSelection.forEach(item => {
    if (item.checked) {
      let data = {
        item: parseInt(item.value),
      }
      checkedToppings.push(data);
    }
  })

  pizza.setPizzaProperties(checkedToppings.length,"Medium");

  console.log(pizza);
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
})

