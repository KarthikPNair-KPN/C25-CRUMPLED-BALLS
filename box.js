class box{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        };

        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body)
    }

    display(){
        var boxpos=this.body.position
        boxpos.x=this.body.position.x
        boxpos.y=this.body.position.y

        imageMode(CENTER);
        image(this.image,1380,550,this.width+120,this.height+230)
    }
}