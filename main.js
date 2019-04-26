const question = document.querySelector(".question");

const url = "https://api.adviceslip.com/advice";

const generateQuestion = function() {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let random = data.slip.advice;
      question.innerHTML = random;
    });
};
