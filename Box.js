class Box
  {
    constructor(x,y)
    {
        this.w=60;
        this.h=60;
        this.x=x;
        this.y=y;
        this.v=3;
    }
    
    display(){

        rect(this.x,this.y,this.w,this.h)
    }


  }
