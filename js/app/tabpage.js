var first = null;
var main = null;

if (window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}

function plusReady() {
	main = plus.webview.getLaunchWebview();
	scenepage = plus.webview.getWebviewById('scene');
	mainpage = plus.webview.getWebviewById('mainpage');
	userpage = plus.webview.getWebviewById('userpage');
	prepage = plus.webview.getWebviewById('prepage');
	if (mainpage) {
		console.log("该webview已经存在，不重复创建");
	} else {
		mainpage = plus.webview.create("mainpage.html", "mainpage", {
			top: "44px",
			bottom: "60px"
		});
		main.append(mainpage);
	}
	document.getElementById('doc').addEventListener('tap',showdoc,false);
	document.getElementById('scene').addEventListener('tap', showscene, false);
	document.getElementById('mine').addEventListener('tap', showuser, false);
	document.getElementById('home').addEventListener('tap', showhome, false);
};
function showdoc(){
	mainpage.hide();
	if (userpage) {
		userpage.hide();
	}
	if (scenepage) {
		scenepage.hide();
	}
	if (prepage) {
		console.log("该webview已经存在，不重复创建");
	} else {
		prepage = plus.webview.create("prepare.html", "prepage", {
			top: "44px",
			bottom: "60px"
		});
		main.append(prepage);
	}
	setTimeout(function(){
	prepage.show();},50)
	document.getElementById('head').innerHTML = "<h1 class='mui-title' style='color:#ffffff;'>行前顾问</h1>";
}
function showscene() {
	document.getElementById('head').innerHTML = "<h1 class='mui-title' style='color:#ffffff;'>景区攻略</h1>";
	mainpage.hide();
	if (userpage) {
		userpage.hide();
	}
	if (prepage) {
		prepage.hide();
	}
	if (scenepage) {
		console.log("该webview已经存在，不重复创建");
	} else {
		scenepage = plus.webview.create("scene.html", "scene", {
			top: "44px",
			bottom: "60px"
		});
		main.append(scenepage);
	}
	setTimeout(function(){
	scenepage.show();},50)

}
function showhome() {
	document.getElementById('head').innerHTML = "<div id='search' style='width: 70%; position: absolute;left: 15%; background-color:rgba(0,0,0,0.3);'>"
				+ "<div class='mui-icon mui-icon-search' style='position: absolute; top:-8px;right:45%;'></div>"
				+ "</div>"
	if(userpage){
		userpage.hide();
	}
	if (prepage) {
		prepage.hide();
	}
	if(scenepage){
	scenepage.hide();
	}
	setTimeout(function(){
	mainpage.show();
	},50)
}

function showuser() {
	if(scenepage){
		scenepage.hide();
	}
	if(prepage){
		prepage.hide();
	}
	if (userpage) {
		console.log("该webview已经存在，不重复创建");
	} else {
		userpage = plus.webview.create("userpage.html", "userpage", {
			top: "44px",
			bottom: "60px"
		});
		main.append(userpage);
	}
	document.getElementById('head').innerHTML = "<h1 class='mui-title' style='color:#ffffff;'>用户中心</h1>";
	setTimeout(function(){
	userpage.show();},50)
}
mui.back = function() {
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
}