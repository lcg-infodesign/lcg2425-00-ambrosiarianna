function setup() {
  createCanvas(400, 400); // imposta la dimensione del canvas
}

function draw() {
  background("#3c3b4c"); // colore di sfondo
  fill("lightblue");
  noStroke();

  let rectWidth = 10;
  let rectHeight = 20;
  let spacing = 5; // spazio tra i rettangoli
  let columns = width / (rectWidth + spacing); // numero di colonne nel canvas

  for (let i = 0; i < columns; i++) {
    rect(i * (rectWidth + spacing), 10, rectWidth, rectHeight); // disegna un rettangolo per ogni colonna
  }
}
