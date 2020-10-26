var part1,part2,part3
class Dustbin {
    
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            'isStatic':true
        }
        part1 = Bodies.rectangle(x, y+25, 150, 20, options);
        part1.width = 150;
        part1.height = 20;
    
        part2 = Bodies.rectangle(x+70, y-15, 20,150, options);
        part2.width = 20;
        part2.height = 100;

        part3 = Bodies.rectangle(x-70, y-15, 20, 100, options);
        part3.width = 20;
        part3.height = 100;
    
        World.add(world, part1);
        World.add(world, part2);
        World.add(world, part3);

        this.image = loadImage("dustbingreen.png")
    }
    display(){
        var pos =part1.position;
        var angle =part1.angle 
        push()
        translate(pos.x,pos.y)
        rotate(0 - angle)
        rectMode(CENTER);
        fill("white");
        image(this.image,0,0, part1.width, part1.height);
        pop();

        var posA =part2.position;
        var Angle =part2.angle 
        push()
        translate(posA.x,posA.y)
        rotate(0 - Angle)
        rectMode(CENTER);
        fill("white");
        rect(0,0, part2.width, part2.height);
        pop();

        var posB =part3.position;
        var AngleA =part3.angle 
        push()
        translate(posB.x,posB.y)
        rotate(0 - AngleA)
        rectMode(CENTER);
        fill("white");
        rect(0,0, part3.width, part3.height);
        pop();
      }
    }