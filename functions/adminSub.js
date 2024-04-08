document.addEventListener("DOMContentLoaded", function () {
  // Function to display all newsletter subscriptions
  function displaySubscriptions() {
    var subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
    var subscriptionList = document.getElementById("subscriptionList");
    subscriptionList.innerHTML = "";
    subscriptions.forEach(function (email) {
      var li = document.createElement("li");
      li.textContent = email;
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        removeSubscription(email);
        displaySubscriptions(); // Refresh the list after deletion
      });
      li.appendChild(deleteButton);
      subscriptionList.appendChild(li);
    });
  }

  // Function to remove a subscription
  function removeSubscription(email) {
    var subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
    var index = subscriptions.indexOf(email);
    if (index !== -1) {
      subscriptions.splice(index, 1);
      localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));
    }
  }

  // Call the function to display subscriptions
  displaySubscriptions();
});