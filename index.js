const quizData = [
    {
      question: "¿Que es el salario?",
      options: ["Dinero recibido del trabajo realizado", "Ganancia por una inversion", "Dinero recibido por alquilar una propiedad", "Ganancia por posesion de acciones en una empresa"],
      answer: "Dinero recibido del trabajo realizado"
    },
    {
      question: "¿Que es un bono?",
      options: ["Comprar una parte de una empresa", "Prestar dinero a cambio de intereses"],
      answer: "Prestar dinero a cambio de intereses"
    },
    {
        question: "Un simulador de presupuesto nos puede servir para ajustar un presupuesto mensual ",
        options: ["Si", "No"],
        answer: "Si"
      },
      {
        question: "¿Que son los fondos mutuos? ",
        options: ["Fondos que reúnen el dinero de muchos inversores para comprar acciones y bonos", "Son fondos diseñado para guardar dinero y ganar intereses"],
        answer: "Fondos que reúnen el dinero de muchos inversores para comprar acciones y bonos"
      },
      {
        question: "Si heredo una propiedad que no esta en uso...¿Que me conviene más? ",
        options: ["Venderla", "Repararla y construir algo para alquilar"],
        answer: "Repararla y construir algo para alquilar"
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