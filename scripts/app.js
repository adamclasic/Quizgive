// fill up the qusetions
// ['A1', 'A2', 'A3', 'A4', 'Question', 'NumberOfTheRightAnswer'],
// the last number is the right answer
var arr = [
  ['الراص يطير', 'يا زينة', 'هيا لي بغات', 'قيريبا', ' من هي أغنية الشاب خالد ', '3'],
  ['0', '6', '5', '3', 'كم عدد علامات الساعة التي ضهرت', '2'],
  ['1823', 'a2', 'a3', 'a4', 'do you love traveling?', '4'],
  ['no', 'نعم', 'I hate cats', 'I hate cats', 'do you have a pet?', '2'],
  ['seca1', 'seca2', 'seca3', 'seca4', 'do you hate me?', '2']
];

// url to go after finish
var url = "http://google.com";



let count = sessionStorage.getItem('count');

// document.querySelectorAll('.quiz_answer').forEach(answer=>{
// answer.addEventListener("click", (e)=>{
// console.log('hi');
// document.querySelectorAll('.quiz_answer').forEach(e=>{
//   e.classList.remove("selected-li")
// })
// })
  
// });


document.addEventListener(
  "DOMContentLoaded",
  function () {


    
    let answersArr = document.querySelectorAll(".quiz_answer");
    answersArr.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        answersArr.forEach((answer) => {
          answer.classList.remove("selected-li")
        })
        answer.classList.add("selected-li")
      });
    });
  },
  false
);