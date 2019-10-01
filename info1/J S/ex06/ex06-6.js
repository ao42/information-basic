var who = 'world';

function sayhello() {
  alert('Hello, ' + who + '!');
}

function alname() {
  alert(who+'が来た');
}


function taro() {
  who = '太郎';
  alname();
}

function hanako() {
  who = '花子';
  alname();
}
