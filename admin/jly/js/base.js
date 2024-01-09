// ;var Domain = 'http://localhost';
// ;var BasePath = Domain + ":8003";
// ;var AvatarPath = BasePath + "/avatarphoto/";
// ;var PhotoPath =  BasePath + "/imagephoto/";
// ;var CookieName = "bm-cookie";
;var key_enter = 13;

Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"H+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth()+3)/3),
		"S": this.getMilliseconds()
	};
	
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4-RegExp.$1.length))
	for (var k in o)
		if (new RegExp("("+k+")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))
	return fmt;
}
function GetCookie(name) {
	if (document.cookie.length > 0) {
		var start = document.cookie.indexOf(name + '=');
		if (start !== -1) {
			start = start + name.length + 1;
			var end = document.cookie.indexOf(';', start);
			if (end === -1) {
				end = document.cookie.length;
				//return document.cookie.substring(start, end);
				return unescape(document.cookie.substring(start, end));
			}
		}
	}
　　return '';
}

function CheckCookie(name, who, to) {
	cookie = GetCookie(name);
	if (cookie == "") {
		who.parent.location.href = to;
	}
	return cookie;
}

function showloading(t) {
	if (t) {//如果是true则显示loading
		loading = layer.load(1, {
			shade: [0.1, '#fff'] //0.1透明度的白色背景
		});
	} else {//如果是false则关闭loading
		layer.closeAll('loading');
	}
}

function GetAge(identityCard) {
	var len = (identityCard + "").length;
	if (len == 0) {
		return 0;
	} else {
		if ((len != 15) && (len != 18)) { //身份证号码只能为15位或18位其它不合法
			return 0;
		}
	}
	var strBirthday = "";
	if (len == 18) { //处理18位的身份证号码从号码中得到生日和性别代码
		strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
	}
	if (len == 15) {
		strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
	}
	//时间字符串里，必须是“/”
	var birthDate = new Date(strBirthday);
	var nowDateTime = new Date();
	var age = nowDateTime.getFullYear() - birthDate.getFullYear();
	//再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
	if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

function GetSex(identityCard) {
	var len = (identityCard + "").length;
	if (len == 0 || ((len != 15) && (len != 18))) {
		return 0;
	}
	var strsex = "";
	if (len == 18) { //处理18位的身份证号码从号码中得到生日和性别代码
		strsex = identityCard.substr(16, 1)
	}
	if (len == 15) {
		strsex = identityCard.substr(14, 1)
	}
	if (parseInt(strsex)%2 == 1) {
		return "男"
	}
	return "女";
}

/**
 * 通过身份证返回出生年月日
 * @param {string} identityCard 
 * @returns string
 */
function GetBirthdateFromIdCard(identityCard) {
	identityCard = identityCard.substring(6,14);
	const regex = /(\d{4})(\d{2})(\d{2})/;  
	const match = identityCard.match(regex);  
	
	if (match) {  
	  const year = match[1];  
	  const month = match[2];  
	  const day = match[3];  
	
	  return `${year}-${month}-${day}`;  
	} else {  
	  return null;  
	}  
}

/**
 * 
 * @param {*} clientdata 
 */
function ParseClientInfo(clientdata) {
	clientdata["Sex"] = GetSex(clientdata.ChinaId);
	clientdata["Age"] = GetAge(clientdata.ChinaId);
	clientdata["Birthday"] = GetBirthdateFromIdCard(clientdata.ChinaId);
	
	var date = new Date(clientdata.InDate)
	clientdata["InDate"] = date.toLocaleDateString().split('/').join('-')
	if (clientdata.InDate === '1-1-1') {
		clientdata.InDate = ""
	}
	
	date = new Date(clientdata.OutDate)
	clientdata["OutDate"] = date.toLocaleDateString().split('/').join('-')
	if (clientdata.OutDate === '1-1-1') {
		clientdata.OutDate = ""
	}

	if (clientdata.InDate !== "") {
		clientdata.FormatInDate = clientdata.InDate.split("-").map(part => part.padStart(2, '0')).join("-");
	}
	if (clientdata.OutDate !== "") {
		clientdata.FormatOutDate = clientdata.OutDate.split("-").map(part => part.padStart(2, '0')).join("-");
	}
}

/**
 * 
 * @param {string} level 
 * @returns string
 */
function ParseNurseLevel(level) {
	switch (level) {
		case "1":
			return "I 级";
		case "2":
			return "II 级";
		case "3":
			return "III 级";
		case "4":
			return "IV 级";
		case "5":
			return "特级";
	}
	return "错误";
}
