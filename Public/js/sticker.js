var HT = 123;
var VT = 150;
var MoveUD = -95;
var MoveLR = -135;
var V_HT = 123;
var V_VT = 150;
var V_MoveUD = -75;
var V_MoveLR = -120;
var HT_3000 = 110;
var VT_3000 = 110;
var MoveUD_3000 = -25;
var MoveLR_3000 = -35;
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

function handleFilesUser3000(files) {
	var filenamne = document.getElementById('mysticker').value;
	var imgpath = '../images/sticker3000/'+filenamne;
	$('#keyboard3000').css('background-image', 'url(' + imgpath + ')');
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

function changeKB3000(files) {
	var filenamne = document.getElementById('myKB').value;
	var imgpath = '../images/kb3000/'+filenamne;
	$('.u3000').css('background-image', 'url(' + imgpath + ')');
}

function HorizontalTensilePlus() {
	V_HT = V_HT + 1;
	var newHT=V_HT*5 + 100;
	var newVT=V_VT*5 + 100;
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
function HorizontalTensilePlus3000() {
	HT_3000 = HT_3000 + 1;
	var newHT=HT_3000*5 + 100;
	var newVT=VT_3000*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard3000').css('background-size', newsize);
}
function HorizontalTensileMinus() {
	V_HT = V_HT - 1;
	var newHT=V_HT*5 + 100;
	var newVT=V_VT*5 + 100;
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
function HorizontalTensileMinus3000() {
	HT_3000 = HT_3000 - 1;
	var newHT=HT_3000*5 + 100;
	var newVT=VT_3000*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard3000').css('background-size', newsize);
}
function VerticalTensilePlus() {
	V_VT = V_VT + 1;
	var newHT=V_HT*5 + 100;
	var newVT=V_VT*5 + 100;
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
function VerticalTensilePlus3000() {
	VT_3000 = VT_3000 + 1;
	var newHT=HT_3000*5 + 100;
	var newVT=VT_3000*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard3000').css('background-size', newsize);
}
function VerticalTensileMinus() {		
	V_VT = V_VT - 1;
	var newHT=V_HT*5 + 100;
	var newVT=V_VT*5 + 100;
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
function VerticalTensileMinus3000() {		
	VT_3000 = VT_3000 - 1;
	var newHT=HT_3000*5 + 100;
	var newVT=VT_3000*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard3000').css('background-size', newsize);
}
function MoveUP() {
	V_MoveUD = V_MoveUD - 5;
	var newposition= V_MoveLR + 'px '+ V_MoveUD +'px';
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
function MoveUP3000() {
	MoveUD_3000 = MoveUD_3000 - 5;
	var newposition= MoveLR_3000 + 'px '+ MoveUD_3000 +'px';
	$('#keyboard3000').css('background-position', newposition);
}
function MoveDOWN() {
	V_MoveUD = V_MoveUD + 5;
	var newposition= V_MoveLR + 'px '+ V_MoveUD +'px';
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
function MoveDOWN3000() {
	MoveUD_3000 = MoveUD_3000 + 5;
	var newposition= MoveLR_3000 + 'px '+ MoveUD_3000 +'px';
	$('#keyboard3000').css('background-position', newposition);
}
function MoveLEFT() {
	V_MoveLR = V_MoveLR - 5;
	var newposition= V_MoveLR + 'px '+ V_MoveUD +'px';
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
function MoveLEFT3000() {
	MoveLR_3000 = MoveLR_3000 - 5;
	var newposition= MoveLR_3000 + 'px '+ MoveUD_3000 +'px';
	$('#keyboard3000').css('background-position', newposition);
}
function MoveRIGHT() {
	V_MoveLR = V_MoveLR + 5;
	var newposition= V_MoveLR + 'px '+ V_MoveUD +'px';
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
function MoveRIGHT3000() {
	MoveLR_3000 = MoveLR_3000 + 5;
	var newposition= MoveLR_3000 + 'px '+ MoveUD_3000 +'px';
	$('#keyboard3000').css('background-position', newposition);
}
function eco_refresh(){
    var _body = window.child;
    var _iframe1=_body.document.getElementById('rightMain');
    window.onbeforeunload=function(){};
    _iframe1.contentWindow.location.reload(true);
} 