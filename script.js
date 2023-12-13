// Fetch and print text from file
// fetch("user.json")
// .then(response => response.text())
// .then(result => console.log(result))

// //Fetch and print converted data from file
// fetch("user.json")
// .then(response => response.json())
// .then(result => console.log(result))


// //Fetch and print data from github api
// fetch('https://api.github.com/users/dkoncius')
// .then(response => response.json())
// .then(result => console.log(result))


//Fetch and print data in DOM
// fetch('https://api.github.com/users/dkoncius')
// .then(response => response.json())
// .then(result => {
//     const h1 = document.querySelector("h1")
//     h1.innerText = result.name
//     const img = document.createElement("img")
//     img.src = result.avatar_url
//     img.width = 300
//     document.body.append(img)
//     if(result.message == "Not Found"){
//         alert("Not Found")
//     }
//     console.log(result)
// })

/*
Šablonas fetch
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(e => console.log(e.message))
 
 
1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sudėtingiau - pabandykite su JS sukurti html elementus).
*/

fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
    const img = document.querySelector(`img`)
    img.src = data.results[0].picture.large
    const fullname = document.getElementById("fullname")
    fullname.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`
    const age = document.getElementById("age")
    age.innerText = `${data.results[0].dob.age} years old`
    const email = document.querySelector("p")
    email.innerText = `${data.results[0].email}`
    console.log(data)
})
.catch(e => console.log(e.message))



