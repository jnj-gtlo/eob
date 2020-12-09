function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5t2aTA8VqoO":
        Script1();
        break;
      case "5Yq58Cl6n8B":
        Script2();
        break;
      case "6UxyKmgMg3T":
        Script3();
        break;
      case "6nDTe3nPZKR":
        Script4();
        break;
      case "5ocq9mpJh7C":
        Script5();
        break;
      case "67KNQUDTRpC":
        Script6();
        break;
      case "64A5MvZdvWy":
        Script7();
        break;
      case "5ojmZH7vloH":
        Script8();
        break;
      case "5sJQIvRYzBo":
        Script9();
        break;
      case "5uAeHenKlf5":
        Script10();
        break;
      case "6NVMNIp1GBA":
        Script11();
        break;
      case "6EGgSxGYgmC":
        Script12();
        break;
      case "6ppO8sOMirI":
        Script13();
        break;
      case "5irpzwoaPTx":
        Script14();
        break;
      case "6eSgBThm2qh":
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
audio.volume = 0.2;

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
  if (/webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || 

    (/webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) { 

var player = GetPlayer();
player.SetVar("FlagiOS", true);

alert("iPhone");
}else{
alert("Others");
var player = GetPlayer();
player.SetVar("FlagiOS", false);
}
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

