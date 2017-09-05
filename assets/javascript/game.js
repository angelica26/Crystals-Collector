 $(document).ready(function() {

var randomnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;  
$("#therandomnumber").html(randomnumber);
var wins = 0;
var losses = 0;
var score = 0;
var crystalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pinkValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
var purpleValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
var rainbowValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
var blueValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];



function reset() {

	randomnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;  
	$("#therandomnumber").html(randomnumber);
	pinkValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	purpleValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	rainbowValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	blueValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
	score = 0;
	$("#scorenumber").text(score);
	$("#pinkcrystal").attr("data-pinkscore", pinkValue);
	$("#purplecrystal").attr("data-purplescore", purpleValue);
	$("#rainbowcrystal").attr("data-rainbowscore", rainbowValue);
	$("#bluecrystal").attr("data-bluescore", blueValue);
}

$("#pinkcrystal").attr("data-pinkscore", pinkValue);
$("#purplecrystal").attr("data-purplescore", purpleValue);
$("#rainbowcrystal").attr("data-rainbowscore", rainbowValue);
$("#bluecrystal").attr("data-bluescore", blueValue);

$("#pinkcrystal").on("click", function() {
	 var pinkScore = ($(this).attr("data-pinkscore"));
	 pinkScore = parseInt(pinkScore);
	 score += pinkScore;
	 $("#scorenumber").text(score);
	console.log(pinkScore);

	if (score === randomnumber) {
	reset();
	wins++;
	$("#wins").text("Wins: " + wins);
	
}

	else if (score > randomnumber) {
	reset();
	losses++;
	$("#losses").text("Losses: " + losses);
	
}

});


$("#purplecrystal").on("click", function(){
	 var purpleScore = ($(this).attr("data-purplescore"));
	 purpleScore = parseInt(purpleScore);
	 score += purpleScore;
	 $("#scorenumber").text(score);
	console.log(purpleScore);

	if (score === randomnumber) {
	reset();
	wins++;
	$("#wins").text("Wins: " + wins);
	
}

	else if (score > randomnumber) {
	reset();
	losses++;
	$("#losses").text("Losses: " + losses);
	
}
	
});


$("#rainbowcrystal").on("click", function(){
	 var rainbowScore = ($(this).attr("data-rainbowscore"));
	 rainbowScore = parseInt(rainbowScore);
	 score += rainbowScore;
	 $("#scorenumber").text(score);
	console.log(rainbowScore);

	if (score === randomnumber) {
	reset();
	wins++;
	$("#wins").text("Wins: " + wins);
	
}

	else if (score > randomnumber) {
	reset();
	losses++;
	$("#losses").text("Losses: " + losses);
	
}

});


$("#bluecrystal").on("click", function(){
	 var blueScore = ($(this).attr("data-bluescore"));
	 blueScore = parseInt(blueScore);
	 score += blueScore;
	 $("#scorenumber").text(score);
	console.log(blueScore);

	if (score === randomnumber) {
	reset();
	wins++;
	$("#wins").text("Wins: " + wins);
	
}

	else if (score > randomnumber) {
	reset();
	losses++;
	$("#losses").text("Losses: " + losses);
	
}

});



});
