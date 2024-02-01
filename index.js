const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const port = 3000

app.get('/hello', (req, res)=>{
    res.status(200).json({message: 'hello world!'});
})

app.post('/login', (req, res)=>{
    // console.log(req.body)
    const { mobile, password} = req.body;
    console.log({
        mobile: mobile ,
        password: password
    })
    const userMobile= 7702145910;
    const userPassword = "sharath123"

    if(mobile === userMobile && password === userPassword){
        console.log("login successful")
        res.status(200).json({message:"login success"})
    }else{
        console.log("login failed")
        res.status(401).json({message:"login failed"});
    }
})
app.listen(port, ()=> console.log('listening on port ' + port))