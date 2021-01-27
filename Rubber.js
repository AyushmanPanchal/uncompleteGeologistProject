class Rubber{
    constructor(x, y, radius, diameter){
    var options = {
        'restitution' :0.3,
        'friction' :5,
        'density' :1

    }
    this.body.circle(x, y, radius, options, diameter)
    this.radius = radius;
    this.diameter = diameter;

    World.add(world, this.body);
}
display(){
    var pos =this.body.position
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      eclipseMode(CENTER)
      eclipse(0, 0, this.radius, this.diameter);
      pop();

}
};