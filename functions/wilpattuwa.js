document.addEventListener("DOMContentLoaded", function () {
    // Retrieve JSON data from external file
    fetch('../json/wilpattuwa.json')
      .then(response => response.json())
      .then(data => {
        const sec1Data = data.sec1Data;
        const sec2Data = data.sec2Data;
        const sec3Data = data.sec3Data;
  
        // Function to populate sec1 dynamically
        function populateSec1() {
          document.getElementById("sec1").innerHTML = `
            <h2>${sec1Data.title}</h2>
            <p>${sec1Data.description}</p>
          `;
        }
  
        // Function to populate sec2 dynamically
        function populateSec2() {
          document.getElementById("sec2").innerHTML = `
            <h2>${sec2Data.title}</h2>
            <p>${sec2Data.description}</p>
            <div class="container wilpattu-image-gallery" id="sec2ImageGallery"></div>
          `;
  
          const sec2ImageGallery = document.getElementById("sec2ImageGallery");
          sec2Data.images.forEach(image => {
            const img = document.createElement("img");
            img.src = image;
            sec2ImageGallery.appendChild(img);
          });
        }
  
        // Function to populate sec3 dynamically
        function populateSec3() {
          document.getElementById("sec3").innerHTML = `
            <h2>${sec3Data.title}</h2>
            <p>${sec3Data.description}</p>
          `;
        }
  
        // Call the functions to populate the sections
        populateSec1();
        populateSec2();
        populateSec3();
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  