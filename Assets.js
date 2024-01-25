let sprites = {};
let assetsStillLoading = 0;


function assetsLoadingLoop(callback){

    if(assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this,callback))
    }
    else {
        callback();
    }
    
}

function loadAssets(callback){

    function loadSprite(filename){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + filename;

        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        return spriteImage;
    }

    sprites.background = loadSprite('spr_background4.png');
    sprites.stick = loadSprite('spr_stick.png');

    assetsLoadingLoop(callback);
}