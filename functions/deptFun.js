document.addEventListener("DOMContentLoaded", function () {
    // Retrieve JSON data from external file
    fetch('../json/dept.json')
        .then(response => response.json())
        .then(data => {
            const flexboxData = data.flexboxData;
            const deptMapData = data.deptMapData;
            const headSecData = data.headSecData;

            // Function to generate HTML for flexboxcontainer section
            function renderFlexboxContainer() {
                const flexboxContainer = document.querySelector(".flexboxcontainer");
                flexboxData.forEach(item => {
                    const html = `
                        <div class="box">
                            <div class="box-image ${item.imageClass}"></div>
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                        </div>`;
                    flexboxContainer.insertAdjacentHTML("beforeend", html);
                });
            }

            // Function to generate HTML for Dept-Map section
            function renderDeptMap() {
                const deptMapContainer = document.querySelector(".Dept-Map");
                const html = `
                    <div>
                        <h4>${deptMapData.title}</h4>
                    </div>
                    <iframe src="${deptMapData.mapURL}" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                deptMapContainer.innerHTML = html;
            }

            function renderHeadSec() {
                const headSecContainer = document.querySelector("#headsec");
                const html = `
                    <div id="head">
                        <h1>${headSecData.title}</h1>
                        <p>${headSecData.content}</p>
                    </div>`;
                headSecContainer.innerHTML = html;
            }

            // Call function to render content
            renderHeadSec();
            renderFlexboxContainer();
            renderDeptMap();
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
