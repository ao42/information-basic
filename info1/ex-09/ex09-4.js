var wa = 100;
function change() {
  n =document.getElementById('n').value;
  wa = wa + parseInt(n)
  document.getElementById('picture').setAttribute('width', wa );
}
