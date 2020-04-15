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
	$('#kbwindow').attr('src', $('#myIframe').attr('src'));
  }
}

function HorizontalTensilePlus() {
	HT = HT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function HorizontalTensileMinus() {
	HT = HT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function VerticalTensilePlus() {
	VT = VT + 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function VerticalTensileMinus() {		
	VT = VT - 1;
	var newHT=HT*5 + 100;
	var newVT=VT*5 + 100;
	var newsize=newHT+'%' + ' ' + newVT+'%';
	$('#keyboard').css('background-size', newsize);
}
function MoveUP() {
	MoveUD = MoveUD - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveDOWN() {
	MoveUD = MoveUD + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveLEFT() {
	MoveLR = MoveLR - 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function MoveRIGHT() {
	MoveLR = MoveLR + 5;
	var newposition= MoveLR + 'px '+ MoveUD +'px';
	$('#keyboard').css('background-position', newposition);
}
function eco_refresh(){
    var _body = window.child;
    var _iframe1=_body.document.getElementById('rightMain');
    window.onbeforeunload=function(){};
    _iframe1.contentWindow.location.reload(true);
} 