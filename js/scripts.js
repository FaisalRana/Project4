
function Pizza(pSize, cheese, meatT, veggieT) {
  this.pSize = pizzaSize;
  this.cheese = cheese;
  this.meatT = [];
  this.veggieT = [];
}

pizzaSize = 

$("input:checkbox[name=meat-topping]:checked").each(function() {
  const meat = $(this).val();
  meatT.push(meat);
});