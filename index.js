var playButton = document.querySelector('.playGame');
var inputNum = document.querySelector(".putNum");
var field = document.querySelector('.gameField');
var strikeBall = document.createElement('p');
var result = document.querySelector('.showResult')

// 난수번호 세자리 생성
var numList = [0,1,2,3,4,5,6,7,8,9];
var getNum = '';

function randomNum(){
  for(var i = 0; i<3; i++){
  var random = numList[Math.floor(Math.random()*numList.length)];
  getNum += random;
  }
  return console.log(getNum);
};

// 영역 보이기
function getShow(){
  field.style.visibility = "visible";
}

/*숫자를 stirng으로 변환
function numToString(n) {
  return (n + '').split('');
} */


function comparison(){ //스트라이크 및 볼 판명하기
  var strike = 0;
  var ball = 0;
  var x = getNum.split('');
  var y = inputNum.value.split('');

  for(var i = 0; i<3; i++){
    for(var j = 0; j<3; j++){
      if(x[i]===y[j]){
        if(i===j){
          strike ++;
        } else {
          ball++;
        }
      }
    }
  }
  strikeBall;
  strikeBall.textContent = strike+'S'+ball+'B';
  result.appendChild(strikeBall);
}

//횟수 설정 (엔터키 입력 횟수)



playButton.addEventListener('click',randomNum);
playButton.addEventListener('click',getShow);

inputNum.addEventListener('keydown',function(ev){
  if(ev.keyCode == 13){
    if(inputNum.value.length !== 3){
    alert('세 자리 숫자를 입력해주세요');
    } else {
      comparison();
    }
  }
})

/*#
for(var i = 0; i<10; i++){
  comparison(); // 함수를 10번 반복한다는거고... 엔터 키 클릭 수는..??
}
*/

/* 버튼 클릭 횟수
playButton.addEventListener('click',button_click);

var count = 0;
function button_click(){
  count++;
  return console.log(count);
}
*/

inputNum.addEventListener('keydown',enter_key);

var count = 0;
function enter_key(ev){
  if(ev.keyCode == 13){
    count++;
    return console.log(count);
  }
}