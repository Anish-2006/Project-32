const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,time;

function preload() {
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
      background(backgroundImg);
    }

    Engine.update(engine);

    getTime();

    textSize(40);
    fill("black")
    text("Time : " + time,50,60);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var resJson = await res.json();
    var Date = resJson.datetime;
    console.log(Date);
    // write code slice the datetime
    var hour = Date.slice(11,13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour >= 05 && hour < 06){
        bg = "sunrise1.png";
    }else if(hour >= 06 && hour <=07){
        bg = "sunrise2.png";
    }else if(hour >= 08 && hour <= 09){
        bg = "sunrise3.png";
    }else if(hour >= 10 && hour <= 11){
        bg = "sunrise4.png";
    }else if(hour >= 12 && hour <= 14){
        bg = "sunrise5.png";
    }else if(hour >= 15 && hour < 16){
        bg = "sunrise6.png";
    }else if(hour >= 16 && hour < 17){
        bg = "sunset7.png";
    }else if(hour >= 17 && hour < 18){
        bg = "sunset8.png";
    }else if(hour >= 18 && hour < 19){
        bg = "sunset9.png";
    }else if(hour >= 19 && hour < 20){
        bg = "sunset10.png";
    }else if(hour >= 20 && hour <= 21){
        bg = "sunset11.png";
    }else {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
}

async function getTime(){

    var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var resJson = await res.json();
    var Date = resJson.datetime;
    time = Date.slice(11,16);

}
