const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

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

fetch("https://chatbot-backbdd.onrender.com/api/v1/dialogs")
.then(response=>response.json())
.then(({data})=>{
    console.log(data);
    data.forEach(dialog => {
        datalist.innerHTML += `<option value="${dialog.question}">`
    })

    inputdialog.addEventListener("change", e=>{
        question.innerHTML=document.querySelector(".form-question").value
        data.forEach(dialog =>{
            if(e.target.value === dialog.question){
                console.log(dialog.answer)
                answer.innerHTML = dialog.answer
            }
        })
    })
})
.catch(error=>console.log(error))

const chuck = document.getElementById("chuck")
fetch("https://api.chucknorris.io/jokes/random")
.then(response =>response.json())
.then(data=>chuck.innerHTML = data.value)
.catch(error => console.log(error))


const data = fetchUrl("https://api.chucknorris.io/jokes/random")
.then(data => console.log("then", data))
