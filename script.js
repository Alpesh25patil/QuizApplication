const registerBtn=document.getElementById("registerBtn")
registerBtn.addEventListener("click",register)
function register(){
    let userName=document.getElementById('username').value
    let email=document.getElementById('email').value
    let password=document.getElementById('userPassword').value
    const userObject={
        userId:Math.random(),
        userName:userName,
        email:email,
        password:password
    }
    store(userObject)
}
function store(userObject)
{
    localStorage.setItem(Math.random(),JSON.stringify(userObject))
}


const addQues=document.getElementById("addquestion")
addQues.addEventListener("click",addQuestion)
function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctOption = document.getElementById('correctOption').value;

    const newQuestion = {
        question,
        options: [option1, option2, option3, option4],
        correctOption: parseInt(correctOption)
    };
    let quizQuestions = JSON.parse(localStorage.getItem('quizQuestions')) || [];
    quizQuestions.push(newQuestion);
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
    displayQuestions();
}


function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    quizQuestions.forEach((q, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${q.question}`;
        questionsList.appendChild(li);
    });
}


const generateLin=document.getElementById("generatelink")
generateLin.addEventListener("click",generateLink)

function generateLink() {
    const link = `${window.location.origin}/quiz.html`;
    const quizLinkElement = document.getElementById('quizLink');
    quizLinkElement.innerHTML = `Quiz Link: <a href="${link}" target="_blank">${link}</a>`;
}
// displayQuestions();
