document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
    const usersDatabase = [
        {
            username: "user1",
            password: "password1"
        },
        {
            username: 'akkhilesh',
            password: 'password2'
        }
    ];

    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        const user = usersDatabase.find(user => user.username === usernameInput);
        if (!user) {
            alert("User not found.");
            return;
        }

        if (passwordInput === user.password) {
            alert("Login successful!");
        } else {
            alert("Invalid username or password.");
        }

        loginForm.reset();
    });
});
