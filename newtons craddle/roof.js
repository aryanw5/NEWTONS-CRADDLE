class Roof {
    constructor(x, y, width, height) {

        this.height = height;
        this.width = width;
        this.x = x;
        this.roof = Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world, this.roof);
    }

    display() {
        push();
        rectMode(CENTER);
        fill(255);
        rect(this.roof.position.x,this.roof.position.y,this.height,this.width);
        pop();
    }
    }
