function login() {
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("passw");

    let emailid = emailInput.value.trim();
    let password = passwordInput.value.trim();

    let storedEmail = localStorage.getItem("useremail");
    let storedPassword = localStorage.getItem("userpass");

    if (storedEmail === null || storedPassword === null) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (emailid === storedEmail && password === storedPassword) {
        alert("Login Successful!");
    } else {
        alert("Incorrect Email ID / Password.");
    }

    
    emailInput.value = "";
    passwordInput.value = "";
}

