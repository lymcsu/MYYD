if (window.plus) {
	preloadpg();
} else {
	document.addEventListener('plusready', preloadpg, false);
}

function preloadpg() {
	loginpage = mui.preload({
		url: "userlogin.html",
		id: "userlogin"
	});
	
	document.getElementById('userlogo').addEventListener('tap', function() {
		if (localStorage.getItem("IS_LOGIN") == "ON") {
			userinfo();
		} else {
			userlogin();
		}
	});
	document.getElementById('mystore').addEventListener('tap', function() {
		if (localStorage.getItem("IS_LOGIN") == "ON") {
			storeinfo();
		} else {
			userlogin();
		}
	});
	document.getElementById('myjudge').addEventListener('tap', function() {
		if (localStorage.getItem("IS_LOGIN") == "ON") {
			judgeinfo();
		} else {
			userlogin();
		}
	});
	document.getElementById('myorder').addEventListener('tap', function() {
		if (localStorage.getItem("IS_LOGIN") == "ON") {
			orderinfo();
		} else {
			userlogin();
		}
	});
	document.getElementById('mysettings').addEventListener('tap', function() {
		if (localStorage.getItem("IS_LOGIN") == "ON") {
			settinginfo();
		} else {
			userlogin();
		}
	});
}

function userinfo() {
	userinfopg = plus.webview.getWebviewById('userinfopg');
	if(!userinfopg){
		var nwaiting = plus.nativeUI.showWaiting();
		userinfopg = plus.webview.create("userinfopg.html", "userinfopg");
		userinfopg.addEventListener('loaded',function(){
			nwaiting.close();
			userinfopg.show("slide-in-right");
		})
	}else{
		userinfopg.show("slide-in-right");
	}
}

function settinginfo() {
	
}

function judgeinfo() {

}

function orderinfo() {

}

function storeinfo() {

}

function userlogin() {
	loginpage.show("slide-in-right");
}