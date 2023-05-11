const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.json())

app.get('/',middleware, (req, res) => {
  res.send('Hello World!')
})
app.get('/api/v1/dialogs', (req, res) => {
    const dialogs = [
        {
          question : "salut",
          answer : "coucou" 
        },
        {
          question : "ça va ?",
          answer : "oui"
        }
  
      ] 
})
app.post('/api/v1/dialogs', (req, res) => {

    console.log(req.body.question)
    const dialogs = [
      {
        question : "salut",
        answer : "coucou" 
      },
      {
        question : "ça va ?",
        answer : "oui"
      }

    ]

  dialogs.forEach(dialog =>{
if(dialog.question === req.body.question){
    res.status(200).json({Response: dialog.answer})
    
}return
  })
  
    res.status(200).json({message: "pas de réponse à vous apporter"})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function middleware(req,res,next){
    console.log('hi')
    next
} 