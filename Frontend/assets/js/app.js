const choice = document.querySelector("#choice")
console.log("coucou from apijs")
fetch("https://chatbotapi-3bef.onrender.com/api/v1/dialogs")
.then(response => response.json())
.then(data=>{
  // console.log(data)
  data.message.forEach(dialogs =>{
    // console.log(dialog)
    choice.innerHTML += `<option value="${dialogs.question}">`
  });
})
.catch(error => console.log(error))

const chuck = document.getElementById("#chuck")
fetch("https://api.chucknorris.io/jokes/random")
.then(response =>response.json())
.then(joke=>{
  chuck.innerHTML += `<option value="${response.chuck}">`
  console.log(joke)
})


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
