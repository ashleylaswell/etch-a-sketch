let container = document.getElementById('container');
let gridSize = prompt("How many blocks wide would you like your grid to be?")
function createGrid(size){
  container.style.setProperty('--size', size);
  for(let i = 0; i < size * size; i++){
    let box = document.createElement('div');
    box.className="grid-item";
    container.appendChild(box);
  }
  
}

createGrid(gridSize);

let boxes = document.getElementsByClassName("grid-item");
for (let i = 0; i < boxes.length; i++){
  boxes[i].addEventListener("mouseover", function(e){
    this.style.backgroundColor = "black";
  })
}
