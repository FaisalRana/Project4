//business logic 
let meatT = [];
let veggieT = [];
let cheese = "cheese";
let price = 0;
let size = "";

function Pizza(size, meatT, veggieT) {
  this.size = size;
  this.cheese = cheese;
  this.meatT = meatT;
  this.veggieT = veggieT;
  this.price = 0;
}

let pizza1 = new Pizza(size, meatT, veggieT);

Pizza.prototype.addTops = function() {
   let inputSize = $("#question1 option:selected").val()
   this.size = size + inputSize;
}

//user logic

  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=meatT]:checked").each(function() {
      const meats = $(this).val();
      meatT.push(meats);
    });
    $("input:checkbox[name=veggieT]:checked").each(function() {
      const veggies = $(this).val();
      veggieT.push(veggies);
    });
    let pizza1 = new Pizza(size, meatT, veggieT);
    pizza1.addTops();
    $("#hiddenOutput").show();
  });
});

