const videoInput = document.getElementById("videoInput");
const videoPlayer = document.getElementById("videoPlayer");

const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const seekBar = document.getElementById("seekBar");
const volumeBar = document.getElementById("volumeBar");
const speedControl = document.getElementById("speedControl");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const nightMode = document.getElementById("nightMode");

/* Load local video */
videoInput.addEventListener("change", function () {
    const file = this.files[0];

    if(file){
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        videoPlayer.load();
        videoPlayer.play();
        playPauseBtn.textContent = "⏸";
    }
});

/* Play Pause Toggle */
playPauseBtn.addEventListener("click", () => {
    if(videoPlayer.paused){
        videoPlayer.play();
        playPauseBtn.textContent = "⏸";
    }else{
        videoPlayer.pause();
        playPauseBtn.textContent = "▶";
    }
});

/* Seek Update */
videoPlayer.addEventListener("timeupdate", () => {
    seekBar.value =
    (videoPlayer.currentTime / videoPlayer.duration) * 100;
});

/* Seek Control */
seekBar.addEventListener("input", () => {
    videoPlayer.currentTime =
    (seekBar.value / 100) * videoPlayer.duration;
});

/* Volume */
volumeBar.addEventListener("input", () => {
    videoPlayer.volume = volumeBar.value;
});

/* Speed */
speedControl.addEventListener("change", () => {
    videoPlayer.playbackRate = speedControl.value;
});

/* Fullscreen */
fullscreenBtn.addEventListener("click", () => {
    videoPlayer.requestFullscreen();
});

/* Previous */
prevBtn.addEventListener("click", () => {
    alert("Previous video");
});

/* Next */
nextBtn.addEventListener("click", () => {
    alert("Next video");
});

/* Night Mode */
nightMode.addEventListener("click", () => {
    document.body.classList.toggle("night");
});

/* Reset button after video end */
videoPlayer.addEventListener("ended", () => {
    playPauseBtn.textContent = "▶";
});