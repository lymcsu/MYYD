
function pulldownrefresh() {
	var self = plus.webview.currentWebview();
	var mainpg = self.mainpg;
	var urls = "http://192.168.191.1:8084/hcfy/ServerSelector";
	mui.ajax(urls, {
		data: {
			type: mainpg
		},
		type: 'GET',
//		dataType: 'json',
		timeout: 10000,
		success: function(data) {
			if (!data) {
				plus.nativeUI.toast('哎呀,没有更多数据了');
				mui('#refreshlist').pullRefresh().endPulldownToRefresh();
				return;
			}
			var hotelinfo = [];
			var info = [];
			hotelinfo = data.split(";");
			for(var i=0;i<hotelinfo.length;i++){
				info[i] = JSON.parse(hotelinfo[i]);
			}
			
			listview = document.getElementById('main');
			partindex = document.body.querySelectorAll('.part');
			listview.innerHTML = "";
			for(var j=0;j<info.length;j++){			
			
				var div_part = document.createElement('div');
				div_part.className = "part";
				var div_img = document.createElement('div');
				div_img.className = "img";
				var img_ = document.createElement('img');
				img_.className = 'image';
				img_.src = 'images/bg_default_poi_list.png';
				var div_right = document.createElement('div');
				div_right.className = 'box item-list item-list-detail';
				var div_tap = document.createElement('div');
				div_tap.className = 'tap item-list-title';
				var div_flex1 = document.createElement('div');
				div_flex1.className = 'flex-1';
				var div_flex2 = document.createElement('div');
				div_flex2.className = 'flex-2';
				var div_title = document.createElement('div');
				div_title.className = 'title';
				var span_name = document.createElement('span');
				span_name.className = 'poiname';
				var div_info = document.createElement('div');
				div_info.className = 'info';
				var span_star = document.createElement('span');
				span_star.className = 'star';
				var i_gold = document.createElement('i');
				i_gold.className = 'i-star i-star-gold';
				var i_gray = document.createElement('i');
				i_gray.className = 'i-star i-star-gray';
				var span_score = document.createElement('span');
				span_score.className = 'score';
				var span_people = document.createElement('span');
				span_people.className = 'people';
				var div_price = document.createElement('div');
				div_price.id = 'priceinfo';
				var big_ = document.createElement('big');
				big_.id = 'money';
				var div_dist = document.createElement('div');
				div_dist.className = 'distance';
				var div_style = document.createElement('div');
				div_style.className = 'classify';
				span_name.innerHTML = info[j].name;
				span_score.innerHTML = info[j].score;
				span_people.innerHTML = info[j].people;
				big_.innerHTML = info[j].price;
				div_price.innerHTML = '￥';
				div_dist.innerHTML = info[j].location;
				div_style.innerHTML = info[j].style;
				div_img.appendChild(img_);
				div_title.appendChild(span_name);
				for(var i=0; i<4; i++){
					var i_gold = document.createElement('i');
					i_gold.className = 'i-star i-star-gold';
					span_star.appendChild(i_gold);
				}
				span_star.appendChild(i_gray);
				div_info.appendChild(span_star);
				div_info.appendChild(span_score); 
				div_info.appendChild(span_people);
				div_price.appendChild(big_);
				div_price.innerHTML += '起';
				div_flex1.appendChild(div_title);
				div_flex1.appendChild(div_info);
				div_flex1.appendChild(div_price);
				div_flex2.appendChild(div_dist);
				div_flex2.appendChild(div_style);
				div_tap.appendChild(div_flex1);
				div_tap.appendChild(div_flex2);
				div_right.appendChild(div_tap);
				div_part.appendChild(div_img)
				div_part.appendChild(div_right);
				if (partindex.length != 0) {
					listview.insertBefore(div_part, listview.firstChild);
				} else {
					listview.appendChild(div_part);
				}
			}
			mui('#refreshlist').pullRefresh().endPulldownToRefresh();
	},
	error: function(){
		alert("failed");
		mui('#refreshlist').pullRefresh().endPulldownToRefresh();
	}
	});
}