// const rootNode = document.getRootNode(); // document
// const htmlEle = rootNode.childNodes[0]; 
// //console.log(htmlEle) //html 
// //console.log(htmlEle.childNodes); //Nodelist(3) [head, text, body]
// console.log(htmlEle.parentNode);

// // sibling relationship
// console.log(htmlEle.nextSibling)

// to select h1 and go its parent and change the color
const h1 = document.querySelector("h1");
const parent = (h1.parentNode)
parent.style.color = "green";

// we can select querySelector in any nodes
const title = head.querySelector("title")
//console.log(title)
console.log(title.childNodes);

const container = document.querySelector(".container")
console.log(container.childNodes);

// if we only want the content inside the container
console.log(container.children) // [h1,p]