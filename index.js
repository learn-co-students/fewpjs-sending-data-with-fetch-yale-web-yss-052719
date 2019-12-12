// Add your code here
fetch("http://localhost:3000/dogs", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Bryon",
        dogBreed: "Poodle"
    })
})

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
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
    .then(resp => resp.json())
    .then(data => {
        document.querySelector("body").innerHTML += data.id
    })
    .catch(function(error) {
        document.querySelector("body").innerHTML += error.message
    })

}