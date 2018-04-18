// JavaScript Document
(() => {
//variables
	"use strict";

	// add a capIt method to the string prototype => this will capitalize the first letter of any string
	String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }


 	let	imageBanner = document.querySelector("#houseImages"),
 		sigils = document.querySelectorAll(".sigilContainer"),
 		houseImages = document.querySelectorAll('#houseImages img'),
 		lightbox = document.querySelector('.lightbox'),
 		closeLBox = lightbox.querySelector('.close-lightbox'),
 		vidPlayer = lightbox.querySelector('video'),
 		cuePts = vidPlayer.textTracks[0],
 		offSet = 600;


 	// set up an array for the house descriptions using the Github gist provided, and load the text in the paragraph tag indicated (refer to the html page / comments). The "Clever tagline goes here" text should be replaced with the house name.

	imageBanner.style.right = "0px";


	function moveBanner() {
		imageBanner.style.right = (offSet * this.dataset.offset) + "px";

		let houseName = this.className.split(' ')[1].capIt();

		showHouseVideo(houseName);
	}

	function showHouseVideo(house) {
		debugger;
		vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;
		lightbox.classList.add('show-lightbox');
		vidPlayer.load();
		vidPlayer.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('show-lightbox');
		vidPlayer.pause();
		vidPlayer.currentTime = 0;
	}

	function initCues() {
		console.log('text track loaded');

		vidPlayer.textTracks[0].mode = "showing";

 		let activeCues = Array.from(vidPlayer.textTracks[0].cues);

 		activeCues.forEach(cue => {
 			console.log(cue); 
 			cue.addEventListener('enter', function() {
 				showMoreContent(cue);
 			});
 		});
	}

	function showMoreContent(cuept) {
		let cue = JSON.parse(cuept);

		console.log(cue);
	}

//listeners
	sigils.forEach(sigil => sigil.addEventListener('click', moveBanner));
	closeLBox.addEventListener('click', closeLightbox);

	vidPlayer.addEventListener('playing', initCues);

	//cuePts.forEach(cue => console.log(cue, 'cuept fired'));

})();