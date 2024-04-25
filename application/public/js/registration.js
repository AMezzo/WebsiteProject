function validateForm() {
    var username = document.forms["registration"]["username"].value;
    var password = document.forms["registration"]["password"].value;
    var confirm_password = document.forms["registration"]["confirm_password"].value;
    var email = document.forms["registration"]["email"].value;

    var username_regex = /^[a-zA-Z][a-zA-Z0-9]{2,}$/;
    var password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[/*\-+!@#$^&~\[\]]).{8,}$/;
    var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!username_regex.test(username)) {
        alert("Username must start with a letter and be at least 3 characters long.");
        return false;
    }
    if (!password_regex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
        return false;
    }
    if (password != confirm_password) {
        alert("Password and confirm password must match.");
        return false;
    }
    if (!email_regex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}
``