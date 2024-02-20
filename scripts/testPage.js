import { STEP } from "./question.js";
const questionBox = document.getElementById("question");
const typeFButton = document.getElementById("typeF");
const typeBothButton = document.getElementById("typeBoth");
const typeTButton = document.getElementById("typeT");
let f_Score = 0;
let questionIndex = 1; // 몇번 문항인지

// 다음 문항으로 이동하면서 해야할 작업함수
function goNextPage(buttonId) {
  getScore(buttonId); // 각 버튼에 해당하는 F점수 증가
  changeQuestion(); // 다음 문항으로 이동
  changeProgressBar(questionIndex); // 프로그레스바 진행상황 변경
}

function getScore(buttonId) {
  if (buttonId == "typeF") {
    f_Score += 10;
  } else if (buttonId == "typeBoth" && questionIndex == 1) {
    f_Score += 3;
  } else if (buttonId == "typeBoth" && questionIndex == 2) {
    f_Score += 5;
  } else if (buttonId == "typeBoth" && questionIndex == 3) {
    f_Score += 3;
  } else if (buttonId == "typeBoth" && questionIndex == 4) {
    f_Score += 7;
  } else if (buttonId == "typeBoth" && questionIndex == 5) {
    f_Score += 6;
  } else if (buttonId == "typeBoth" && questionIndex == 6) {
    f_Score += 7;
  } else if (buttonId == "typeBoth" && questionIndex == 7) {
    f_Score += 3.5;
  } else if (buttonId == "typeBoth" && questionIndex == 8) {
    f_Score += 5;
  } else if (buttonId == "typeBoth" && questionIndex == 9) {
    f_Score += 2.5;
  } else if (buttonId == "typeBoth" && questionIndex == 10) {
    f_Score += 4;
  }
}

// question.js의 STEP 객체 배열에 접근해서 문제와 선택항목 텍스트 변경
function changeQuestion() {
  if (questionIndex === 10) {
    resultDisplay();
  }
  questionBox.innerText = STEP[questionIndex - 1].question; // STEP 객체 배열 0번째부터
  typeFButton.innerText = STEP[questionIndex - 1].typeFButton;
  typeBothButton.innerText = STEP[questionIndex - 1].typeBothButton;
  typeTButton.innerText = STEP[questionIndex - 1].typeTButton;
  questionIndex += 1; // 다음 문항 번호
}

// 다음 페이지 프로그레스바 진행상황과 현재 문항 수 바뀌도록하는 함수
function changeProgressBar(questionIndex) {
  const progressBar = document.getElementById("progressBar");
  const questionCount = document.getElementById("questionCount");
  questionCount.innerHTML = `${questionIndex} / 10`; // 현재 문항 수 표시
  const progressText = document.getElementById("progressText");

  let currentText = parseInt(progressText.innerText);
  let currentValue = parseInt(progressBar.value);

  let newValue = currentValue + 10;
  let newText = currentText + 10;

  progressBar.value = newValue;
  progressText.innerText = newText + "%";

  if (newValue <= 30) {
    progressBar.classList.remove("orange-color", "green-color");
    progressBar.classList.add("red-color");
  } else if (newValue <= 70) {
    progressBar.classList.remove("red-color", "green-color");
    progressBar.classList.add("orange-color");
  } else {
    progressBar.classList.remove("red-color", "orange-color");
    progressBar.classList.add("green-color");
  }
}

// 선택지 버튼을 누르면 다음 페이지로 넘어가는 goNextPage 함수 호출
typeFButton.addEventListener("click", function () {
  goNextPage(typeFButton.id);
});
typeBothButton.addEventListener("click", function () {
  goNextPage(typeBothButton.id);
});
typeTButton.addEventListener("click", function () {
  goNextPage(typeTButton.id);
});

// 결과
function resultDisplay() {
  let encodedValue = encodeURIComponent(f_Score);
  window.location.href = "resultPage.html?value=" + encodedValue;
}
