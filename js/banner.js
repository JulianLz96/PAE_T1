let video = document.getElementById('video_banner');

var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
}

if (screen.width > 600) {
    video.play();
}