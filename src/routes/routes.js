const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router()
const membersSchema = require('../models/members')


const jsonParser = bodyParser.json();



routes.get('/',(req, res)=>{
membersSchema.find()
.then((data) => res.json(data))
.catch((error)=>res.json({message:error}));

})

routes.get('/:id',(req, res)=>{
   const {id} =req.params
   membersSchema.findById(id)
   .then((data) => res.json(data))
   .catch((error)=>res.json({message:error}));
})




routes.post('/',jsonParser, (req, res)=>{
const member = membersSchema(req.body)
member
.save()
.then((data)=>{res.json(data)})
.catch((error)=>
   res.json({message:error}))
})
      

routes.put('/:id', jsonParser ,(req, res)=>{
   const {id} =req.params;
   const {name, surname, age, label, description, random} = req.body
   membersSchema.updateOne({_id: id},{ $set: {name, surname, age, label, description, random}})
   .then((data) => res.json(data))
   .catch((error)=>res.json({message:error}));
})

routes.delete('/:id',(req, res)=>{
   const {id} =req.params;
   membersSchema.deleteOne({_id:id})
   .then((data) => res.json(data))
   .catch((error)=>res.json({message:error}));
})

module.exports= routes;