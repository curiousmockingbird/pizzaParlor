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

Test: "It should return a price string if the toppings property value is 1."
Code: Pizza.prototype.setPrice();
Expected Output: "$10.00"

Test: "It should return different price strings if the toppings property value is 2, 3 or 4."
Code: Pizza.prototype.setPrice();
Expected Output: Price string in relation to the topping property value