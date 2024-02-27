if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

	progress92.cwObj.pbVar=VarProgressBar_92;
	progress92.setPosition(VarProgressBar_92.getValue());
}
progress92.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; height: 20px;\"><div style=\"overflow: hidden; background-color: rgb(238, 238, 238); position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 198px; height: 18px;\"><div style=\"overflow: hidden; position: absolute; left: 0px; top: 0px; width: 120px; height: 100%; background-color: rgb(0, 0, 255);\"></div></div><div name=\"dCon2\" style=\"position: absolute; width: 100%; left: 1px; bottom: 0px; height: 6px;\"></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 73px; width: 200px; height: 20px; z-index: 0;",
	cssClasses:	"",
	id:		"92",
	htmlId:		"tobj92",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Progress Bar 1"
	},
	objData:	{"a":[0,16777248,0,[0,73,200,20]],"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":73,"width":200,"height":20},"step":1,"range":10,"barPos":"6","tickTime":1000,"dwBarFlags":80,"imgsrc":"images/defaultProgBarH.gif","varName":"VarProgressBar_92"}
};
og12.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og12",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape13.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj13inner\"><svg viewBox=\"0 0 1009 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 50)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"31.9999992\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-502.5\" y=\"10.08\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 4.83169e-13px; width: 1009px; height: 100px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"13",
	htmlId:		"tobj13",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color 2"
	},
	objData:	{"a":[0,544,0,[0,4.831690603168681e-13,1009,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape14.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj14inner\"><svg viewBox=\"0 0 1009 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_86_57_1081\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(504.5 50)\" style=\"\">\n	<pattern id=\"SVGID_86_57_1081\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stripesTransparentDark.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 1009 0 L 1009 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1081&quot;); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 50)\">\n		<text font-family=\"Century Gothic\" font-size=\"31.9999992\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.1;filter:alpha(opacity=10);\">\n			<tspan x=\"-502.5\" y=\"10.08\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 4.83169e-13px; width: 1009px; height: 100px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"14",
	htmlId:		"tobj14",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Texture 2"
	},
	objData:	{"a":[0,544,0,[0,4.831690603168681e-13,1009,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":100},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape15.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj15inner\"><svg viewBox=\"0 0 1009 85\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 42.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 85 L 0 85 L 0 0 Z\" style=\"stroke: rgb(33, 179, 199); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -42.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 42.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"31.9999992\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-502.5\" y=\"10.08\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 4.83169e-13px; width: 1009px; height: 85px; z-index: 19; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"15",
	htmlId:		"tobj15",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background BG Color"
	},
	objData:	{"a":[0,544,0,[0,4.831690603168681e-13,1009,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":85},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape16.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj16inner\"><svg viewBox=\"0 0 989 65\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_86_57_1083\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(494.5 32.5)\" style=\"\">\n	<pattern id=\"SVGID_86_57_1083\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 989 0 L 989 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1083&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-494.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(494.5 32.5)\">\n		<text font-family=\"Playfair Display\" font-size=\"21.3333328\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 10px; top: 10px; width: 989px; height: 65px; z-index: 20; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"16",
	htmlId:		"tobj16",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header Background Texture 1"
	},
	objData:	{"a":[0,544,0,[10,10.000000000000483,989,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":10,"y":10,"width":989,"height":65},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape17.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj17inner\"><svg viewBox=\"0 0 1014 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(507 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(507 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"21.439048026957384\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.75\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.5px; top: 95.5px; width: 1014px; height: 5px; z-index: 21; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"17",
	htmlId:		"tobj17",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line1"
	},
	objData:	{"a":[0,544,0,[-2.5,95.5000000000005,1014,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":98,"width":1014,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
image18.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj18Img\" src=\"images/dream_TradingCard.jpg\" alt=\"\" title=\"\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 32px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 894px; top: 15px; width: 32px; height: 52px; z-index: 22; border-radius: 0px;",
	cssClasses:	"",
	id:		"18",
	htmlId:		"tobj18",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dream_TradingCard"
	},
	objData:	{"a":[0,2848,0,[894,15,32,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":115,"y":15,"width":32,"height":52}}
};
shape19.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj19inner\"><svg viewBox=\"0 0 934 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(467 28)\" style=\"\">\n	<path d=\"M 0 0 L 932 0 L 932 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(110, 117, 119); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(110, 117, 119); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-466, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(467 28)\">\n		<text font-family=\"Century Gothic\" font-size=\"32.068668726180256\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-464\" y=\"10.1\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 592px; width: 934px; height: 56px; z-index: 23; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"19",
	htmlId:		"tobj19",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color 2"
	},
	objData:	{"a":[0,4640,0,[38,591.0000000000005,934,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":39,"y":70,"width":934,"height":56},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape20.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj20inner\"><svg viewBox=\"0 0 943 47\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><pattern id=\"SVGID_86_57_1085\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<g transform=\"translate(471.5 23.5)\" style=\"\">\n	<pattern id=\"SVGID_86_57_1085\" x=\"0\" y=\"0\" width=\"128\" height=\"128\" patternUnits=\"userSpaceOnUse\">\n<image x=\"0\" y=\"0\" width=\"128\" height=\"128\" xlink:href=\"images/stardustLight.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 940 0 L 940 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(39, 50, 53); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1085&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-470, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(471.5 23.5)\">\n		<text font-family=\"Century Gothic\" font-size=\"32.10212685702128\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-468\" y=\"10.11\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33.5px; top: 592px; width: 943px; height: 47px; z-index: 24; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"20",
	htmlId:		"tobj20",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Footer Background BG Color"
	},
	objData:	{"a":[0,4640,0,[33.5,590.5000000000005,943,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":943,"height":47},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape21.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj21inner\"><svg viewBox=\"0 0 108 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(54 22)\" style=\"\">\n	<path d=\"M 0 0 L 108 0 L 108 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(54 22)\">\n		<text font-family=\"Prompt\" font-size=\"21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-52\" y=\"6.72\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 869px; top: 592px; width: 108px; height: 44px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"21",
	htmlId:		"tobj21",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 1"
	},
	objData:	{"a":[0,6688,0,[869,592,108,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":108,"height":44},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape22.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj22inner\"><svg viewBox=\"0 0 115 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(57.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 115 0 L 115 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-57.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(57.5 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.5\" y=\"6.72\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 866px; top: 602px; width: 115px; height: 25px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"22",
	htmlId:		"tobj22",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 2"
	},
	objData:	{"a":[0,6688,0,[866,602,115,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":143,"y":60,"width":115,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape23.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj23inner\"><svg viewBox=\"0 0 50 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(25 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 12.5)\">\n		<text font-family=\"Prompt\" font-size=\"21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,39,86); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-23\" y=\"6.72\" fill=\"#1D2756\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 31px; top: 602px; width: 50px; height: 25px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"23",
	htmlId:		"tobj23",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Navigation BG Decoration 3"
	},
	objData:	{"a":[0,4640,0,[30.999999999999986,602,50,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":31,"y":60,"width":50,"height":25},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
shape24.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj24inner\"><svg viewBox=\"0 0 943 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(471.5 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 938 0\" style=\"stroke: rgb(39, 50, 53); stroke-width: 5; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-469, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(471.5 9.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Playfair Display\" font-size=\"21.447049925799575\" font-style=\"italic\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.76\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34.5px; top: 634.5px; width: 943px; height: 5px; z-index: 28; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	id:		"24",
	htmlId:		"tobj24",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line2"
	},
	objData:	{"a":[0,4640,0,[34.5,634.5000000000005,943,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":37,"y":25,"width":943,"height":5},"bTriggerScreenRdrOnShow":false,"btnState":"disabled"}
};
text11.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 845px; min-height: 96px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 835px; min-height: 86px;\"><p align=\"left\" leglh=\"1.291\" style=\"margin-left:0px;text-indent:0px;line-height:1.291;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:26pt; font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(39, 50, 53);\">Assessing Student Use of Metacognitive Strategies</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 15px; width: 845px; height: 96px; z-index: 29;",
	cssClasses:	"",
	id:		"11",
	htmlId:		"tobj11",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Course Title Text"
	},
	objData:	{"a":[0,96,0,[35,15,845,96]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":15,"width":845,"height":96},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
og4.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
textbutton5.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj5inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_86_57_1087\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1087&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 592px; width: 44px; height: 44px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,37152,0,[34.99999999999997,592,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":35,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1087\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1087&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1089\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1089&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1091\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1091&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1093\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1093&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Exit","titleValue":"Exit"}
};
textbutton7.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj7inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_86_57_1095\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1095&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 869px; top: 592px; width: 44px; height: 44px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,39200,0,[869,592,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1095\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1095&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1097\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1097&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1099\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1099&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1101\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Back.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1101&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Back","titleValue":"Back"}
};
textbutton9.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj9inner\"><svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_86_57_1103\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1103&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 930px; top: 592px; width: 44px; height: 44px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,39200,0,[930,592,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":79,"y":70,"width":44,"height":44},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1103\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1103&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(45, 60, 65); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1105\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1105&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(32, 39, 41); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1107\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1107&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(39, 50, 53); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_86_57_1109\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/Polar_Forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(5, 68, 94); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_57_1109&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next"}
};
audio304.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 709px; top: 104px; width: 0px; height: 0px; z-index: 2; visibility: hidden;",
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
	objData:	{"a":[0,16908288,0,[709,104,0,0,24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":709,"y":104,"width":0,"height":0},"iDisplay":1,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/New%20Recording%2012.mp3","initHidden":true,"hasCaptions":true,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":true,"ccBackgroundColor":"#ffffff","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(255,255,255,1)","ccBackgroundColorZeroOpacity":"rgba(255,255,255,0)","bPooled":true,"skinHeight":24}
};
text87.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 940px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 930px; min-height: 70px;\"><h1><p style=\"text-align:center\"><span style=\"font-family: &quot;Trebuchet MS&quot;, sans-serif; color: rgb(0, 0, 0); font-size:24pt;\">Assessment Techniques</span></p></h1></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 35px; top: 115px; width: 940px; height: 80px; z-index: 3;",
	cssClasses:	"",
	id:		"87",
	htmlId:		"tobj87",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Project"
	},
	objData:	{"a":[0,32,0,[35,115,940,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":101,"width":940,"height":80},"dwTextFlags":65536,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image91.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj91Img\" src=\"images/Thomas-web-9197323.png\" alt=\"Thomas-web-9197323\" title=\"Thomas-web-9197323\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 97px; height: 385px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 173px; top: 180px; width: 97px; height: 385px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"91",
	htmlId:		"tobj91",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Thomas-web-9197323"
	},
	objData:	{"a":[0,288,0,[173,180,97,385]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":173,"y":180,"width":97,"height":385}}
};
textbutton179.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj179inner\"><svg viewBox=\"0 0 121 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1110\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1110\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1110&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(60.5 20.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 420.5px; top: 181.5px; width: 121px; height: 41px; z-index: 33; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,32864,0,[420.5,181.5,121,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":182,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1110\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1110\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1110&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1111\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1111\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1111&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1112\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"41\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1112\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"41.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1112&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1113\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1113\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1113&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
textbutton183.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj183inner\"><svg viewBox=\"0 0 121 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1114\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1114\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1114&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(60.5 20.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 579.5px; top: 293.5px; width: 121px; height: 41px; z-index: 34; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,32864,0,[579.5,293.5,121,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":580,"y":294,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1114\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1114\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1114&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1115\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1115\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1115&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1116\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"41\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1116\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"41.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1116&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1117\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1117\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1117&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
textbutton190.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj190inner\"><svg viewBox=\"0 0 121 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1118\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1118\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1118&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(60.5 20.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 512.5px; top: 398.5px; width: 121px; height: 41px; z-index: 35; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,32864,0,[512.5,398.5,121,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":513,"y":399,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1118\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1118\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1118&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1119\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1119\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1119&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1120\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"41\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1120\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"41.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1120&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1121\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1121\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1121&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
textbutton197.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj197inner\"><svg viewBox=\"0 0 121 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_86_1122\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n	<linearGradient id=\"SVGID_86_1122\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1122&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(60.5 20.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 651.5px; top: 492.5px; width: 121px; height: 41px; z-index: 36; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,32864,0,[651.5,492.5,121,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":493,"width":121,"height":41},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<linearGradient id=\"SVGID_86_1122\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1122\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1122&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_86_1123\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1123\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1123&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_86_1124\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"41\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1124\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"41.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1124&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_86_1125\" gradientUnits=\"userSpaceOnUse\" x1=\"60.5\" y1=\"41\" x2=\"60.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(60.5 20.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_86_1125\" gradientUnits=\"userSpaceOnUse\" x1=\"61\" y1=\"41.5\" x2=\"61\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_86_1125&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(60.5 20.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.13333293\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-37.19\" y=\"5.08\" fill=\"#FFFFFF\">Click Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here"}
};
shape98.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj98inner\"><svg viewBox=\"0 0 140 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(70 22.18)\" style=\"\">\n	<path d=\"M 0 0 L 139 41 M 139 41 L 132.11 33.75 L 129.28 43.35 L 139 41\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-69.5, -21.675) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(70 21) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.11510751079137\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.08\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 269.5px; top: 207.5px; width: 140px; height: 44px; z-index: 5; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	id:		"98",
	htmlId:		"tobj98",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow"
	},
	objData:	{"a":[0,32,0,[269.5,207.50000000000003,140,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":270,"y":208,"width":140,"height":42},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow","titleValue":"Arrow"}
};
image103.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj103Img\" src=\"images/Pass-Fail-512-10725854.png\" alt=\"Pass-Fail-512-10725854\" title=\"Pass-Fail-512-10725854\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 83px; height: 83px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 427px; top: 162px; width: 83px; height: 83px; z-index: 6; border-radius: 0px;",
	cssClasses:	"",
	id:		"103",
	htmlId:		"tobj103",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Pass-Fail-512-10725854"
	},
	objData:	{"a":[0,256,0,[427,162,83,83]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":427,"y":162,"width":83,"height":83}}
};
text104.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Rubrics</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 502px; top: 186px; width: 200px; height: 33px; z-index: 7;",
	cssClasses:	"",
	id:		"104",
	htmlId:		"tobj104",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rubrics"
	},
	objData:	{"a":[0,0,0,[502,186,200,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":502,"y":186,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape99.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj99inner\"><svg viewBox=\"0 0 279 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(139.5 18.49)\" style=\"\">\n	<path d=\"M 0 0 L 278 32 M 278 32 L 269.97 26.04 L 268.82 35.98 L 278 32\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-139, -17.99) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(139.5 16.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.057553555395685\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.06\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 288.5px; top: 277.5px; width: 279px; height: 37px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"99",
	htmlId:		"tobj99",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow 2"
	},
	objData:	{"a":[0,32,0,[288.5,277.50000000000006,279,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":289,"y":278,"width":279,"height":33},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow 2","titleValue":"Arrow 2"}
};
image114.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj114Img\" src=\"images/Solve-512-10713239.png\" alt=\"Solve-512-10713239\" title=\"Solve-512-10713239\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 91px; height: 91px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 585px; top: 260px; width: 91px; height: 91px; z-index: 9; border-radius: 0px;",
	cssClasses:	"",
	id:		"114",
	htmlId:		"tobj114",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Solve-512-10713239"
	},
	objData:	{"a":[0,256,0,[585,260,91,91]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":585,"y":260,"width":91,"height":91}}
};
text115.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Think Alouds</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 688px; top: 286px; width: 200px; height: 33px; z-index: 10;",
	cssClasses:	"",
	id:		"115",
	htmlId:		"tobj115",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Think Alouds"
	},
	objData:	{"a":[0,0,0,[688,286,200,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":688,"y":286,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape100.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj100inner\"><svg viewBox=\"0 0 211 83\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(105.5 41.3)\" style=\"\">\n	<path d=\"M 0 0 L 210 80 M 210 80 L 203.69 72.24 L 200.13 81.59 L 210 80\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-105, -40.795) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(105.5 40.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.076190074285716\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.06\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 290.5px; top: 336.5px; width: 211px; height: 83px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"100",
	htmlId:		"tobj100",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow 3"
	},
	objData:	{"a":[0,32,0,[290.5,336.5,211,83]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":291,"y":337,"width":211,"height":81},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow 3","titleValue":"Arrow 3"}
};
image120.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj120Img\" src=\"images/Open-Book-512-10730064.png\" alt=\"Open-Book-512-10730064\" title=\"Open-Book-512-10730064\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 86px; height: 86px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 379px; width: 86px; height: 86px; z-index: 12; border-radius: 0px;",
	cssClasses:	"",
	id:		"120",
	htmlId:		"tobj120",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Open-Book-512-10730064"
	},
	objData:	{"a":[0,256,0,[515,379,86,86]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":515,"y":379,"width":86,"height":86}}
};
text121.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Reflection Journals</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 608px; top: 406px; width: 200px; height: 33px; z-index: 13;",
	cssClasses:	"",
	id:		"121",
	htmlId:		"tobj121",
	bInsAnc:	0,
	cwObj:		{
		"name":	"reflection"
	},
	objData:	{"a":[0,0,0,[608,406,200,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":608,"y":406,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape101.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj101inner\"><svg viewBox=\"0 0 357 38\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(178.5 19.09)\" style=\"\">\n	<path d=\"M 0 0 L 356 33 M 356 33 L 347.84 27.22 L 346.92 37.18 L 356 33\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-178, -18.59) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(178.5 17) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.044943419101124\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 281.5px; top: 507.5px; width: 357px; height: 38px; z-index: 14; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	id:		"101",
	htmlId:		"tobj101",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Arrow 4"
	},
	objData:	{"a":[0,32,0,[281.5,507.50000000000006,357,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":282,"y":508,"width":357,"height":34},"bTriggerScreenRdrOnShow":false,"btnState":"disabled","altValue":"Arrow 4","titleValue":"Arrow 4"}
};
image126.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj126Img\" src=\"images/Bullet-List-512-10730034.png\" alt=\"Bullet-List-512-10730034\" title=\"Bullet-List-512-10730034\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 657px; top: 479px; width: 68px; height: 68px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"126",
	htmlId:		"tobj126",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bullet-List-512-10730034"
	},
	objData:	{"a":[0,256,0,[657,479,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":479,"width":68,"height":68}}
};
text127.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: &quot;Trebuchet MS&quot;, sans-serif;\">Check Lists</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 726px; top: 496px; width: 200px; height: 33px; z-index: 16;",
	cssClasses:	"",
	id:		"127",
	htmlId:		"tobj127",
	bInsAnc:	0,
	cwObj:		{
		"name":	"check list"
	},
	objData:	{"a":[0,0,0,[726,496,200,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":726,"y":496,"width":200,"height":33},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Palatino Linotype',serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	10
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/Polar_Exit.png","images/Polar_Back.png","images/Polar_Forward.png","images/stripesTransparentDark.png","images/stardustLight.png","images/dream_TradingCard.jpg","images/Thomas-web-9197323.png","images/Pass-Fail-512-10725854.png","images/Solve-512-10713239.png","images/Open-Book-512-10730064.png","images/Bullet-List-512-10730034.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
