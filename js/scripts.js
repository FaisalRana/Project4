//business logic 
let meatT = [];
let veggieT = [];
let cheese = "cheese";
let price = 0;
let size = "";
let numMeats = 0;
let numVeggies = 0;

function Pizza(size, meatT, veggieT) {
  this.size = size;
  this.cheese = cheese;
  this.meatT = meatT;
  this.veggieT = veggieT;
  this.price = 0;
}

let append = function() {
  $("#sizeP").append($("#question1 option:selected").val());
  $("#toppingsP").append(meatT.join("<br>"));
  $("#toppingsP").append("<br>");
  $("#toppingsP").append(veggieT.join("<br>"));
  $("#priceP").append(pizza1.price)
}

let showHide = function() {
    $("#hiddenOutput").show();
    $("#blankPizza").hide();
    $("#veggiePizza").show();
}

let addInput = function() {
  $("input:checkbox[name=meatT]:checked").each(function() {
    const meats = $(this).val();
    meatT.push(meats);
  });
  $("input:checkbox[name=veggieT]:checked").each(function() {
    const veggies = $(this).val();
    veggieT.push(veggies);
  });
}

let pizza1 = new Pizza(size, meatT, veggieT);

Pizza.prototype.addSize = function() {
   let inputSize = $("#question1 option:selected").val()
   this.size = size + inputSize;
   if (inputSize === "Large") {
     this.price = this.price + 14;
   } else if(inputSize === "Medium") {
     this.price = this.price + 10;
   } else {
     this.price = this.price + 5;
   }
}

Pizza.prototype.modifyPrice = function() {
  numMeats = numMeats + meatT.length;
  numVeggies = numVeggies + veggieT.length;
  this.price = this.price + (numMeats * 2) + (numVeggies * 1)
}


//user logic

  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    addInput();
    showHide();
    pizza1.addSize();
    pizza1.modifyPrice();
    append();
  });
});