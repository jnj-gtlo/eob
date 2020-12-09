function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dBVXSnYMoc":
        Script1();
        break;
      case "5rFrFm9BIBp":
        Script2();
        break;
      case "6QGokpn0Nrf":
        Script3();
        break;
      case "617Zr45GqEq":
        Script4();
        break;
      case "6HWKj0h2QpJ":
        Script5();
        break;
      case "6qZq1RySALM":
        Script6();
        break;
      case "6DFL3lPjWL7":
        Script7();
        break;
      case "63MXBgaXTIt":
        Script8();
        break;
      case "5s7lB4Ku2iE":
        Script9();
        break;
      case "6muofMtnFYG":
        Script10();
        break;
      case "6g4LXTJUjJT":
        Script11();
        break;
      case "5sbHK0e7Lz1":
        Script12();
        break;
      case "6ASv1ESXaTX":
        Script13();
        break;
      case "6mpFrwiJbCe":
        Script14();
        break;
      case "6ZfUatCJmOh":
        Script15();
        break;
      case "6QtLyA329um":
        Script16();
        break;
      case "6TzLCUSwSCg":
        Script17();
        break;
      case "6Np7Zqinq5C":
        Script18();
        break;
      case "5kFhpixx4O2":
        Script19();
        break;
      case "5aOPO4SRXZy":
        Script20();
        break;
      case "6EweDqvpTQR":
        Script21();
        break;
      case "5nMb2fCOxSw":
        Script22();
        break;
      case "5pM21amp8NG":
        Script23();
        break;
      case "5cJ5ZDdI1yb":
        Script24();
        break;
      case "5Uk6oLM0OhX":
        Script25();
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
var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();

}

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

function Script4()
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

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";

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
        line.autoplay = false;
        line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();

}


}

function Script8()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
var audio = document.getElementById('bgSong');
audio.src=Location+"TheEpicHero.mp3";
audio.load();
audio.play();


}

function Script9()
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

function Script10()
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

function Script11()
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
audio.pause();

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
audio.play();

}

}

function Script14()
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

function Script15()
{
  var audio = document.getElementById('bgSong');
audio.play();


}

function Script16()
{
  var audio = document.getElementById('bgSong');
audio.pause();

}

function Script17()
{
  var audio = document.getElementById('bgSong');
audio.pause();


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

function Script19()
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

function Script20()
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

function Script21()
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

function Script25()
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

