function preload(){
    img = loadImage;

}

function setup(){
    canvas = createCanvas(620,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
   video.hide()
   tint_color = "";
}

function draw(){
    image(video, 70 , 50 , 480 , 400);
    tint(tint_color);
}

function take_snapshot(){
    save('filter_app.png');

}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;;
}