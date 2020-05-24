var omd=document.onMouseDown=function (ev) {
	ev.style.box-shadow="0px 0px 0px #888888";
}
var btns=document.getElementsByTagName('button');
for(btn in btns){
	omd(btn);
}