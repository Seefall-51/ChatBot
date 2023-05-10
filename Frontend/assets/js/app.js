const dialogs=[
  {
    question:"salut",
    answer:"Salut"
  },
  {
    question:"ça va ?",
    answer:"Plutôt bien !"
  },
  {
    question:"La terre est ronde?",
    answer:"Non, la terre est plate."
  },
  {
    question:"titi",
    answer:"toto"
  }
];

const choice = document.querySelector("#choice");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const formDialogue = document.querySelector('#formDialogue');

dialogs.forEach((dialog) => {
  console.log(dialog);
  choice.innerHTML += `<option value="${dialog.question}">`;
});

formDialogue.addEventListener('change', e=> {
  question.textContent = e.target.value;
  console.log(e.target.value);
}) 

const search = (question)=>{
  dialogs.forEach(dialog =>{
    if(dialog.question === question){
      answer.innerHTML = `<p><b>${dialog.answer}</b></p>`
    }
  })
}
