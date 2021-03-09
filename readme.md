# Project 2: Veggie Lovers Pizza Shop

By Faisal Rana

## Description of program
This is a website for a pizza company. A user is able to input the size and toppings they would like for their pizza and the website will return their bill.  

## Technologies used
- HTML
- CSS
- Bootstrap
- Javascript
- jQuery
- Construcor function
- Prototype method

## Tests

Describe: Pizza(size)

Test1: It should take size and toppings and output a pizza with empty objects and 0 price.

Expect(new Pizza("Large",[],[])
equalTo.(
size.Large
meatT.[]
veggieT.[]
price.0
)

Describe: Pizza.addSize()

Test2: It should take a given size and add a numerical "default" value to the pizza price.

Expect(pizza1.addSize(Large))equalTo.(this.price + 14 ))

Test3: If the pizza is large, it should add the additional price of $7.00 to the default pizza price.

Expect(pizza1.addSize(Medium)equalTo.(pizza.price + 7.00)

Describe: modifyPrice()

Test4: Inputting toppings and size will output a pizza object with a calculated price.

Expect(pizza1.modifyPrice())equalTo.(this.price + (numMeats * 2) + (numVeggies * 1)



## Program setup instructions
To view, access the Github pages site in your preferred browser. 

To setup:
- Clone this repository to your desktop
- Navigate to the top level of the directory
- Open index.html in your browser. 

## Github pages website
https://faisalrana.github.io/Project4/

## Copyright and license info

Copyright (c)2021 Faisal Rana

 
