const express = require('express');
const app = express();

const port = 3000

app.get('/hello', (req, res)=>{
    res.status(200).json({message: 'hello world!'});
})
app.listen(port, ()=> console.log('listening on port ' + port))