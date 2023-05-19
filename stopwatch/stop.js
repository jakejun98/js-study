let time = 0;                 //시간
let starFlag = true;          //스톱워치 실행중 여부 , true로 초기화  
$(document).ready(function(){ // buttonEvn 함수호출 ,buttonEvt가 메인
  buttonEvt();
});

function init(){            //init() 시간을 "00:00:00"으로 초기화하는 함수 
  document.getElementById("time").innerHTML = "00:00:00";
}         

function buttonEvt(){ //타이머 버튼들에 대한 이벤트 처리 담당 
  let hour = 0;
  let min = 0;
  let sec = 0;        // 시 분 초 저장 
  let timer;          //밑에서 setInterval 함수 저장할때 사용 

  // start btn
  $("#startbtn").click(function(){  //버튼 클릭되면 실행 함수 

    if(starFlag){         //스톱워치 실행중 true 
      $(".fa").css("color","#FAED7D") //클래스가 fa인 요소의 글자색 변경
      this.style.color = "#4C4C4C";   //클릭한 요소의 글자색 변경 
      starFlag = false;               //스워치를 실행을 false로 바꿔줌 

      if(time == 0){    //시간이 0이면 init() 호출 
        init();
      }

      timer = setInterval(function(){   // 일정한 초단위 간격으로 함수 실행 
        time++;                         //  time 1초씩 증가시키고 분, 시간 계산 

        min = Math.floor(time/60);
        hour = Math.floor(min/60);
        sec = time%60;
        min = min%60;

        let th = hour;                //시간 ,분 ,초  저장 
        let tm = min;
        let ts = sec;
        if(th<10){                    //각 변수가 10보다 작으면 0추가해서 2자리 
        th = "0" + hour;
        }
        if(tm < 10){
        tm = "0" + min;
        }
        if(ts < 10){
        ts = "0" + sec;      
        }

        document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
      }, 1000);
    }
  });

  // Pause
  $("#pausebtn").click(function(){    //pause버튼 클릭 이벤트 함수 
    if(time != 0){                    // time 0 아니면 clearInterval() 함수를 사용하여 타이머를 중지
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;             //실행여부 true로 바꿈 ,타이머 다시시작할수있게 
    }
  });

  // stop btn
  $("#stopbtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);  //setInterval() 함수에 의해 실행된 반복 작업종료 함수
      starFlag = true;
      time = 0;            
      init();               // init()함수호출 00:00:00으로 초기화 
    }
  });
}
