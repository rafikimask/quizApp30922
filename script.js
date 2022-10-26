const quizData = [
    {
        question: 'How old is EcmaScript',
        a: '10',
        b: '17',
        c: '26',
        d: 'none of the above',
        correct: 'd'
    }, {
        question: 'Jaga, ipsum dolor sit amet consectetur adipisicing elit',
        a: 'bhf',
        b: '17',
        c: 'ff',
        d: '120',
        correct: 'c' 
    }, {
        question: 'vof, ipsum dolor sit amet consectetur adipisicing elit',
        a: 'hvac',
        b: '17',
        c: 'nnoooadi',
        d: 'ica',
        correct: 'c'
    }, {
        question: 'ufhs, sjf dolor sit amet consectetur adipuzgi0',
        b: '17',
        c: 'baba',
        d: 'vafa',
        correct: 'c'
    }
]

const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    let currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//track answer progress
function getSelected () {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEls.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


//
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener("click", () => {
    //check to see answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;
        }
    }
});

