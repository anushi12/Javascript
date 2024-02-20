// to check number of classes, section Todo has
const sectionTodo = document.querySelector(".section-todo")
console.log(sectionTodo.classList)

// to add class
sectionTodo.classList.add('bg-dark');

// to remove class
sectionTodo.classList.remove("bg-dark");

// to check if a class is present 

const ans = sectionTodo.classList.contains("container");
//console.log(ans)

/************* Toggle ***************/
// if something is present it will remove that and vice versa

// sectionTodo.classList.toggle("bg-dark") // adds
// sectionTodo.classList.toggle("bg-dark") // removes