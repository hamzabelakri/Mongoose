const mongoose = require("mongoose");
const express = require("express");
const Person = require("./Models/person");
const app = express();
const port = 5000;

mongoose.connect(url, () => {
  console.log("connected successfully");
});
app.listen(port, () => {
  console.log(`the server is running`)
}).catch(() => {
console.log(`the server is failed`);
});

Person.create([
    {
        name:"Samir",
        age:34,
        favoriteFoods:["favFood1","favFood2"]
    },
    {
        name:"Ali",
        age:43,
        favoriteFoods:["favFood3","favFood4"]
    },
    {
        name:"Asma",
        age:19,
        favoriteFoods:["favFood5","favFood6"]
    }
    ])
    .then(() => {
        console.log("saved successfully");
      })
      .catch((error) => {
        console.log("failed")});


    Person.findOne({ name: "Ali" })
        .then((data) => {
          console.log('${data} is found' );
        })
        .catch((error) => {
          console.log('not found')
        });

    Person.findOne({ favoriteFoods: "favFood3" })
        .then((data) => {
          console.log('${data} is found' );
        })
        .catch((error) => {
          console.log('not found')
        });
    

    Person.findOneAndUpdate(
    { name: "Ali" },
    { age: 20},
    { new: true,
      upsert: true,
    }
  ).then((data) => {
    console.log('data has been changed');
});

Person.remove().then(()=>{
    console.log('All documents are deleted successfully')
  })