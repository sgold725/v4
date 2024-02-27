if (window.VarCurrentView) VarCurrentView.set('PhoneLandscape');
function init_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

	progress92.cwObj.pbVar=VarProgressBar_92;
	progress92.setPosition(VarProgressBar_92.getValue());
}
progress92.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 154px; height: 16px;\"><div style=\"overflow: hidden; background-color: rgb(238, 238, 238); position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 154px; height: 14px;\"><div style=\"overflow: hidden; position: absolute; left: 0px; top: 0px; width: 94px; height: 100%; background-color: rgb(0, 0, 255);\"></div></div><div name=\"dCon2\" style=\"position: absolute; width: 100%; left: 1px; bottom: 0px; height: 6px;\"></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 57px; width: 156px; height: 16px; z-index: 0;",
	cssClasses:	"",
	id:		"92",
	htmlId:		"tobj92",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Progress Bar 1"
	},
	objData:	{"a":[0,16777248,0,[0,57,156,16]],"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":73,"width":200,"height":20},"step":1,"range":10,"barPos":"6","tickTime":1000,"dwBarFlags":80,"imgsrc":"images/defaultProgBarH.gif","varName":"VarProgressBar_92"}
};
og12.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og12",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape13.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj13inner\"><svg viewBox=\"0 0 785 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 50)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.59999936\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-390.5\" y=\"8.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 3.97904e-13px; width: 785px; height: 100px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"13",
	htmlId:		"tobj13",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color 2"
	},
	objData:	{"a":[0,544,0,[0,3.979039320256561e-13,785,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape14.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj14inner\"><svg viewBox=\"0 0 785 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_86_57_1127\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(392.5 50)\" style=\"\">\n	<pattern id=\"SVGID_86_57_1127\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 785 0 L 785 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1127&quot;); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.59999936\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10);\">\n			<tspan x=\"-390.5\" y=\"8.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 3.97904e-13px; width: 785px; height: 100px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"14",
	htmlId:		"tobj14",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Texture 2"
	},
	objData:	{"a":[0,544,0,[0,3.979039320256561e-13,785,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape15.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj15inner\"><svg viewBox=\"0 0 785 85\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 42.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 85 L 0 85 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -42.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 42.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.59999936\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-390.5\" y=\"8.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 3.97904e-13px; width: 785px; height: 85px; z-index: 19; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"15",
	htmlId:		"tobj15",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color"
	},
	objData:	{"a":[0,544,0,[0,3.979039320256561e-13,785,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":85},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape16.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj16inner\"><svg viewBox=\"0 0 765 65\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_86_57_1129\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(382.5 32.5)\" style=\"\">\n	<pattern id=\"SVGID_86_57_1129\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 765 0 L 765 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1129&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-382.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(382.5 32.5)\">\n		<text font-family=\"Playfair Display\" font-size=\"17.06666624\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.38\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 10px; top: 10px; width: 765px; height: 65px; z-index: 20; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"16",
	htmlId:		"tobj16",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background Texture 1"
	},
	objData:	{"a":[0,544,0,[10,10.00000000000037,765,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":10,"y":10,"width":989,"height":65},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape17.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj17inner\"><svg viewBox=\"0 0 790 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(395 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(395 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"17.175371120509556\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.41\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.5px; top: 95.5px; width: 790px; height: 5px; z-index: 21; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"17",
	htmlId:		"tobj17",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line1"
	},
	objData:	{"a":[0,544,0,[-2.5,95.50000000000038,790,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":98,"width":1014,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
image18.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj18Img\" src=\"images/dream_TradingCard.jpg\" alt=\"\" title=\"\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 95px; height: 53px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 670px; top: 15px; width: 95px; height: 53px; z-index: 22; border-radius: 0px;",
	cssClasses:	"",
	id:		"18",
	htmlId:		"tobj18",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dream_TradingCard"
	},
	objData:	{"a":[0,2848,0,[670,15,95,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":115,"y":15,"width":32,"height":52}}
};
shape19.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj19inner\"><svg viewBox=\"0 0 712 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(356 28)\" style=\"\">\n	<path d=\"M 0 0 L 710 0 L 710 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(110, 117, 119); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-355, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(356 28)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.672112034253523\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-353\" y=\"8.09\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 380px; width: 712px; height: 56px; z-index: 23; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"19",
	htmlId:		"tobj19",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color 2"
	},
	objData:	{"a":[0,4640,0,[38,379.00000000000034,712,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":39,"y":70,"width":934,"height":56},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape20.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj20inner\"><svg viewBox=\"0 0 718 47\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_86_57_1131\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(359 23.5)\" style=\"\">\n	<pattern id=\"SVGID_86_57_1131\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 715 0 L 715 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(39, 50, 53); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1131&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-357.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(359 23.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.707411944727273\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-355.5\" y=\"8.1\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33.5px; top: 380px; width: 718px; height: 47px; z-index: 24; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"20",
	htmlId:		"tobj20",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color"
	},
	objData:	{"a":[0,4640,0,[33.5,378.50000000000034,718,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":943,"height":47},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape21.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj21inner\"><svg viewBox=\"0 0 108 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(54 22)\" style=\"\">\n	<path d=\"M 0 0 L 108 0 L 108 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(54 22)\">\n		<text font-family=\"Prompt\" font-size=\"17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-52\" y=\"5.38\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 645px; top: 380px; width: 108px; height: 44px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"21",
	htmlId:		"tobj21",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 1"
	},
	objData:	{"a":[0,6688,0,[645,380.00000000000006,108,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":108,"height":44},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape22.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj22inner\"><svg viewBox=\"0 0 115 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(57.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 115 0 L 115 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-57.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(57.5 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.5\" y=\"5.38\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 642px; top: 390px; width: 115px; height: 25px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"22",
	htmlId:		"tobj22",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 2"
	},
	objData:	{"a":[0,6688,0,[642,390.00000000000006,115,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":143,"y":60,"width":115,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape23.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj23inner\"><svg viewBox=\"0 0 50 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(25 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-23\" y=\"5.38\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 31px; top: 390px; width: 50px; height: 25px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"23",
	htmlId:		"tobj23",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 3"
	},
	objData:	{"a":[0,4640,0,[30.999999999999986,390,50,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":31,"y":60,"width":50,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape24.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj24inner\"><svg viewBox=\"0 0 720 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(360 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 715 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-357.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(360 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"17.18601355636364\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.41\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34.5px; top: 422.5px; width: 720px; height: 5px; z-index: 28; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"24",
	htmlId:		"tobj24",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line2"
	},
	objData:	{"a":[0,4640,0,[34.5,422.50000000000034,720,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":37,"y":25,"width":943,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
text11.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 550px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 540px; min-height: 59px;\"><p align=\"left\" leglh=\"1.291\" style=\"margin-left:0px;text-indent:0px;line-height:1.291;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:26pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(39, 50, 53);\">Assessing Student Use of Metacognitive Strategies</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 15px; width: 550px; height: 69px; z-index: 29;",
	cssClasses:	"",
	id:		"11",
	htmlId:		"tobj11",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Course Title Text"
	},
	objData:	{"a":[0,96,0,[35,15,550,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":15,"width":845,"height":96},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
og4.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
textbutton5.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj5inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_86_57_1133\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1133&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 380px; width: 44px; height: 44px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,37152,0,[34.99999999999997,380,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1133\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1133&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1135\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1135&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1137\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1137&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1139\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1139&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Exit","titleValue":"Exit"}
};
textbutton7.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj7inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_86_57_1141\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1141&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 645px; top: 380px; width: 44px; height: 44px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"7",
	htmlId:		"tobj7",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Back",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'GoTo_Previous',actItem:function(){ trivExitPage('page65.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39200,0,[645,380,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1141\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1141&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1143\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1143&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1145\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1145&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1147&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Back","titleValue":"Back"}
};
textbutton9.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj9inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_86_57_1149\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1149&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 706px; top: 380px; width: 44px; height: 44px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"9",
	htmlId:		"tobj9",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'GoTo_Next',actItem:function(){ trivExitPage('page139.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39200,0,[706,380,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":79,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1149\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1149&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1151\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1151&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1153\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1153&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1155&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next"}
};
audio304.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 552px; top: 81px; width: 0px; height: 0px; z-index: 2; visibility: hidden;",
	cssClasses:	"",
	id:		"304",
	htmlId:		"tobj304",
	bInsAnc:	false,
	stdHtml:	'<div id="sndSpacers" ></div><audio id="swftobj304" name="swftobj304" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/New%20Recording%2012.mp3" /><track kind="subtitles" src=New%20Recording%2012Caption2.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/New Recording 12.mp3',
	cwObj:		{
		"name":	"New Recording 12"
	},
	objData:	{"a":[0,16908288,0,[552,81,0,0,24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":709,"y":104,"width":0,"height":0},"iDisplay":1,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/New%20Recording%2012.mp3","initHidden":true,"hasCaptions":true,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":true,"ccBackgroundColor":"#ffffff","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(255,255,255,1)","ccBackgroundColorZeroOpacity":"rgba(255,255,255,0)","bPooled":true,"skinHeight":24}
};
text87.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 730px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 720px; min-height: 30px;\"><h1><p style=\"text-align:center\"><span style=\"font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0); font-size:24pt;\">Assessment Techniques</span></p></h1></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 30px; top: 110px; width: 730px; height: 40px; z-index: 3;",
	cssClasses:	"",
	id:		"87",
	htmlId:		"tobj87",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Project"
	},
	objData:	{"a":[0,32,0,[30,110,730,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":101,"width":940,"height":80},"dwTextFlags":65536,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image91.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj91Img\" src=\"images/Thomas-web-9197323.png\" alt=\"Thomas-web-9197323\" title=\"Thomas-web-9197323\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 75px; height: 300px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 135px; top: 140px; width: 75px; height: 300px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"91",
	htmlId:		"tobj91",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Thomas-web-9197323"
	},
	objData:	{"a":[0,288,0,[135,140,75,300]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":173,"y":180,"width":97,"height":385}}
};
textbutton179.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj179inner\"><svg viewBox=\"0 0 94 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1156\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1156\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1156&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(47 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 327.5px; top: 141.5px; width: 94px; height: 32px; z-index: 33; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"179",
	htmlId:		"tobj179",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Click Here",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ text104.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image103.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton179.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[327.5,141.5,94,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":182,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1156\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1156\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1156&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1157\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1157\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1157&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1158\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"32\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1158\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"32.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1158&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1159\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1159\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1159&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
textbutton183.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj183inner\"><svg viewBox=\"0 0 94 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1160\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1160\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1160&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(47 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 450.5px; top: 228.5px; width: 94px; height: 32px; z-index: 34; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"183",
	htmlId:		"tobj183",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Click Here",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ text115.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image114.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton183.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[450.5,228.5,94,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":580,"y":294,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1160\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1160\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1160&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1161\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1161\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1161&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1162\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"32\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1162\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"32.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1162&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1163\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1163\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1163&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
textbutton190.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj190inner\"><svg viewBox=\"0 0 94 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1164\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1164\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1164&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(47 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 398.5px; top: 309.5px; width: 94px; height: 32px; z-index: 35; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"190",
	htmlId:		"tobj190",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Click Here",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ text121.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image120.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton190.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[398.5,309.5,94,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":513,"y":399,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1164\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1164\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1164&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1165\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1165\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1165&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1166\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"32\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1166\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"32.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1166&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1167\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1167\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1167&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
textbutton197.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj197inner\"><svg viewBox=\"0 0 94 32\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1168\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1168\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1168&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(47 16)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 506.5px; top: 383.5px; width: 94px; height: 32px; z-index: 36; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"197",
	htmlId:		"tobj197",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Click Here",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ text127.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image126.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton197.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[506.5,383.5,94,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":493,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1168\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1168\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1168&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1169\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1169\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1169&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1170\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"32\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1170\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"32.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1170&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1171\" gradientUnits=\"userSpaceOnUse\" x1=\"47\" y1=\"32\" x2=\"47\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(47 16)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1171\" gradientUnits=\"userSpaceOnUse\" x1=\"47.5\" y1=\"32.5\" x2=\"47.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 7.75 0 L 85.25 0 A 7.75 7.75 0 0 1 93 7.75 L 93 23.25 A 7.75 7.75 0 0 1 85.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1171&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-46.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(47 16)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.93763408516129\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-29.82\" y=\"4.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
shape98.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj98inner\"><svg viewBox=\"0 0 109 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(54.5 17.66)\" style=\"\">\n	<path d=\"M 0 0 L 108 32 M 108 32 L 101.12 24.75 L 98.28 34.33 L 108 32\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54, -17.165) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(54.5 16.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.918518195555556\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.07\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 209.5px; top: 161.5px; width: 109px; height: 35px; z-index: 5; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	id:		"98",
	htmlId:		"tobj98",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow"
	},
	objData:	{"a":[0,32,0,[209.5,161.5,109,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":270,"y":208,"width":140,"height":42},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow","titleValue":"Arrow"}
};
image103.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj103Img\" src=\"images/Pass-Fail-512-10725854.png\" alt=\"Pass-Fail-512-10725854\" title=\"Pass-Fail-512-10725854\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 65px; height: 65px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 126px; width: 65px; height: 65px; z-index: 6; border-radius: 0px;",
	cssClasses:	"",
	id:		"103",
	htmlId:		"tobj103",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Pass-Fail-512-10725854"
	},
	objData:	{"a":[0,256,0,[332,126,65,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":427,"y":162,"width":83,"height":83}}
};
text104.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 156px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 146px; min-height: 16px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Rubrics</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 391px; top: 145px; width: 156px; height: 26px; z-index: 7;",
	cssClasses:	"",
	id:		"104",
	htmlId:		"tobj104",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rubrics"
	},
	objData:	{"a":[0,0,0,[391,145,156,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":502,"y":186,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape99.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj99inner\"><svg viewBox=\"0 0 217 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(108.5 14.98)\" style=\"\">\n	<path d=\"M 0 0 L 216 25 M 216 25 L 207.97 19.04 L 206.82 28.97 L 216 25\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -14.485) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(108.5 13)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.859258937777778\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.05\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 224.5px; top: 215.5px; width: 217px; height: 30px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"99",
	htmlId:		"tobj99",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow 2"
	},
	objData:	{"a":[0,32,0,[224.5,215.50000000000003,217,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":289,"y":278,"width":279,"height":33},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow 2","titleValue":"Arrow 2"}
};
image114.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj114Img\" src=\"images/Solve-512-10713239.png\" alt=\"Solve-512-10713239\" title=\"Solve-512-10713239\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 71px; height: 71px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 455px; top: 202px; width: 71px; height: 71px; z-index: 9; border-radius: 0px;",
	cssClasses:	"",
	id:		"114",
	htmlId:		"tobj114",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Solve-512-10713239"
	},
	objData:	{"a":[0,256,0,[455,202,71,71]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":585,"y":260,"width":91,"height":91}}
};
text115.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 156px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 146px; min-height: 16px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Think Alouds</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 535px; top: 223px; width: 156px; height: 26px; z-index: 10;",
	cssClasses:	"",
	id:		"115",
	htmlId:		"tobj115",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Think Alouds"
	},
	objData:	{"a":[0,0,0,[535,223,156,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":688,"y":286,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape100.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj100inner\"><svg viewBox=\"0 0 164 65\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(82 32.3)\" style=\"\">\n	<path d=\"M 0 0 L 163 62 M 163 62 L 156.68 54.25 L 153.13 63.59 L 163 62\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -31.795) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(82 31.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.878527285398773\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.06\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 225.5px; top: 261.5px; width: 164px; height: 65px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"100",
	htmlId:		"tobj100",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow 3"
	},
	objData:	{"a":[0,32,0,[225.5,261.5,164,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":291,"y":337,"width":211,"height":81},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow 3","titleValue":"Arrow 3"}
};
image120.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj120Img\" src=\"images/Open-Book-512-10730064.png\" alt=\"Open-Book-512-10730064\" title=\"Open-Book-512-10730064\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 67px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 401px; top: 295px; width: 67px; height: 67px; z-index: 12; border-radius: 0px;",
	cssClasses:	"",
	id:		"120",
	htmlId:		"tobj120",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Open-Book-512-10730064"
	},
	objData:	{"a":[0,256,0,[401,295,67,67]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":515,"y":379,"width":86,"height":86}}
};
text121.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 156px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 146px; min-height: 16px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Reflection Journals</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 473px; top: 316px; width: 156px; height: 26px; z-index: 13;",
	cssClasses:	"",
	id:		"121",
	htmlId:		"tobj121",
	bInsAnc:	0,
	cwObj:		{
		"name":	"reflection"
	},
	objData:	{"a":[0,0,0,[473,316,156,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":608,"y":406,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape101.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj101inner\"><svg viewBox=\"0 0 278 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(139 15.59)\" style=\"\">\n	<path d=\"M 0 0 L 277 26 M 277 26 L 268.84 20.21 L 267.91 30.17 L 277 26\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-138.5, -15.085) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(139 13.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.846209065126356\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.05\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 218.5px; top: 394.5px; width: 278px; height: 31px; z-index: 14; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	id:		"101",
	htmlId:		"tobj101",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow 4"
	},
	objData:	{"a":[0,32,0,[218.5,394.50000000000006,278,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":282,"y":508,"width":357,"height":34},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow 4","titleValue":"Arrow 4"}
};
image126.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj126Img\" src=\"images/Bullet-List-512-10730034.png\" alt=\"Bullet-List-512-10730034\" title=\"Bullet-List-512-10730034\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 511px; top: 373px; width: 53px; height: 53px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"126",
	htmlId:		"tobj126",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bullet-List-512-10730034"
	},
	objData:	{"a":[0,256,0,[511,373,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":479,"width":68,"height":68}}
};
text127.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 156px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 146px; min-height: 16px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Check Lists</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 565px; top: 386px; width: 156px; height: 26px; z-index: 16;",
	cssClasses:	"",
	id:		"127",
	htmlId:		"tobj127",
	bInsAnc:	0,
	cwObj:		{
		"name":	"check list"
	},
	objData:	{"a":[0,0,0,[565,386,156,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":726,"y":496,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Palatino Linotype',serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	10
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/Polar_Exit.png","images/Polar_Back.png","images/Polar_Forward.png","images/stripesTransparentDark.png","images/stardustLight.png","images/dream_TradingCard.jpg","images/Thomas-web-9197323.png","images/Pass-Fail-512-10725854.png","images/Solve-512-10713239.png","images/Open-Book-512-10730064.png","images/Bullet-List-512-10730034.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 450px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
