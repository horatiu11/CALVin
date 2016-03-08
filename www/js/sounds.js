function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function() {},
        // error callback
        function(err) {}
    );

    // Play audio
    my_media.play();
}