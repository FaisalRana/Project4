//business logic 

function Pizza() {
  this.size = "";
  this.cheese = "cheese";
  this.meatT = [];
  this.veggieT = [];
  this.price = 0;
}

Pizza.prototype.append = function() {
  $("#sizeP").append($("#question1 option:selected").val());
  $("#toppingsP").append(this.meatT.join("<br>"));
  $("#toppingsP").append("<br>");
  $("#toppingsP").append(this.veggieT.join("<br>"));
  $("#priceP").append(this.price);
}

let showHide = function() {
    $("#hiddenOutput").show();
    $("#blankPizza").hide();
    $("#veggiePizza").show();
};

Pizza.prototype.addSize = function(inputSize) {
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
  
  this.price = this.price + (this.meatT.length * 2) +  this.veggieT.length;
    
};
//user logic

$(document).ready(function() {

  addInput = function() {
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
  $("#formOne").submit(function(event) {
    event.preventDefault();
    addInput();
    showHide();
    let inputSize = $("#question1 option:selected").val()
    pizza1.addSize(inputSize);
    pizza1.modifyPrice();
    pizza1.append();
  });
});

