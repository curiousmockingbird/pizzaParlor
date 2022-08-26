Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size."
Code: const myPizza = new Pizza(["anchovies","pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should set the values for the toppings and size properties as an empty array."
Code: Pizza.prototype.setPizzaProperties();
Expected Output: Pizza { toppings: [], size: []}

Test: "It should populate the values for the toppings and size properties."
Code: Pizza.prototype.setPizzaProperties(topping,size);
Expected Output: Pizza { toppings: [topping], size: [size]}