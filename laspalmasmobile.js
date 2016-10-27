$( document ).ready(function() {

	var date = new Date();
	//var dayNumber = date.getDate();
	var dayNumber = 8; // for testing
	selectDay(dayNumber);
 
	$( "h1" ).click(function() {
		$(this).next("div").slideToggle(200);
		$(this).toggleClass("selected");
	});

	$( "ul.dayPicker > li" ).click(function() {
		var day = $(this).attr("data-day");
		selectDay(day);
	});

	function selectDay(number) {
		$("#picker"+number).toggleClass("selected");
		$("#picker"+number).siblings().removeClass("selected");
		$("#day"+number).siblings().hide();
		//$("#day"+number).slideToggle(200);
		$("#day"+number).toggle("drop", { direction: "right" }, 100);
	}

	function updateSite(event) {
	    window.applicationCache.swapCache();
	}
	window.applicationCache.addEventListener('updateready',
	    updateSite, false);

});


