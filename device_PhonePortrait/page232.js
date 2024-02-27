if (window.VarCurrentView) VarCurrentView.set('PhonePortrait');
function init_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

	progress92.cwObj.pbVar=VarProgressBar_92;
	progress92.setPosition(VarProgressBar_92.getValue());
}
progress92.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 93px; height: 10px;\"><div style=\"overflow: hidden; background-color: rgb(238, 238, 238); position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 93px; height: 8px;\"><div style=\"overflow: hidden; position: absolute; left: 0px; top: 0px; width: 57px; height: 100%; background-color: rgb(0, 0, 255);\"></div></div><div name=\"dCon2\" style=\"position: absolute; width: 100%; left: 1px; bottom: 0px; height: 6px;\"></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 73px; width: 95px; height: 10px; z-index: 0;",
	cssClasses:	"",
	id:		"92",
	htmlId:		"tobj92",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Progress Bar 1"
	},
	objData:	{"a":[0,16777248,0,[0,73,95,10]],"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":73,"width":200,"height":20},"step":1,"range":10,"barPos":"6","tickTime":1000,"dwBarFlags":80,"imgsrc":"images/defaultProgBarH.gif","varName":"VarProgressBar_92"}
};
og12.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og12",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape13.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj13inner\"><svg viewBox=\"0 0 480 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 50)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-238\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 5.11591e-13px; width: 480px; height: 100px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"13",
	htmlId:		"tobj13",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color 2"
	},
	objData:	{"a":[0,544,0,[0,5.115907697472721e-13,480,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape14.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj14inner\"><svg viewBox=\"0 0 480 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_232_57_1219\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(240 50)\" style=\"\">\n	<pattern id=\"SVGID_232_57_1219\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 480 0 L 480 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1219&quot;); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10);\">\n			<tspan x=\"-238\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 5.11591e-13px; width: 480px; height: 100px; z-index: 7; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"14",
	htmlId:		"tobj14",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Texture 2"
	},
	objData:	{"a":[0,544,0,[0,5.115907697472721e-13,480,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape15.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj15inner\"><svg viewBox=\"0 0 480 85\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 42.5)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 85 L 0 85 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -42.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 42.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-238\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 5.11591e-13px; width: 480px; height: 85px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"15",
	htmlId:		"tobj15",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color"
	},
	objData:	{"a":[0,544,0,[0,5.115907697472721e-13,480,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":85},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape16.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj16inner\"><svg viewBox=\"0 0 460 65\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_232_57_1221\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(230 32.5)\" style=\"\">\n	<pattern id=\"SVGID_232_57_1221\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 460 0 L 460 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1221&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-230, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(230 32.5)\">\n		<text font-family=\"Playfair Display\" font-size=\"10.6666664\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"3.36\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 10px; top: 10px; width: 460px; height: 65px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"16",
	htmlId:		"tobj16",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background Texture 1"
	},
	objData:	{"a":[0,544,0,[10,10.000000000000512,460,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":10,"y":10,"width":989,"height":65},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape17.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj17inner\"><svg viewBox=\"0 0 485 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(242.5 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 480 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(242.5 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"10.777777508333335\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"3.39\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.5px; top: 95.5px; width: 485px; height: 5px; z-index: 10; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"17",
	htmlId:		"tobj17",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line1"
	},
	objData:	{"a":[0,544,0,[-2.5,95.50000000000054,485,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":98,"width":1014,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
image18.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj18Img\" src=\"images/dream_TradingCard.jpg\" alt=\"\" title=\"\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 95px; height: 53px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 365px; top: 15px; width: 95px; height: 53px; z-index: 11; border-radius: 0px;",
	cssClasses:	"",
	id:		"18",
	htmlId:		"tobj18",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dream_TradingCard"
	},
	objData:	{"a":[0,2848,0,[365,15,95,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":115,"y":15,"width":32,"height":52}}
};
shape19.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj19inner\"><svg viewBox=\"0 0 407 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(203.5 28)\" style=\"\">\n	<path d=\"M 0 0 L 405 0 L 405 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(110, 117, 119); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-202.5, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(203.5 28)\">\n		<text font-family=\"Century Gothic\" font-size=\"16.079011943703705\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-200.5\" y=\"5.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 693px; width: 407px; height: 56px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"19",
	htmlId:		"tobj19",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color 2"
	},
	objData:	{"a":[0,4640,0,[38,692.0000000000005,407,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":39,"y":70,"width":934,"height":56},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape20.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj20inner\"><svg viewBox=\"0 0 413 47\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_232_57_1223\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(206.5 23.5)\" style=\"\">\n	<pattern id=\"SVGID_232_57_1223\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 410 0 L 410 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(39, 50, 53); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1223&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(206.5 23.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"16.117072767804878\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-203\" y=\"5.08\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33.5px; top: 693px; width: 413px; height: 47px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"20",
	htmlId:		"tobj20",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color"
	},
	objData:	{"a":[0,4640,0,[33.5,691.5000000000005,413,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":943,"height":47},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape21.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj21inner\"><svg viewBox=\"0 0 108 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(54 22)\" style=\"\">\n	<path d=\"M 0 0 L 108 0 L 108 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(54 22)\">\n		<text font-family=\"Prompt\" font-size=\"10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-52\" y=\"3.36\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 340px; top: 693px; width: 108px; height: 44px; z-index: 14; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"21",
	htmlId:		"tobj21",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 1"
	},
	objData:	{"a":[0,6688,0,[339.99999999999994,693.0000000000001,108,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":108,"height":44},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape22.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj22inner\"><svg viewBox=\"0 0 115 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(57.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 115 0 L 115 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-57.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(57.5 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.5\" y=\"3.36\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 337px; top: 703px; width: 115px; height: 25px; z-index: 15; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"22",
	htmlId:		"tobj22",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 2"
	},
	objData:	{"a":[0,6688,0,[337,703.0000000000001,115,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":143,"y":60,"width":115,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape23.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj23inner\"><svg viewBox=\"0 0 50 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(25 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-23\" y=\"3.36\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 31px; top: 703px; width: 50px; height: 25px; z-index: 16; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"23",
	htmlId:		"tobj23",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 3"
	},
	objData:	{"a":[0,4640,0,[30.999999999999968,703,50,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":31,"y":60,"width":50,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape24.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj24inner\"><svg viewBox=\"0 0 415 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(207.5 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 410 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-205, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(207.5 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"10.796747697560976\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"3.4\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34.5px; top: 735.5px; width: 415px; height: 5px; z-index: 17; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"24",
	htmlId:		"tobj24",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line2"
	},
	objData:	{"a":[0,4640,0,[34.5,735.5000000000005,415,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":37,"y":25,"width":943,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
text11.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 290px; min-height: 59px;\"><p align=\"left\" leglh=\"1.291\" style=\"margin-left:0px;text-indent:0px;line-height:1.291;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:26pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(39, 50, 53);\">Assessing Student Use of Metacognitive Strategies</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 15px; width: 300px; height: 69px; z-index: 18;",
	cssClasses:	"",
	id:		"11",
	htmlId:		"tobj11",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Course Title Text"
	},
	objData:	{"a":[0,96,0,[35,15,300,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":15,"width":845,"height":96},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
og4.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
textbutton5.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj5inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_232_57_1225\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1225&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 693px; width: 44px; height: 44px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"5",
	htmlId:		"tobj5",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Exit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Exit',actItem:function(){ {cleanupTitle('page1.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,37152,0,[34.999999999999936,693.0000000000001,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1225\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1225&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1227\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1227&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1229\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1229&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1231\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1231&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Exit","titleValue":"Exit"}
};
textbutton7.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj7inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_232_57_1233\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1233&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 340px; top: 693px; width: 44px; height: 44px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"7",
	htmlId:		"tobj7",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Back",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'GoTo_Previous',actItem:function(){ trivExitPage('page230.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39200,0,[339.99999999999994,693.0000000000001,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1233\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1233&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1235\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1235&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1237\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1237&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1239\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1239&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Back","titleValue":"Back"}
};
textbutton9.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj9inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_232_57_1241\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1241&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 401px; top: 693px; width: 44px; height: 44px; z-index: 21; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"9",
	htmlId:		"tobj9",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'GoTo_Next',actItem:function(){ false }}
	]
	},
	objData:	{"a":[4,39200,0,[400.99999999999994,693.0000000000001,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":79,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1241\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1241&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1243\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1243&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1245\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1245&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_232_57_1247\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_232_57_1247&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next"}
};
text284.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 126px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 116px; min-height: 38px;\"><p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\">CONGRATULATIONS!</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\">​</span></p>\n\n<p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\">You\'ve finished the lesson</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 241px; top: 419px; width: 126px; height: 48px; z-index: 2;",
	cssClasses:	"",
	id:		"284",
	htmlId:		"tobj284",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[241,419,126,48]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":507,"y":419,"width":264,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image283.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj283Img\" src=\"images/Applause-512-10723733.png\" alt=\"Applause-512-10723733\" title=\"Applause-512-10723733\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 178px; top: 404px; width: 64px; height: 64px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"283",
	htmlId:		"tobj283",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Applause-512-10723733"
	},
	objData:	{"a":[0,288,0,[178,404,64,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":374,"y":404,"width":135,"height":135}}
};
qu264.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"qu264",
	bInsAnc:	undefined,
	cwObj:		{
		"crLineColor":	"",
		"questType":	5,
		"dwQuestFlags":	8945674,
		"doImmFeedback":	32768,
		"maxAllowedAttempts":	3,
		"arrAns":	[],
		"correctFeedbackFunc":	"action264_1",
		"incorrectFeedbackFunc":	"action264_2",
		"attemptsFeedbackFunc":	"action264_3",
		"arAnswers":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
		"varQuest":	VarQuestion_264,
		"varAttempts":	VarTriQA_264
	},
	objData:	{"a":[0,32,0,[]]}
};
text270.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<label for=\"rad271\"><div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 395px; min-height: 96px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 395px; min-height: 96px;\"><p align=\"left\"><span style=\"font-size:14pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\">When you go back to your classroom, what is one strategy you will implement to assess how your students are using the metacognitive strategies you have been practicing during their problem solving?</span></p></div></legend></div></label>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 100px; width: 395px; height: 96px; z-index: 4;",
	cssClasses:	"",
	id:		"270",
	htmlId:		"tobj270",
	bInsAnc:	0,
	fieldsetId:	'fset264',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,100,395,96]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":51,"y":181,"width":866,"height":48},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
entry271.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<input type=\"text\" maxlength=\"50\" name=\"Entry field\" id=\"frmobj271\" title=\"Entry field\" onpropertychange=\"if( !VarQuestion_264.equals(this.value) ) {qu264.hasBeenProcessed=false;VarQuestion_264.set(this.value);}\" onchange=\"if( !VarQuestion_264.equals(this.value) ) {qu264.hasBeenProcessed=false;VarQuestion_264.set(this.value);}\" onkeyup=\"if( !VarQuestion_264.equals(this.value) ) {qu264.hasBeenProcessed=false;VarQuestion_264.set(this.value);}\" onblur=\"if (!qu264.hasBeenProcessed) qu264.questionUpdated()\" style=\"font-size: 12pt; font-family: &quot;Palatino Linotype&quot;, serif; margin: 0px; border: 0px; background-color: rgb(255, 255, 255); position: absolute; color: rgb(0, 0, 0); padding: 2px; border-radius: 0px; left: 0px; top: 0px; width: 160px; height: 28px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 206px; width: 164px; height: 32px; z-index: 5; background-color: rgb(255, 255, 255); border-radius: 0px; border: 1px solid rgb(169, 169, 169);",
	cssClasses:	"",
	id:		"271",
	htmlId:		"tobj271",
	bInsAnc:	0,
	fieldsetId:	'fset264',
	cwObj:		{
		"name":	"Entry field"
	},
	objData:	{"a":[0,32,0,[50,206,160,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":1,"lineStyle":0,"borderColor":"#a9a9a9","borderRadius":"square"},"desktopRect":{"x":51,"y":239,"width":857,"height":124},"formType":2,"dwFormFlags":0,"iNumChars":50}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Palatino Linotype',serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	10
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/Polar_Exit.png","images/Polar_Back.png","images/Polar_Forward.png","images/stripesTransparentDark.png","images/stardustLight.png","images/dream_TradingCard.jpg","images/Applause-512-10723733.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
