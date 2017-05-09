/*
MAIN JS SCRIPTS FILE
*/


var RESTdata; // variable to store data from REST API

function queryRESTAPI() { // get data from REST API
	$.ajax({
		type: "GET",
	    url: "https://www.algaecal.com/wp-json/acf/v2/options",
	    dataTyoe: "json",
	    contentType: "application/json; charset=UTF-8",
	    async: false,
	    
	    success: function(data) {
	        RESTdata = data;
	    },
	    
	    error: function(jqXHR, textStatus, errorThrown) {
	    	//
	    },

	    timeout: 120000,
	});
}

function populatePhoneLink() { // populate site phone # link with default phone number from the REST API
	var defaultPhone = RESTdata.acf.default_phone_number;

	$("#tap-to-talk").attr("href", "tel:+0" + defaultPhone);

	$(".phone-number").text(defaultPhone);
}

function toggleBoneSpecialist() { // show 'Speak to Our Bone Specialist' during business hours
	setInterval(function() { // re-check time aagainst business hours every 60 seconds in case the state of business hours changes
		var clientTime = moment(); // get client's date/time
	    var clientTimePST = moment(clientTime).tz("America/Vancouver"); // convert client's date/time to Vancouver date/time

	    // extract current day and time:
	    var currentDay = clientTimePST.day();
	    var currentTime = moment(clientTimePST, 'HH:mm:ss a');

	    // determine office hours for current day:
	    var openTime = moment(((RESTdata.acf.office_hours[currentDay].starting_time) / 100) + ":00 am", 'HH:mm:ss a');
		var closeTime = moment((((RESTdata.acf.office_hours[currentDay].closing_time) / 100) - 12) + ":00 pm", 'HH:mm:ss a');

	   	// determine whether current time is within business hours:
	    if (currentTime.isBetween(openTime, closeTime)) { // during business hours:
			$("#phone-icon, .speak").css({ // show 'Speak to Our Bone Specialist'
				"display": "inline-block"
			});
		} else { // not during business hours:
			$("#phone-icon, .speak").css({ // hide 'Speak to Our Bone Specialist'
				"display": "none"
			});
		}
	}, 60000);
}

function showProductBundles() { // show package-pricing bundle boxes
	$("#products").css({ 
		"display": "block"
	});
}

function populateGuaranteeContent() { // populate 7 Year Guarantee modal popup content with "7yr_full_copy" from the REST API
	$(".modal-body").html(RESTdata.acf["7yr_full_copy"]);
}

function wistia() { // wistia video functionality: custom tap-to-play thumbnail, show package-pricing bundle boxes only when video reaches the 2:13 mark
	window._wq = window._wq || [];

	_wq.push({ id: "cecdwaq3dz", options: { autoPlay: false }, onReady: function(video) { // creat video handle, supply options, and set onReady function
		$("#video-overlay").click(function() { // add click-to-play functionality for custom video thumbnail
			video.play(); // play video (on thumbnail click)

			$("#video-overlay").css({ // hide video thumbnail so video and its controls are visible
				"display": "none"
			});
		});

		video.bind("betweentimes", 0, 133, function(withinInterval) { // listen for where we're at in video playback
			if (withinInterval) { // if we haven't reached or skipped to the 2:13 mark
				// keep package-pricing bundle boxes hidden...
			} else { // we've reached or skipped to the 2:13 mark
				showProductBundles(); // show package-pricing bundle boxes

				return video.unbind; // unbind this function from video
			}
		});
	}});
}

function buyNowButtonRevealBundlesOnClick() {
	$(".button-buy-now").click(function() {
		showProductBundles(); // show package-pricing bundle boxes
	});
}

function main() { // main program to be fired when DOM is ready
	queryRESTAPI();

	populatePhoneLink();

	toggleBoneSpecialist();

	populateGuaranteeContent();

	wistia();

	buyNowButtonRevealBundlesOnClick();
}

$(document).ready(function() {
	main();
});