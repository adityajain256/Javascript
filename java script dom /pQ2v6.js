let div = document.querySelector("#div");
let para = document.querySelector("p");
let btn = document.querySelector("button");
let body = document.querySelector("body");
// btn.onclick = () => {
//     div.style.backgroundColor = "black"
//     para.style.color = "white"
    
//     alert("adit")
// }

// div.onmouseover = () => {
//     alert("don't please")
// }
btn.addEventListener("click", ()=>{
    if(btn.innerText === 'light'){
        btn.innerText = "dark"
    } else{
        btn.innerText = 'light'
    }
    body.classList.toggle("darkBody")
})
