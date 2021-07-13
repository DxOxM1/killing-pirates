class Tower 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.image=loadImage("Tower.png")
  }

  display() {
   
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.w, this.h);
    pop();
  }
  
}
