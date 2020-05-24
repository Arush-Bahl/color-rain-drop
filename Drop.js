class Drop{
    constructor(x,y,width,hieght){
        
        var options = {
           isStatic : false,
        }

        this.body = Bodies.rectangle(x,y,width,hieght,options);

        this.image = loadImage("WaterDrop.png")

            this.width = width;
            this.hieght = hieght;

            World.add(world,this.body);

    }

    display () {

        push();

        angleMode(RADIANS)

        imageMode(CENTER);

        image(this.image,this.body.position.x,this.body.position.y,50,50);

        pop();

    }

}