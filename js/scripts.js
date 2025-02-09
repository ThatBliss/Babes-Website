document.addEventListener("DOMContentLoaded", function() {
    const musicList = document.getElementById("music-list");

    // List of music files (you can automate this with server-side code)
    const musicFiles = [
        "song1.mp3",
        "song2.mp3",
        "song3.mp3",
        "song4.mp3",
        "song5.mp3"
    ];

    musicFiles.forEach(file => {
        const listItem = document.createElement("li");
        const audioElement = document.createElement("audio");
        audioElement.controls = true;
        audioElement.src = `music/${file}`;
        listItem.appendChild(audioElement);
        musicList.appendChild(listItem);
    });
});