class Boat{
    constructor(x, y, width, height, boatpos){
        this.x=x 
        this.y=y 
        this.width=width 
        this.height=height 
        this.boatPosition=boatpos
         this.body= Bodies.rectangle(x, y, width, height);
         this.image=loadImage("./assets/boat.png");
         World.add(world, this.body);
    }

    remove(index){
        setTimeout(()=>{
            Matter.World.remove(world,boats[index].body);
            delete boats[index];
        }, 2000)
    }

    display(){

        var angle= this.body.angle
        var pos=this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width, this.height);
        pop();
    }
}