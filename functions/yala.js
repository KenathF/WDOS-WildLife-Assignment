document.addEventListener("DOMContentLoaded", function () {
    // Retrieve JSON data from external file
    fetch('../json/yala.json')
      .then(response => response.json())
      .then(data => {
        const sec1Data = data.sec1Data;
        const sec2Data = data.sec2Data;
        const sec3Data = data.sec3Data;
  
        // Function to populate sec1 section
        function populateSec1() {
          document.getElementById("sec1Title").textContent = sec1Data.title;
          document.getElementById("sec1Description").textContent = sec1Data.description;
        }
  
        // Function to populate sec2 section
        function populateSec2() {
          document.getElementById("sec2Title").textContent = sec2Data.title;
          document.getElementById("sec2Description").textContent = sec2Data.description;
  
          const sec2ImageGallery = document.getElementById("sec2ImageGallery");
          sec2Data.images.forEach(image => {
            const img = document.createElement("img");
            img.src = image;
            sec2ImageGallery.appendChild(img);
          });
        }
  
        // Function to populate sec3 section
        function populateSec3() {
          document.getElementById("sec3Title").textContent = sec3Data.title;
          document.getElementById("sec3Description").textContent = sec3Data.description;
          document.getElementById("sec3WebsiteLink").href = sec3Data.websiteLink;
          document.getElementById("mapEmbed").src = sec3Data.mapEmbedUrl;
        }
  
        // Call functions to populate sections
        populateSec1();
        populateSec2();
        populateSec3();
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  