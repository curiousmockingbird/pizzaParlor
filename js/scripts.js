// Business Logic for Pizza ------------
function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.setPizzaProperties = function(toppings,size) {
  this.toppings = [toppings];
  this.size = [size];
};

Pizza.prototype.setPrice = function() {
  if (this.toppings.includes(1)) {
    return "$10.00";
  } else if (this.toppings.includes(2)) {
    return "$15.00";
  } else if (this.toppings.includes(3)) {
    return "$20.00";
  } else {
    return "$25.00";
  }
};




