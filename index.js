function submitData(name, email){

  const docBody = document.querySelector("body")

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
	}).then(res => res.json())
	.then(data => {
		docBody.innerHTML += data.id
	})
	.catch(function(error) {
		docBody.innerHTML += error.message
	})
}
