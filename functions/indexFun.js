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
  async function renderSection2() {
    const data = await fetchData();
    if (data && data.sec2Data) {
      document.getElementById("heading").innerHTML = `<h1>${data.sec2Data.heading}</h1>`;
      document.getElementById("p1").innerHTML = `<p>${data.sec2Data.p1}</p>`;
    }
  }
  
  // Function to render section 3
  async function renderSection3() {
    const data = await fetchData();
    if (data && data.sec3Data) {
      const sec3 = data.sec3Data;
      document.querySelector(".birdpic").innerHTML = `
        <img id="birdimg" src="${sec3.birdpic.image}" alt="${sec3.birdpic.title}">
        <div class="birdpictext">
          <h2>${sec3.birdpic.title}</h2>
          <p>${sec3.birdpic.description}</p>
        </div>`;
      document.querySelector(".aquatic").innerHTML = `
        <img id="coralimg" src="${sec3.aquatic.image}" alt="${sec3.aquatic.title}">
        <div class="aquatictext">
          <h2>${sec3.aquatic.title}</h2>
          <p>${sec3.aquatic.description}</p>
        </div>`;
      document.querySelector(".Flora").innerHTML = `
        <img id="floraimg" src="${sec3.Flora.image}" alt="${sec3.Flora.title}">
        <div class="floratext">
          <h2>${sec3.Flora.title}</h2>
          <p>${sec3.Flora.description}</p>
        </div>`;
    }
  }
  
  // Function to render section 4
  async function renderSection4() {
    const data = await fetchData();
    if (data && data.sec4Data) {
      const sec4 = data.sec4Data;
      document.querySelector(".list-container1").innerHTML = `
        <h2>explore</h2>
        <ul>${sec4.list1.map(item => `<li>${item}</li>`).join("")}</ul>`;
      document.querySelector(".list-container2").innerHTML = `
        <h2>Protected areas</h2>
        <ol>${sec4.list2.map(item => `<li>${item}</li>`).join("")}</ol>`;
    }
  }
  
  // Call render functions when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", function () {
    renderSection2();
    renderSection3();
    renderSection4();
  });
  
  // Event listener for newsletter form submission
  document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    saveSubscription(email);
    document.getElementById("email").value = "";
    alert("Thank you for subscribing to our newsletter!");
  });
  
  // Function to save subscription in local storage
  function saveSubscription(email) {
    var subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
    subscriptions.push(email);
    localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));
  }
  