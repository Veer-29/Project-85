//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image

greencar_width=80;
greencar_height=150;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=20;
greencar_y=350;



function add(){
	//upload car, and background images on the canvas.
    background_imgtag = new Image()
    background_imgtag.onload = uploadbackground;
    background_imgtag.src=background_image;


    greencar_imgtag = new Image()
    greencar_imgtag.onload = uploadgreencar;
    greencar_imgtag.src=greencar_image;
}

function uploadbackground(){
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar(){
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
}

window.addEventListener("keydown",myKeydown);

function myKeydown(e)
{
keypressed=e.keyCode;
console.log(keypressed)

if (keypressed=="38")
{
    up();
    console.log("up");
}

if (keypressed=="40")
{
    down();
    console.log("down");
}

if (keypressed=="37")
{
    left();
    console.log("left");
}

if (keypressed=="39")
{
    right();
    console.log("right");
}
}

function up(){
	//Define function to move the car upward
    if(greencar_y>=0){
        greencar_y=greencar_y-10;
        console.log("when up key is pressed x="+greencar_x+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }
}

function down(){
	//Define function to move the car downward
    if(greencar_y<=350){
        greencar_y=greencar_y+10;
        console.log("when down key is pressed x="+greencar_x+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }
}

function left(){
	//Define function to move the car left side
    if(greencar_x>=0){
        greencar_x=greencar_x-10;
        console.log("when left key is pressed x="+greencar_y+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }
}

function right(){
	//Define function to move the car right side
    if(greencar_x<=700){
        greencar_x=greencar_x+10;
        console.log("when right key is pressed x="+greencar_y+"y="+greencar_y);
        uploadbackground();
        uploadgreencar();
    }
}




