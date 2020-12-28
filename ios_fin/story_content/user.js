function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PLPOZZaK2P":
        Script1();
        break;
      case "5kE03IJio4w":
        Script2();
        break;
      case "667a5t3Vhgd":
        Script3();
        break;
      case "6AhF5qXYrew":
        Script4();
        break;
      case "5lcJWbCFnPV":
        Script5();
        break;
      case "6PPADS6OZ3B":
        Script6();
        break;
      case "6EvALGI8IlN":
        Script7();
        break;
      case "5fxO2R5MUlp":
        Script8();
        break;
      case "6Oqw2bC2kqI":
        Script9();
        break;
      case "5nykzKQZDxG":
        Script10();
        break;
      case "6XGzSSo5P0w":
        Script11();
        break;
      case "6CsoXo3XwVA":
        Script12();
        break;
      case "5XxvoWwrI26":
        Script13();
        break;
      case "6Yb6M1MAc8i":
        Script14();
        break;
      case "68gzVepQ9Le":
        Script15();
        break;
      case "6dIACQryBkW":
        Script16();
        break;
      case "6bzzOEeF2FA":
        Script17();
        break;
      case "6ouideH6BUY":
        Script18();
        break;
      case "63hDqrYdK4z":
        Script19();
        break;
      case "6FE5GMurbPe":
        Script20();
        break;
      case "6eGQuXYiZZE":
        Script21();
        break;
      case "6NnFwoFI10K":
        Script22();
        break;
      case "6DBdBTNCDve":
        Script23();
        break;
      case "5nrczgtbiJY":
        Script24();
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
  //var a = document.getElementById("mobile-start-container").offsetLeft;


function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}


if(isOnScreen($('#mobile-start-container'))) { 
alert(visible);
 };


}

function Script3()
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
var audio = document.getElementById('bgSong');

}


}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";


alert ("Others");

audio.load();
audio.play();


}

function Script5()
{
  
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";

player.SetVar("mute", true);


alert ("Safari");
}

function Script6()
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

function Script7()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();


}

function Script8()
{
  //var a = document.getElementById("mobile-start-container").offsetLeft;


function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}


if(isOnScreen($('#mobile-start-container'))) { 
alert(visible);
 };


}

function Script9()
{
  //var a = document.getElementById("mobile-start-container").offsetLeft;


function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}


if(isOnScreen($('#mobile-start-container'))) { 
alert(visible);
 };


}

function Script10()
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();



}

  

}

function Script11()
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";

}



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
    line.autoplay = false;
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

player.SetVar("mute", true);

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
    line.autoplay = false;
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

player.SetVar("mute", true);
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

function Script16()
{
  var audio = document.getElementById('bgSong');
audio.pause();


}

function Script17()
{
  //var a = document.getElementById("mobile-start-container").offsetLeft;


function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}


if(isOnScreen($('#mobile-start-container'))) { 
alert(visible);
 };


}

function Script18()
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();



}

  

}

function Script19()
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";

}



}

function Script20()
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";



player.SetVar("mute", true);

}

  

}

function Script21()
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";

player.SetVar("mute", true);
}



}

function Script22()
{
  var audio = document.getElementById('bgSong');
audio.play();

}

function Script23()
{
  var audio = document.getElementById('bgSong');
audio.pause(); 

}

function Script24()
{
  //var a = document.getElementById("mobile-start-container").offsetLeft;


function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}


if(isOnScreen($('#mobile-start-container'))) { 
alert(visible);
 };


}

