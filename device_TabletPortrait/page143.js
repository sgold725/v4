if (window.VarCurrentView) VarCurrentView.set('TabletPortrait');
function init_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

	progress92.cwObj.pbVar=VarProgressBar_92;
	progress92.setPosition(VarProgressBar_92.getValue());
}
progress92.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 154px; height: 16px;\"><div style=\"overflow: hidden; background-color: rgb(238, 238, 238); position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 154px; height: 14px;\"><div style=\"overflow: hidden; position: absolute; left: 0px; top: 0px; width: 94px; height: 100%; background-color: rgb(0, 0, 255);\"></div></div><div name=\"dCon2\" style=\"position: absolute; width: 100%; left: 1px; bottom: 0px; height: 6px;\"></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 73px; width: 156px; height: 16px; z-index: 0;",
	cssClasses:	"",
	id:		"92",
	htmlId:		"tobj92",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Progress Bar 1"
	},
	objData:	{"a":[0,16777248,0,[0,73,156,16]],"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":73,"width":200,"height":20},"step":1,"range":10,"barPos":"6","tickTime":1000,"dwBarFlags":80,"imgsrc":"images/defaultProgBarH.gif","varName":"VarProgressBar_92"}
};
og12.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og12",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape13.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj13inner\"><svg viewBox=\"0 0 785 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 50)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.59999936\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-390.5\" y=\"8.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 6.96332e-13px; width: 785px; height: 100px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"13",
	htmlId:		"tobj13",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color 2"
	},
	objData:	{"a":[0,544,0,[0,6.963318810448982e-13,785,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape14.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj14inner\"><svg viewBox=\"0 0 785 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_143_57_1173\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(392.5 50)\" style=\"\">\n	<pattern id=\"SVGID_143_57_1173\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 785 0 L 785 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1173&quot;); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.59999936\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10);\">\n			<tspan x=\"-390.5\" y=\"8.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 6.96332e-13px; width: 785px; height: 100px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"14",
	htmlId:		"tobj14",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Texture 2"
	},
	objData:	{"a":[0,544,0,[0,6.963318810448982e-13,785,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape15.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj15inner\"><svg viewBox=\"0 0 785 85\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 42.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 85 L 0 85 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -42.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 42.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.59999936\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-390.5\" y=\"8.06\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 6.96332e-13px; width: 785px; height: 85px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"15",
	htmlId:		"tobj15",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color"
	},
	objData:	{"a":[0,544,0,[0,6.963318810448982e-13,785,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":85},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape16.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj16inner\"><svg viewBox=\"0 0 765 65\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_143_57_1175\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(382.5 32.5)\" style=\"\">\n	<pattern id=\"SVGID_143_57_1175\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 765 0 L 765 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1175&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-382.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(382.5 32.5)\">\n		<text font-family=\"Playfair Display\" font-size=\"17.06666624\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.38\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 10px; top: 10px; width: 765px; height: 65px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"16",
	htmlId:		"tobj16",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background Texture 1"
	},
	objData:	{"a":[0,544,0,[10,10.000000000000647,765,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":10,"y":10,"width":989,"height":65},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape17.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj17inner\"><svg viewBox=\"0 0 790 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(395 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(395 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"17.175371120509556\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.41\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.5px; top: 95.5px; width: 790px; height: 5px; z-index: 12; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"17",
	htmlId:		"tobj17",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line1"
	},
	objData:	{"a":[0,544,0,[-2.5,95.50000000000068,790,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":98,"width":1014,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
image18.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj18Img\" src=\"images/dream_TradingCard.jpg\" alt=\"\" title=\"\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 95px; height: 53px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 670px; top: 15px; width: 95px; height: 53px; z-index: 13; border-radius: 0px;",
	cssClasses:	"",
	id:		"18",
	htmlId:		"tobj18",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dream_TradingCard"
	},
	objData:	{"a":[0,2848,0,[670,15,95,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":115,"y":15,"width":32,"height":52}}
};
shape19.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj19inner\"><svg viewBox=\"0 0 712 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(356 28)\" style=\"\">\n	<path d=\"M 0 0 L 710 0 L 710 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(110, 117, 119); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-355, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(356 28)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.672112034253523\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-353\" y=\"8.09\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 930px; width: 712px; height: 56px; z-index: 14; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"19",
	htmlId:		"tobj19",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color 2"
	},
	objData:	{"a":[0,4640,0,[38,929.0000000000006,712,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":39,"y":70,"width":934,"height":56},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape20.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj20inner\"><svg viewBox=\"0 0 718 47\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_143_57_1177\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(359 23.5)\" style=\"\">\n	<pattern id=\"SVGID_143_57_1177\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 715 0 L 715 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(39, 50, 53); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1177&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-357.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(359 23.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"25.707411944727273\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-355.5\" y=\"8.1\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33.5px; top: 930px; width: 718px; height: 47px; z-index: 15; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"20",
	htmlId:		"tobj20",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color"
	},
	objData:	{"a":[0,4640,0,[33.5,928.5000000000006,718,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":943,"height":47},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape21.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj21inner\"><svg viewBox=\"0 0 108 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(54 22)\" style=\"\">\n	<path d=\"M 0 0 L 108 0 L 108 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(54 22)\">\n		<text font-family=\"Prompt\" font-size=\"17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-52\" y=\"5.38\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 645px; top: 930px; width: 108px; height: 44px; z-index: 16; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"21",
	htmlId:		"tobj21",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 1"
	},
	objData:	{"a":[0,6688,0,[645,930.0000000000001,108,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":108,"height":44},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape22.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj22inner\"><svg viewBox=\"0 0 115 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(57.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 115 0 L 115 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-57.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(57.5 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.5\" y=\"5.38\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 642px; top: 940px; width: 115px; height: 25px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"22",
	htmlId:		"tobj22",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 2"
	},
	objData:	{"a":[0,6688,0,[642,940.0000000000001,115,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":143,"y":60,"width":115,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape23.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj23inner\"><svg viewBox=\"0 0 50 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(25 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-23\" y=\"5.38\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 31px; top: 940px; width: 50px; height: 25px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"23",
	htmlId:		"tobj23",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 3"
	},
	objData:	{"a":[0,4640,0,[30.999999999999975,940,50,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":31,"y":60,"width":50,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape24.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj24inner\"><svg viewBox=\"0 0 720 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(360 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 715 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-357.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(360 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"17.18601355636364\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.41\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34.5px; top: 972.5px; width: 720px; height: 5px; z-index: 19; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"24",
	htmlId:		"tobj24",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line2"
	},
	objData:	{"a":[0,4640,0,[34.5,972.5000000000006,720,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":37,"y":25,"width":943,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
text11.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 550px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 540px; min-height: 59px;\"><p align=\"left\" leglh=\"1.291\" style=\"margin-left:0px;text-indent:0px;line-height:1.291;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:26pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(39, 50, 53);\">Assessing Student Use of Metacognitive Strategies</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 15px; width: 550px; height: 69px; z-index: 20;",
	cssClasses:	"",
	id:		"11",
	htmlId:		"tobj11",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Course Title Text"
	},
	objData:	{"a":[0,96,0,[35,15,550,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":15,"width":845,"height":96},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
og4.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
textbutton5.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj5inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_143_57_1179\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1179&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 930px; width: 44px; height: 44px; z-index: 21; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,37152,0,[34.99999999999995,930,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1179\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1179&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1181\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1181&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1183\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1183&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1185\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1185&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Exit","titleValue":"Exit"}
};
textbutton7.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj7inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_143_57_1187\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1187&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 645px; top: 930px; width: 44px; height: 44px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"7",
	htmlId:		"tobj7",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Back",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'GoTo_Previous',actItem:function(){ trivExitPage('page142.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39200,0,[645,930,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1187\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1187&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1189\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1189&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1191\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1191&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1193\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1193&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Back","titleValue":"Back"}
};
textbutton9.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj9inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_143_57_1195\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1195&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 706px; top: 930px; width: 44px; height: 44px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"9",
	htmlId:		"tobj9",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'GoTo_Next',actItem:function(){ trivExitPage('page230.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,39200,0,[706,930,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":79,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1195\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1195&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1197\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1197&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1199\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1199&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_143_57_1201\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_143_57_1201&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next"}
};
image156.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj156Img\" src=\"images/1_roqF8yyhOkBXBhCBH5oWqw.jpg\" alt=\"1_roqF8yyhOkBXBhCBH5oWqw\" title=\"1_roqF8yyhOkBXBhCBH5oWqw\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 417px; height: 278px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 13px; top: 156px; width: 417px; height: 278px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"156",
	htmlId:		"tobj156",
	bInsAnc:	0,
	cwObj:		{
		"name":	"1_roqF8yyhOkBXBhCBH5oWqw"
	},
	objData:	{"a":[0,288,0,[13,156,417,278]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":17,"y":156,"width":536,"height":357}}
};
audio306.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"sndtobj306\" style=\"position: absolute; left: 8px; top: 0px; width: 300px; height: 24px; opacity:0.01;filter:alpha(opacity=1);\"></div>",
	cssText:	"position: absolute; left: 8px; top: 0px; width: 1px; height: 1px; z-index: 3; opacity: 0.01;",
	cssClasses:	"",
	id:		"306",
	htmlId:		"tobj306",
	bInsAnc:	false,
	stdHtml:	'<div id="sndSpacers" ></div><audio id="swftobj306" name="swftobj306" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/New%20Recording%2013.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/New Recording 13.mp3',
	cwObj:		{
		"name":	"New Recording 13"
	},
	objData:	{"a":[0,16908288,0,[9,12,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":12,"y":12,"width":300,"height":24},"iDisplay":2,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/New%20Recording%2013.mp3","initHidden":true,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
text153.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 323px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 313px; min-height: 68px;\"><p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\"><a id=\"triv154\" href=\"javascript:hyperlink154()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Encouraging Metacognition in the Classroom</span></u></a></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 440px; top: 452px; width: 323px; height: 78px; z-index: 4;",
	cssClasses:	"",
	id:		"153",
	htmlId:		"tobj153",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,32,0,[440,452,323,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":452,"width":415,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text146.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 282px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 272px; min-height: 68px;\"><p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\"><a id=\"triv147\" href=\"javascript:hyperlink147()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Putting Metacognition Into Practice Using Journals</span></u></a> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 443px; top: 153px; width: 282px; height: 78px; z-index: 5;",
	cssClasses:	"",
	id:		"146",
	htmlId:		"tobj146",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 3"
	},
	objData:	{"a":[0,32,0,[443,153,282,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":569,"y":153,"width":363,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text145.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 325px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 315px; min-height: 68px;\"><p style=\"text-align:left\"><span style=\"font-size:16pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\"><a id=\"triv149\" href=\"javascript:hyperlink149()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">5 Metacognitive Questions For Students Learning New Material</span></u></a></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 442px; top: 246px; width: 325px; height: 78px; z-index: 6;",
	cssClasses:	"",
	id:		"145",
	htmlId:		"tobj145",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[442,246,325,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":568,"y":246,"width":418,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text144.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 281px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 271px; min-height: 68px;\"><p style=\"text-align:left\"><span style=\"font-size:16pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0);\"><a id=\"triv151\" href=\"javascript:hyperlink151()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">10 Metacognitive Prompts To Help Students Reflect On Their Learning</span></u></a></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 440px; top: 344px; width: 281px; height: 78px; z-index: 7;",
	cssClasses:	"",
	id:		"144",
	htmlId:		"tobj144",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[440,344,281,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":344,"width":361,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Palatino Linotype',serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	10
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/Polar_Exit.png","images/Polar_Back.png","images/Polar_Forward.png","images/stripesTransparentDark.png","images/stardustLight.png","images/dream_TradingCard.jpg","images/1_roqF8yyhOkBXBhCBH5oWqw.jpg"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","",0,0,1];
