(function () {
	// 菜单下拉
	document.getElementById('profile').onmousemove = function () {
		document.getElementById('menu').style.display = "block";
	};
	document.getElementById('profile').onmouseout = function () {
		document.getElementById('menu').style.display = "none";
	};
	// 姓名规则弹出
	document.getElementById('namerule').onmousemove = function () {
		document.getElementById('rules').style.display = "block";
	};
	document.getElementById('namerule').onmouseout = function () {
		document.getElementById('rules').style.display = "none";
	};
	// 获取表单各项
	var formItems = document.querySelectorAll('.form-item');
	var passwd = document.querySelector('#passwd');
	var submit = document.querySelector('#submit');
	var msgs = document.querySelectorAll('.msg');
	// 正则模式
	var patterns = {
		username: /^[a-z]\w{5,29}$/i,
		passwd: /^\S{6,20}$/,
		name: /^[a-zA-Z]{3,30}$|^[\u4e00-\u9fa5]{2,15}$/,
		idcard: /^(\d{18})$|^(\d{17}[\dXx])$/,
		email: /^[a-z0-9]+(?:[._-][a-z0-9]+)*@[a-z0-9]+(?:[_-][a-z0-9]+)*\.([a-z]{2,4})(\.[a-z]{2})?$/i,
		phone: /^1[^12]\d{9}$/
	};
	// 错误提示信息
	var errorMsgs = {
		username: '6-30位字母、数字或"_"，字母开头',
		passwd: '请输入6-20位字母、数字或符号',
		passwdConfirm: '两次密码输入不一致，请重新输入',
		name: '姓名只能包含中文或者英文，且字符在3-30个之间！',
		idcard: '请输入18位身份证号码',
		email: '请输入正确的邮箱',
		phone: '您输入的手机号码不是有效的格式！'
	};
	// 正确提示信息
	var correctMsgs = {
		username: '用户名输入正确',
		passwd: '',
		passwdConfirm: '两次输入一致',
		name: '姓名输入正确',
		idcard: '号码输入正确',
		email: '邮箱格式正确',
		phone: '手机格式正确'
	};
	var flags = [];
	for (var i = 0, len = formItems.length; i < len; i++) {
		flags.push(false);
		formItems[i].onblur = validator(i);
	}
	// 密码校验模块
	var levelBars = document.querySelectorAll('#passwdLevel span');

	function validatePasswd(value) {
		if (/^\d{6,20}$/.test(value) || /^[a-zA-Z]{6,20}$/.test(value) || /^\W{6,20}$/.test(value)) {
			levelBars[1].classList.remove('orange');
			levelBars[2].classList.remove('green');
		} else if (/^[0-9a-z]{6,20}$/i.test(value) || /^[\Wa-z]{6,20}$/i.test(value) || /^[\W0-9]{6,20}$/.test(value)) {
			levelBars[1].classList.add('orange');
			levelBars[2].classList.remove('green');
		} else if (/[\Wa-z0-9]{6,20}/i.test(value)) {
			levelBars[1].classList.add('orange');
			levelBars[2].classList.add('green');
		}
	}
	// 提示字体变红
	function turnRed(i) {
		msgs[i].classList.add('warning');
		msgs[i].classList.remove('correct');
	}
	// 提示字体变绿
	function turnGreen(i) {
		msgs[i].classList.add('correct');
		msgs[i].classList.remove('warning');
	}
	// 校验模块
	function validator(i) {
		return function () {
			var value = this.value,
				itemID = this.id;
			// 密码为空
			if (itemID == "passwdConfirm") { //确认密码部分
				if (value == "") {
					turnRed(i);
					msgs[i].innerHTML = "密码不能为空";
					flags[i] = false;
				} else if (value == passwd.value) {
					turnGreen(i);
					flags[i] = true;
					msgs[i].innerHTML = correctMsgs[itemID];
				} else {
					turnRed(i);
					msgs[i].innerHTML = errorMsgs[itemID];
					flags[i] = false;
				}
				return;
			}
			if (itemID == "email" && value == "") { //邮箱部分
				turnRed(i);
				msgs[i].innerHTML = "邮箱不能为空";
				return;
			}
			if (patterns[itemID].exec(value)) { //校验成功
				turnGreen(i);
				flags[i] = true;
				if (itemID == "passwd") { //密码部分
					validatePasswd(value);
				}
				// 绿字提示
				msgs[i].innerHTML = correctMsgs[itemID];
			} else { //校验失败
				// 红字提示
				turnRed(i);
				flags[i] = false;
				msgs[i].innerHTML = errorMsgs[itemID];
			}
		};
	}
	// 提交按钮
	var checkbox = document.querySelector('#term');
	submit.onclick = function () {
		for (var i = 0, len = formItems.length; i < len; i++) {
			formItems[i].onblur();
		}
		if (flags.indexOf(false) == -1 && checkbox.checked) { //表单全部正确且同意条款
			window.location.href = 'https://www.imooc.com/';
		}
	};
})();