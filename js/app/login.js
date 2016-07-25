if (window.plus) {
	Ready();
} else {
	document.addEventListener('plusready', Ready);
}

function Ready() {
	registpage = mui.preload({
		url: "userregister.html",
		id: "userregister"
	});
	document.getElementById('regisbtn').addEventListener('tap', userregister);
	document.getElementById('log-in').addEventListener('tap', loginajax);
}

function loginajax() {
	var user_name = document.getElementById('user-name').value;
	var user_pass = document.getElementById('user-pass').value;
	var urls = "http://192.168.191.1:8084/hcfy/LoginServer";
	mui.ajax(urls, {
		data: {
			username: user_name,
			password: user_pass,
			type: "Login"
		},
		type: 'GET',
		timeout: 10000,
		success: function(data) {
			var jsondata = JSON.parse(data);
			if (jsondata.success) {
				alert(jsondata.message);
				localStorage.setItem("IS_LOGIN", "ON");
				localStorage.setItem("USER_NAME",jsondata.user_name);
				localStorage.setItem("USER_REALNAME",jsondata.realname);
				localStorage.setItem("USER_TEL",jsondata.tel);
				localStorage.setItem("USER_EMAIL",jsondata.email);
				plus.webview.currentWebview().hide("slide-out-right");
			} else {
				alert(jsondata.message);
				localStorage.clear();
			}
		},
		error: function() {
			alert("网络故障")
		}
	})
}

function registerajax() {
	var reg_name = document.getElementById('reg-name').value;
	var reg_pass = document.getElementById('reg-pass').value;
	var passagain = document.getElementById('passagain').value;
	var tel = document.getElementById('reg-tel').value;
	var email = document.getElementById('reg-email').value;
	var realname = document.getElementById('reg-realname').value;
	var urls = "http://192.168.191.1:8084/hcfy/LoginServer";
	if (reg_pass !== passagain) {
		alert("两次输入的密码不一致!");
		var inputs = document.querySelectorAll(".part input");
		for (i = 0; i < inputs.length; ++i) {
			inputs[i].value = "";
		}
		return;
	}
	mui.ajax(urls, {
		data: {
			username: reg_name,
			password: reg_pass,
			tel: tel,
			email: email,
			realname: realname,
			type: "Register"
		},
		type: 'GET',
		timeout: 10000,
		success: function(data) {
			var jsondata = JSON.parse(data);
			if (jsondata.success) {
				alert(jsondata.message);
				plus.webview.currentWebview().hide("slide-out-right");
			} else {
				alert(jsondata.message);
				localStorage.setItem("IS_LOGIN", "OFF");
			}
		},
		error: function() {
			alert("网络故障")
		}
	})
}

function userregister() {
	registpage.show("slide-in-right");
}