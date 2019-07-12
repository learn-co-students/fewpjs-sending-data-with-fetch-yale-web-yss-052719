// Add your code here
// fetch('http://localhost:3000/dogs', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body:   JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//       })
// }).then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(res => res.json())
    .then(data => {
        let body = document.querySelector("body")
        body.innerHTML += data.id
    })
    .catch(function(error) {
        let body = document.querySelector("body")
        body.innerHTML += error.message
    });
}