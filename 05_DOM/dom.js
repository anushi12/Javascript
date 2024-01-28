// DOM - document object model
//console.dir(document) // opens window object

// select element using get element by id
//const mainHeading = document.getElementById(".headline");
console.log(mainHeading);

// query selector
const header = document.querySelector(".header")
console.log(header);

// suppose to select multiple classes
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);                // we get a nodelist that looks like array but it is not

// change text
const mainheading = document.getElementById(".headline");
console.log(mainHeading.textContent);  // gives the text content of that class including the hidden text
console.log(mainHeading.innerText); // it displays only the visible text
mainheading.textContent = "List Your Plan";

// change the styles of element
const mainHeading = document.querySelector("div .headline h2")
//console.log(mainHeading.style)
mainHeading.style.color = "Purple";

// get and set attribute
const link = document.querySelector("a")
console.log(link.getAttribute("href"))   // #home #Todo #SignUp
console.log(link.getAttribute("href".slice(1)))   // home Todo SignUp

// to change the attribute lets say #home
link.setAttribute("href", "https://abc.com");
console.log(link.getAttribute("href"))

// to get type of any attribute
const inputElement = document.querySelector(".form-todo input");
console.log(inputElemt.getAttribute("type")) ; // text


// get multiple elements using getElements by class nam
//get multiple elements using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item") // HTMLCollection
// console.log(navItems[0]);
// console.log(Array.isArray(navItems)); // false

//const navItems = document.querySelectorAll(".nav-item")

// to change the nav items color green and background to white 
// we can use loop
// 1. for loop
// 2. for of loop
// 3. we cannot use for each loop
//let navItems = document.getElementsByTagName("a") // HTMLCollection
//console.log(navItems);
// for(let i = 0; i<navItems.length; i++){
//     //console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"
// }

// in order to use for each we need to convert HTML collections into Array
// navItems = Array.from(navItems);
// console.log(Array.isArray((navItems))) // true
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"
// });


// Nodelist // it is an array , we can use all methods of array
let navItems = document.querySelectorAll("a")
console.log(navItems) 
// with nodelist you use fo, for of, for each
// all loops are above 


// innerHTML
const heading = document.querySelector(".headline")
// console.log(heading.innerHTML);
// heading.innerHTML = "<h1>Inner HTML</h1>";
// heading.innerHTML += "<button class = \"btn\">Learn More </button>";
// console.log(heading.innerHTML);