"use strict";
let pizzaNames = {
  1: "піца з грибами",
  2: "піца з куркою і ананасом",
  3: "піца пепероні",
  4: "піца чотири сири",
};
let pizzaPrice = {
  "піца з грибами": 70,
  "піца з куркою і ананасом": 80,
  "піца пепероні": 90,
  "піца чотири сири": 70,
};
function orderingPizza(pizza, size) {
  let str = "";
  if (pizzaNames[pizza] != undefined) {
    str += `Ваше замовлення: ${pizzaNames[pizza]} - ${size}шт`;
    str += `: ${pizzaPrice[pizzaNames[pizza]] * size} грн\n`;
  }
  alert(str);
}
let orderPizzas = [];
let namePizza = "";
let size;
let order = "";
order = prompt(
  `Введіть замовлення (через пробіл
    Вид піци:
    1: "піца з грибами",
    2: "піца з куркою і ананасом",
    3: "піца пепероні",
    4: "піца чотири сири")
    Кількість`
);
while (pizzaNames[order.split(" ")[0]] == undefined) {
  alert("Відбулася помилка, повторіть замовлення");
  order = prompt(
    `Введіть замовлення (через пробіл
      Вид піци: 
      1: "піца з грибами",
      2: "піца з куркою і ананасом",
      3: "піца пепероні",
      4: "піца чотири сири")
      Кількість`
  );
}
order = order.trim();
if (order.length == 1) {
  namePizza = order;
  size = 1;
} else {
  orderPizzas.push(order);
  let splitted = order.split(" ");
  namePizza = splitted[0];
  size = splitted[1];
}
orderingPizza(namePizza, size);
