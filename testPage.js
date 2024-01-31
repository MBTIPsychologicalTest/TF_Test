const typeFButton = document.getElementById("1");
const typeBothButton = document.getElementById("2");
const typeTButton = document.getElementById("3");
const progressBar = document.getElementById("progressBar");
let t_Score = 0;
let f_Score = 0;
let questionIndex = 1; // 몇번 질문인지

// 다음 페이지로 넘어가는 함수 -> 현재 질문에 해당하는 점수 부여하는 함수 호출한 뒤, 다음페이지로 넘어가고 questionIndex + 1, 프로그레스바도 늘어나도록
function goNextPage(buttonId) {
  console.log(f_Score);
  console.log(t_Score);
  if (questionIndex == 1) {
    getScorePage1(buttonId);
    goPage2();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 2) {
    getScorePage2(buttonId);
    goPage3();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 3) {
    getScorePage3(buttonId);
    goPage4();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 4) {
    getScorePage4(buttonId);
    goPage5();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 5) {
    getScorePage5(buttonId);
    goPage6();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 6) {
    getScorePage6(buttonId);
    goPage7();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 7) {
    getScorePage7(buttonId);
    goPage8();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 8) {
    getScorePage8(buttonId);
    goPage9();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 9) {
    getScorePage9(buttonId);
    goPage10();
    questionIndex += 1;
    changeProgressBar(questionIndex);
  } else if (questionIndex == 10) {
    getScorePage10(buttonId);
    questionIndex += 1;
    resultDisplay();
  }
}

// n번째 문항 점수를 흭득하는 함수
function getScorePage1(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 7;
    f_Score += 3;
  } else {
    t_Score += 10;
  }
}
function getScorePage2(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 5;
    f_Score += 5;
  } else {
    t_Score += 10;
  }
}
function getScorePage3(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 7;
    f_Score += 3;
  } else {
    t_Score += 10;
  }
}
function getScorePage4(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 3;
    f_Score += 7;
  } else {
    t_Score += 10;
  }
}
function getScorePage5(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 4;
    f_Score += 6;
  } else {
    t_Score += 10;
  }
}
function getScorePage6(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 3;
    f_Score += 7;
  } else {
    t_Score += 10;
  }
}
function getScorePage7(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 6.5;
    f_Score += 3.5;
  } else {
    t_Score += 10;
  }
}
function getScorePage8(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 5;
    f_Score += 5;
  } else {
    t_Score += 10;
  }
}
function getScorePage9(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 7.5;
    f_Score += 2.5;
  } else {
    t_Score += 10;
  }
}
function getScorePage10(buttonId) {
  if (buttonId == 1) {
    f_Score += 10;
  } else if (buttonId == 2) {
    t_Score += 6;
    f_Score += 4;
  } else {
    t_Score += 10;
  }
}

// n번째 문항 질문과 버튼 내용 바뀌도록
function goPage2() {
  const question = document.getElementById("question");
  question.innerText = "친구가 약속시간보다 30분 늦게 도착했을 때 당신은?";
  typeFButton.innerText = "상황설명보단 사과먼저 하길 바람";
  typeBothButton.innerText = "늦게 온 이유가 타당해도 사과하길 바람";
  typeTButton.innerText =
    "늦게 온 이유부터 물어보고 늦은 이유가 타당하면 이해해줌";
}
function goPage3() {
  const question = document.getElementById("question");
  question.innerText =
    "친구가 “이거 너무 갖고싶은데 돈이 없네.. 살까 말까?”라며 고민을 한다. 당신의 반응은?";
  typeFButton.innerText = "갖고싶으면 사야지 다음달은 아껴쓰자!";
  typeBothButton.innerText = "얼만데?";
  typeTButton.innerText = "어차피 너 돈이니까 마음대로해";
}
function goPage4() {
  const question = document.getElementById("question");
  question.innerText = "취업을 못하고 있는 친구가 있다. 당신의 반응은?";
  typeFButton.innerText =
    "요새 준비하느라 힘들지 ㅠㅜ 지치면 좀 쉬어가면서 준비해보자";
  typeBothButton.innerText =
    "준비는 잘 돼가? 힘들어도 열심히 준비하면 분명 취업할 수 있을거야.";
  typeTButton.innerText = "이력서 몇군데 넣었어?";
}
function goPage5() {
  const question = document.getElementById("question");
  question.innerText =
    '친구가 "어제 자취방에 페인트를 칠했는데 냄새 때문에 너무 힘들어"라고 말한다. 당신의 반응은?';
  typeFButton.innerText =
    "헐 페인트 냄새 독한데 너무 힘들었겠다. 지금은 괜찮아?";
  typeBothButton.innerText =
    "페인트 냄새 몸에 안 좋을텐데 문 활짝 열어 놓고 며칠간 친구 집에서 지내다가 와.";
  typeTButton.innerText = "문 열고 환기해";
}
function goPage6() {
  const question = document.getElementById("question");
  question.innerText =
    "당신이 데이트를 나간 상황, 연인이 갑자기 배탈 난 것 같다고 말할 때 당신은?";
  typeFButton.innerText = "많이 안좋아? 지금 병원 같이 갈까?";
  typeBothButton.innerText = "괜찮아? 너무 힘들면 약 먹고 들어가서 쉬자";
  typeTButton.innerText = "어제 뭐먹었는데?";
}
function goPage7() {
  const question = document.getElementById("question");
  question.innerText =
    "이 식당 너무 와보고 싶었는데 웨이팅이 두시간이래ㅠㅠ 어떡하지?";
  typeFButton.innerText = "(와보고 싶었다고?) 괜찮아 기다리자!";
  typeBothButton.innerText =
    "두시간이나 기다려야된다고? 배고픈데.. 여긴 어때?(다른 곳을 보여줌)";
  typeTButton.innerText = "(시간아까워) 다른데 가자";
}
function goPage8() {
  const question = document.getElementById("question");
  question.innerText = "영화를 보는 중 슬픈장면이 나왔울 때 당신의 반응은?";
  typeFButton.innerText = "주인공 빙의됨. (눈물 왕왕 흘리는 중)";
  typeBothButton.innerText = "슬프긴하지만 눈물을 흘리진 않는다.";
  typeTButton.innerText =
    "이 장면은 억지로 눈물을 끌어내는거야 (치밀한 영화분석)";
}
function goPage9() {
  const question = document.getElementById("question");
  question.innerText =
    '"넌 아는 것도 없으면서 왜 아는 척해?" 라는 말을 들었을 때 당신의 반응은?';
  typeFButton.innerText = "응...? (이미 상처받음)";
  typeBothButton.innerText = "너 말을 왜 그렇게해?";
  typeTButton.innerText = "내가 어떤 부분이 아는게 없어?";
}
function goPage10() {
  const question = document.getElementById("question");
  question.innerText =
    '로봇에게 탑을 쌓으라며 명령한 뒤 쌓은 탑을 다시 무너뜨리라고 지시를 했다. 그때 로봇이 "탑을 열심히 세웠어요. 제발 그러지 말아주세요"라며 사정한다. 하지만 결국 로봇은 지시대로 탑을 무너뜨린다. 이때 당신의 반응은?';
  typeFButton.innerText =
    "로봇 너무 불쌍해 ㅜㅜ 왜 다시 무너뜨리라고 지시하지 인간 나쁘다";
  typeBothButton.innerText = "안쓰럽긴한데 로봇은 지시받은대로 행동해야지.";
  typeTButton.innerText = "로봇 주제에 시키는대로 행동해야지 토를달아?";
}

// 다음 페이지 프로그레스바 진행상황과 현재 문항 수 바뀌도록
function changeProgressBar(questionIndex) {
  const questionCount = document.getElementById("questionCount");
  questionCount.innerHTML = `${questionIndex} / 10`; // 현재 문항 수 표시

  let currentValue = parseInt(progressBar.value);
  currentValue += 10;
  progressBar.value = currentValue;
  if (currentValue <= 30) {
    progressBar.classList.remove("orange-color", "green-color");
    progressBar.classList.add("red-color");
  } else if (currentValue <= 70) {
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
  var encodedValue = encodeURIComponent(f_Score);
  window.location.href = "ResultPage.html?value=" + encodedValue;
}
