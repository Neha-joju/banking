function signup() {
    // Get values from form fields
    let firstname = document.getElementById("name1").value;
    let lastname = document.getElementById("name2")
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;


    if (firstname === "" || lastname === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    let existingUserfname = localStorage.getItem("userfname");
    let existingUserlname = localStorage.getItem("userlname")
    let existingUseremail = localStorage.getItem("useremail");
    let existingUserpass = localStorage.getItem("userpass");

    
    if (
        firstname === existingUserfname &&
        lastname === existingUserlname &&
        email === existingUseremail &&
        password === existingUserpass
    ) {
        alert("This user already exists. Please use a different email.");
        return; 
    }

    let userdata = {
        userfname: firstname,
        userlname: lastname,
        useremail: email,
        userpass: password,
    };

    console.log(userdata);

    
    localStorage.setItem("userfname", firstname);
    localStorage.setItem("userlname", lastname);
    localStorage.setItem("useremail", email); 
    localStorage.setItem("userpass", password);


    alert("Submitted Successfully!");
    document.getElementById("myForm").reset(); 
}
