onload = () =>{
        document.body.classList.remove("container");
};

document.onkeydown = function(e) {
	if(event.keyCode == 123) {
	   return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
	   return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
	   return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
	   return false;
	}
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
	   return false;
	}
  }

document.addEventListener('contextmenu', function(e) {
e.preventDefault();
});

//PLAYS ONLY WHEN USER CLICK ON THE SCREEN
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}