const mongoose = require('mongoose');

const cryptoSchrema = new mongoose.Schema({
    title: String,
    description:String,
    toUSD:Number,
    image_url:String
  });

  const userSchema = new mongoose.Schema({
    email:String,
    crypto:[cryptoSchrema]
  });

  const Users = mongoose.model('Users', userSchema);


  function seedFunction(){
      const user1=new Users({
          email:'obadanaser135@gmail.com',
          crypto:[{
              'title':'test',
              'description':'description',
              'toUSD':34,
              'image_url':'https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg'



          }]
          
      })
      user1.save();
      const user2=new Users({
        email:'v.salvatore7.gs@gmail.com',
        crypto:[{
            'title':'test',
            'description':'description',
            'toUSD':34,
            'image_url':'https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg'



        }]
        
    })
    user2.save();
  }


  module.exports={Users,seedFunction}