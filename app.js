let container = document.querySelector(".container");
// let gridSize = prompt("How many blocks wide would you like your grid to be?")
function createGrid(size){
  container.style.setProperty('--size', size);
  for(var i = 0; i < size * size; i++){
    let box = document.createElement('div');
    box.className="grid-item";
    container.appendChild(box);
    
  }
  
}

createGrid(16);