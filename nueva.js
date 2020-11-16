class nueva {
  constructor(v) {
    this.v = createVector(v.x, v.y, v.z);
    this.a = createVector(1, 0, 1);
    this.b = createVector(0, 1, 1);
    this.c = createVector(1, 1, 0);
    this.vx = this.a.dot(this.v);
    this.vy = this.b.dot(this.v);
    this.vz = this.c.dot(this.v);
    this.v_c = createVector(this.vx, this.vy, this.vz);
    this.v_c = this.v_c.mult(10);

    this.aux = createVector(this.v.x, 0, 0);
    this.vx = this.a.dot(this.aux);
    this.vy = this.b.dot(this.aux);
    this.vz = this.c.dot(this.aux);
    this.v2x = createVector(this.vx, this.vy, this.vz);
    this.v2x = this.v2x.mult(10);

    this.aux = createVector(0, this.v.y, 0);
    this.vx = this.a.dot(this.aux);
    this.vy = this.b.dot(this.aux);
    this.vz = this.c.dot(this.aux);
    this.v2y = createVector(this.vx, this.vy, this.vz);
    this.v2y = this.v2y.mult(10);

    this.aux = createVector(0, 0, this.v.z);
    this.vx = this.a.dot(this.aux);
    this.vy = this.b.dot(this.aux);
    this.vz = this.c.dot(this.aux);
    this.v2z = createVector(this.vx, this.vy, this.vz);
    this.v2z = this.v2z.mult(10);

    this.aux = createVector(this.v.x, this.v.y, 0);
    this.vx = this.a.dot(this.aux);
    this.vy = this.b.dot(this.aux);
    this.vz = this.c.dot(this.aux);
    this.aux1 = createVector(this.vx, this.vy, this.vz);
    this.aux1 = this.aux1.mult(10);

    this.aux = createVector(this.v.x, 0, this.v.z);
    this.vx = this.a.dot(this.aux);
    this.vy = this.b.dot(this.aux);
    this.vz = this.c.dot(this.aux);
    this.aux2 = createVector(this.vx, this.vy, this.vz);
    this.aux2 = this.aux2.mult(10);

    this.aux = createVector(0, this.v.y, this.v.z);
    this.vx = this.a.dot(this.aux);
    this.vy = this.b.dot(this.aux);
    this.vz = this.c.dot(this.aux);
    this.aux3 = createVector(this.vx, this.vy, this.vz);
    this.aux3 = this.aux3.mult(10);
  }
  mostrar() {
    strokeWeight(1);
    stroke(0, 255, 0)
    line(0, 0, 0, 200, 0, 200);
    line(0, 0, 0, 0, -200, 200);
    line(0, 0, 0, 200, -200, 0);
    stroke(100, 255, 100)
    line(0, 0, 0, -200, 0, -200);
    line(0, 0, 0, 0, 200, -200);
    line(0, 0, 0, -200, 200, 0);
    strokeWeight(2);
    stroke(0);
    line(0, 0, 0, 10, 0, 10);
    line(0, 0, 0, 0, -10, 10);
    line(0, 0, 0, 10, -10, 0);
    strokeWeight(1);
    stroke(256, 100, 0);
    line(this.v2x.x, -this.v2x.y, this.v2x.z, this.aux1.x, -this.aux1.y, this.aux1.z);
    line(this.v2y.x, -this.v2y.y, this.v2y.z, this.aux1.x, -this.aux1.y, this.aux1.z);
    line(this.aux1.x, -this.aux1.y, this.aux1.z, this.v_c.x, -this.v_c.y, this.v_c.z);

    line(this.v2x.x, -this.v2x.y, this.v2x.z, this.aux2.x, -this.aux2.y, this.aux2.z);
    line(this.v2z.x, -this.v2z.y, this.v2z.z, this.aux2.x, -this.aux2.y, this.aux2.z);
    line(this.aux2.x, -this.aux2.y, this.aux2.z, this.v_c.x, -this.v_c.y, this.v_c.z);

    line(this.v2y.x, -this.v2y.y, this.v2y.z, this.aux3.x, -this.aux3.y, this.aux3.z);
    line(this.v2z.x, -this.v2z.y, this.v2z.z, this.aux3.x, -this.aux3.y, this.aux3.z);
    line(this.aux3.x, -this.aux3.y, this.aux3.z, this.v_c.x, -this.v_c.y, this.v_c.z);
  }
}
