document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signupButton = document.getElementById("signupButton");
    const usersDatabase = [{
        username: "user1",
        password: "password1"
    },
    {
        username: 'akkhilesh',
        password: 'password2'
    }];

    signupButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("signupUsername").value;
        const passwordInput = document.getElementById("signupPassword").value;
        if (usersDatabase.some(user => user.username === usernameInput)) {
            alert("Username already taken. Please choose another username.");
            return;
        }
        usersDatabase.push({
            username: usernameInput,
            password: passwordInput
        });

        alert("Registration successful!");
        signupForm.reset();
    });
});
