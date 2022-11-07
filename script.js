console.log("Hello, World!");

async function getUserinfo() {
    const response = await fetch('https://random-data-api.com/api/v2/users');
    //console.log(response)
    const data = await response.json();
    //console.log(data)
    //const user = data.Object;
    //console.log(user
    displayUser(data)
}

function displayUser (data){
   const username =document.getElementById('Username');
   const title = document.getElementById('title');

   username.innerText = '${data.username}';

}

getUserinfo();

// https://random-data-api.com/api/v2/users