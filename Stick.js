function Stick(){
    this.position = {x:0, y:400};
}

Stick.prototype.update = function(){

    //testing
    this.position = Mouse.position;

    if(Mouse.left.pressed){
        console.log("Pressed left");
    }

}

Stick.prototype.draw = function(){
    canvas.drawImage(sprites.stick, this.position)
}