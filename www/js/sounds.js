//Play the sound
function playAudio(url){
    //Change path for android devices
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

//Show the specific html elements which were hided and call the playAudio function
function play(url, btn1, btn2) {
    document.getElementById("ex").style.visibility = "visible";

    document.getElementById('ex1').innerText=btn1;
    document.getElementById("ex1").style.visibility = "visible";

    document.getElementById('ex2').innerText=btn2;
    document.getElementById("ex2").style.visibility = "visible";

    document.getElementById("ex3").style.visibility = "visible";

    playAudio(url);
}

//Variables for keeping the records globally
var RECORD = null;
var ACTIVE_RECORD = null;

function startRecording(url){
    //Specific android path
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

//Stop recording
function stopRecording(){
    RECORD.stopRecord();
}

function stopPlayingRecording(){
    //Reset the active recording from playing
    if(ACTIVE_RECORD !== null)
        ACTIVE_RECORD.stop();
}

function pausePlayingRecording(){
    //Pause the active recording from playing
    if(ACTIVE_RECORD !== null)
        ACTIVE_RECORD.pause();
}

//Play recording
function playRecording(url){
    //Specific Android path
    if(device.platform.toLowerCase() === "android")
        url += ".amr";
    else 
        url += ".wav";

    //Play recroding if there is one
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
