class Drops{
    constructor(x, y, r) {
        var options = {
             isStatic:false,
            restitution:0,
            friction:0.1,
            density:1.2
        }
        //this.Paper = loadImage("paper.png")
        this.body = Bodies.circle(x, y, r, options);
        this.x = x
        this.y = y
        this.r = r
        World.add(world, this.body);
      }


      update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700), y:random(0,600)})

        }
      
      }



      display(){
        //Image("paper.png");
        //console.log("paper");
        push();
        fill("lightblue");
        ellipseMode(RADIUS);
        ellipse( this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
      }

        
}