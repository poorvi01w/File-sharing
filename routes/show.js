const router= require('express').Router();
const File = require('../models/files')


//to get data //download page //: signfies that every uuid is unique and is a dynamic parameter
router.get('/:uuid', async (req,res) =>{
//fecting th e aprticular row from db using uuid

try{
const file= await File.findOne({ uuid:req.params.uuid}); //for using await there should be a parent async function
if(!file){
    return res.render('download',{error:'the link has expired'});
}
return res.render('download',{
uuid:file.uuid,
fileName:file.filename,
fileSize:file.size,  
downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
//above cdode is for attahcing th edowload link to dowa=nlaod button
});
} catch(err){
//handling error
return res.render('download',{error:'something went wrong'}); //go to dowloads and render it
}
});
module.exports=router;