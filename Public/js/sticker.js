var HT = 0;
var VT = 0;
var MoveUD = 0;
var MoveLR = 0;
function handleFiles(files) {
var imgpath = '';
  var preview = document.getElementById('keyboard');
  for (var i = 0; i < files.length; i++) {
	var file = files[i];
	var imageType = /^image\//;

	if ( !imageType.test(file.type) ) {
	  continue;
	}

	var filepath = document.getElementById('input').value;
	var pos = filepath.lastIndexOf('\\');
	imgpath = '../images/sticker/'+filepath.substring(pos + 1);
	$('#keyboard').css('background-image', 'url(' + imgpath + ')');
  }
}

function handleFilesOnline(files) {
	var filepath = document.getElementById('input').value;
	$('#keyboard').css('background-image', 'url(' + '"'+filepath+'"' + ')');
}

function handleFilesUser(files) {
	var filenamne = document.getElementById('mysticker').value;
	var imgpath = '../images/sticker/'+filenamne;
	$('#keyboard').css('background-image', 'url(' + imgpath + ')');
}

function handleFilesUser108(files) {
	var filenamne = document.getElementById('mysticker').value;
	var imgpath = '../images/sticker/'+filenamne;
	$('#keyboard108').css('background-image', 'url(' + imgpath + ')');
}
function handleFilesUser104(files) {
	var filenamne = document.getElementById('mysticker').value;
	var imgpath = '../images/sticker/'+filenamne;
	$('#keyboard104').css('background-image', 'url(' + imgpath + ')');
}
function handleFilesUser87(files) {
	var filenamne = document.getElementById('mysticker').value;
	var imgpath = '../images/sticker/'+filenamne;
	$('#keyboard87').css('background-image', 'url(' + imgpath + ')');
}


function changeKB108(files) {
	var filenamne = document.getElementById('myKB').value;
	var imgpath = '../images/kb108/'+filenamne;
	$('.u108').css('background-image', 'url(' + imgpath + ')');
}

function changeKB104(files) {
	var filenamne = document.getElementById('myKB').value;
	var imgpath = '../images/kb104/'+filenamne;
	$('.u104').css('background-image', 'url(' + imgpath + ')');
}

function changeKB87(files) {
	var filenamne = document.getElementById('myKB').value;
	var imgpath = '../images/kb87/'+filenamne;
	$('.u87').css('background-image', 'url(' + imgpath + ')');
}

function HorizontalTensilePlus() {
	HT = HT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function HorizontalTensilePlus108() {
	HT = HT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard108').css('background-size', newsize);
}
function HorizontalTensilePlus104() {
	HT = HT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard104').css('background-size', newsize);
}
function HorizontalTensilePlus87() {
	HT = HT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard87').css('background-size', newsize);
}
function HorizontalTensileMinus() {
	HT = HT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function HorizontalTensileMinus108() {
	HT = HT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard108').css('background-size', newsize);
}
function HorizontalTensileMinus104() {
	HT = HT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard104').css('background-size', newsize);
}
function HorizontalTensileMinus87() {
	HT = HT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard87').css('background-size', newsize);
}
function VerticalTensilePlus() {
	VT = VT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function VerticalTensilePlus108() {
	VT = VT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard108').css('background-size', newsize);
}
function VerticalTensilePlus104() {
	VT = VT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard104').css('background-size', newsize);
}
function VerticalTensilePlus87() {
	VT = VT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard87').css('background-size', newsize);
}
function VerticalTensileMinus() {		
	VT = VT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function VerticalTensileMinus108() {		
	VT = VT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard108').css('background-size', newsize);
}
function VerticalTensileMinus104() {		
	VT = VT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard104').css('background-size', newsize);
}
function VerticalTensileMinus87() {		
	VT = VT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard87').css('background-size', newsize);
}
function MoveUP() {
	MoveUD = MoveUD - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveUP108() {
	MoveUD = MoveUD - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard108').css('background-position', newposition);
}
function MoveUP104() {
	MoveUD = MoveUD - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard104').css('background-position', newposition);
}
function MoveUP87() {
	MoveUD = MoveUD - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard87').css('background-position', newposition);
}
function MoveDOWN() {
	MoveUD = MoveUD + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveDOWN108() {
	MoveUD = MoveUD + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard108').css('background-position', newposition);
}
function MoveDOWN104() {
	MoveUD = MoveUD + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard104').css('background-position', newposition);
}
function MoveDOWN87() {
	MoveUD = MoveUD + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard87').css('background-position', newposition);
}
function MoveLEFT() {
	MoveLR = MoveLR - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveLEFT108() {
	MoveLR = MoveLR - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard108').css('background-position', newposition);
}
function MoveLEFT104() {
	MoveLR = MoveLR - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard104').css('background-position', newposition);
}
function MoveLEFT87() {
	MoveLR = MoveLR - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard87').css('background-position', newposition);
}
function MoveRIGHT() {
	MoveLR = MoveLR + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveRIGHT108() {
	MoveLR = MoveLR + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard108').css('background-position', newposition);
}
function MoveRIGHT104() {
	MoveLR = MoveLR + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard104').css('background-position', newposition);
}
function MoveRIGHT87() {
	MoveLR = MoveLR + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard87').css('background-position', newposition);
}
function eco_refresh(){
    var _body = window.child;
    var _iframe1=_body.document.getElementById('rightMain');
    window.onbeforeunload=function(){};
    _iframe1.contentWindow.location.reload(true);
} 