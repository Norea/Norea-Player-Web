/*---------------------------*/
/* Rendering dynamic content */
/*---------------------------*/

// for the Android app back button
var isMain = false;
var isPlaying = false;

function documentReady() {
	// Bind to StateChange Event
	History.Adapter.bind(window,'statechange',function(){
	    var state = History.getState();
			// the page data that we send on page change
			var page = state.data.page;
			gotoPage(page);
	});

	// if someone types the ?url
	var page = document.URL.split('?')[1];
	if (page){
		changePage(page);
		console.log(page);
	}
	else{
		loadMenu();
	}
	addUiListener();
}

// Change page without adding history instance.
// Used on first load
function changePage(page){
	if(page === "hc"){
		History.replaceState({"page":"hc"}, "Hannas Café", "?hc");
	}
	else if(page === "vgb"){
		History.replaceState({"page":"vgb"}, "Vägen genom Bibeln", "?vgb");
	}
	else if(page === "omg"){
		History.replaceState({"page":"omg"}, "Ögonblick med Gud", "?omg");
	}
	else{
		History.replaceState({"page":"meny"}, "Programspelare", "");
	}
	gotoPage(page);

}

function gotoPage(page){
	if(page === "hc"){
		document.title = "Hannas Café";
		loadHc()
	}
	else if(page === "vgb"){
		document.title = "Vägen genom Bibeln";
		loadVgb()
	}
	else if(page === "omg"){
		document.title = "Ögonblick med Gud";
		loadOmg()
	}
	else{
		document.title = "Programspelare";
		loadMenu();
	}
}

function changeState(page){
	if(page === "hc"){
		document.title = "Hannas Café";
		History.pushState({"page":"hc"}, "Hannas Café", "?hc");
	}
	else if(page === "vgb"){
		History.pushState({"page":"vgb"}, "Vägen genom Bibeln", "?vgb");
	}
	else if(page === "omg"){
		History.pushState({"page":"omg"}, "Ögonblick med Gud", "?omg");
	}
	else{
		History.pushState({"page":"meny"}, "Programval", "");
	}
}




function loadMenu() {
	isMain = true;
	var content = document.getElementById("content");
	var mainMenu = '<a title="Hannas Café" onclick="changeState(\'hc\');" class="programlink" id="hc">' + texter.hc.ikon + texter.hc.info + '</a><a title="Vägen genom Bibeln" onclick="changeState(\'vgb\');" class="programlink" id="vgb">' + texter.vgb.ikon + texter.vgb.info + '</a><a title="Ögonblick med Gud" onclick="changeState(\'omg\');" class="programlink" id="omg">' + texter.omg.ikon + texter.omg.info + '</a>';
	content.innerHTML = mainMenu;
  var mainHeader = '<h1>Norea Sverige</h1><h2>Välj programserie</h2>';
	var header = document.getElementById("header");
	header.innerHTML = mainHeader;
	scrollTo('header');
}

function makeLink(program) {
	return '<li><a title="' + program["title"] + '" onclick="playTrack(\'' + program["url"] + '\',\'' + program["title"] +  '\');" class="track"><div class="title">' + program["nr"] + '. ' + program["title"] + '</div></a></li>';
}

function loadOmg() {
	isMain = false;

	var header = document.getElementById("header");
	header.innerHTML = '<h1 id="omg">Ögonblick med Gud</h1>';

	var newList = "<h2>Välj avsnitt</h2><ul>";
	for(var i=0; i<program.omg.length; i++){
		newList += makeLink(program.omg[i]);
	}
	newList += "</ul>";
	var content = document.getElementById("content");
	content.innerHTML = newList;
	scrollTo('header');
}

function loadHc() {
	isMain = false;

	var header = document.getElementById("header");
	header.innerHTML = '<h1 id="hc">Hannas Café</h1>';
	var newList = "<h2>Välj avsnitt</h2><ul>";
	for(var i=0; i<program.hc.length; i++){
		newList += makeLink(program.hc[i]);
	}
	newList += "</ul>";
	var content = document.getElementById("content");
	content.innerHTML = newList;
	scrollTo('header');

}

function loadVgb() {
	isMain = false;

	var header = document.getElementById("header");
	header.innerHTML = '<h1 id="vgb">Vägen genom Bibeln</h1>' + texter.vgb.programval;
	var newList = "<h2>Välj avsnitt</h2>";
	for(var i=0; i<program.vgb.length; i++){
		newList += "<h3 id='" + program.vgb[i].rubrik + "'>" + program.vgb[i].rubrik + "</h3>";
		newList += "<ul>";
		for(var j=0; j<program.vgb[i].avsnitt.length; j++){
			newList += makeLink(program.vgb[i].avsnitt[j]);
		}
		newList += "</ul>";
	}
	var content = document.getElementById("content");
	content.innerHTML = newList;
	scrollTo('header');
}

function scrollTo(id){
	var position = document.getElementById(id);
	position.scrollIntoView();
}

/* lägg det valda programmet i spelaren */
function playTrack(track,title) {
	// Återställ spelarens kontroller
	var progress = document.getElementById("progress");
	progress.style.width = '0';
	var loaded = document.getElementById("loaded");
	loaded.style.width = '0';

	// Lägg rätt spår i spelaren
	var playerBox = document.getElementById("playerBox");
	playerBox.innerHTML = '<audio id="player" src="' + track + '" preload="metadata"></audio>';
	var playerBox = document.getElementById("programinfo");
	playerBox.innerHTML = title;

	// Gör spelaren synlig
	showFooter();

	// Starta uppspelning
	initPlay();
}

function showBib() {
	var bibelvaljare = document.getElementById("bibelbok");
	bibelvaljare.style.display = 'block';
	var visalank = document.getElementById("showBibBtn");
	visalank.style.display = 'none';
	var gomlank = document.getElementById("hideBibBtn");
	gomlank.style.display = 'block';
}

function hideBib() {
	var bibelvaljare = document.getElementById("bibelbok");
	bibelvaljare.style.display = 'none';
	var visalank = document.getElementById("showBibBtn");
	visalank.style.display = 'block';
	var gomlank = document.getElementById("hideBibBtn");
	gomlank.style.display = 'none';
}

/*------------------------------*/
/* Editing the rendered content */
/*------------------------------*/

function addUiListener(){
	/* when user clicks in the footer */
	var footer = document.getElementById("footer");
	footer.addEventListener("click", function(e){clicks(e);});
}


function initPlay(){
	var player = document.getElementById("player");

	/* when player updates loading time */
	player.addEventListener("progress", function(){progress();});

	/* when player updates playing time */
	player.addEventListener("timeupdate", function(){progress();});

	/* when track ends */
	player.addEventListener("ended", onEnded);

	/* when there is an error */
	player.addEventListener("error", showError);

	/* start initial play */
	playpause();
}


/* split time in minutes and seconds */
function ms(time){
	if (isNaN(time)){
		return '00:00';
	}
	else{
		var m = Math.floor(time / 60);
		var s = Math.floor(time % 60);
		return ((m<10?'0':'') + m + ':' + (s<10?'0':'') + s);
	}
}

/* updates duration, buffered and progress bars */
function progress(){
	var player = document.getElementById("player");
	var duration = document.getElementById("duration");
	duration.innerHTML = ms(player.duration);
	var loadedBar = document.getElementById("loaded");

	/* updates time buffered */
	if (player && player.buffered && player.buffered.length > 0){
		var loaded = player.buffered.end(0);
		var percent = 100*(loaded / player.duration);
		loadedBar.style.width = percent + '%';
	}
	else{
		loadedBar.style.width = '0px';
	}

	/* updates time played */
	played.innerHTML = ms(player.currentTime);
	percent = 100*(player.currentTime / player.duration);
	var progress = document.getElementById("progress");
	progress.style.width = percent + '%';
}

function playing(){
	var pausebtn = document.getElementById("pause");
	pausebtn.style.display = 'block';
	var playbtn = document.getElementById("play");
	playbtn.style.display = 'none';
	isPlaying = true;
}

function pausing(){
	var pausebtn = document.getElementById("pause");
	pausebtn.style.display = 'none';
	var playbtn = document.getElementById("play");
	playbtn.style.display = 'block';
	isPlaying = false;
}

/* toggles play and pause */
function playpause(){
	player = document.getElementById("player");
	if (player.paused){
		player.play();
		playing();
	}
	else{
		player.pause();
		pausing();
	}
}

/* when track ends */
function onEnded(){
	closeFooter();
	isPlaying = false;
}

/* changes playing location based on mouse click x-value */
function clicks(e){
	var clickX = e.clientX-64; // 64 is the width of the play-pause button
	if (clickX<0){
		playpause();
	}
	else{
		var width = document.getElementById("scrubber").offsetWidth;
		var percent = clickX / width;
		var player = document.getElementById("player");
		player.currentTime = player.duration * percent;
	}
}

function showFooter(){
	/* adds extra margin at the bottom */
	var content = document.getElementById("content");
	content.style["margin-bottom"] = "64px";

	/* hides error message if it exists */
	var error = document.getElementById("error");
	error.style["display"] = "none";

	/* shows footer */
	var footer = document.getElementById("footer");
	footer.style["display"] = "block";
}

function closeFooter(){
	/* removes extra margin at the bottom */
	var content = document.getElementById("content");
	content.style["margin-bottom"] = "0px";

	/* hides footer */
	var footer = document.getElementById("footer");
	footer.style["display"] = "none";
}

function showError(){
	/* adds extra margin at the bottom */
	var content = document.getElementById("content");
	content.style["margin-bottom"] = "64px";

	/* hides footer containing the player */
	var footer = document.getElementById("footer");
	footer.style["display"] = "none";

	/* shows error message */
	var error = document.getElementById("error");
	error.style["display"] = "block";
}

function closeError(){
	/* removes extra margin at the bottom */
	var content = document.getElementById("content");
	content.style["margin-bottom"] = "0px";

	/* hides error message */
	var error = document.getElementById("error");
	error.style["display"] = "none";
}
