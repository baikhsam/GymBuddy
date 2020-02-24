'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	// Get height of viewport inner window and set CSS variable --vh
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	navFill();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	initRegister();
	$(".btn-person-click").click(personClick);
	$('.btn-mentor-click').click(mentorAnimate);
	$('.btn-mentor-close').click(mentorClose);
	$(".btn-logout-click").click(logOut);
}

function initRegister() {
	$('.registerForm').submit(function(e) {
		e.preventDefault();
		console.log('submitting form');
		var formName = $("#userName").val();
		$.post('register', {name: formName}, postCallback);
	});

	function postCallback(res) {
		console.log("form successfully submitted!");
		$('#userName').val('');
	}
}

function logOut(e) {
	e.preventDefault();
	$(this).css("background-color", "#e8e8e8");
	window.location = '/';
}

function personClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#e8e8e8");
}

function mentorAnimate() {
	$(".btn-mentor").animate({
		borderRadius: '0px',
		bottom: '0px',
		right: '0px',
		height: '100%', 
		width: '100%',
		opacity: '0',
		zIndex: '5'
	}),

	$(".btn-mentor-secondary").animate({
		borderRadius: '0px',
		bottom: '0px',
		right: '0px',
		height: '100%', 
		width: '100%',
		opacity: '100',
		zIndex: '10'
	}),

	$(".btn-mentor-close").animate({
		opacity: '100',
		zIndex: '15'
	})
}

function mentorClose() {
	$(".btn-mentor-secondary").animate({
		opacity: '0',
		borderRadius: '50%',
		height: '40px',
		width: '40px',
		bottom: '25px',
		right: '25px',
		zIndex: '5'
	}),

	$(".btn-mentor").animate({
		opacity: '100',
		borderRadius: '50%',
		height: '40px',
		width: '40px',
		bottom: '25px',
		right: '25px',
		zIndex: '10'
	}),

	$(".btn-mentor-close").animate({
		opacity: '0',
		zIndex: '5'
	})
}

function navFill() {
	if (window.location.pathname=='/main' || window.location.pathname=='/mentormatch') {
		$('#i-home').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/friends') {
		$('#i-star').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/profile') {
		$('#i-user').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/settings') {
		$('#i-settings').css("fill", "#FFCD00");
	} else if (window.location.pathname=='/accounts') {
		$('#i-user').css("fill", "#FFCD00");
	}
}