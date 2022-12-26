const DATA = [
  {
    question: "Do you know this place?",
    imageUrl: "https://www.quizexpo.com/wp-content/uploads/2020/05/17018426-1024x591.jpg",
    answers: [
      { id: "A", value: "A" },
      { id: "B", value: "B" },
    ],
  },
  {
    question: "What is this place?",
    imageUrl: "https://www.quizexpo.com/wp-content/uploads/2020/05/maxresdsafafefault-1024x592.jpg",
    answers: [
      { id: "A", value: "A" },
      { id: "B", value: "B" },
    ],
  },
  {
    question: "What is this cool?",
    imageUrl: "https://www.quizexpo.com/wp-content/uploads/2020/05/maxresdsafafefault-1024x592.jpg",
    answers: [
      { id: "A", value: "A" },
      { id: "B", value: "B" },
    ],
  },
  {
    question: "how is this ?",
    imageUrl: "https://www.quizexpo.com/wp-content/uploads/2020/05/maxresdsafafefault-1024x592.jpg",
    answers: [
      { id: "A", value: "A" },
      { id: "B", value: "B" },
    ],
  }
];

let qzData = JSON.parse(sessionStorage.getItem("quizdata"));

let count = parseInt(sessionStorage.getItem('count'));
if (sessionStorage.getItem('quizdata')==null) {qzData = []};
if (sessionStorage.getItem('count')==null) {count = 0};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("#q-text").innerText = DATA[count].question
    document.querySelector("#q-image").src = DATA[count].imageUrl
    document.querySelector(".quiz-answer-list").innerHTML = DATA[count].answers.map(a=>{
      return `<li data-answer-id="${a.id}" class="quiz_answer not-selected-li"> <span class="quiz_answer-inner">
                                
                  <span class="quiz_answer-inner-label"><span class="textFitted  textFitAlignVert"
                          style="display: inline-block; font-size: 26px; height: 47px;">
                          <p>${a.value}</p>
                      </span></span>
              </span>
            </li>`
    }).join('')

    // progressbar 
    document.querySelector(".cssProgress-bar").style.width = `${(count*100)/DATA.length}%`
    document.querySelector("#pb-cur-q").innerText = count
    document.querySelector("#pb-total-q").innerText = DATA.length
    
    // answering logic
    let answersArr = document.querySelectorAll(".quiz_answer");
    answersArr.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        answersArr.forEach((answer) => {
          answer.classList.remove("selected-li")
        })
        answer.classList.add("selected-li")
      });
    });

    // form handling
    let form = document.querySelector("#qz-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      let selectedAnswer = form.querySelector('.selected-li')
      if (selectedAnswer) {
        qzData.push(selectedAnswer.dataset.answerId)
        sessionStorage.setItem("quizdata", JSON.stringify(qzData));
        if (count<DATA.length-1) {
          sessionStorage.setItem("count", ++count);
          
          // e.currentTarget.submit()
          window.location.reload()
        } else {
          sessionStorage.setItem("quizdata", JSON.stringify(qzData));
          // window.location = ('/asdf')

          console.log('done');
        }
      } else {
        alert('please select an answer')
      }
    });

  },
  false
);