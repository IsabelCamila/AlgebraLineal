class vector_v {
  constructor(v) {
    this.v = createVector(v.x, v.y, v.z);
  }
  mostrar() {
    strokeWeight(2);
    stroke(255, 0, 0);
    line(0, 0, 0, this.v.x, -this.v.y, this.v.z);
  }
}