const nickname = document.getElementById("nickname");
const resultImg = document.getElementById("resultImg");

const result_shareBtn = document.getElementById("result-share");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

const f_Progress = document.getElementById("F-progressBar");
const f_Progress_Score = document.getElementById("F-score");
const t_Progress = document.getElementById("T-progressBar");
const t_Progress_Score = document.getElementById("T-score");

const retryBtn = document.getElementById("retry");

function get_Result() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // 'f_Score'에 해당하는 값을 가져오기
  const fScoreValue = urlParams.get("value");
  const tScoreValue = 100 - fScoreValue;

  console.log(fScoreValue);
  console.log(tScoreValue);

  f_Progress.value = fScoreValue;
  f_Progress_Score.textContent = fScoreValue;

  t_Progress.value = tScoreValue;
  t_Progress_Score.textContent = tScoreValue;

  if (fScoreValue <= 20) {
    // nickname.textContent = '"너 T발 C야?"';
    resultImg.src = "./images/T_img.jpeg";
  } else if ((fScoreValue > 20) & (fScoreValue <= 40)) {
    nickname.textContent = '"겉.바.속.촉"';
  } else if ((fScoreValue > 40) & (fScoreValue <= 60)) {
    nickname.textContent = '"후라이드반 양념반"';
  } else if ((fScoreValue > 60) & (fScoreValue <= 80)) {
    nickname.textContent = '"따뜻한 아이스아메리카노"';
  } else {
    nickname.textContent = '"공감 대마왕"';
  }
}

get_Result();

result_shareBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

retryBtn.addEventListener("click", () => {
  window.location.href = "startPage.html";
});
