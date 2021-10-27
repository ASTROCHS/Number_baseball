var playButton = document.querySelector('.playGame');
var inputNum = document.querySelector(".putNum");
var field = document.querySelector('.gameField');
var strikeBall = document.createElement('p');
var result = document.querySelector('.showResult')

// 난수번호 세자리 생성
var numList = [0,1,2,3,4,5,6,7,8,9];
var getNum = '';
var random = '';

function randomNum(){
  for(var i = 0; i<3; i++){
  random = numList[Math.floor(Math.random()*numList.length)];
  getNum += random;
  }
  return console.log(getNum);
};

// 영역 바꾸기
function getShow(){
  field.style.visibility = "visible";
  playButton.textContent = '게임 재시작'
}

//스트라이크 및 볼 판별하기
function comparison(){
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
  strikeBall.textContent = strike+'S'+ball+'B'+' ('+enterCount+'/10회)';
  result.appendChild(strikeBall);
}

//엔터키 입력 횟수

var enterCount = 0;

function enter_key(ev){
  if(ev.keyCode == 13 && inputNum.value.length === 3){
    enterCount++;
    return enterCount;
  }
}

//버튼 클릭 횟수
var buttonCount = 0;

function click_key(){
  buttonCount++;
}

playButton.addEventListener('click',randomNum);
playButton.addEventListener('click',getShow);
playButton.addEventListener('click',function(){
  click_key();
  if(buttonCount > 1){
    getNum = '';
    random = '';
    inputNum.value='';
    strikeBall.textContent='';
  }
});

inputNum.addEventListener('keydown',enter_key);
inputNum.addEventListener('keydown',function(ev){
  if(ev.keyCode == 13){
    if(inputNum.value.length !== 3){
    alert('세 자리 숫자를 입력해주세요');
    } else if(enterCount > 10){
      strikeBall.style.color = 'red';
      alert('시도 횟수를 초과하였습니다. 정답은 '+getNum+'입니다');
    } else {
      comparison();
      if(getNum === inputNum.value){
        alert('축하합니다. 정답입니다!');
      }
    }
  }
})


/*숫자를 stirng으로 변환
function numToString(n) {
  return (n + '').split('');
} */



