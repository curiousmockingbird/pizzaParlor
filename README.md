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

Test: "It should return a price value if the toppings property value is 1."
Code: Pizza.prototype.setToppingPrice();
Expected Output: 10

Test: "It should return different price values if the toppings property value is 2, 3 or 4."
Code: Pizza.prototype.setToppingPrice();
Expected Output: Price value in relation to the topping property value

Test: "It should return different price values in relation to the size for the pizza."
Code: Pizza.prototype.setSizePrice();
Expected Output: Price value in relation to the size for the pizza

Test: "It should return the addition of the values of the toppings and the size as the total price for the pizza."
Code: Pizza.prototype.setTotalPrice();
Expected Output: Price value in relation to the topping and size selection

### Application name:
Pizza Parlor.

### Names of contributors
Harold Mesa. 

### Description:
A simple application to get the price for a pizza depending on the selection of the user.

### Link to site on GitHub Pages:
Please [click here](https://curiousmockingbird.github.io/pizzaParlor/)

### Technologies used:
HTML, CSS, Bootstrap and JavaScript.

### Application setup instructions:
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.
4. Select a topping and a size for the pizza.
   

### Known bugs
The branching for the program works well.  

### License
(MIT) https://en.wikipedia.org/wiki/MIT_License


Copyright (c) _Aug 26, 2022_ _Harold Mesa_