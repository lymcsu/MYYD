function connect(params) {
	mui.ajax("http://192.168.191.1:8084/hcfy/WeatherServer", {
		data: {
			month: params
		},
		type: 'get', //HTTP请求类型
		dataType:'json',
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			document.getElementById('sun').innerHTML = data.sundays;
			document.getElementById('rain').innerHTML = data.rainydays;
			document.getElementById('tem').innerHTML = "平均气温:"+data.lowtem+"℃ ~ "+data.hightem+"℃";
			draw();
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
		}
	});
}