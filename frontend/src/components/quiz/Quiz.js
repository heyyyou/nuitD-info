import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameOver from "./GameOver";

const QuizWindow = styled.div`
  text-align: center;
  font-size: clamp(20px, 2.5vw, 24px);
  margin-top: 10vh;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2em auto;

  @media screen and (min-width: 1180px) {
    width: 50%;
  }
`;

const Option = styled.button`
  display: block;
  border: 1px solid #616a94;
  border-radius: 15px;
  padding: 15px 30px;
  text-decoration: none;
  color: #616a94;
  background-color: #161a31;
  transition: 0.3s;
  font-size: 1em;
  outline: none;
  user-select: none;
  margin-top: 1em;
  cursor: pointer;

  @media screen and (min-width: 1180px) {
    &:hover {
      color: white;
      background-color: #616a94;
    }
  }
`;

const Question = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };
  const results = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Comment se transmet la Sida ?
			`,
      correct_answer:
        "Contact direct avec une muqueuse ou des lésions cutanées.",
      incorrect_answers: [
        `En mangeant un champignon.`,
        `En se tenant la main.`,
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Je viens d'être exposer à une IST il y a moins de 48h, que dois-je faire ?
	  `,
      correct_answer:
        "Rendez-vous au urgence , un traitement post-exposition (TPE) peut empêcher une contamination",
      incorrect_answers: [
        `Détendez-vous en faisant un poirier dans votre cuisine`,
        `Aller à la pharmacie et commander une boite de doliprane`,
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Je viens d'être exposer à une IST il y a plus de 48h, que dois-je faire ?`,
      correct_answer: "Rendez-vous au urgence , un traitement post-exposition (TPE) peut encore même après 48h empêcher une contamination",
      incorrect_answers: [
        `Attendez encore un peu, il y a moyen que vous passiez dans le Guinness Book des records`,
        `Seul un test de dépistage du VIH permettra ensuite de savoir si vous avez été contaminé-e ou pas`,
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Comment se protéger des IST ?`,
      correct_answer: "Toujours utiliser un préservatif en bon état",
      incorrect_answers: [`Garder son masque durant l'acte sexuel`, `Ne surtout pas faire de dépistage régulier`],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Quels sont les premiers symptomes d'une IST ?`,
      correct_answer: "Syndrome viral aigü : fièvre, céphalées, malaise, tachycardie, douleurs articulaires et courbatures, asthénie, polyadénopathie",
      incorrect_answers: [`Une envie folle de manger une soupe au champignon`, `Aucun il faut faire un test`],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Quels sont les risques d'avoir une IST ?`,
      correct_answer: "Certaines IST peuvent toutefois entraîner à long terme des cancers ou une stérilité",
      incorrect_answers: [`Tu ne risques rien t'en fais pas`, `Tu n'auras plus jamais besoin de capote`],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Comment diagnostiquer une IST ?`,
      correct_answer: "Aller à l'hopital pour être soumis à des tests",
      incorrect_answers: [`Il faut frotter une serviette si elle change de couleur tu as une IST`, `Utiliser un test de grossesse`],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Que signifie IST ?`,
      correct_answer: "Infection sexuellement transmissible",
      incorrect_answers: [`Indice de sécheresse terrienne`, `Interuption soudaine de transmission`],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: `Quelle est l'IST la plus fréquente chez les jeunes ?`,
      correct_answer: "Chlamydiae",
      incorrect_answers: [
        `Herpès génital`,
        `VIH`,
      ],
    },
  ];
  const response_code = 0;

  // const Questions = {
  // 	"response_code": 0,
  // 	"results": [
  // 		{
  // 			"category": "Science: Computers",
  // 			"type": "multiple",
  // 			"difficulty": "easy",
  // 			"question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
  // 			"correct_answer": "Final",
  // 			"incorrect_answers": [
  // 				"Static",
  // 				"Private",
  // 				"Public"
  // 			]
  // 		},
  // 		{
  // 			"category": "Science: Computers",
  // 			"type": "multiple",
  // 			"difficulty": "easy",
  // 			"question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
  // 			"correct_answer": "Binary",
  // 			"incorrect_answers": [
  // 				"JavaScript",
  // 				"C++",
  // 				"Python"
  // 			]
  // 		},
  // 		{
  // 			"category": "Science: Computers",
  // 			"type": "multiple",
  // 			"difficulty": "easy",
  // 			"question": "What is the domain name for the country Tuvalu?",
  // 			"correct_answer": ".tv",
  // 			"incorrect_answers": [
  // 				".tu",
  // 				".tt",
  // 				".tl"
  // 			]
  // 		},
  // 		{
  // 			"category": "Science: Computers",
  // 			"type": "multiple",
  // 			"difficulty": "easy",
  // 			"question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
  // 			"correct_answer": "Green",
  // 			"incorrect_answers": [
  // 				"Red",
  // 				"Blue",
  // 				"Yellow"
  // 			]
  // 		},
  // 		{
  // 			"category": "Science: Computers",
  // 			"type": "multiple",
  // 			"difficulty": "easy",
  // 			"question": "This mobile OS held the largest market share in 2012.",
  // 			"correct_answer": "iOS",
  // 			"incorrect_answers": [
  // 				"Android",
  // 				"BlackBerry",
  // 				"Symbian"
  // 			]
  // 		}
  // 	]
  // }
  useEffect(() => {
    setQuiz(
      results.map((item) => ({
        question: item.question,
        options: shuffle([...item.incorrect_answers, item.correct_answer]),
        answer: item.correct_answer,
      }))
    );
  }, []);

  return (
    <QuizWindow>
      {quiz[number] && (
        <>
          <Question
            dangerouslySetInnerHTML={{ __html: quiz[number].question }}
          ></Question>

          <Options>
            {quiz[number].options.map((item, index) => (
              <Option
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={pickAnswer}
              ></Option>
            ))}
          </Options>
        </>
      )}
      {number === 9 && <GameOver pts={pts} />}
    </QuizWindow>
  );
};

export default Quiz;
