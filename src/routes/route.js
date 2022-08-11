const express = require('express');
const abc = require('../introduction/intro')
const bca = require('../logger/logger')
const router = express.Router();

let persons  = [ 
{ Name: "PRNC", Age: 28, VotingStatus: False },
{    Name: "Pramod", Age: 27, VotingStatus: False },
{    Name: "Ila",  Age: 28, VotingStatus: False },
{    Name: "Vijeta", Age: 17, VotingStatus: False },
{   Name: "Jagu",   Age: 19,  VotingStatus: False },
{    Name: "Shresth", Age: 2, VotingStatus: False },

router.get('/test-me', function (req, res) 
{
 for(let i=0; i<=persons.length; i++)     
  {    if (persons.age==18)
    let newPerson = persons.age;
console.log(newPersons) 
req.send(persons.age)}  
}

 
module.exports = router;
// adding this comment for no reason