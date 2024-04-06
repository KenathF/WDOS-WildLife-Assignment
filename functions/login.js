document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Fetch user data from JSON file
  fetch('../json/login.json')
    .then(response => response.json())
    .then(data => {
      const users = data.users;
      // Check if the provided username and password match any user
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        // Authentication successful
        // Store user information in sessionStorage
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('role', user.role); // Assuming there is a 'role' property in the user object
        window.location.href = "../index.html"; // Redirect to index.html
      } else {
        // Authentication failed
        document.getElementById("error").innerHTML = "Invalid username or password";
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
