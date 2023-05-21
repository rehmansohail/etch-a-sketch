// Function to create the grid dynamically
function createGrid(size) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        gridContainer.appendChild(box);
      }
    }
  }
  
  // Initialize the grid with default size
  createGrid(16);
  