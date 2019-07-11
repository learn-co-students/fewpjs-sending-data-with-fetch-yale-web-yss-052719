// Add your code here
function submitData(userName, userEmail){
    
    return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    })}).then(response => response.json()).then(user => {
        console.log('user: ', user)
        document.querySelector('body').textContent = user.id
    }).catch(error => {
        document.querySelector('body').textContent = error.message
      });
}