var NowTxtColor = "#020202"; //文字颜色
var NowBgColor = "#f2f2f2"; //按键颜色

function init () {//初始化

	createColorRing();

	$('#colors').on('contextmenu', function (e) { e.preventDefault(); });
	$('#colors span').on('mouseup', pickColor);
	//default color
	$('#keyboard li span').css('background-color', NowBgColor);
	$('#keyboard li span').css('color', NowTxtColor);
	$('#keyboard li span').css('background-color', NowBgColor);
	$('#keyboard li span').css('color', NowTxtColor);
	$('.previewcolor').css('background-color', NowBgColor);
	$('.previewoverlay').css('color', NowTxtColor);
	
	$('#keyboard li span').click(function () {
		$(this).css('background-color', NowBgColor);
		$(this).css('color', NowTxtColor);
        $(this).children("span").eq(0).css('background-color', NowBgColor);
        $(this).children("span").eq(0).css('color', NowTxtColor);
	});

	$('#kbcolor li').click(function () {
		$('#keyboard').css('background-color', $(this).css('background-color'));
	});
}

function pickColor (e) { //鼠标点击事件
	e.preventDefault();
	var $el = $(this);
	if ( e.button == 0 || e.button == 1) {
		NowBgColor = $el.css('background-color');
		$('.previewcolor').css('background-color', NowBgColor);
	} else if ( e.button == 2 ) {
		NowTxtColor = $el.css('background-color');
		$('.previewoverlay').css('color', NowTxtColor);
	}
}


function createColorRing () {//创建颜色选择板
	var $chip;
	var $wrapper = $('#colors ul');
	var $li;

	var defaultKey = 'WFK';
	var defaultLegend = 'WFK';
	var prevFamily = 'whites';

	for ( var i in ABS_SP ) {
		$chip = $('<span>')
				.css('background-color', '#' + ABS_SP[i].rgb)
				.attr('id', i);

		$li = $('<li>')
				.append($chip)
				.append($('<em>').html(i));

		if ( prevFamily != ABS_SP[i].family ) {
			$li.css('margin-left', '23px');
			prevFamily = ABS_SP[i].family;
		}

		$wrapper.append($li);
	}
}

function changeWords(){//改变键盘正刻和无刻

	if($('#changeWords').text()=='Empty'){
		$('#changeWords').text('String');
		 var ss = $('#keyboard li span span');
		 for(var i=0;i<ss.length;i++){
			 ss[i].style.display = 'none';
		 }
	}else{
		$('#changeWords').text('Empty');
		var ss = $('#keyboard li span span');
		 for(var i=0;i<ss.length;i++){
			 ss[i].style.display = '';
		 }
	}
}

function choseSize(num){//改变键盘尺寸
	if(0==num){
		document.getElementById("kbwindow").src ='./KB108.html';
	}else if(1==num){
		document.getElementById("kbwindow").src ='./KB104.html';
	}else if(2==num){
		document.getElementById("kbwindow").src ='./KB87.html';
	}else if(3==num){
		document.getElementById("kbwindow").src ='./KB84.html';
	}else if(4==num){
		document.getElementById("kbwindow").src ='./KB78.html';
	}else if(5==num){
		document.getElementById("kbwindow").src ='./KB61.html';
	}else if(6==num){
		document.getElementById("kbwindow").src ='./FC980M.html';
	}else if(7==num){
		document.getElementById("kbwindow").src ='./Z-MOYAN96.html';
	}else if(8==num){
		document.getElementById("kbwindow").src ='./Z-K100GD96.html';
	}else if('64l'==num){
		document.getElementById("kbwindow").src ='./KB64L.html';
	}else if('ca66'==num){
		document.getElementById("kbwindow").src ='./CA66.html';
	}else if('68'==num){
		document.getElementById("kbwindow").src ='./KB68.html';
	}else if('CANOE'==num){
		document.getElementById("kbwindow").src ='./CANOE.html';
	}else if('1800mini'==num){
		document.getElementById("kbwindow").src ='./1800mini.html';
	}else if('RK71'==num){
		document.getElementById("kbwindow").src ='./RK71.html';
	}else if('64'==num){
		document.getElementById("kbwindow").src ='./KB64.html';
	}else if('minila'==num){
		document.getElementById("kbwindow").src ='./MINILA.html';
	}
}


var ABS_SP = {
	WFK: { family: 'whites', rgb: 'f2f2f2', name: 'white' },
	WA:  { family: 'whites', rgb: 'eeebeb', name: 'off-white' },
	WCK: { family: 'whites', rgb: 'f2eee4', name: 'cream' },
	WFO: { family: 'whites', rgb: 'ebe7df', name: '' },
	WQ:  { family: 'whites', rgb: 'e6e6e0', name: '' },
	WW:  { family: 'whites', rgb: 'e8e3da', name: '' },
	WFM: { family: 'whites', rgb: 'ece4e0', name: '' },
	WEA: { family: 'whites', rgb: 'e6e0d4', name: '' },
	WBO: { family: 'whites', rgb: 'eae3d0', name: '' },
	WV:  { family: 'whites', rgb: 'e4e2d8', name: '' },
	WAR: { family: 'whites', rgb: 'b8b5a0', name: '' },
	//	WBM: { family: 'whites', rgb: 'e5e3d1', name: '' },		// uncalibrated

//	RDA: { family: 'reds', rgb: '753389', name: '' },	// uncalibrated
	RCU: { family: 'reds', rgb: 'ec6b5b', name: 'salmon' },
	RR:  { family: 'reds', rgb: 'e41116', name: '' },
	RCQ: { family: 'reds', rgb: 'da0c12', name: '' },
	RA:  { family: 'reds', rgb: 'd2081b', name: '' },
	RN:  { family: 'reds', rgb: 'b71520', name: '' },
//	RBV: { family: 'reds', rgb: 'a90c15', name: '' },	// uncalibrated
	RDD: { family: 'reds', rgb: 'b7081d', name: '' },
	RAC: { family: 'reds', rgb: 'b5171e', name: '' },
	RAS: { family: 'reds', rgb: 'a9071f', name: '' },
	RBC: { family: 'reds', rgb: '762e33', name: 'burgundy' },
	
	RCJ: { family: 'violets', rgb: 'c4a4d1', name: 'lavender' },
	RCS: { family: 'violets', rgb: 'ebb1d4', name: 'pink' },
	RCR: { family: 'violets', rgb: 'e784b2', name: '' },
	RDA: { family: 'violets', rgb: '793885', name: '' },
	RDE: { family: 'violets', rgb: '751f5b', name: 'purple' },
	
	OAS: { family: 'oranges', rgb: 'fb8704', name: 'tangerine' },
	OBC: { family: 'oranges', rgb: 'ea8300', name: '' },
	ON:  { family: 'oranges', rgb: 'f05902', name: '' },
	OAV: { family: 'oranges', rgb: 'fa4620', name: '' },
	OB:  { family: 'oranges', rgb: 'ec3518', name: '' },

// 	YCA: { family: 'yellows', rgb: 'fefee6', name: '' },	// uncalibrated
	YCC: { family: 'yellows', rgb: 'f7e7aa', name: '' },
	YCE: { family: 'yellows', rgb: 'fbf065', name: '' },
	YY:  { family: 'yellows', rgb: 'f5e22b', name: '' },
// 	YK:  { family: 'yellows', rgb: 'fef58c', name: '' },	// uncalibrated
// 	YCD: { family: 'yellows', rgb: 'f6ea60', name: '' },	// uncalibrated
	YCH: { family: 'yellows', rgb: 'f1dd03', name: '' },
	YCB: { family: 'yellows', rgb: 'e6ce41', name: '' },
	YCF: { family: 'yellows', rgb: 'f4c72b', name: '' },
	YBP: { family: 'yellows', rgb: 'fdc61d', name: '' },
// 	YCG: { family: 'yellows', rgb: 'fdc623', name: '' },	// uncalibrated
	YL:  { family: 'yellows', rgb: 'e19f08', name: '' },
	YW:  { family: 'yellows', rgb: 'd09c24', name: '' },
	YG:  { family: 'yellows', rgb: 'cbac3c', name: '' },

	VBV: { family: 'greens', rgb: '5cdece', name: 'turquoise' },
	VCO: { family: 'greens', rgb: '62e1bc', name: '' },
	VAT: { family: 'greens', rgb: '98dc4b', name: 'lime' },
	VAV: { family: 'greens', rgb: '81ad53', name: '' },
	VBQ: { family: 'greens', rgb: '55994a', name: '' },
	VCS: { family: 'greens', rgb: '028033', name: '' },
	VAF: { family: 'greens', rgb: '65aba3', name: '' },
	VAG: { family: 'greens', rgb: '13af89', name: '' },
	VCK: { family: 'greens', rgb: '009a66', name: '' },
	VCM: { family: 'greens', rgb: '009a55', name: '' },
	VCJ: { family: 'greens', rgb: '008b5c', name: '' },
	VH:  { family: 'greens', rgb: '80a791', name: '' },
	VF:  { family: 'greens', rgb: '4f8a68', name: '' },
	VV:  { family: 'greens', rgb: '03643e', name: '' },

	BFM: { family: 'blues', rgb: 'c2d4eb', name: '' },
	BFO: { family: 'blues', rgb: 'bcd0de', name: '' },
	BFL: { family: 'blues', rgb: '82a8c4', name: '' },
	BFT: { family: 'blues', rgb: '7693ae', name: '' },
	BFQ: { family: 'blues', rgb: '6fdfe4', name: '' },
	BBQ: { family: 'blues', rgb: '10b6c5', name: '' },
	BDG: { family: 'blues', rgb: '42a0b3', name: '' },
	BEY: { family: 'blues', rgb: '4d9aa3', name: '' },
	BFJ: { family: 'blues', rgb: '6a9fbf', name: '' },
	BBJ: { family: 'blues', rgb: '069ec4', name: '' },
	BX:  { family: 'blues', rgb: '4d93ae', name: '' },
	BFN: { family: 'blues', rgb: '5095cf', name: '' },
	BFP: { family: 'blues', rgb: '1c76b9', name: '' },
	BE:  { family: 'blues', rgb: '0275a8', name: '' },
	BDH: { family: 'blues', rgb: '0458ad', name: '' },
	BFK: { family: 'blues', rgb: '0852a0', name: '' },
	BO:  { family: 'blues', rgb: '03498a', name: '' },
	BGA: { family: 'blues', rgb: '0a4779', name: '' },
	BFR: { family: 'blues', rgb: '2b3651', name: '' },
	BED: { family: 'blues', rgb: '123655', name: '' },
	BBI: { family: 'blues', rgb: '192748', name: '' },
	BFU: { family: 'blues', rgb: '131e51', name: '' },
	
	//	BM:  { family: 'blues', rgb: '2f405c', name: 'prussian' },		// uncalibrated

	TM:  { family: 'browns', rgb: 'e4dabe', name: '' },
	TN:  { family: 'browns', rgb: 'd9cbaf', name: '' },
	TU:  { family: 'browns', rgb: 'd9c7aa', name: '' },
	TBT: { family: 'browns', rgb: 'cec4af', name: '' },
	TEA: { family: 'browns', rgb: 'dac7a2', name: '' },
	TGG: { family: 'browns', rgb: 'a29a82', name: '' },
	TGH: { family: 'browns', rgb: '61351e', name: 'cappuccino' },
	TBN: { family: 'browns', rgb: '413327', name: 'coffee' },
	TAA: { family: 'browns', rgb: '222423', name: 'ebony' },
	
	// cold
	GA:  { family: 'cold-grays', rgb: '9ea3a1', name: '' },
	GTH: { family: 'cold-grays', rgb: 'a1a8a8', name: '' },
	GSC: { family: 'cold-grays', rgb: '929d9f', name: '' },
	GSP: { family: 'cold-grays', rgb: '839091', name: '' },
	GTD: { family: 'cold-grays', rgb: '818986', name: '' },
	GO:  { family: 'cold-grays', rgb: '767f7c', name: '' },
	GDC: { family: 'cold-grays', rgb: '6b7271', name: '' },
	GPA: { family: 'cold-grays', rgb: '5b686c', name: '' },
	GY:  { family: 'cold-grays', rgb: '6f797a', name: '' },
	GD:  { family: 'cold-grays', rgb: '627379', name: '' },
	GSM: { family: 'cold-grays', rgb: '41596b', name: '' },
	GC:  { family: 'cold-grays', rgb: '535c62', name: '' },
	GTA: { family: 'cold-grays', rgb: '4c5761', name: '' },
	GQM: { family: 'cold-grays', rgb: '404b4e', name: '' },
	GEW: { family: 'cold-grays', rgb: '334248', name: '' },
	GSZ: { family: 'cold-grays', rgb: '2e383c', name: '' },
	GX:  { family: 'cold-grays', rgb: '2a3433', name: '' },
	GB:  { family: 'cold-grays', rgb: '273132', name: '' },
	
	// warm
	GTQ: { family: 'warm-grays', rgb: 'e1dfd3', name: '' },
	GRX: { family: 'warm-grays', rgb: 'dcdad1', name: '' },
	GDX: { family: 'warm-grays', rgb: 'd1c6b1', name: '' },
	GGK: { family: 'warm-grays', rgb: 'cdc6bd', name: '' },
	GTF: { family: 'warm-grays', rgb: 'd1cec0', name: '' },
	GAL: { family: 'warm-grays', rgb: 'd7d4cc', name: '' },
	GFD: { family: 'warm-grays', rgb: 'd6d3c4', name: '' },
	GER: { family: 'warm-grays', rgb: 'd3d1c5', name: '' },
	GCF: { family: 'warm-grays', rgb: 'cbc5b9', name: '' },
	GAY: { family: 'warm-grays', rgb: 'd6d3cb', name: '' },
	GLY: { family: 'warm-grays', rgb: 'cfccc3', name: '' },
	GPR: { family: 'warm-grays', rgb: 'd3cfc9', name: '' },
	GAA: { family: 'warm-grays', rgb: 'bfbfb3', name: '' },
	GTT: { family: 'warm-grays', rgb: 'b2b09d', name: '' },
	GSU: { family: 'warm-grays', rgb: 'aeada7', name: '' },
	GAW: { family: 'warm-grays', rgb: 'bab4a1', name: '' },
	GFW: { family: 'warm-grays', rgb: 'a0a097', name: '' },
	GEV: { family: 'warm-grays', rgb: '999687', name: '' },
	GDV: { family: 'warm-grays', rgb: '9a9b94', name: '' },
	GTM: { family: 'warm-grays', rgb: '9d9f92', name: '' },
	GEQ: { family: 'warm-grays', rgb: 'a5a792', name: '' },
	GTG: { family: 'warm-grays', rgb: '9aa099', name: '' },
	GFE: { family: 'warm-grays', rgb: 'a6a596', name: '' },
	GTV: { family: 'warm-grays', rgb: '8d9287', name: '' },
	GCS: { family: 'warm-grays', rgb: '8f8f7f', name: '' },
	GJV: { family: 'warm-grays', rgb: '8c8c84', name: '' },
	GSY: { family: 'warm-grays', rgb: '878b84', name: '' },
	GE:  { family: 'warm-grays', rgb: '5d645d', name: '' },
	
	// neutral
	GTR: { family: 'grays', rgb: 'd4d6d0', name: '' },
	GGT: { family: 'grays', rgb: 'cfd0cb', name: '' },
	GSL: { family: 'grays', rgb: 'ced0cd', name: '' },
	GLK: { family: 'grays', rgb: 'ced2cd', name: '' },
	GTB: { family: 'grays', rgb: 'c8c8c1', name: '' },
	GSX: { family: 'grays', rgb: 'b8bdbd', name: '' },
	GTL: { family: 'grays', rgb: 'c1c1c3', name: '' },
	GKH: { family: 'grays', rgb: 'b2b6b7', name: '' },
	GN:  { family: 'grays', rgb: 'b4b7b3', name: '' },
	GGM: { family: 'grays', rgb: 'b2b6b4', name: '' },
	GEZ: { family: 'grays', rgb: 'acaea7', name: '' },
	GEA: { family: 'grays', rgb: 'bcbfb8', name: '' },
	GBA: { family: 'grays', rgb: 'b2b7b3', name: '' },
	GRY: { family: 'grays', rgb: '9fa4a1', name: '' },
	GTC: { family: 'grays', rgb: '9ea39d', name: '' },
	GG:  { family: 'grays', rgb: '7e8380', name: '' },
	NN: { family: 'grays', rgb: '020202', name: 'black' }
};

