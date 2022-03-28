// const { findOne } = require("../models/todo.model")
const User = require("../models/user.model")
var jwt = require('jsonwebtoken');



const register=async(req,res)=>{
    try {
        let user=await findOne({email:req.body.email})
        if(user){
            return res.send({message:"Email already exists"})
        }
        user=await User.create(req.body)
        var token = jwt.sign({ user }, 'abhishek')
        return res.send({user,token})

    } catch (error) {
        res.send({message:error.message})
    }
}

const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res.send("wrong email or password")
        }
        const match=user.checkPassword(req.body.password)
        if(!match){
            return res.send("wrong email or password")
        }
        var token = jwt.sign({ user }, 'abhishek')
        return res.send({user,token})
    } catch (error) {
        return res.send({message:error.message})
    }
}

module.exports={register,login}