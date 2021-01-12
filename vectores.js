class vectores {
  constructor(v1, v2) {
    this.v1 = new createVector(v1.x, v1.y, v1.z);
    this.v2 = new createVector(v2.x, v2.y, v2.z);
    this.aux1 = new createVector(v1.x, v1.y, v1.z);
    this.aux2 = new createVector(v2.x, v2.y, v2.z);
    this.a = this.v1.dot(this.v2);
    this.n1 = this.v1.mag();
    this.n2 = this.v2.mag();
    if (this.n1 != 0 && this.n2 != 0) {
      this.theta = round(acos(this.a / (this.n1 * this.n2))*180/PI, 3);
    } else {
      this.theta = str("división por cero")
    }
    this.aux1 = this.aux1.div(this.n1);
    this.aux2 = this.aux2.div(this.n2);
    this.aux1 = this.aux1.mult(15);
    this.aux2 = this.aux2.mult(15);
    this.v1 = this.v1.mult(10);
    this.v2 = this.v2.mult(10);
    print(this.aux1);
    print(this.v1);

    this.pizarra = createGraphics(200, 200);
    this.pizarra.background(200,200,250);
    this.pizarra.noFill();
    this.pizarra.strokeWeight(2);
    this.pizarra.arc(0, 0, 210, 210, 0, HALF_PI);
    this.pizarra.rotate(HALF_PI );
    this.pizarra.fill(0);
    this.pizarra.textSize(40);
    this.pizarra.text(this.theta, 20, -20);
  }
  mostrar() {
    strokeWeight(2);
    stroke(255, 0, 0);
    line(0, 0, 0, this.v1.x, -this.v1.y, this.v1.z);
    stroke(0, 255, 0);
    line(0, 0, 0, this.v2.x, -this.v2.y, this.v2.z);

    push();
    texture(this.pizarra);
    beginShape();
    tint(255, 200);
    vertex(0, 0, 0, 0, 0);
    vertex(this.aux1.x, -this.aux1.y, this.aux1.z, 0, 200);
    vertex((this.aux1.x + this.aux2.x), -(this.aux1.y + this.aux2.y), (this.aux1.z + this.aux2.z), 200, 200);
    vertex(this.aux2.x, -this.aux2.y, this.aux2.z, 200, 0);
    vertex(0, 0, 0, 0, 0);
    endShape();
    pop();
  }
}