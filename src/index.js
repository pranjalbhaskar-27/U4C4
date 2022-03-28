const express= require("express")
const app= express()
app.use(express.json()) 

todoController=require("./controllers/Todo.controller") 

const {register,login}=require("./controllers/auth.controller")

app.post("/register",register)
app.post("/login",login)
app.use("/todos",todoController)

module.exports=app
