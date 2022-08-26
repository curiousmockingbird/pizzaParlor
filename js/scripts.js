// Business Logic for Pizza ------------
function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.setPizzaProperties = function(toppings,size) {
  this.toppings = [toppings];
  this.size = [size];
};


