class canonica {
  mostrar() {
    strokeWeight(1);
    stroke(0, 0, 256);
    line(0, 0, 0, 200, 0, 0);
    line(0, 0, 0, 0, -200, 0);
    line(0, 0, 0, 0, 0, 200);
    stroke(100, 100, 256);
    line(0, 0, 0, -200, 0, 0);
    line(0, 0, 0, 0, 200, 0);
    line(0, 0, 0, 0, 0, -200);
    stroke(0);
    strokeWeight(2);
    line(0, 0, 0, 10, 0, 0);
    line(0, 0, 0, 0, -10, 0);
    line(0, 0, 0, 0, 0, 10);
  }
}
