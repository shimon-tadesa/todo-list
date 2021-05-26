const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping',  function(req,res){
    return res.send('pong');
});


  

  app.listen(process.env.PORT || 8080 , ()=>{
      console.log('server is listen to ' + (process.env.PORT || 8080));
  });