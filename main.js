const quiz = {
    "questions": [
        {
            "context": "Op een mooie zondagochtend zit ik op mijn balkon en geniet ik van de rust.<br> Ik heb net de krant gelezen en:",
            "sentence": "Ik [] een kopje koffie.",
            "answer": "drink"
        },
        {
            "context": "De zomervakantie is voorbij",
            "sentence": "De kinderen [] naar school.",
            "answer": "gaan"
        },
        {
            "context": "Ik heb een nieuwe baan gevonden. Ik werk nu als leraar in een middelbare school.<br> Ik vind het leuk om met jongeren te werken en:",
            "sentence": "Zij [] een boek in het Nederlands.",
            "answer": "lezen"
        },
        {
            "context": "Ik organiseer een feestje en ",
            "sentence": "Mijn vrienden [] uit Spanje.",
            "answer": "komen"
        },
        {
            "context": "Volgens mij is er een nieuwe Marvel film schat, kom ",
            "sentence": "Wij [] naar de film vanavond.",
            "answer": "gaan"
        }
    ]
};

let step = 0;

generateQuestion(quiz, step);

function generateQuestion(quiz, step) {
    // grab the first question from quiz object and generate a a div with the sentence
    const firstQuestion = quiz.questions[step].sentence;
    const firstContext = quiz.questions[step].context;

    // replace the [] with an input field
    const firstQuestionWithInput = firstQuestion.replace('[]', `<input type="text" data-answer="${quiz.questions[step].answer}">`);

    const firstQuestionDiv = document.createElement('div');
    firstQuestionDiv.innerHTML = firstQuestionWithInput;

    // get element by id question and replace the innerHTML with the firstQuestionDiv
    document.getElementById('question').innerHTML = firstQuestionDiv.innerHTML;
    document.getElementById('context').innerHTML = firstContext;

    // grab the input field
    const input = document.querySelector('input');

    // on keyup, check if the input value is equal to the random verb
    input.addEventListener('keyup', () => {
        // get data attribute answer from the input field
        const answer = input.getAttribute('data-answer');
        checkVerb(input.value, answer);
    });
}


// check if the input value exists in the verbs array
const checkVerb = (verb, answer) => {
    if (verb === answer) {
        console.log("true");
        // add green background-color to body
        document.body.style.backgroundColor = "#d1Ebd8";

        // settimeout for 1 second
        setTimeout(() => {
            step++;
            generateQuestion(quiz, step);
            document.body.style.backgroundColor = "#Aed8f2";
        }, 500);


    } else {
        console.log("false");
        document.body.style.backgroundColor = "#F2c4de";
        // add jiggle animation to input field
    }
}
