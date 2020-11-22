class paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:500,
            density:1.1
        };
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
      var paperpos=this.body.position;
      push()
      fill(255,0,255);
      translate(paperpos.x,paperpos.y);
      imageMode(CENTER)
      image(this.image,0,0,this.r+60,this.r+60);
      pop();
    }
}