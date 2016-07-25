if (window.plus) {
	pageload();
} else {
	document.addEventListener('plusready', pageload, false);
}

function pageload() {
	infopage = mui.preload({
		url: "info.html",
		id: "infopage"
	});
	beforepage = mui.preload({
		url: "before.html",
		id: "beforepage"
	});
	pricepage = mui.preload({
		url: "price.html",
		id: "price"
	})
	judgepage = mui.preload({
		url: "judgement.html",
		id: "judgement"
	})
	document.getElementById('info').addEventListener('tap', showinfo, false);
	document.getElementById('prep').addEventListener('tap', showbefore, false);
	document.getElementById('price').addEventListener('tap', showprice, false);
	document.getElementById('judge').addEventListener('tap',showjudge,false);
}
function showjudge(){
	judgepage.show('slide-in-right');
}
function showprice() {
	pricepage.show('slide-in-right');
}

function showinfo() {
	infopage.show('slide-in-right');
}

function showbefore() {
	beforepage.show('slide-in-right');
}