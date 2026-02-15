"use strict";
// javascript tasks

// Task 1: Variables and Types 
let username = "Andrea";
let userAge = 22;
let isUserActive = true;
let userHobbies = ["reading", "painting", "traveling"];
let userAddress = {
    street : "Castanilor",
    city : "Tautii de Sus",
    county : "Maramures",
    country : "Romania"
};

console.log("---Task 1");
console.log("Username:", username, "| Type:", typeof username);
console.log("User Age:", userAge, "| Type:", typeof userAge);
console.log("Is User Active:", isUserActive, "| Type:", typeof isUserActive);
console.log("User Hobbies:", userHobbies, "| Type:", typeof userHobbies);
console.log("User Address:", userAddress, "| Type:", typeof userAddress);


// Task 2: Conditions 
function checkAge(age) {
    if (age < 18) return "Child";
    else return "Adult";
}

console.log("\n---Task 2");
console.log("Age 17:", checkAge(17));
console.log("Age 18:", checkAge(18));
console.log("Age 23:", checkAge(23));


// Task 3: Loops  
let numbers = [3, 7, 2, 9, 5];
let sum = 0;

console.log("\n---Task 3");
console.log("All numbers:")
for (let num of numbers) {
    console.log(num);
    sum += num;
}

console.log("The sum:", sum);

console.log("Numbers > 5:")
for (let num of numbers) {
    if (num > 5) console.log(num);
}


// Task 4: Scope Exploration
console.log("\n---Task 4");

let globalVar = "Hello!";
function printDate(){
    let localVar = new Date();
    console.log(globalVar, "Today is:", localVar);
}

printDate();
// console.log(localVar);   <-- error


// Task 6: Strict Mode Errors
console.log("\n---Task 6"); 

// x =8;      //  <-- ReferenceError: x is not defined ; strict mode prevents accidental global variables
let x =8;
console.log(x); // <-- without strict mode and let, this would work


// Task 7: DOM Selection -> task7,js

// Task 8: Dynamic List 
function addItem() {
    const input = document.getElementById("itemInput");
    const value = input.value.trim();

    if (value !=="") {
        const li = document.createElement("li");
        li.textContent = value;

        document.getElementById("itemList").appendChild(li);
        input.value = ""; 
    }
}


// Task 9: Library Research
// ZXing
// What problem does it solve? -> reads and barcodes, including ISBN
// How is it used? -> create a BrowserBarcodeReader object and calling decodeFromVideoDevice method
//                      to scan barcodes or ISBNs from a live camera or image
// One example use case  -> I used it for scaning book ISBNs with a camera to automatically get
//                      the book's details - reading management app


// Task 10
console.log("----Task 10")
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
        function(response) {
        console.log(response);
        
        if (!response.ok) {
            throw new Error(" fetching data error");
        }
        return response.json();
    }).then(function(data) {
        console.log(data); 
        
        var list = document.getElementById("users");
        list.innerHTML = "";
        
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.innerText = data[i].username;
            list.appendChild(li);
        }
    }).catch(function(error) {
        console.log("Error:", error);
        alert("error loadin users ");
    });
}

// Task 11: Modules -> math.js + main.js

// Task 12
console.log("---Task 12")
async function getUsersTask12() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);

        const data = await response.json();
        console.log(data);
        let list = document.getElementById("users");
        list.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            li.innerText = data[i].username;
            list.appendChild(li);
        }
    } catch (error) {
        console.log("Error:", error);
        alert("Error fetching data");
    }
}


// Task 13
console.log("\n--- Task 13")
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log("Hi! I am " + this.name + " and I am " + this.age + " years old");
    }
}

let person1 = new Person("Paedyn Grey", 18);
let person2 = new Person("Kai AZer", 19);

person1.introduce();
person2.introduce();

//Task 14: Class Syntax 
console.log("\n----Task 14");
class PersonTask14 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log("Hi! I am " + this.name + " and I am " + this.age + " years old");
    }
}

let person3 = new PersonTask14("Violet Sorrengail", 20);
let person4 = new PersonTask14("Xaden Riorson", 23);

person3.introduce();
person4.introduce();


// differences: 
//      1. class syntax is cleaner
//      2. in class syntax all objects share the same 'introduce' method,
//          whereas in constructor function 'introduce; is created separately for each function
// similarities:
        // 1. both create objects
        // 2. both can have methods
        // 3. both use 'this'
