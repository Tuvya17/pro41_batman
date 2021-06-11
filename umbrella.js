class Umbrella{
    constructor(x, y, r) {
        var options = {
             isStatic:true
        }
        
        this.Umbrella = loadImage("walking_1.png")
        this.body = Bodies.circle(x, y, r, options);
        this.x = x
        this.y = y
        this.r = r
        World.add(world, this.body);
      }
      display(){
        
        //console.log("paper");
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.Umbrella,0, 0, 300, 300);
        pop();
      }
}
