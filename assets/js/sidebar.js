// VANILLA JAVASCRIPT

var mc = "#F79F1A";

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function isTotallyInViewPort($entry){
    var hT = $entry.offset().top,
        hH = $entry.outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

   	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
   		updateSidebarOnScroll($entry[0].id);
      	
   	}
}

function updateSidebarOnScroll($entry) {

	removeAlreadyUpdatedSidebarElements();

	var elementToColor = "side_" + $entry;
	document.getElementById(elementToColor.toString()).style.color = mc;
}

function removeAlreadyUpdatedSidebarElements($entry) {
	document.getElementById("side_introduction").style.color = "black";
	document.getElementById("side_q1").style.color = "black";
	document.getElementById("side_q2").style.color = "black";
	document.getElementById("side_q3").style.color = "black";
	document.getElementById("side_q4").style.color = "black";
	document.getElementById("side_q5").style.color = "black";
	document.getElementById("side_q6").style.color = "black";
	document.getElementById("side_summary").style.color = "black";
}


// JQUERY

// Check if user has scrolled to a particular element on the screen
$(window).scroll(function() {
	isTotallyInViewPort($('#introduction'));
	isTotallyInViewPort($('#q1'));
	isTotallyInViewPort($('#q2'));
	isTotallyInViewPort($('#q3'));
	isTotallyInViewPort($('#q4'));
	isTotallyInViewPort($('#q5'));
	isTotallyInViewPort($('#q6'));
	isTotallyInViewPort($('#summary'));
});






