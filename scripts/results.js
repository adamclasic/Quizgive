document.addEventListener(
  "DOMContentLoaded",
  function () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let answer = params.answer;

    let resultCont = document.querySelector('.result-cont')
    resultCont.innerHTML = `<p>You're most answered answer is : ${answer}</p>`
    let mailBtn = document.querySelector('#email-btn').addEventListener('click',(e)=>{
      resultCont.style.display = 'block'
      e.preventDefault()
    })
    let skipBtn = document.querySelector('.secondary-btn').addEventListener('click',(e)=>{
      console.log(resultCont.style.display);
      // e.preventDefault()
      resultCont.style.display = 'block'
      
    })

  });
