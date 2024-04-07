// Function to fetch data from indexData.json
async function fetchData() {
  try {
    const response = await fetch('../json/indexData.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Function to render section 2
async function showSec2() {
  const data = await fetchData();
  if (data && data.sec2Data) {
    document.getElementById("heading").innerHTML = `<h1>${data.sec2Data.heading}</h1>`;
    document.getElementById("p1").innerHTML = `<p>${data.sec2Data.p1}</p>`;
  }
}

// Function to render section 3
async function showSec3() {
  const data = await fetchData();
  if (data && data.sec3Data) {
    const sec3 = data.sec3Data;
    document.querySelector(".birdpic").innerHTML = `
      <img id="birdimg" src="${sec3.birdpic.image}" alt="${sec3.birdpic.title}">
      <div class="birdpictext">
        <h2>${sec3.birdpic.title}</h2>
        <p>${sec3.birdpic.des}</p>
      </div>`;
    document.querySelector(".aquatic").innerHTML = `
      <img id="coralimg" src="${sec3.aquatic.image}" alt="${sec3.aquatic.title}">
      <div class="aquatictext">
        <h2>${sec3.aquatic.title}</h2>
        <p>${sec3.aquatic.des}</p>
      </div>`;
    document.querySelector(".Flora").innerHTML = `
      <img id="floraimg" src="${sec3.Flora.image}" alt="${sec3.Flora.title}">
      <div class="floratext">
        <h2>${sec3.Flora.title}</h2>
        <p>${sec3.Flora.des}</p>
      </div>`;
  }
}

// Function to render section 4
async function showSec4() {
  const data = await fetchData();
  if (data && data.sec4Data) {
    const sec4 = data.sec4Data;
    document.querySelector(".list-container1").innerHTML = `
      <h2>Explore</h2>
      <ul>${sec4.list1.map(item => `<li>${item}</li>`).join("")}</ul>`;
    document.querySelector(".list-container2").innerHTML = `
      <h2>Protected areas</h2>
      <ol>${sec4.list2.map(item => `<li>${item}</li>`).join("")}</ol>`;
  }
}

// Call render functions when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  showSec2();
  showSec3();
  showSec4();
});

// Event listener for newsletter form submission
document.getElementById("newsletterForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  saveSubscription(email);
  document.getElementById("email").value = "";
  alert("Thank you for subscribing to our newsletter!");
});

// Function to save subscription in local storage
function saveSubscription(email) {
  let subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
  subscriptions.push(email);
  localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));
}

let role = sessionStorage.getItem('role');

// Function to toggle login/logout link
// Function to toggle login/logout link and edit button
function loginAndlogout() {
  let loginLogoutLink = document.getElementById('loginLogoutLink');
  let editButton = document.getElementById('editButton');

  if (role) {
    // If user is logged in
    loginLogoutLink.innerHTML = '<a href="#">Logout</a>'; // Modify the link text or URL as needed
    loginLogoutLink.addEventListener('click', function() {
      sessionStorage.clear();
      window.location.href = './index.html'; // Redirect to appropriate page after logout
    });

    // Show edit button
    editButton.style.display = 'block';
  } else {
    // If user is not logged in
    loginLogoutLink.innerHTML = '<a href="./html/login.html">Login</a>'; // Modify the link text or URL as needed

    // Hide edit button
    editButton.style.display = 'none';
  }
}

// Call the function to toggle login/logout link
loginAndlogout();

// Display admin link if user is admin
if (role === 'admin') {
  let adminLink = document.getElementById('adminLink');
  adminLink.style.display = 'block';
}

function showEditForms() {
  document.getElementById("editForms").style.display = "block";
}

// Function to save changes in Section 2
function saveSec2Changes() {
  const heading = document.getElementById("sec2Heading").value;
  const paragraph = document.getElementById("sec2P1").value;
  const newData = {
    sec2Data: {
      heading: heading,
      p1: paragraph
    }
  };
  saveData(newData); // Save the updated data
  updatePageContent(); // Update the content on the page
}

// Function to update page content from localStorage
function updatePageContent() {
  const storedData = JSON.parse(localStorage.getItem("editableContent"));
  if (storedData && storedData.sec2Data) {
    document.getElementById("heading").innerText = storedData.sec2Data.heading;
    document.getElementById("p1").innerText = storedData.sec2Data.p1;
  }
}

// Function to save data to localStorage
function saveData(data) {
  localStorage.setItem("editableContent", JSON.stringify(data));
}

// Update page content when the page loads
window.onload = updatePageContent;