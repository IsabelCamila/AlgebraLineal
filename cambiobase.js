let sliderGroup = [];
let X;
let Y;
let Z;
let h = 20;
var ancho = 600;
var alto = 600;
var pizarra;
var v;
var p;
var base_c;
var base_n;
var m;

function setup() {
  m = true;
  entrada1 = createInput('2');
  entrada1.position(-80, -555, 'relative');
  entrada1.size(60, 25);
  entrada1.style('background-color', 'lightcyan');
  entrada1.parent(barra_lateral);
  entrada1.changed(presionarboton);
  entrada2 = createInput('3');
  entrada2.position(-140, -530, 'relative');
  entrada2.size(60, 25);
  entrada2.style('background-color', 'lightcyan');
  entrada2.parent(barra_lateral);
  entrada2.changed(presionarboton);
  entrada3 = createInput('-1');
  entrada3.position(160, -537, 'relative');
  entrada3.size(60, 25);
  entrada3.style('background-color', 'lightcyan');
  entrada3.parent(barra_lateral);
  entrada3.changed(presionarboton);
  cnv = createCanvas(ancho, alto, WEBGL);
  cnv.position(480, 120)
  pizarra = createGraphics(160, 300);
  v = createVector(2, 3, -1);
  base_n = new nueva(v);
  p = new vector_v(base_n.v_c);
  base_c = new canonica(base_n.v_c);
  for (var i = 0; i < 3; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 4, 5, 85);
    sliderGroup[i].position(-(i * 80) + 80, -450 + h, 'relative');
    sliderGroup[i].style('width', '80px');
    sliderGroup[i].parent(barra_lateral)
  }
}

function draw() {
  background(256);
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  camera(X, Y, Z, 0, 0, 0, 0, 1, 0);
  p.mostrar();
  if (m) {
    base_n.mostrar();
  } else if (!m) {
    base_c.mostrar();
  }
  stroke(0);
}

function cambiarbase() {
  m = !m;
}

function presionarboton() {
  var1 = entrada1.value();
  var2 = entrada2.value();
  var3 = entrada3.value();
  v = createVector(float(var1), float(var2), float(var3));
  base_n = new nueva(v);
  p = new vector_v(base_n.v_c);
  base_c = new canonica(base_n.v_c);
}