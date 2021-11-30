let readlineSync = require('readline-sync');
let name = readlineSync.question(" Tell me your name : ");
console.log('\n')
let score = 0;
console.log(`Welcome ${name}, you think you know about movies?`)
console.log('\n')

function QA(question,answer){

 let userAnswer = readlineSync.question(question);

 if(userAnswer.toLowerCase() === answer.toLowerCase()){
   console.log('\n')
   console.log("That is correct!")
   score+=2 ;
   console.log(` Your current score: ${score} `)
   console.log("--------------")
 } else {
   console.log('\n')
   console.log(" That's wrong :( ")
   score-=1 ;
   console.log('\n')
   console.log(`The answer is: ${answer}`)
   console.log(` Your current score: ${score} `)
   console.log("--------------")
 }
}
  console.log('\n')
  console.log(` Your score is: ${score} `)
  console.log("--------------")


let questions = [{
  question : " What's the highest rated movie according to IMDb ",
  answer : "The Shawshank Redemption"
}, {
  question : " What is the highest grossing movie of all time ",
  answer : "Avatar"
},{
  question : " In The Matrix, does Neo take the blue pill or the red pill? ",
  answer : "Red"
}
];

for(i=0; i < questions.length; i++){
  let currentQuestion = questions[i];
  QA(currentQuestion.question,currentQuestion.answer)
};

let mcqs = [
  {
   array : ["Dwayne Johnson","Ryan Reynolds","Ben Affleck","Vin Diesel"],
  question : "Who was the highest paid actor in 2020",
  answer : "Dwayne Johnson"
}, {
  array : ["Nomadland","Hometown","Sense and Sensibility","The Social Network"],
  question : "Chloe Zhao has been conferred with the Oscar Award for which movie?",
  answer : "Attack on Titan"
}
];

function MCQ(question,array,answer){
  let userAnswer = readlineSync.keyInSelect(array,question);
  console.log('\n')
  if(array[userAnswer] === answer){
    console.log('\n')
    console.log("You are right !!");
    score+=2 ;
    console.log(` Your current score: ${score} `)
    console.log("--------------")
  }else{
    console.log('\n')
    console.log(" Oh no that's wrong ")
    console.log(`The answer is: ${answer}`)
    score-=1 ;
    console.log(` Your current score: ${score} `)
    console.log("--------------")
  }
};

for(i=0;i<mcqs.length;i++){
currques = mcqs[i]
MCQ(currques.question,currques.array,currques.answer)
}

if(score>5){
  console.log(`Your final score: ${score}`)
  console.log(`Looks like you know a lot about movies ${name}. Get a life xD`)
}else{
  console.log(`Your final score: ${score}`)
  console.log("Someone here needs to watch more movies")
}