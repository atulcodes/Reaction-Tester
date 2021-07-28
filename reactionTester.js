var totalTimeTaken = 0, attempts = 0;

function getRandomColor() {

	var letter = '0123456789ABCDEF'.split('');

	var color = '#';

	for(var i = 0; i < 6; i++) {

		color += letter[Math.floor(Math.random() * 16)];

	}

	return color;

}

function makeShapeAppear() {

		var top = Math.random() * 400;

		var left = Math.random() * 700;

		var width = Math.random() * 200 + 100;

		if (Math.random() > 0.5) {

			document.getElementById("shape").style.borderRadius = "50%";

		} else {

			document.getElementById("shape").style.borderRadius = "0px";

		}

		document.getElementById("shape").style.width = width + "px";

		document.getElementById("shape").style.height = width + "px";

		document.getElementById("shape").style.backgroundColor = getRandomColor();

		document.getElementById("shape").style.top = top + "px";

		document.getElementById("shape").style.left = left + "px";

		document.getElementById("shape").style.display = "block";

		start = new Date().getTime();

	}

function appearAfterDelay() {

	setTimeout(makeShapeAppear, Math.random()*2000);

}

document.getElementById("start").onclick = function() {

	document.getElementById("start").style.display = "none";

	document.getElementById("end").style.display = "block";

	document.getElementById("timeShower").style.display = "block";

	makeShapeAppear();

}

document.getElementById("end").onclick = function() {

	document.getElementById("timeShower").style.display = "none";

	document.getElementById("averageReactionTime").innerHTML = totalTimeTaken/attempts;

	document.getElementById("end").style.display = "none";

	document.getElementById("shape").style.display = "none";

	document.getElementById("showResult").style.display = "block";

}

document.getElementById("shape").onclick = function() {

	document.getElementById("shape").style.display = "none";

	var end = new Date().getTime();

	var timeTaken = (end - start)/1000;  // since getTime returns the time in milliseconds.

	document.getElementById("timeTaken").innerHTML = timeTaken;

	totalTimeTaken += timeTaken;

	attempts++;

	appearAfterDelay();

}