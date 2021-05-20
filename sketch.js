const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "sunrise1.png" ;

function preload() {
    //getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
    background(backgroundImg);
}

    Engine.update(engine);

}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11, 13);

    if(hour >= 04 && hour <= 05){

        bg = "sunrise1.png";

    }if(hour >= 05 && hour <= 06){

        bg = "sunrise2.png";

    }if(hour >= 06 && hour <= 08){

        bg = "sunrise3.png";

    }if(hour >= 08 && hour <= 09){

        bg = "sunrise4.png";

    }if(hour >= 09 && hour <= 11){

        bg = "sunrise5.png";

    }if(hour >= 11 && hour <= 16){

        bg = "sunrise6.png";

    }if(hour >= 16 && hour <= 17){

        bg = "sunset7.png";

    }if(hour >= 17 && hour <= 18){

        bg = "sunset8.png";

    }if(hour >= 18 && hour <= 19){

        bg = "sunset9.png";

    }if(hour >= 19 && hour <= 20){

        bg = "sunset10.png";

    }if(hour >= 20 && hour <= 22){

        bg = "sunset11.png";

    }if(hour >= 22 && hour <= 04){

        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    console.log(hour);
}
