let sliderGroup = [];
let X;
let Y;
let Z;
let h = 20;
var ancho = 600;
var alto = 600;
var pizarra;
var v_1;
var p;
var v_2;
var base_c;

function setup() {
  entrada1 = createInput('2');
  entrada1.position(-210, 25, 'relative');
  entrada1.size(60, 25);
  entrada1.style('background-color', '#ff8080');
  entrada1.parent(uno);
  entrada1.changed(presionarboton);
  entrada2 = createInput('3');
  entrada2.position(55, 25, 'relative');
  entrada2.size(60, 25);
  entrada2.style('background-color', '#ff8080');
  entrada2.parent(uno);
  entrada2.changed(presionarboton);
  entrada3 = createInput('-1');
  entrada3.position(-5, 50, 'relative');
  entrada3.size(60, 25);
  entrada3.style('background-color', '#ff8080');
  entrada3.parent(uno);
  entrada3.changed(presionarboton);

  entrada1_2 = createInput('-1');
  entrada1_2.position(80, 0, 'relative');
  entrada1_2.size(60, 25);
  entrada1_2.style('background-color', 'lightgreen');
  entrada1_2.parent(uno);
  entrada1_2.changed(presionarboton);
  entrada2_2 = createInput('2');
  entrada2_2.position(20, 25, 'relative');
  entrada2_2.size(60, 25);
  entrada2_2.style('background-color', 'lightgreen');
  entrada2_2.parent(uno);
  entrada2_2.changed(presionarboton);
  entrada3_2 = createInput('3');
  entrada3_2.position(-40, 50, 'relative');
  entrada3_2.size(60, 25);
  entrada3_2.style('background-color', 'lightgreen');
  entrada3_2.parent(uno);
  entrada3_2.changed(presionarboton);
  botones();

  cnv = createCanvas(ancho, alto, WEBGL);
  cnv.position(480, 220)
  pizarra = createGraphics(160, 300);
  v_1 = createVector(2, 3, -1);
  v_2 = createVector(-1, 2, 3);
  p = new vectores(v_1, v_2);

  angulo_ = createP(p.theta);
  angulo_.position(220, 23, 'relative');
  angulo_.parent(dos);

  base_c = new canonica();
  for (var i = 0; i < 3; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 3, 0, 80);
    sliderGroup[i].position(125 - (80 * i), h - 140, 'relative');
    sliderGroup[i].style('width', '80px');
    sliderGroup[i].parent(barra_lateral)
  }
}

function draw() {
  background(250);
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  camera(X, Y, Z, 0, 0, 0, 0, 1, 0);
  base_c.mostrar();
  p.mostrar();
  stroke(0);
}

function presionarboton() {
  var1 = entrada1.value();
  var2 = entrada2.value();
  var3 = entrada3.value();
  v_1 = createVector(float(var1), float(var2), float(var3));
  var1 = entrada1_2.value();
  var2 = entrada2_2.value();
  var3 = entrada3_2.value();
  v_2 = createVector(float(var1), float(var2), float(var3));
  base_c = new canonica();
  p = new vectores(v_1, v_2);

  angulo_.html(str(p.theta));
  angulo_.position(190, 23, 'relative');
  angulo_.parent(dos);
}

function sumarx_1() {
  var1 = float(entrada1.value()) + 1;
  entrada1.value(var1);
  presionarboton();
}

function restarx_1() {
  var1 = float(entrada1.value()) - 1;
  entrada1.value(var1);
  presionarboton();
}

function sumary_1() {
  var2 = float(entrada2.value()) + 1;
  entrada2.value(var2);
  presionarboton();
}

function restary_1() {
  var2 = float(entrada2.value()) - 1;
  entrada2.value(var2);
  presionarboton();
}

function sumarz_1() {
  var3 = float(entrada3.value()) + 1;
  entrada3.value(var3);
  presionarboton();
}

function restarz_1() {
  var3 = float(entrada3.value()) - 1;
  entrada3.value(var3);
  presionarboton();
}

function sumarx_2() {
  var1 = float(entrada1_2.value()) + 1;
  entrada1_2.value(var1);
  presionarboton();
}

function restarx_2() {
  var1 = float(entrada1_2.value()) - 1;
  entrada1_2.value(var1);
  presionarboton();
}

function sumary_2() {
  var2 = float(entrada2_2.value()) + 1;
  entrada2_2.value(var2);
  presionarboton();
}

function restary_2() {
  var2 = float(entrada2_2.value()) - 1;
  entrada2_2.value(var2);
  presionarboton();
}

function sumarz_2() {
  var3 = float(entrada3_2.value()) + 1;
  entrada3_2.value(var3);
  presionarboton();
}

function restarz_2() {
  var3 = float(entrada3_2.value()) - 1;
  entrada3_2.value(var3);
  presionarboton();
}

function botones() {
  restax_1 = createButton("-");
  restax_1.position(-268, 0, 'relative');
  restax_1.style('background-color', '#ff8080');
  restax_1.parent(uno);
  restax_1.mousePressed(restarx_1);
  sumax_1 = createButton("+");
  sumax_1.position(-205, 0, 'relative');
  sumax_1.style('background-color', '#ff8080');
  sumax_1.parent(uno);
  sumax_1.mousePressed(sumarx_1);

  restax_2 = createButton("-");
  restax_2.position(-170, 0, 'relative');
  restax_2.style('background-color', 'lightgreen');
  restax_2.parent(uno);
  restax_2.mousePressed(restarx_2);
  sumax_2 = createButton("+");
  sumax_2.position(263, -28, 'relative');
  sumax_2.style('background-color', 'lightgreen');
  sumax_2.parent(uno);
  sumax_2.mousePressed(sumarx_2);

  restay_1 = createButton("-");
  restay_1.position(8, 0, 'relative');
  restay_1.style('background-color', '#ff8080');
  restay_1.parent(uno);
  restay_1.mousePressed(restary_1);
  sumay_1 = createButton("+");
  sumay_1.position(72, 0, 'relative');
  sumay_1.style('background-color', '#ff8080');
  sumay_1.parent(uno);
  sumay_1.mousePressed(sumary_1);

  restay_2 = createButton("-");
  restay_2.position(107, 0, 'relative');
  restay_2.style('background-color', 'lightgreen');
  restay_2.parent(uno);
  restay_2.mousePressed(restary_2);
  sumay_2 = createButton("+");
  sumay_2.position(172, 0, 'relative');
  sumay_2.style('background-color', 'lightgreen');
  sumay_2.parent(uno);
  sumay_2.mousePressed(sumary_2);

  restaz_1 = createButton("-");
  restaz_1.position(-83, 25, 'relative');
  restaz_1.style('background-color', '#ff8080');
  restaz_1.parent(uno);
  restaz_1.mousePressed(restarz_1);
  sumaz_1 = createButton("+");
  sumaz_1.position(72 - 91, 25, 'relative');
  sumaz_1.style('background-color', '#ff8080');
  sumaz_1.parent(uno);
  sumaz_1.mousePressed(sumarz_1);

  restaz_2 = createButton("-");
  restaz_2.position(107 - 91, 25, 'relative');
  restaz_2.style('background-color', 'lightgreen');
  restaz_2.parent(uno);
  restaz_2.mousePressed(restarz_2);
  sumaz_2 = createButton("+");
  sumaz_2.position(172 - 91, 25, 'relative');
  sumaz_2.style('background-color', 'lightgreen');
  sumaz_2.parent(uno);
  sumaz_2.mousePressed(sumarz_2);
}