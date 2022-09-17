function preload() {
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    image(video, 25, 25, 300, 300);
}

function take_snapshot() {
    save('myFilterImage.png');
}