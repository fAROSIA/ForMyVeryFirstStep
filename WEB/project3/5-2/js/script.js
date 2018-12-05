// 加减按钮
var addBtn = document.querySelectorAll('.add');
var subBtn = document.querySelectorAll('.subtract');
// 单选框和全选框
var selections = document.querySelectorAll('.selection');
var selectAll = document.querySelector('#selectAll');
// 单个商品数量、单价、总价
var amounts = document.querySelectorAll('.amount');
var prices = document.querySelectorAll('.price');
var totals = document.querySelectorAll('.total');
// 所有商品总价
var sum = document.querySelector('#sum');
// 被选中商品数量
var count = 4;
// 计算单个物品总价
function calcTotal(n) {
	totals[n].innerText = parseFloat(prices[n].innerText) * parseFloat(amounts[n].value);
	calcSum();
}
// 计算总价
function calcSum() {
	var res = 0;
	for (var i = 0; i < totals.length; i++) {
		if (selections[i].checked === true) {
			res += parseFloat(totals[i].innerText);
		}
	}
	sum.innerText = res;
}
// 加减按钮变化函数
function addAndSub(n) {
	addBtn[n].onclick = function () {
		amounts[n].value = +amounts[n].value + 1;
		calcTotal(n);
	};
	subBtn[n].onclick = function () {
		amounts[n].value = amounts[n].value - 1;
		if (amounts[n].value < 1) {
			amounts[n].value = 1;
		}
		calcTotal(n);
	};
}
// 输入框变化函数
function inputAmount(n) {
	amounts[n].onblur = function () {
		calcTotal(n);
	};
}
// 单选框点击函数
function selectSingle(n) {
	selections[n].onclick = function () {
		if (this.checked === false) {
			count--;
			selectAll.checked = false;
		} else {
			count++;
		}
		// 判断是否所有单选框都被选中
		if (count == 4) {
			selectAll.checked = true;
		}
		calcSum();
	};
}
// 给数量变化区域添加事件
for (var i = 0; i < addBtn.length; i++) {
	(function (i) {
		// 添加事件
		addAndSub(i);
		inputAmount(i);
		selectSingle(i);
	})(i);
}
// 给全选框添加点击事件
selectAll.onclick = function () {
	var flag;
	if (this.checked === true) {
		flag = true;
	} else {
		flag = false;
	}
	for (var i = 0; i < selections.length; i++) {
		selections[i].checked = flag;
	}
	calcSum();
};
calcSum();