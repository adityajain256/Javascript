let heading = document.querySelector('.heading');

// console.log(heading.innerText);
// let newHeading = heading.append(" which i am learning from apna college.")

// console.log(newHeading)
// const names = ["aditya jain", "tanishka jain", "papa", "mummy", "nili"];
// let item = document.querySelectorAll(".item")

// for(let i= 0 ; i< item.length; i++){
//     // console.log(i)
//     // i.append("aditya jain")
//     item[i].innerText = names[i]

// }
let container = document.getElementById("#container")
let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white"
let body = document.querySelector("body");
body.prepend(btn);

// heading.setAttribute("class","newH")
heading.classList.add('newH')