const express = require ('express');
const mongoose=require('mongoose');

const app= express();
app.set('port', process.env.PORT || 9000)


const user='mgl';
const password='1234';
const dbname='members-api'
const uri=`mongodb+srv://${user}:${password}@cluster0.zrla6.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true  
   })
   .then(()=>console.log('base de datos creadas'))
   .catch(e => console.log(e))

const routes = require('./routes/routes');



//middlewares
app.use('/members', routes);
app.use(express.json())


app.listen(9000, ()=>{
    console.log('server listen on', app.get('port'))
})

