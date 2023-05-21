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

  
  /// button logic
  // Function to change box color to white
  function changeColor(color) {
    const boxes = document.getElementsByClassName("box");

    if (color === "rainbow") {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function () {
          const randomColor = getRandomColor();
          this.style.backgroundColor = randomColor;
        });
      }
    } else {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function () {
          this.style.backgroundColor = color;
        });
      }
    }
  }

  // Function to clear the board (revert boxes to black)
  function clearBoard() {
    const boxes = document.getElementsByClassName("box");

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "black";
    }
  }
  // for a rainbow color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

   // Function to pick a color from the spectrum
   function pickColor() {
    const boxes = document.getElementsByClassName("box");
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";

    colorPicker.addEventListener("change", function () {
      const pickedColor = this.value;

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function () {
          this.style.backgroundColor = pickedColor;
        });
      }
    });

    colorPicker.click();
  }