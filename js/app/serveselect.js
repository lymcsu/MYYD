if (window.plus) {
	selectServer();
} else {
	document.addEventListener('plusready', selectServer, false);
}
function selectServer(){
	hotelpage = mui.preload({
		url: "hotel.html",
		id: "hotel"
		});
	foodpage = mui.preload({
		url: "food.html",
		id: "food"
	});
	funpage = mui.preload({
		url: "fun.html",
		id: "fun"
	});
	moviepage = mui.preload({
		url: "movie.html",
		id: "movie"
	});
	salepage = mui.preload({
		url: "sale.html",
		id: "sale"
	});
	spetialpage = mui.preload({
		url: "spetial.html",
		id: "spetial"
	});
	document.getElementById('hotel').addEventListener('tap',showhotel,false);
	document.getElementById('food').addEventListener('tap',showfood,false);
	document.getElementById('movie').addEventListener('tap',showmovie,false);
	document.getElementById('fun').addEventListener('tap',showfun,false);
	document.getElementById('sale').addEventListener('tap',showsale,false);
	document.getElementById('spetial').addEventListener('tap',showspetial,false);
}

function showhotel(){

	hotelpage.show('slide-in-right');
}
function showfood(){

	foodpage.show('slide-in-right');
}
function showmovie(){
	moviepage.show('slide-in-right');
}
function showfun(){
	funpage.show('slide-in-right');
}
function showsale(){
	salepage.show('slide-in-right');
}
function showspetial(){
	spetialpage.show('slide-in-right');
}
