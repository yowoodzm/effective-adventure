
let BearStage;

function preload(){
   bearStage = loadImage("bearStage.gif");
}


function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
       background(220,200,200);
       image(bearStage, 0, 0, 300,300);
    }
