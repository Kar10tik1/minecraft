var canvas = new fabric.Canvas("myCanvas");
image_block_width = 30;
image_block_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var image_block_object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function (Img){
     player_object=Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
        top:player_y,
        left:player_x
     });
     canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image ,function (Img){
        image_block_object=Img;
        image_block_object.scaleToWidth(image_block_width);
        image_block_object.scaleToHeight(image_block_height);
        image_block_object.set({
           top:player_y,
           left:player_x
        });
        canvas.add(image_block_object);
       });
}
 window.addEventListener("keydown",my_keydown);
 function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80")
    {
        console.log("p and shift key tegother pressed");
        image_block_width = image_block_width + 10 ;
        image_block_height = image_block_height + 10;
        document.getElementById("currentheight").innerHTML = image_block_height;
        document.getElementById("currentwidth").innerHTML = image_block_width;
    }
    if(e.shiftKey == true && keyPressed == "77")
    {
        console.log("m and shift key tegother pressed");
        image_block_height = image_block_height - 10;
        image_block_width = image_block_width - 10 ;
        document.getElementById("currentheight").innerHTML = image_block_height;
        document.getElementById("currentwidth").innerHTML = image_block_width;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if ( keyPressed == "40")
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
         left();
         console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
    if(keyPressed == '87')
    {
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed == "76")
    {
        new_image("light_green.png");
        console.log("l");
    }   
    if(keyPressed == "71")
    {
        new_image("groung.png");
        console.log("g")
    }
    if(keyPressed == "84")
    {
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == "82")
    {
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed == "89")
    {
    new_image("yellow_wall.png");
    console.log("y");
    }
    if(keyPressed == "67")
    {
        new_image("cloud.jpg");
        console.log("c");
    }
    if(keyPressed == "68")
    {
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed == "85")
    {
        new_image("unique.png");
        console.log("u")
    }
}
function up(){
    if(player_y >= 0 ){
        player_y = player_y - image_block_height;
        console.log("The height of the block is = "+ image_block_height);
        console.log("when up arrow key is pressed, X = "+player_x+"and Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y < 570){
        player_y = player_y + image_block_height;
        console.log("The height of theblock is = " + image_block_height);
        console.log("when the down arrow key is pressed, X= "+player_x+" and Y =  "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - image_block_width;
        console.log("the width of the block is = "+ image_block_width);
        console.log("when the left arrow key is pressed , X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 970){
        player_x = player_x + image_block_width;
        console.log("the width of the block = " + image_block_width);
        console.log("when the right arrow key is pressed , X = "+player_x+" Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}