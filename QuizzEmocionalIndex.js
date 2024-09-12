const quizData = [
    {
      question: "La respiración profunda, la meditación y el yoga son tecnicas de ...",
      options: ["El sueño", "La relajación"],
      answer: "La relajación"
    },
    {
      question: "¿Cuales de estas aplicaciones son buenas para relajarse?",
      options: ["Headspace y Calm", "Tiktok e Instagram"],
      answer: "Headspace y Calm"
    },
    {
        question: "Una buena forma para conectar y aprender de otros en internet es ...",
        options: ["Interactuar en foros de internet hablando de nuestras experiencias y opinar de ciertos temas con otros", "Unirse a foros extremistas donde solo compartan nuestra opinion y critiquen a quienes piensen distinto"],
        answer: "Interactuar en foros de internet hablando de nuestras experiencias y opinar de ciertos temas con otros"
      },
      {
        question: "¿Que ayuda tener un diario de emociones? ",
        options: ["Conectar con personas quienes sienten lo mismo y obtener apoyo", "A reconocer patrones y entender mejor nuestras reacciones"],
        answer: "A reconocer patrones y entender mejor nuestras reacciones"
      },
      {
        question: "¿Cual es un aspecto esencial de las relaciones saludables?",
        options: ["Aprender a expresar nuestros sentimientos de forma clara como respetuosa", "Sacrificarnos haciendo a un lado siempre nuestros pensamientos"],
        answer: "Aprender a expresar nuestros sentimientos de forma clara como respetuosa"
      },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quizz Completado</h1>
      <p>Tu puntaje: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();