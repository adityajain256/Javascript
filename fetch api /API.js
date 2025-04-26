// let endpoint = 'https://cat-fact.herokuapp.com/facts/data';
// async function GetData() {
//   try {
//     const request = await fetch(endpoint, {method: 'GET'});
//     const response = await request.json();
//     console.log(response);
    
//   } catch (error) {
//     console.log("something went wrong")
//   }
//   }
  
//   GetData();

  fetch('https://randomuser.me/api/data')
    .then((resolve) => {
       return resolve.json()
    }).then((data)=>{
      console.log (data)
      
      console.log(data.name)
      for(let i= 0; i< 1; i++){
        let fullName = data[i].name;
        let userName = data[i].username;
        let email = data[i].email;
        let compName = data[i].comany.name;
        let newData = { "fullName": fullName , "userName": userName, "email": email, "compName": compName}
        return newData;
        
    }
    
  }).then((usernme) => {
    console.log(usernme)
      card.innerHTML = `<div id="card" class="card">
        <h2 id="name">${fullName}</h2>
        <p id="userName">${userName}</p>
        <h3 id="companyName">${compName}</h3>
        <a href="/gmail" id="email">${email}</a>
    </div>`
    })
    .catch((error)=>{
      console.log(error)
    })