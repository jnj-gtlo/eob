function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6O6GLV7mBiZ":
        Script1();
        break;
      case "6lLyCuzuwOm":
        Script2();
        break;
      case "6YpcKHEilSE":
        Script3();
        break;
      case "5ZDedpAhiYy":
        Script4();
        break;
      case "6EAhRFODAP5":
        Script5();
        break;
      case "5dwNrCsyzi9":
        Script6();
        break;
      case "6GiAWtJpzJU":
        Script7();
        break;
      case "5trhswo3TY4":
        Script8();
        break;
      case "6XSYXiewYVB":
        Script9();
        break;
      case "6rKEr1kiIA9":
        Script10();
        break;
      case "6EmCBntHgnw":
        Script11();
        break;
      case "6YDFVS5H9JR":
        Script12();
        break;
      case "6iY9G1d3Y1C":
        Script13();
        break;
      case "5XVk0oJBFQw":
        Script14();
        break;
      case "64XetgzV340":
        Script15();
        break;
  }
}

function Script1()
{
  var browsers = ["Opera", "Edg", "Chrome", "Safari", "Firefox", "MSIE", "Trident"];
var userbrowser, useragent = navigator.userAgent;
for (var i = 0; i < browsers.length; i++) {
    if( useragent.indexOf(browsers[i]) > -1 ) {
        userbrowser = browsers[i];
        break;
    }
};
 
switch(userbrowser) {
    case 'MSIE':
        userbrowser = 'Internet Explorer';
var player = GetPlayer();
player.SetVar("FlagBrowser", "Internet Explorer");
        break;
 
    case 'Trident':
        userbrowser = 'Trident';
var player = GetPlayer();
player.SetVar("FlagBrowser", "Trident");
        break;
 
    case 'Edg':
        userbrowser = 'Microsoft Edge';
var player = GetPlayer();
player.SetVar("FlagBrowser", "Edge");
        break;

case 'Firefox':
        userbrowser = 'FF';
var player = GetPlayer();
player.SetVar("FlagBrowser", "FF");
        break;

case 'Chrome':
        userbrowser = 'CH';
var player = GetPlayer();
player.SetVar("FlagBrowser", "Chrome");
        break;

case 'Safari':
        userbrowser = 'Safari';
var player = GetPlayer();
player.SetVar("FlagBrowser", "Safari");
        break;
}

alert('You are using ' + userbrowser + ' browser');
}

function Script2()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
        line.autoplay = true;
        line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');

}


}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();

}

function Script5()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
        line.autoplay = false;
        line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();

}


}

function Script6()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();


}

function Script7()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
add_line();
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();

}

}

function Script8()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
add_line();
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.pause();

}
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.play();


}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.pause();

}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.pause();


}

function Script12()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
add_line();
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();

}else{
audio.load();
audio.play();
}

}

function Script13()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
add_line();
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.pause();

}else{
audio.load();
audio.pause();
}


}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.play();

}

function Script15()
{
  var audio = document.getElementById('bgSong');
audio.pause(); 

}

