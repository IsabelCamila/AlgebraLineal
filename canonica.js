class canonica {
  constructor(v) {
    this.v = createVector(v.x, v.y, v.z);
  }
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
    push();
    translate(10, 0, 0);
    rotateZ(-HALF_PI);
    cone(2, 4);
    pop();
    push();
    translate(0, -10, 0);
    rotateZ(PI);
    cone(2, 4);
    pop();
    push();
    translate(0, 0, 10);
    rotateX(HALF_PI);
    cone(2, 4);
    pop();
    strokeWeight(1);
    stroke(256, 0, 100);
    line(this.v.x, 0, 0, this.v.x, -this.v.y, 0);
    line(this.v.x, 0, 0, this.v.x, 0, this.v.z);
    line(0, -this.v.y, 0, this.v.x, -this.v.y, 0);
    line(0, -this.v.y, 0, 0, -this.v.y, this.v.z);
    line(0, 0, this.v.z, this.v.x, 0, this.v.z);
    line(0, 0, this.v.z, 0, -this.v.y, this.v.z);
    line(this.v.x, -this.v.y, 0, this.v.x, -this.v.y, this.v.z);
    line(this.v.x, 0, this.v.z, this.v.x, -this.v.y, this.v.z);
    line(0, -this.v.y, this.v.z, this.v.x, -this.v.y, this.v.z);
  }
}