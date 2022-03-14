// 时间戳
function getTimeText(timeTramp: Number): String {
  return timeTramp < 10 ? String(`0${timeTramp}`) : String(timeTramp);
}

// 年月日
export function getFMD() {
  const date = new Date();
  const year = getTimeText(date.getFullYear());
  const month = getTimeText(date.getMonth() + 1);
  const day = getTimeText(date.getDate());
  return `${year}${month}${day}`;
}

// 时分秒
export function getHMS() {
  const date = new Date();
  const hours = getTimeText(date.getHours());
  const minutes = getTimeText(date.getMinutes());
  const seconds = getTimeText(date.getSeconds());
  // const milliseconds = getTimeText(date.getMilliseconds());
  return `${hours}:${minutes}:${seconds}`;
}

// 获取当前星期几
export function getWeekDate() {
  var now = new Date();
  var day = now.getDay();
  var weeks = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  var week = weeks[day];
  return week;
}
