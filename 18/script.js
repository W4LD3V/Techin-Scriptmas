document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const flavorInput = document.getElementById("flavorInput");
    const resultsDiv = document.getElementById("results");
    const resultsTableBody = document.querySelector("#resultsTable tbody");
  
    
    submitBtn.addEventListener("click", () => {
      const flavors = flavorInput.value.trim().toLowerCase().split(",");
      const flavorCounts = {};
  
      
      flavors.forEach((flavor) => {
        flavor = flavor.trim();
        if (flavor) {
          flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
        }
      });
  
      
      resultsTableBody.innerHTML = "";
  
      
      for (const [flavor, count] of Object.entries(flavorCounts)) {
        const row = document.createElement("tr");
        const flavorCell = document.createElement("td");
        const countCell = document.createElement("td");
  
        flavorCell.textContent = capitalize(flavor);
        countCell.textContent = `${count} servings`;
  
        row.appendChild(flavorCell);
        row.appendChild(countCell);
        resultsTableBody.appendChild(row);
      }
  
      
      resultsDiv.classList.remove("hidden");
    });
  
    
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  });
  