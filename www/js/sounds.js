
function playAudio(url){
    if(device.platform.toLowerCase() === "android") 
        url = "/android_asset/www/" + url;
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function() {},
        // error callback
        function(err) {navigator.notification.alert(err);}
    );

    // Play audio
    my_media.play();
}

function play(url, btn1, btn2) {
    document.getElementById("ex").style.visibility = "visible";

    document.getElementById('ex1').innerText=btn1;
    document.getElementById("ex1").style.visibility = "visible";

    document.getElementById('ex2').innerText=btn2;
    document.getElementById("ex2").style.visibility = "visible";

    playAudio(url);
}


var timeout;
var recording = false;
var RECORD = null;
var ACTIVE_RECORD = null;

function startRecording(url){

    if(device.platform.toLowerCase() === "android") 
        url += ".amr" ;
    else url += ".wav";

    // Play the audio file at url
    RECORD = new Media(url,
        // success callback
        function() {},
        // error callback
        function(err) {navigator.notification.alert(err);}
    );
   
    ACTIVE_RECORD = null;
    // Record audio
    RECORD.startRecord();

}

function stopRecording(){
    RECORD.stopRecord();
}

function stopPlayingRecording(){
    if(ACTIVE_RECORD !== null)
        ACTIVE_RECORD.stop();
}

function pausePlayingRecording(){
    if(ACTIVE_RECORD !== null)
        ACTIVE_RECORD.pause();
}

function playRecording(url){
    if(device.platform.toLowerCase() === "android")
        url += ".amr";
    else 
        url += ".wav";

    if(ACTIVE_RECORD === null){
        
        ACTIVE_RECORD = new Media(url,
        // success callback
        function() {},
        // error callback
        function(err) {navigator.notification.alert(err);}
        );
    }

    // Play audio
    ACTIVE_RECORD.play();
}
