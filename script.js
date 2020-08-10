document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("h") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  document.documentElement.style.setProperty('--timer-day', "'" + moment().format("a") + "'");
  requestAnimationFrame(updateTime);
}


function myFunction() {
  var x = document.getElementById("panel");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function myFunction2() {
  var x = document.getElementById("panel2");
  var y = document.getElementById("heightExtension");
  if (x.style.display !== "none") {
	x.style.display = "none";
	y.style.height = "55.25%";
  } else {
	x.style.display = "block";
	y.style.height = "48.5%";
  }
}
function myFunction3() {
  var x = document.getElementById("panel3");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function myFunction4() {
  var x = document.getElementById("panel4");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function myFunction5() {
  var x = document.getElementById("panel5");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function myFunction6() {
  var x = document.getElementById("panel6");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function myFunction7() {
  var x = document.getElementById("panel7");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function myFunction8() {
  var x = document.getElementById("panel8");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
function showSettings() {
  var x = document.getElementById("panel9");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
  document.getElementById("myBtn5").style.visibility = "hidden";
  document.getElementById("myBtn6").style.visibility = "visible";
}
function hideSettings() {
  var x = document.getElementById("panel9");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
  document.getElementById("myBtn5").style.visibility = "visible";
  document.getElementById("myBtn6").style.visibility = "hidden";
}



var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
  var x = document.getElementById("myBtn");
  var y = document.getElementById("myBtn2");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  var x = document.getElementById("myBtn2");
  var y = document.getElementById("myBtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function hideFullscreen() {
	document.getElementsByTagName("BODY")[0].style.visibility = "hidden";
	document.getElementById("myBtn3").style.visibility = "hidden";
	document.getElementById("myBtn4").style.visibility = "visible";
	document.getElementById("myBtn5").style.visibility = "hidden";
	document.getElementById("myBtn6").style.visibility = "hidden";
	document.getElementById("panel9").style.display = "none";
}

function showFullscreen() {
	document.getElementsByTagName("BODY")[0].style.visibility = "visible";
	document.getElementById("myBtn3").style.visibility = "visible";
	document.getElementById("myBtn4").style.visibility = "hidden";
	document.getElementById("myBtn5").style.visibility = "visible";
	document.getElementById("myBtn6").style.visibility = "hidden";
	document.getElementById("panel9").style.display = "none";
}




