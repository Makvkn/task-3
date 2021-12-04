var video = document.getElementsByTagName('video')[0],
    time = document.getElementById('timer');


video.addEventListener('click', function () {
    if (video.paused) {
        video.play();

    } else {
        video.pause();
    }
});


video.addEventListener('ended', function () {
    video.currentTime = 0;

});

video.addEventListener('timeupdate', function () {
    time.innerHTML = secondsToTime(video.currentTime);
});


// рассчет отображаемого времени

function secondsToTime(timer) {
    let m = Math.floor(video.currentTime / 60)
    let s = Math.floor(video.currentTime % 60)
    let ms = video.currentTime % (60 * 60)

    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (ms < 1000) {
        ms = '0' + ms
    }

    return timer = m + ':' + s + ':' + ms.substring(3, 6);

}


video.addEventListener('ended', function () {
    video.currentTime = 0;
});
