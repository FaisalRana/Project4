// //business logic 

// function Pizza(pSize, cheese, meatT, veggieT) {
//   this.pSize = pizzaSize;
//   this.cheese = cheese;
//   this.meatT = [];
//   this.veggieT = [];
// }

// let pizzaSize = "";

// $("input:checkbox[name=meat-topping]:checked").each(function() {
//   const meat = $(this).val();
//   meatT.push(meat);
// });

//user logic

  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let arr = [];
    $("#sizeO").append($("#question1 option:selected").val());
    $("input:checkbox[name=meatT]:checked").each(function() {
      const meats = $(this).val();
      $("#toppingsO").append(meats + "<br>");
    });
    $("input:checkbox[name=veggieT]:checked").each(function() {
      const veggies = $(this).val();
      $("#toppingsO").append(veggies + "<br>");
    });
    $("#hiddenOutput").show();
  });
});

