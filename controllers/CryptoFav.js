const {Users}=require('../models/MainSchema');


function addData(req,res){
    const {email}=req.body;
    const {title,image_url,toUSD,description}=req.body;

    Users.find({email:email},(err,favData)=>{
        if(err){
            res.send('this is an error');
        }
        else{
            favData[0].crypto.push({
                title:title,
                image_url:image_url,
                toUSD:toUSD,
                description:description


            })
            favData[0].save();
            res.send(favData[0].crypto);
        }
    })
}


function getData(req,res){
    const {email}=req.query;
    Users.find({email:email},(err,data)=>{
        if(err){
            res.send('this is an error');
        }
        else{
            res.send(data);
        }
    })
}

function deleteData(req,res){
    const {email}=req.query;
    const id=req.params.index;

    Users.findOne({email:email},(err,data)=>{
        data.crypto.spice(id,1);
        data.save();
        res.send(data);
    })
}


function updateData(req,res){
    const id=req.params.index;
    const {title,image_url,toUSD,description}=req.body;

    Users.findOne({email:emai},(err,afterUpdate)=>{
    if(err){
        res.send('this is an error');

    }


    else{
        const updatedData={
            title:title,
            image_url:image_url,
            toUSD:toUSD,
            description:description

        }
        afterUpdate.crypto.splice(id,1,updatedData);
        afterUpdate.save();
        res.send(afterUpdate.crypto);
    }
})
}


module.exports={addData,getData,deleteData,updateData}