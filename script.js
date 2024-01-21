const gridFlex = document.querySelector('.flexContainer');
createGrid(gridFlex, 4);

function createGrid(container, size) {
    container.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < size; i++) {
      const rowBlock = document.createElement('div');
      rowBlock.classList.add('row');
      for (let j = 0; j < size; j++) {
        const columnBlock = document.createElement('div');
        columnBlock.classList.add('column');
        rowBlock.appendChild(columnBlock);
        columnBlock.addEventListener('mouseenter', changeColor);
      }
      container.appendChild(rowBlock);
    }
  }

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function updateGridSize() {
  const gridSize = document.getElementById('gridSizeInput').value;
  const size = parseInt(gridSize, 10);
  if (!isNaN(size) && size > 0 && size<=200) {
    createGrid(gridFlex, size);
  }else if (!isNaN(size) && size > 0 && size>200){
  alert('Size should be less than 200');
  } else {
    alert('Please enter a valid grid size');
  }
}
document.getElementById('gridSizeButton').addEventListener('click', updateGridSize);

function changeColor(e) {
    const selectedColor = document.getElementById('colorPicker').value;
    e.target.style.backgroundColor = selectedColor;
  }