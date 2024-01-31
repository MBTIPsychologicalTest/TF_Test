const result_shareBtn = document.getElementById("result-share");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

const f_Progress = document.getElementById("F-progressBar");
const f_Progress_Score = document.getElementById("F-score");
const t_Progress = document.getElementById("T-progressBar");
const t_Progress_Score = document.getElementById("T-score");

result_shareBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

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
