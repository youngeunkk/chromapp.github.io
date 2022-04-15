const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // 시간, 분 , 초를 받아오는데 각각 한 자리 수면 앞에 0을 붙이기 위하여 위와 같이 설정
    // number 부분을 Text로 바꿔야하기 때문에 String으로 감싸기
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 웹사이트에 접속하자마자 바로 로딩하기 위함
setInterval(getClock, 1000);  // 첫번째는 호출하려는 function의 이름, 두번째는 매 호출 사이에 얼마나 기다릴지 시간을 의미