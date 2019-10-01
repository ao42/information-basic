// bodyの最後まで読み込み終わったらオプションを追加する
window.onload = function() {
  var select = document.getElementById('months');
  for (var i=1; i<=12; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = i + '月';
    select.appendChild(option);
  }
};

/*
 * グローバル変数の定義
 */
var calendar, year, month, days, week;

/*
 * カレンダーの設定を初期化する関数
 */
function initCal() {
  calendar = document.getElementById('calendar');
  calendar.innerHTML = '';
  year = parseInt(document.getElementById('year').value);
  month = parseInt(document.getElementById('months').value);

  // 月終わりの日数を求める
  days = 0;
  switch(month) {
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }

  // 1日の曜日を求める
  var y = year, m = month; //値渡し（元の変数は変更されない）
  if (m < 3) {
    y--;
    m += 12;
  }
  week = parseInt( (y + parseInt(y/4) - parseInt(y/100) + parseInt(y/400) + parseInt((13*m+8)/5) + 1) % 7 );
}

/*
 * 指定された年度、月のカレンダーを描画する関数
 */
function drawCal(y, m) {
  initCal();

  // 曜日の配列
  var weeks = ['日', '月', '火', '水', '木', '金', '土'];

  // タイトルの追加
  var h1 = document.createElement('h1');
  h1.innerHTML = year + '年' + month + '月のカレンダー';
  calendar.appendChild(h1);


  var table = document.createElement('table');
  // 曜日をカレンダーに追加
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  for (var i=0; i<7; i++) {
    var th = document.createElement('th');
    th.innerHTML = weeks[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);

  // 日にちをカレンダーに追加
  var tbody = document.createElement('tbody');

  // 最初の1行は1日まで空白
  var day = 1;
  var tr = document.createElement('tr');
  for (var i=0; i<7; i++) {
    var td = document.createElement('td');
    if (i < week) {
      td.innerHTML = '*';
    } else {
      td.innerHTML = day;
      day++;
    }
    tr.appendChild(td);
  }
  tbody.appendChild(tr);

  // 2行目以降を描画
  for (var i=0; i<5; i++) {
    var tr = document.createElement('tr');
    for (var j=0; j<7; j++) {
      if (day > days) {
        break;
      }
      var td = document.createElement('td');
      td.innerHTML = day;
      day++;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  calendar.appendChild(table);
}
