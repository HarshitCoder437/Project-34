class Hero {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        
        this.image = loadImage("Superhero-01.png");

        this.body = Bodies.circle(this.x,this.y,20,20);
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 300, 100);
        pop();
    }
}