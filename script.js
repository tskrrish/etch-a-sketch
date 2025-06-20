const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

createGrid(16);


const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (1–100):");

  if (newSize <= 100 && newSize > 0) {
    createGrid(newSize);
  } else {
    alert("Invalid number!");
  }
});
