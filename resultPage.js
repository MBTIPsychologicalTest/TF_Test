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
const fScoreValue = urlParams.get("value");
const tScoreValue = 100 - fScoreValue;

function get_Result() {
  f_Progress.value = fScoreValue;
  f_Progress_Score.textContent = fScoreValue + "%";

  t_Progress.value = tScoreValue;
  t_Progress_Score.textContent = tScoreValue + "%";

  if (fScoreValue <= 20) {
    //"너 T발 C야?"
    resultImg.src = "./images/T_img.jpeg";
    content_explanation.innerHTML = `넌 정말 T 그 자체야! 라는 소리를 자주 듣는 당신!<br>
    해결 방법을 제시한 건데<br>
    상처받았다고 하면 이해가 안 돼요<br>
    하지만 T라고 아예 공감을 못하는 게 아닙니다<br>
    단지 표현 방식이 다를 뿐!`;
  } else if ((fScoreValue > 20) & (fScoreValue <= 40)) {
    //"겉.바.속.촉"'
    content_explanation.innerHTML = `겉은 바삭바삭 까칠해 보이지만 속은 촉촉한 당신!<br>
    T 적인 모먼트가 자주 있지만<br>
    무심한 듯 챙겨주는 따듯함이 보여요<br>
    그야말로 츤데레의 정석!`;
  } else if ((fScoreValue > 40) & (fScoreValue <= 60)) {
    //"후라이드반 양념반"
    content_explanation.innerHTML = `F들 사이에서 T, T들 사이에서 F를 맡고 있는 당신!<br>
    F와 T의 마음이 모두 공감 가능한 당신은 마치<br>
    F와 T를 모두 만족시킬 수 있는<br>
    양념 반 후라이드 반 같은 매력을 가졌어요!`;
  } else if ((fScoreValue > 60) & (fScoreValue <= 80)) {
    //"따뜻한 아이스아메리카노"
    resultImg.src = "./images/따뜻한 아이스아메리카노.jpg";
    content_explanation.innerHTML = `따뜻한데 차가운가..? 공감!<br>
    고민 상담을 해줄 때 선공감 후 해결책을 제시해 줘요<br>
    마치 따뜻한 아이스 아메리카노와 같은 사람!`;
  } else {
    //"공감 대마왕"
    resultImg.src = "./images/F_img.jpg";
    content_explanation.innerHTML = `감성 충만 공감 능력 짱짱인 당신!<br>
    사소한 것에도 감동을 잘 받고 새벽 감성을 잘 타요<br>
    감정에 솔직하고 때로는 감정에 잘 휩쓸리기도 해요<br>`;
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
  window.location.href = "startPage.html";
});

// Kakao 초기화
Kakao.init("777618fd1941caf6dc3b0ef1865b6751");

// KakaoLink 메시지 보내기 함수
function sendKakaoLink() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "T/F 테스트 결과",
      description: "카카오톡으로 메시지를 공유합니다.",
      imageUrl: "이미지 URL",
      link: {
        mobileWebUrl:
          "https://6256-59-30-170-233.ngrok-free.app/resultPage.html?value=" +
          fScoreValue,
        webUrl:
          "https://6256-59-30-170-233.ngrok-free.app/resultPage.html?value=" +
          fScoreValue,
      },
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl:
            "https://6256-59-30-170-233.ngrok-free.app/resultPage.html?value=" +
            fScoreValue,
          webUrl:
            "https://6256-59-30-170-233.ngrok-free.app/resultPage.html?value=" +
            fScoreValue,
        },
      },
    ],
  });
}
