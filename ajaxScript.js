window.onload = function(){
	/*var send = document.getElementById("send");
	send.onclick = function(){
		var xhr = new XMLHttpRequest();
		var valu1 = value1.value;
		var value2 = document.getElementById("value2").value;
		var str = "/send?value1="+valu1+"&value2="+value2;
		xhr.open('GET',str,true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if (xhr.readyState != 4) return;
			if (xhr.status != 200) {
  			alert( xhr.status + ': ' + xhr.statusText ); 
		} else {
  			var res = document.getElementById("res");
  			res.innerHTML = xhr.responseText;
		}
		};
	};

	var sendPost = document.getElementById("sendPost");
	sendPost.onclick = function(){
		var valu1 = value3.value;
		var value2 = document.getElementById("value4").value;
		var obj = {
			value1: valu1,
			value2: value2
		};
		var objJSON = JSON.stringify(obj);
		var xhr = new XMLHttpRequest();
		xhr.open('POST',"/sendPost",true);
		xhr.setRequestHeader('Content-type','application/json');
		xhr.send(objJSON);
		xhr.onreadystatechange=function(){
			if (xhr.readyState != 4) return;
			if (xhr.status != 200) {
  			alert( xhr.status + ': ' + xhr.statusText ); 
		} else {
  			var res = document.getElementById("res1");
  			res.innerHTML = xhr.responseText;
		}
		};
	};*/

	var loginThose = document.getElementById("loginThose");
	loginThose.onclick = function(){
		var log = login.value;
		var pas = document.getElementById("pass").value;
		var obj = {
			login: log,
			password: pas
		};
		var objJSON = JSON.stringify(obj);
		var xhr = new XMLHttpRequest();
		xhr.open('POST',"/loginThose",true);
		xhr.setRequestHeader('Content-type','application/json');
		xhr.send(objJSON);
		xhr.onreadystatechange=function(){
			if (xhr.readyState != 4) return;
			if (xhr.status != 200) {
  			alert( xhr.status + ': ' + xhr.statusText ); 
		} else {
  			var res = document.getElementById("res");
  			if(xhr.responseText[0]=="/"){
  				window.location.href=xhr.responseText+"";
  			}
  			else{
  				res.innerHTML=xhr.responseText;
  			}
		}
		};
	}

	
};