var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
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
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
           left:player_x
        });
        canvas.add(block_image_object);
    });
}
if(keyPressed == '70') {
    new_image('ironman_face.png')
    console.log("face")
}
if(keyPressed == '66') {
    new_image('spiderman_body.png')
    console.log("body")
}
if(keyPressed == '76') {
    new_image('hulk_legs.png')
    console.log("legs")
}
if(keyPressed == '72') {
    new_image('captain_america_left_hand.png')
    console.log("left hand")
}
if(keyPressed == '82') {
    new_image('thor_right_hand.png')
    console.log("right hand")
}
if(keyPressed == '32') {
    up();
    console.log("up")
}
if(keyPressed == '40') {
    down();
    console.log("down")
}
if(keyPressed == '37') {
    left();
    console.log("left")
}
if(keyPressed == '39') {
    right();
    console.log("right")
}