function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function() {
    stroke(0);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branchA = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var rightBranch = new Branch(this.end, newEnd);
    return rightBranch;
  }

  this.branchB = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var leftBranch = new Branch(this.end, newEnd);
    return leftBranch;
  }
}
