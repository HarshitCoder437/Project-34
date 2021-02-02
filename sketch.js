const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var monster;
var superhero;
var ground;
var hero;
var fly;
var block1, block2, block3, block4, block5, block6, block7; 
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25, block26;
var monster;

function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600,563,40,40);
  block2 = new Block(600,523,40,40);
  block3 = new Block(600,483,40,40);
  block4 = new Block(600,443,40,40);
  block5 = new Block(600,403,40,40);
  block6 = new Block(600,363,40,40);
  block7 = new Block(600,323,40,40);
  block8 = new Block(660,563,40,40);
  block9 = new Block(660,523,40,40);
  block10 = new Block(660,483,40,40);
  block11 = new Block(660,443,40,40);
  block12 = new Block(660,403,40,40);
  block13 = new Block(660,363,40,40);
  block14 = new Block(720,563,40,40);
  block15 = new Block(720,523,40,40);
  block16 = new Block(720,483,40,40);
  block17 = new Block(720,443,40,40);
  block18 = new Block(720,403,40,40);
  block19 = new Block(720,363,40,40);
  block20 = new Block(720,323,40,40);
  block21 = new Block(720,283,40,40);
  block22 = new Block(780,563,40,40);
  block23 = new Block(780,523,40,40);
  block24 = new Block(780,483,40,40);
  block25 = new Block(780,443,40,40);
  block26 = new Block(780,403,40,40);

  ground = new Ground(1500,600,3000,30);
  hero = new Hero(500,750);
  monster = new Monster(1200, 450);
  fly = new Fly(hero.body, {x: 250, y: 40});
}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();
  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

// function mouseReleased() {
//   Fly.fly();
// }

// function keyPressed() {
//   if (keyCode === 32) {
//     Matter.Body.setPosition(hero.body, {x: 500, y: 750});
//     fly.attach(hero.body);
//   }
// }