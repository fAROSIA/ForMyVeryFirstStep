function getBirthday() {
  var flag = true;
  while (flag) {
    var year = parseInt(prompt("请输入您的出生年份"));
    if (isNaN(year)) {
      alert("输入错误");
      continue;
    }
    var month = parseInt(prompt("请输入您的出生月份"));
    if (isNaN(month) || month < 1 || month > 12) {
      alert("输入错误");
      continue;
    }
    var day = parseInt(prompt("请输入您的出生日期"));
    if (isNaN(day) || day < 1 || day > 31) {
      alert("输入错误");
      continue;
    }
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      days[1] = 29;
    }
    var sum = 0;
    for (var i = 0; i < month - 1; i++) {
      sum += days[i];
    }
    sum += day;
    flag = false;
    document.write("您的生日在" + year + "年是第" + sum + "天");
  }
}
getBirthday();