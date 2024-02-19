const resultImg = document.getElementById("resultImg");
const content_explanation = document.getElementById("content-explanation");

const result_shareBtn = document.getElementById("result-share");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

//progress-bar
const f_Progress = document.getElementById("F-progressBar");
const f_Progress_Score = document.getElementById("F-score");
const t_Progress = document.getElementById("T-progressBar");
const t_Progress_Score = document.getElementById("T-score");

const KakaoShareBtn = document.getElementById("kakao-shareBtn");
const linkCopyBtn = document.getElementById("link-copyBtn");
const retryBtn = document.getElementById("retry");

//결과값 받아오는 쿼리
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// 'f_Score'에 해당하는 값을 가져오기
const fScoreValue = urlParams.get("value") ?? 0;
const tScoreValue = 100 - fScoreValue;

//추가한 코드
let historyArr = [];
const date = new Date();
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);
const hours = ('0' + date.getHours()).slice(-2); 
const minutes = ('0' + date.getMinutes()).slice(-2);
const seconds = ('0' + date.getSeconds()).slice(-2); 
const today = year + '년 ' + month  + '월 ' + day + '일 ' + hours + '시 ' + minutes  + '분 ' + seconds + '초';
//로컬스토리지에 추가하기
function saveHistory(){
  const tfResultString = JSON.stringify(historyArr)
  localStorage.setItem("history", tfResultString)
}
//기록 배열에 추가
function addHistory(){
  let history = localStorage.getItem("history")
  console.log(history)
  if(history !== null){
    historyArr = JSON.parse(history)
  }
  let tfAdded = {
    historyId: today,
    fresultHistory: fScoreValue,
    tresultHistory: tScoreValue
  }
  historyArr.push(tfAdded)
  saveHistory()
}
addHistory()
//여기까지 추가한 코드

function get_Result() {
  f_Progress.value = fScoreValue;
  f_Progress_Score.textContent = fScoreValue + "%";

  t_Progress.value = tScoreValue;
  t_Progress_Score.textContent = tScoreValue + "%";

  if (fScoreValue <= 20) {
    //"너 T발 C야?"
    resultImg.src = "../images/T_img.jpeg";
    content_explanation.innerHTML = `"넌 정말 T야!" 라는 소리를 자주 듣는 당신!<br>
    해결 방법을 제시한 건데 상처받았다고 하면 이해가 안 돼요<br>
    하지만 T라고 아예 공감을 못하는 게 아닙니다<br>
    <b>단지 표현 방식이 다를 뿐!<b>`;
  } else if ((fScoreValue > 20) & (fScoreValue <= 40)) {
    //"겉.바.속.촉"'
    resultImg.src = "../images/겉바속촉.jpeg";
    content_explanation.innerHTML = `겉은 바삭바삭 까칠해 보이지만 속은 촉촉한 당신!<br>
    평소 T 적인 모먼트가 자주 있지만<br>
    무심한 듯 챙겨주는 따듯함이 보여요<br>
    그야말로 <b>츤데레의 정석<b>!`;
  } else if ((fScoreValue > 40) & (fScoreValue <= 60)) {
    //"후라이드반 양념반"
    resultImg.src = "../images/반반치킨.jpeg";
    content_explanation.innerHTML = `F들 사이에서 T, T들 사이에서 F를 맡고 있는 당신!<br>
    "너가 F(또는 T)라고?!" 라는 말을 자주 들어요<br>
    양쪽의 마음이 모두 공감 가능한 당신은<br>
    F와 T를 모두 만족시킬 수 있는 <b>반반 치킨<b> 같은 매력을 가졌군요!`;
  } else if ((fScoreValue > 60) & (fScoreValue <= 80)) {
    //"물복인척하는 딱복"
    resultImg.src = "../images/물복인척하는 딱복.jpg";
    content_explanation.innerHTML = `겉은 말랑말랑해서 물복인줄알았지만 사실은 딱복인 당신!<br>
    말랑말랑한 면으로 사람들을 대하지만 <br>
    가끔은 단단한 면모로 놀래키기도 해요.<br>
    따뜻한 공감에 더불어 현실적인 조언도 해줄 수 있는 당신은<br> <b>만능해결사!<b>`;
  } else {
    //"공감 대마왕"
    resultImg.src = "../images/F_img.jpg";
    content_explanation.innerHTML = `감성 충만 공감 능력 짱짱인 당신!<br>
    영화 속 슬픈장면에서는 주인공에 빙의해서 눈물을 왕왕 흘려요<br>
    사소한 것에도 감동을 잘 받고 새벽 감성을 잘 타요<br>
    공감을 너무 잘하는 당신은 <b>공감능력자격증 1급!<b>`;
  }
}

get_Result();

result_shareBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

linkCopyBtn.addEventListener("click", () => {
  let url = "";
  let textarea = document.createElement("textarea");
  //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성

  document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
  url = window.document.location.href; //url에는 현재 주소값을 넣어줌
  textarea.value = url; // textarea 값에 url를 넣어줌
  textarea.select(); //textarea를 설정
  document.execCommand("copy"); // 복사
  document.body.removeChild(textarea); //extarea 요소를 없애줌

  alert("URL이 복사되었습니다."); // 알림창
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

retryBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Kakao 초기화
Kakao.init("777618fd1941caf6dc3b0ef1865b6751");

// KakaoLink 메시지 보내기 함수
function sendKakaoLink() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "MBTI T/F 심리테스트",
      description: "MBTI T/F 심리테스트 결과",
      imageUrl: `${resultImg.src}`,
      link: {
        mobileWebUrl:
          "https://mbti-tftest-millenniumdragons.netlify.app/resultpage?value=" +
          fScoreValue,
        webUrl:
          "https://mbti-tftest-millenniumdragons.netlify.app/resultpage?value=" +
          fScoreValue,
      },
    },
    buttons: [
      {
        title: "자세히 보기",
        link: {
          mobileWebUrl:
            "https://mbti-tftest-millenniumdragons.netlify.app/resultpage?value=" +
            fScoreValue,
          webUrl:
            "https://mbti-tftest-millenniumdragons.netlify.app/resultpage?value=" +
            fScoreValue,
        },
      },
    ],
  });
}
