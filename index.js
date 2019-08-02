// Add your code here
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
    .then(resp => resp.json())
    .then(data => {
       let id = data.id
       let body = document.querySelector('body');
       body.innerHTML = id
       console.log(body)

    }).catch(function(error) {
        document.body.innerHTML = error.message;
    })
}
