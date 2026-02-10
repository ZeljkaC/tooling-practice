"use strict";
console.log("Hi!")
//1
let username = "Razvan-George-Catrinari"
let age = 21
let isActive = true
let hobbies = ["reading", "gaming", "coding"]
let address = {
    street: "Strada 1 Mai",
    city: "Bucuresti",
    country: "Romania"
}

console.log(typeof username)  
console.log(typeof age)       
console.log(typeof isActive)  
console.log(Array.isArray(hobbies))  
console.log(typeof address)   

//2
function checkAge(age){
    if(age < 18)
        return "Child"
    else
        return "Adult"
}
console.log("Age checking results:")
console.log(checkAge(5))
console.log(checkAge(20))
console.log(checkAge(18))


//3
const numbers = [3,7,2,9,5]
let sum = 0 
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
    sum+=numbers[i]
}
console.log("Sum: ", sum)
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>5)
        console.log("Number greater than 5: " + numbers[i])
}


//4
let namee="John"
function greet(){
    var greeting="Hello"
    console.log(greeting + ", " + namee + "!")
    const farewell="Goodbye"
}
greet()
//console.log(farewell)
//console.log(greeting)

//5

//x = 10; //x is not defined because it is not declared
let x = 10;
console.log(x); 

//6
import "./styles.css";
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.onclick = function changeParagraph() {
    paragraph.textContent = "The paragraph has been changed!";
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontWeight = "bold";
}

//7

const input = document.getElementById("userInput");
const addBtn = document.getElementById("AddBtn");
const itemList = document.getElementById("itemList");
const clearBtn = document.getElementById("ClearBtn");

addBtn.onclick = function addItem() {
    const newItem = input.value.trim();
    if (newItem) {
        const listItem = document.createElement("li");
        listItem.textContent = newItem;
        itemList.appendChild(listItem);
        input.value = "";
    }
}

clearBtn.onclick = function clearList(){
    itemList.innerHTML = "";
}


//8
//React
//One example of how React.js is used is in the development of a dynamic, high-performance user interface for a web application. 
// For instance, a social media platform might use React.js to create a feed that updates with new posts as they are published. 
// Instead of refreshing the entire page, React.js updates only the relevant parts of the feed, providing a seamless user experience.
// This approach not only improves performance 
// but also enhances the user's interaction with the application by allowing for real-time updates.

//9

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched user data:");
        data.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => console.error("Error fetching data:", error));

//10
//Done in index.js and math.js

//11
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched user data:");
        data.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchUsers();