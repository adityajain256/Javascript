let names = document.querySelector('#input');
let div = document.querySelector('#form-group');



function addName(e) {
    if (e.target.tagName == "BUTTON") {
        let user = {name: names.value , age: "18"};
        localStorage.setItem('user', JSON.stringify(user));
        let data = JSON.parse(localStorage.getItem('user'));
        
        console.log(data.name);
        console.log(data.age)
        
        
        let name = document.createElement('p');
        name.innerText = data.name;
        name.style.color = "red";
        name.style.fontSize = "20px";
        
        let age = document.createElement('p');
        age.innerText = data.age;
        age.style.color = "blue";
        age.style.fontSize = "20px";
        
        div.appendChild(name);
        div.appendChild(age);
        names.value = "";
        console.log("Name added to local storage");
    }
}

div.addEventListener('click', addName);
