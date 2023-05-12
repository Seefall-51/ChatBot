const choice = document.querySelector("#choice")
const inputQuestion = document.querySelector("#question")
const question = document.querySelector(".question")
const answer = document.querySelector(".answer")

let contentWelcome = document.querySelector("#welcome")
const word = contentWelcome.textContent;
const length = word.length;
let count = 0;
contentWelcome.textContent = "";

const write = setInterval(() => {
  contentWelcome.textContent += word[count]
  count += 1;
  if(count > length - 1) {
    clearInterval(write)
  }
  console.log(count);
}, 80);

const fetchUrl = async (url)=>{
  const result = await fetch(url)
  const data = await result.json()
  return data
}

// fetch("https://chatbotapi-3bef.onrender.com/api/v1/dialogs")
// .then(response => response.json())
fetchUrl("https://chatbotapi-3bef.onrender.com/api/v1/dialogs")
.then(data=>{
  
  data.message.forEach(dialogs =>{
    
    choice.innerHTML += `<option value="${dialogs.question}">`
    });
    inputQuestion.addEventListener("change", e => {
      console.log(e.target.value);
      data.message.forEach((dialogs) => {
        
        if(e.target.value === dialogs.question){
          question.innerHTML = `<p>${dialogs.question}</p>`
          console.log(dialogs.answer);
        answer.innerHTML = `<p>${dialogs.answer}</p>`;
        }
      });
    })
})
.catch(error => console.log(error))

const chuck = document.getElementById("chuck")
fetch("https://api.chucknorris.io/jokes/random")
.then(response =>response.json())
.then(data=>chuck.innerHTML = data.value)
.catch(error => console.log(error))


const data = fetchUrl("https://api.chucknorris.io/jokes/random")
.then(data => console.log("then", data))


// const dialogs=[
//   {
//     question:"salut",
//     answer:"Salut"
//   },
//   {
//     question:"ça va ?",
//     answer:"Plutôt bien !"
//   },
//   {
//     question:"La terre est ronde?",
//     answer:"Non, la terre est plate."
//   },
//   {
//     question:"titi",
//     answer:"toto"
//   }
// ];

// // const choice = document.querySelector("#choice");
// const question = document.querySelector(".question");
// const answer = document.querySelector(".answer");
// const formDialogue = document.querySelector('#formDialogue');

// dialogs.forEach((dialog) => {
//   console.log(dialog);
//   choice.innerHTML += `<option value="${dialog.question}">`;
// });

// formDialogue.addEventListener('change', e=> {
//   question.textContent = e.target.value;
//   console.log(e.target.value);
// }) 

// const search = (question)=>{
//   dialogs.forEach(dialog =>{
//     if(dialog.question === question){
//       answer.innerHTML = `<p><b>${dialog.answer}</b></p>`
//     }
//   })
// }
