const app = document.getElementById('app');
let currentPage = 0;

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
    question: 'what is our song ?',
    answer: 'Aval'
  },
  {
    type: 'question',
    question: 'How i call ?',
    answer: 'Ammu'
  },
  {
    type: 'question',
    question: 'Who proposed 1st?',
    answer: 'Raj'
  },
  {
    type: 'end',
    text: "Avalothan di dhinakaran mavale 🥂"
  }
];

function renderPage() {
  const page = story[currentPage];
  app.innerHTML = '';

  if (page.type === 'landing') {
    app.innerHTML = `
      <h1>${page.title}</h1>
      <p>${page.subtitle}</p>
      <button onclick="nextPage()">${page.buttonText}</button>
    `;
  }

  if (page.type === 'question') {
    app.innerHTML = `
      <h2>${page.question}</h2>
      <input type="text" id="answerInput" placeholder="Type pannga broo...">
      <br><br>
      <button onclick="checkAnswer()">Submit</button>
    `;
  }

  if (page.type === 'memory') {
    app.innerHTML = `
      <img src="${page.image}">
      <p>${page.text}</p>
      <button onclick="nextPage()">${page.buttonText}</button>
    `;
  }

  if (page.type === 'end') {
    app.innerHTML = `<h1>${page.text}</h1>`;
  }
}

function nextPage() {
  currentPage++;
  if (currentPage < story.length) {
    renderPage();
  }
}

function checkAnswer() {
  const userInput = document.getElementById('answerInput').value.toLowerCase().trim();
  if (userInput === story[currentPage].answer) {
    nextPage();
  } else {
    alert("Thappu ri venna mavale... 🤔");
  }
}

renderPage();