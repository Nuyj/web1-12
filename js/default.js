/*1~100までの数字繰り返し*/
for(var i =1; i < 101; i++){
  var li = document.createElement('li');
  li.textContent = i;
  document.getElementById('list').appendChild(li);
  if(i % 3 === 0){
  var li = document.createElement('li');
  li.textContent = Fizz;
  document.getElementById('list').appendChild(li);
}
}
