const questions = [

{
question:"Which language runs in a web browser?",
options:["Python","Java","JavaScript","C++"],
answer:2
},

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyperlinks Text Mark",
"Home Tool Markup Language"
],
answer:0
},

{
question:"Which CSS property changes text color?",
options:["font-style","color","background","text-size"],
answer:1
},

{
question:"Which HTML tag creates a hyperlink?",
options:["<a>","<link>","<href>","<url>"],
answer:0
},

{
question:"Which company developed JavaScript?",
options:["Microsoft","Netscape","Google","IBM"],
answer:1
},

{
question:"Which HTML tag displays images?",
options:["<image>","<img>","<src>","<picture>"],
answer:1
},

{
question:"Which symbol is used for comments in JavaScript?",
options:["#","//","<!-- -->","**"],
answer:1
}

];

let current = 0;
let score = 0;
let selected = -1;
let answers = [];

function loadQuestion(){

let q = questions[current];

document.getElementById("question").innerText =
"Question "+(current+1)+" : "+q.question;

for(let i=0;i<4;i++){
document.getElementById("opt"+i).innerText=q.options[i];
}

// reset selected class from all options
for(let j=0; j<4; j++){
document.getElementById("opt"+j).classList.remove("selected");
}

selected=-1;
}

function selectAnswer(i){

// remove selected from all options

for(let j=0; j<4; j++){

document.getElementById("opt"+j).classList.remove("selected");

}

selected = i;

// add selected class to the clicked option

document.getElementById("opt"+i).classList.add("selected");

}

function nextQuestion(){

if(selected===questions[current].answer){
score++;
}

answers.push(selected);

current++;

if(current<questions.length){
loadQuestion();
}
else{

let message="";

if(score==7)
message="🏆 Excellent! Perfect Score!";
else if(score>=5)
message="👏 Great Job!";
else if(score>=3)
message="👍 Good effort!";
else
message="💪 Keep practicing!";

document.getElementById("quiz").style.display="none";

let review = "Your Score: "+score+" / "+questions.length+"<br>"+message+"<br><br>Review:<br>";

for(let i=0; i<questions.length; i++){

let q = questions[i];

let userAns = answers[i];

let correctAns = q.answer;

let userAnsText = userAns == -1 ? "No answer selected" : q.options[userAns].replace(/</g, '&lt;').replace(/>/g, '&gt;');

let status = userAns == -1 ? "No answer" : (userAns === correctAns ? "Correct" : "Wrong");

review += "Question "+(i+1)+": "+q.question+"<br>Your answer: "+userAnsText+"<br>Correct answer: "+q.options[correctAns].replace(/</g, '&lt;').replace(/>/g, '&gt;')+"<br>"+status+"<br><br>";

}

document.getElementById("result").innerHTML = review;

document.getElementById("restart").style.display="inline-block";

}

}

function restartQuiz(){

current=0;
score=0;
answers = [];

document.getElementById("quiz").style.display="block";
document.getElementById("restart").style.display="none";
document.getElementById("result").innerHTML="";

loadQuestion();

}

loadQuestion(); 