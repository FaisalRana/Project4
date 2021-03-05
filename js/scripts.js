//business logic 

function Pizza(size) {
  this.size = "";
  this.cheese = "cheese";
  this.meatT = [];
  this.veggieT = [];
  this.price = 0;
}

let append = function() {
  $("#sizeP").append($("#question1 option:selected").val());
  $("#toppingsP").append(pizza1.meatT.join("<br>"));
  $("#toppingsP").append("<br>");
  $("#toppingsP").append(pizza1.veggieT.join("<br>"));
  $("#priceP").append(pizza1.price);
}

let showHide = function() {
    $("#hiddenOutput").show();
    $("#blankPizza").hide();
    $("#veggiePizza").show();
};

let addInput = function() {
  $("input:checkbox[name=meatT]:checked").each(function() {
    const meats = $(this).val();
    pizza1.meatT.push(meats);
  });
  $("input:checkbox[name=veggieT]:checked").each(function() {
    const veggies = $(this).val();
    pizza1.veggieT.push(veggies);
  });
};

let pizza1 = new Pizza();

Pizza.prototype.addSize = function() {
   let inputSize = $("#question1 option:selected").val()
   this.size = this.size + inputSize;
   if (inputSize === "Large") {
     this.price = this.price + 14;
   } else if(inputSize === "Medium") {
     this.price = this.price + 10;
   } else {
     this.price = this.price + 5;
   };
};

Pizza.prototype.modifyPrice = function() {
  let numMeats = 0;
  let numVeggies = 0;
  numMeats = numMeats + pizza1.meatT.length;
  numVeggies = numVeggies + pizza1.veggieT.length;
  this.price = this.price + (numMeats * 2) + (numVeggies * 1);
};


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

