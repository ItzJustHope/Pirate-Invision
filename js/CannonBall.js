class CannonBall{
    constructor(x, y){
    this.r = 30
    var options={
        isStatic:true
    }

    this.body= Bodies.circle(x, y, this.r, options);
    this.image= loadImage("./assets/cannonball.png");
    this.trajectory=[]
    World.add(world,this.body);
    }

    remove(index){
     Matter.Body.setVelocity(this.body, {x:0, y:0});
     setTimeout(()=>{
        Matter.World.remove(world, this.body);
        delete ball[index];
     },1000)
    }




shoot(){
var newangle=cannon.angle-28
newangle=newangle*(3.14/180);
var velocity=p5.Vector.fromAngle(newangle);
velocity.mult(0.5);
Matter.Body.setStatic(this.body, false);
Matter.Body.setVelocity(this.body, {x:velocity.x*(180/3.14), y:velocity.y*(180/3.14)});
}

display(){
    var pos = this.body.position
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    if(this.body.velocity>0 && pos.x>10){
        var position=[pos.x, pos.y];
        this.trajectory.push(position)
    }

    for(var i=0;i<this.trajectory.length;i++){
     image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
}
}


