const tfResultList = document.getElementById('tfResultList');

//로컬스토리지 가져오기
function loadResult(){
  const history = localStorage.getItem("history")
  if(history !== null){
    historyArr = JSON.parse(history)
    displayResult()
  }
}
loadResult();
//기록 보여주기
function displayResult(){
  historyArr.forEach(function(ahistory){
    //progress
    const fProgressBar = document.createElement("PROGRESS")
    fProgressBar.classList.add('fProgressBar')
    fProgressBar.setAttribute("value", ahistory.fresultHistory);
    fProgressBar.setAttribute("max", 100);
    const tProgressBar = document.createElement("PROGRESS")
    tProgressBar.classList.add('tProgressBar')
    tProgressBar.setAttribute("value", ahistory.tresultHistory);
    tProgressBar.setAttribute("max", 100);
    //ul, li
    const addUl = document.createElement('ul')
    addUl.classList.add("ul")
    tfResultList.appendChild(addUl)
    const addIdLi = document.createElement('li')
    const addFLi = document.createElement('li')
    const addTLi = document.createElement('li')

    addIdLi.textContent = ahistory.historyId
    addFLi.textContent = 'F : ' + ahistory.fresultHistory + '%'
    addTLi.textContent = 'T : ' + ahistory.tresultHistory + '%'
    addIdLi.classList.add("idLi")
    addFLi.classList.add("fLi")
    addTLi.classList.add("tLi")
    addUl.appendChild(addIdLi)
    addUl.append(addFLi, fProgressBar)
    addUl.append(addTLi, tProgressBar)
    //window.localStorage.clear();
  })
}