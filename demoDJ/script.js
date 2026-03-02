const story = [
  {
    type: 'landing',
    title: 'nammala pathi than',
    subtitle: 'Janaki ❤️ DelhiRaj',
    buttonText: 'Begin The Journey 💖'
  },
  {
    type: 'question',
    question: 'what is my name un phone?',
    answer: 'raj'
  },
  {
    type: 'question',
    question: 'four digits of us?',
    answer: '1802'
  },
{
  type: 'question',
  question: 'How i call ?',
  answer: 'ammu'
},
{
  type: 'question',
  question: 'Who proposed 1st?',
  answer: 'raj'
}
  {
    type: 'end',
    text: "Avalothan di dhinakaran mavale 🥂"
  }
  function checkAnswer() {
  const userInput = document.getElementById('answerInput').value.toLowerCase().trim();
  const correctAnswer = story[currentPage].answer.toLowerCase().trim();

  if (userInput.includes(correctAnswer)) {
    nextPage();
  } else {
    alert("Thappu ri venna mavale... 🤔");
  }
}
];

