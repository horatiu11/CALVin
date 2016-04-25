//String for keeping the current image name
var actualString = '';

//Going to next image
function nextImg(){
	if(actualString !== ''){
		//Getting the number of the image in the sequence and going to the next one if possible
		var temp = Number(actualString.charAt(actualString.length - 1) ) + 1;
		var ending;
		var word = actualString.substr(0, actualString.length - 1);

		//Howd, hoed, hide, hayed have 4 images, the rest have 3
		if(word === 'howd' || word === 'hoed' || word == 'hide' || word == 'hayed')
			ending = 4;
		else ending = 3;

		if(temp <= ending){
			var next = word + temp;
			imgChange(next);
		}
	}
}

//Going to previous image
function prevImg(){
	if(actualString !== ''){
		//Getting the number of the image in the sequence and going to the previous one if possible
		var temp = Number(actualString.charAt(actualString.length - 1) ) - 1;
		var word = actualString.substr(0, actualString.length - 1);
		if(temp > 0){
			var prev = word + temp;
			imgChange(prev);
		}
	}
}

//Changing the image when a different button is clicked
function imgChange(url){
	//Setting specific image url and updating current string
	document.getElementById('imgid').src = 'animations/step/'+url+'.png';
	actualString = url;

	//Show specific text and changing theanimation button name
	document.getElementById('ex3').innerText = url.split((/\d/))[0] + ' - Vowel Animation';
    document.getElementById("im1").style.visibility = "visible";
    document.getElementById('im2').style.visibility = "visible";
}