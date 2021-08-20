//firebase.database()
var database,position;

var ball;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    //read data from the database
    //.on("value",call back function if data is found, call back function if data is not found)
    database.ref("ball/position").on("value",readPosition,showError);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
    //console.log(position.y);

}

function changePosition(x,y){
    //write data into the database
    database.ref("ball/position").set({
        "x": position.x + x,
        "y": position.y + y
    })
}

function showError (){
    console.log("No data found");

}


