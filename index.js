// Add your code here
f/*unction submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        return error;
    });
}*/

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Unauthorized Access');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.body.innerHTML += data.id;
    })
    .catch(error => {
        console.error('Error:', error);
        document.body.innerHTML += error.message;
    });
}

