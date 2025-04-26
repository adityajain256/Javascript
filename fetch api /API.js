let endpoint = 'https://cat-fact.herokuapp.com/facts/data';
async function GetData() {
    const request = await fetch(endpoint, {method: 'GET'});
    const response = await request.json();
    console.log(response);
  }
  
  GetData();