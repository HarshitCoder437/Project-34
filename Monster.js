class Monster {
    constructor(x,y) {
        
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        
        this.image = loadImage("Monster-01.png");

        this.body = Bodies.circle(this.x,this.y,(40)/2,options);
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 350, 400);
        pop();
    }
}