function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MmW4VyiK9I":
        Script1();
        break;
      case "5ZHmBwsHqaV":
        Script2();
        break;
      case "652EIKoyZXi":
        Script3();
        break;
      case "5aJa7R5lXO1":
        Script4();
        break;
      case "5rWsOBYqM8T":
        Script5();
        break;
      case "6emeV4D3orV":
        Script6();
        break;
      case "6f2mwYCb9dd":
        Script7();
        break;
      case "5mTfBDoDlWb":
        Script8();
        break;
      case "6J9E9SI8YEw":
        Script9();
        break;
      case "6miG1kNHZ8b":
        Script10();
        break;
      case "63r5dmsKn1W":
        Script11();
        break;
      case "6FsumjNAOa4":
        Script12();
        break;
      case "6bUeP4RboiK":
        Script13();
        break;
      case "6cCMMTgT6cb":
        Script14();
        break;
      case "5nVClYrHPF4":
        Script15();
        break;
      case "5rHa8rU6QiF":
        Script16();
        break;
      case "6KBHC1CrTV4":
        Script17();
        break;
      case "5bmYHKnDoz1":
        Script18();
        break;
      case "6XGLWYE4sUq":
        Script19();
        break;
      case "5xHNbMVSYzL":
        Script20();
        break;
      case "6rLfH7TWVt6":
        Script21();
        break;
      case "6Cm4hf40yk4":
        Script22();
        break;
      case "5oSyRsHdiPy":
        Script23();
        break;
      case "6md37ghHZIh":
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

