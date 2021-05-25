var canvas = new fabric.Canvas('myCanvas');
block_image_width= 30;
block_image_height=30;
player_x= 10;
player_y= 10;
var player_object= "";

function player_update() {
    fabric.Image.fromURL("twwety.PNG", function(Img) {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(block_image_object);
    });
}

if (keyPressed == '72')
{
   new_image ("head.jpg");
   console.log("h");
}
if (keyPressed == '82')
{
   new_image ("Right hand.PNG");
   console.log("r");
}
if (keyPressed== '83')
{
    new_image ("Left hand.PNG");
    console.log("s");
}
if (keyPressed == '66')
{
   new_image ("Body.PNG");
   console.log("b");
}
if (keyPressed == '76')
{
   new_image ("legs.PNG");
   console.log("l")
}

if (keyPressed== '38')
{
    up();
    console.log("up");
}
if (keyPressed== '40')
{
    down();
    console.log("down");
}
if (keyPressed== '37')
{
    left();
    console.log("left");
}
if (keyPressed== '39')
{
    right();
    console.log("right");
}