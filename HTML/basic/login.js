document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let residence = document.getElementById('residence').value;
    let land = document.getElementById('land').value;
    let crops = document.getElementById('crops').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (name && dob && residence && land && crops && email && password) {
        document.getElementById('message').innerText = "Registration Successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').innerText = "Please fill all details.";
        document.getElementById('message').style.color = "red";
}
});
