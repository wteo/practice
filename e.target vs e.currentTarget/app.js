const button = document.createElement("button");
const div = document.querySelector("div");
const button2 = document.createElement("button");

div.appendChild(button);
div.appendChild(button2);

button.innerText = "Click me!"
button2.innerText = "Click me too!"

let defaultValue = 0;

function moveDown (event) {
    event.target.style.position="relative";
    event.target.style.top =`${defaultValue += 10}px`; 
    console.log(event.target); // refers to the element that triggered the event. a.k.a the element that user interacted with
    console.log(event.currentTarget); // refers to the element that event listener is attached to
}
    
div.addEventListener("click", moveDown)


/*
const ul = document.createElement("ul");
const div = document.querySelector("div");

div.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

ul.innerText = "Things to do";
li1.innerText = "Have Breakfast";
li2.innerText = "Shower";
li3.innerText = "Clean Room";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

ul.addEventListener("click", function(event){
    event.target.style.color = "blue";
    console.log(event.target);
    console.log(event.currentTarget);

})
*/