let list = document.querySelector('#fruit-list');
let info = document.querySelector('#fruit-info');
let finfo = document.querySelector('#info');
let newDelete = document.querySelector('#delete');

function clicked(e) {
    let previus; 

    let newDiv = document.createElement('li');

    if (e.target.tagName === 'LI') {
        previus = e.target.textContent;
        console.log("you clicked "+ e.target.textContent);
        newDiv.textContent = "you clicked " + e.target.textContent;
    }

    
    info.appendChild(newDiv);
    
    newDiv.addEventListener('click', function(e) {
        
        console.log('You clicked on ' + e.target.textContent);
        info.removeChild(e.target);
    });
    
}

list.addEventListener('click', clicked);

newDelete.addEventListener('click', () => {
    info.textContent = '';
})