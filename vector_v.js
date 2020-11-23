class vector_v {
  constructor(v) {
    this.v = createVector(v.x, v.y, v.z);
  }
  mostrar() {
    strokeWeight(2);
    stroke(255, 0, 0);
    line(0, 0, 0, this.v.x, -this.v.y, this.v.z)
    push();
    translate(this.v.x, -this.v.y, this.v.z);

    if (this.v.y != 0) {
      rotateZ(-HALF_PI-this.v.x*atan(this.v.x / this.v.y)/(abs(this.v.x)));
    }
    if (this.v.z != 0) {
      rotateX(HALF_PI-this.v.x*atan(this.v.y / this.v.z)/(abs(this.v.x)));
      rotateY(HALF_PI+this.v.x*atan(this.v.x / this.v.z)/(abs(this.v.x)));
    }
    cone(2, 5);
    pop();
  }
}