function submitData(name, email) {
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
    .then(res => res.json())
    .then(data => 
        document.querySelector('body').innerHTML += `<h1>${data.id}</h1>`
    )
    .catch(function(error) {
        document.querySelector('body').innerHTML += `<p>${error.message}</p>`
    })
}