class Bob {
    constructor(x, y, radius) {
      var options = {
        isStatic:false,
        restitution :1,
        friction :0,
        density : 0.8
          
      }
     this.radius = radius;
     this.body = Matter.Bodies.circle(x, y,radius/2, options);
           
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
       fill("pink");
       ellipseMode(CENTER)
       ellipse(0, 0, this.radius,this.radius);
        pop();
    }
  };