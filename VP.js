let origen;
let punta_1;
let punta_2;
let eje_x_punta;
let eje_y_punta;
let opcion;
let posicion_x;
let posicion_y
let v_x;
let v_y;

function setup() {
  altura = 50;
  ancho = 75;
  entrada1 = createInput('0');
  entrada1.position(0 + ancho, -25 + altura, 'relative');
  entrada1.size(55, 25);
  entrada1.style('background-color', 'lightcyan');
  entrada1.parent(uno);
  entrada2 = createInput('0');
  entrada2.position(0 + ancho, -25 + altura, 'relative');
  entrada2.size(55, 25);
  entrada2.style('background-color', 'lightcyan');
  entrada2.parent(uno);
  entrada3 = createInput('0');
  entrada3.position(-110 + ancho, 0 + altura, 'relative');
  entrada3.size(55, 25);
  entrada3.style('background-color', 'lightcyan');
  entrada3.parent(uno);
  entrada4 = createInput('0');
  entrada4.position(-110 + ancho, 0 + altura, 'relative');
  entrada4.size(55, 25);
  entrada4.style('background-color', 'lightcyan');
  entrada4.parent(uno);
  cv = createCanvas(500, 500);
  cv.position(480, 220)
  cv.mousePressed(cambiarvec);
  colorMode(RGB, 256);
  origen = createVector(0, 0);
  punta_1 = createVector(150, -150);
  posicion_x = 150;
  posicion_y = -150;
  punta_2 = createVector(-posicion_x, posicion_y);
  eje_x_punta = createVector(200, 0);
  eje_y_punta = createVector(0, -200);
  opcion = 2;
  var1 = entrada1.value();
  var2 = entrada2.value();
  var3 = entrada3.value();
  var4 = entrada4.value();
  parrafo1 = createP(str(var1));
  parrafo1.position(80, 65, 'relative');
  parrafo1.parent(uno);
  parrafo2 = createP(str(var2));
  parrafo2.position(50, -22, 'relative');
  parrafo2.parent(parrafo1);
  parrafo3 = createP(str(var3));
  parrafo3.position(-50, 0, 'relative');
  parrafo3.parent(parrafo2);
  parrafo4 = createP(str(var4));
  parrafo4.position(50, -22, 'relative');
  parrafo4.parent(parrafo3);
}

function draw() {
  translate(250, 250);
  background(220);
  drawArrow(origen, eje_x_punta, 'black', 1);
  drawArrow(origen, eje_y_punta, 'black', 1);
  strokeWeight(1);
  stroke(0);
  line(0, 0, -200, 0);
  line(0, 0, 0, 200);
  drawArrow(origen, punta_1, 'blue', 2);
  stroke(0, 0, 255);
  text('v', punta_1.x + 10, punta_1.y)
  drawArrow(origen, punta_2, 'red', 2);
  stroke(255, 0, 0);
  text('T(v)', punta_2.x + 10, punta_2.y)
}

function drawArrow(base, vec, myColor, grosor) {
  push();
  stroke(myColor);
  strokeWeight(grosor);
  fill(myColor);
  //translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

function cambiarvec() {
  if (mouseY > 0 && mouseX > 0) {
    posicion_x = mouseX;
    posicion_y = mouseY;
    punta_1 = createVector(posicion_x - 250, posicion_y - 250);
    if (opcion == 1) {
      punta_2 = createVector(posicion_y - 250, -posicion_x + 250);
    } else if (opcion == 2) {
      punta_2 = createVector(-posicion_y + 250, -posicion_x + 250);
    } else if (opcion == 3) {
      punta_2 = createVector((posicion_x - posicion_y) / 2, -(posicion_x - posicion_y) / 2);
    }else if (opcion == 4) {
      v_1 = createVector(float(var1), float(var2));
      v_2 = createVector(float(var3), float(var4));
      aux = createVector(posicion_x - 250, -posicion_y + 250);
      xx = v_1.dot(aux);
      yy = -v_2.dot(aux);
      punta_2 = createVector(xx, yy);
    }
  }
}

function mouseDragged() {
  if (mouseY > 0 && mouseX > 0) {
    posicion_x = mouseX;
    posicion_y = mouseY;
    punta_1 = createVector(posicion_x - 250, posicion_y - 250);
    if (opcion == 1) {
      punta_2 = createVector(posicion_y - 250, -posicion_x + 250);
    } else if (opcion == 2) {
      punta_2 = createVector(-posicion_y + 250, -posicion_x + 250);
    } else if (opcion == 3) {
      punta_2 = createVector((posicion_x - posicion_y) / 2, -(posicion_x - posicion_y) / 2);
    } else if (opcion == 4) {
      v_1 = createVector(float(var1), float(var2));
      v_2 = createVector(float(var3), float(var4));
      aux = createVector(posicion_x - 250, -posicion_y + 250);
      xx = v_1.dot(aux);
      yy = -v_2.dot(aux);
      punta_2 = createVector(xx, yy);
    }
  }
}

function opcionn_1() {
  opcion = 1;
  punta_2 = createVector(posicion_y - 250, -posicion_x + 250);
}

function opcionn_2() {
  opcion = 2;
  punta_2 = createVector(-posicion_y + 250, -posicion_x + 250);
}

function opcionn_3() {
  opcion = 3;
  punta_2 = createVector((posicion_x - posicion_y) / 2, -(posicion_x - posicion_y) / 2);
}


function presionarboton() {
  opcion = 4;
  var1 = entrada1.value();
  var2 = entrada2.value();
  var3 = entrada3.value();
  var4 = entrada4.value();
  v_1 = createVector(float(var1), float(var2));
  v_2 = createVector(float(var3), float(var4));
  aux = createVector(posicion_x - 250, -posicion_y + 250);
  xx = v_1.dot(aux);
  yy = v_2.dot(aux);
  punta_2 = createVector(xx, yy);
  var1 = entrada1.value();
  var2 = entrada2.value();
  var3 = entrada3.value();
  var4 = entrada4.value();
  parrafo1.html(str(var1));
  parrafo1.position(80, 65, 'relative');
  parrafo1.parent(uno);
  parrafo2.html(str(var2));
  parrafo2.position(50, -22, 'relative');
  parrafo2.parent(parrafo1);
  parrafo3.html(str(var3));
  parrafo3.position(-50, 0, 'relative');
  parrafo3.parent(parrafo2);
  parrafo4.html(str(var4));
  parrafo4.position(50, -22, 'relative');
  parrafo4.parent(parrafo3);
}