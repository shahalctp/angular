// export express
const { request } = require('express')
const express=require('express')  
const dt=require('./loginservice')
const db=require('./depositservice')
const { Data } = require('./db')
const jwt = require('jsonwebtoken')
const cors=require('cors')
// app creation
const app=express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'
}))

// resolving http request
app.get('/get',(req,res)=>{
    res.status(405).send("this is get method")

})

const appMiddleware=(req,res,next)=>{
console.log("Application Specific Middle")
next()
}
///using middleware
app.use(appMiddleware)


const jwttokenmiddleware=((req,res,next)=>{
    try{
        const token=req.headers["x-access-token"]
        console.log("TOKEN:",token)

        const data=jwt.verify(token,"supersecretkey@123")

        console.log("datacno:",data.currentaccountnumber)
        if(req.body.acno==data.currentaccountnumber){
            console.log("NEXT test")
            next()
        }
    }
    catch{
        return{
            statusCode:400,
            status:false,
            message:"Login First"

        }
    }
})


app.post('/post',(req,res)=>{
    res.send("this is post method")
})
app.post('/register',(req,res)=>{
    dt.register(req.body.acno,req.body.uname,req.body.password)
    .then(Data=>{

    if(Data){
        res.status(Data.statusCode).json(Data)
    }
    })
})
app.post('/login',(req,res)=>{
    
    dt.login(req.body.acno,req.body.password)
    .then(Data=>{
    if(Data){
        res.status(Data.statusCode).json(Data)
    }

})})

app.post('/deposit',jwttokenmiddleware,(req,res)=>{
    db.depo(req.body.acno,req.body.password,req.body.amount)
    .then(Data=>{
        if(Data){
            res.status(Data.statusCode).json(Data)
        }
})
})
app.post('/withdraw',jwttokenmiddleware,(req,res)=>{
    db.withdraw(req.body.acno,req.body.password,req.body.amount)
    .then(Data=>{
    if(Data){
        res.status(Data.statusCode).json(Data)
    }})
})

app.post('/transaction',(req,res)=>{
        db.transaction(req.body.acno)
        .then(Data=>{
        if(Data){
            res.status(Data.statusCode).json(Data)
        }})
    })
app.listen(3001,()=>{
    console.log("server listening to port number 3001")
})