# Project 2: Language Quiz

By Faisal Rana

## Description of program
This is a form that takes a number as an input and outputs a list of numbers based on the following rules:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Technologies used
- HTML
- CSS
- Bootstrap
- Javascript
- jQuery
- Looping

## Tests

Describe: RoboTran()
Test: It should return an array containing all numbers less then input number. 
Expect(RoboTran(4).toEqual([“1”, “2”, “3”, “4”])

Test: If the elements of the array contain a 3, it will replace it with “Won’t you be my neighbor” Expect(RoboTran(4).toEqual([“1”, “2”, “Won’t you be my neighbor”, “4”])

Test: If the elements of the array contain a 2, it will replace it with “Boop”
 Expect(RoboTran(4).toEqual([“1”, “boop”, “Won’t you be my neighbor”, “4”])

Test: If the elements of the array contain a 1, it will replace it with “beep"
 Expect(RoboTran(4).toEqual([“beep”, “boop”, “Won’t you be my neighbor”, “4”])

Test: If the elements of the array contain a 13, it will replace it with “Won’t you be my neighbor” Expect(RoboTran([13]).toEqual(“Won’t you be my neighbor”)

Test: If the elements of the array contain a 13, it will replace it with “Won’t you be my neighbor” Expect(RoboTran([21]).toEqual("Boop")

Test: If the elements of the array contain a 32, it will replace it with “Won’t you be my neighbor” Expect(RoboTran([32]).toEqual(“Won’t you be my neighbor”)

Test: It should convert the array of numbers to a string with spaces
 Expect(RoboTran(5).toEqual("beep boop Won't you be my neighbor? 4 5")


## Program setup instructions
To view, access the Github pages site in your preferred browser. 

To setup:
- Clone this repository to your desktop
- Navigate to the top level of the directory
- Open index.html in your browser. 

## Github pages website
https://faisalrana.github.io/Project3/

## Copyright and license info

Copyright (c)2021 Faisal Rana

 