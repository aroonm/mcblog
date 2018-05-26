// VANILLA JAVASCRIPT

var mc = "#F79F1A";

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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
	document.getElementById("side_onboarding").style.color = "black";
	document.getElementById("side_peepfeel").style.color = "black";
	document.getElementById("side_bckinfo").style.color = "black";
	document.getElementById("side_datacollect").style.color = "black";
	document.getElementById("side_buildtrust").style.color = "black";
	document.getElementById("side_recovexp").style.color = "black";
	document.getElementById("side_summary").style.color = "black";
}


// JQUERY

// Check if user has scrolled to a particular element on the screen
$(window).scroll(function() {
	isTotallyInViewPort($('#introduction'));
	isTotallyInViewPort($('#onboarding'));
	isTotallyInViewPort($('#peepfeel'));
	isTotallyInViewPort($('#bckinfo'));
	isTotallyInViewPort($('#datacollect'));
	isTotallyInViewPort($('#buildtrust'));
	isTotallyInViewPort($('#recovexp'));
	isTotallyInViewPort($('#summary'));
});


// <a href="#introduction" class="sidenav-font" id="side_introduction">Introduction</a>
// 	  	<a href="#onboarding" class="sidenav-font" id="side_onboarding">How do we demonstrate how continuous authentication works?</a>
// 	  	<a href="#peepfeel" class="sidenav-font" id="side_peepfeel">How do people feel about different types of data being collected?</a>
// 	  	<a href="#bckinfo" class="sidenav-font" id="side_bckinfo">How much background info should be shown during the checkout session?</a>
// 	  	<a href="#datacollect" class="sidenav-font" id="side_datacollect">How do people feel about data being collected during checkout?</a>
// 	  	<a href="#buildtrust" class="sidenav-font" id="side_buildtrust">How can we build trust in a<br>continuous authentication interface?</a>
// 	  	<a href="#recovexp" class="sidenav-font" id="side_recovexp">What should the recovery experience<br>be?</a>
// 	  	<a href="#summary" class="sidenav-font" id="side_summary">Summary</a>





