
;var BasePath = "http://localhost:8001";
;var Domain = 'http://localhost';
;var CookieName = "bm-cookie";

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
	