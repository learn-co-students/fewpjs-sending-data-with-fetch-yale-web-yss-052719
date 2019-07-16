fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
});


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
             "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => response.json()).then(data => {
        let body = document.querySelector('body')
        body.innerHTML = `${data.id}`
    })
    . catch(function(error){
        let body = document.querySelector('body')
        body.innerHTML = `${body.innerHTML + error.message}`
    })
}