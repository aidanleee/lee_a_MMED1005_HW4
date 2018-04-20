// JavaScript Document
(() => {
//variables
	"use strict";

	// add a capIt method to the string prototype => this will capitalize the first letter of any string
	String.prototype.capIt = function() {
		return this.replace(this.charAt(), this.charAt().toUpperCase());
	}


 	let	imageBanner = document.querySelector("#houseImages"),
 		sigils = document.querySelectorAll(".sigilContainer"),
 		houseImages = document.querySelectorAll('#houseImages img'),
 		lightbox = document.querySelector('.lightbox'),
 		closeLBox = lightbox.querySelector('.close-lightbox'),
 		vidPlayer = lightbox.querySelector('video'),
 		offSet = 600;

 	// set up an array for the house descriptions using the Github gist provided, and load the text in the paragraph tag indicated (refer to the html page / comments). The "Clever tagline goes here" text should be replaced with the house name.

	let houseInfo = document.querySelector('.house-info'),
	 		houseTitle = document.querySelector('.house-name');

	var nameOfHouse = ["Stark", "Baratheon", "Lannister", "Greyjoy", "Tully", "Arryn", "Targaryen", "Frey"],

			houseDesc = [
		"House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.",

		"House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.",

		"House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.",

		"House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are 'We Do Not Sow,' although the phrase 'What Is Dead May Never Die' is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.",

		"House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are 'Family, Duty, Honor.'",

		"House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.",

		"House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.",

		"House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after."
	],

	currentHouse;

	imageBanner.style.right = "0px";

	// banner slide
	function moveBanner() {
		imageBanner.style.right = (offSet * this.dataset.offset) + "px";

		let houseName = this.className.split(' ')[1].capIt();
		currentHouse = houseName;

		houseInfo.textContent = houseDesc[this.dataset.offset];
		houseTitle.textContent = nameOfHouse[this.dataset.offset];

		//showHouseVideo(houseName);
	}

	// open lightbox and play video
	function showHouseVideo(house) {
		debugger;
		vidPlayer.src = `video/House-${currentHouse}.${vidPlayer.currentSrc.split('.')[1]}`;
		lightbox.classList.add('show-lightbox');
		vidPlayer.load();
		vidPlayer.play();
	}

	// close lightbox button
	function closeLightbox() {
		lightbox.classList.remove('show-lightbox');
		vidPlayer.pause();
		vidPlayer.currentTime = 0;
	}

//listeners
	sigils.forEach(sigil => sigil.addEventListener('click', moveBanner));
	closeLBox.addEventListener('click', closeLightbox);
	vidPlayer.addEventListener('ended', closeLightbox);
	imageBanner.addEventListener('transitionend', showHouseVideo);


















	// Video Controls
	window.onload = function() {

  // Buttons
  var playButton = document.getElementById("play-pause");
  var fullScreenButton = document.getElementById("full-screen");
  var playIcon = document.getElementById("playPauseButton");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");


  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (vidPlayer.paused == true) {
      // Play the video
      vidPlayer.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "&#9612;&#9612;";
    } else {
      // Pause the video
      vidPlayer.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "&#9658";
    }
  });


  // Event listener for the full-screen button
  fullScreenButton.addEventListener("click", function() {
    if (vidPlayer.requestFullscreen) {
      vidPlayer.requestFullscreen();
    } else if (vidPlayer.mozRequestFullScreen) {
      vidPlayer.mozRequestFullScreen(); // Firefox
    } else if (vidPlayer.webkitRequestFullscreen) {
      vidPlayer.webkitRequestFullscreen(); // Chrome and Safari
    }
  });


  // Event listener for the seek bar
  seekBar.addEventListener("change", function() {
    // Calculate the new time
    var time = vidPlayer.duration * (seekBar.value / 100);

    // Update the video time
    vidPlayer.currentTime = time;
  });

  // Update the seek bar as the video plays
  vidPlayer.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / vidPlayer.duration) * vidPlayer.currentTime;

    // Update the slider value
    seekBar.value = value;
  });

  // Pause the video when the seek handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    vidPlayer.pause();
  });

  // Play the video when the seek handle is dropped
  seekBar.addEventListener("mouseup", function() {
    vidPlayer.play();
  });

  // Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
    // Update the video volume
    vidPlayer.volume = volumeBar.value;
  });
}



})();
