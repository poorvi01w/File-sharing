const router =require('express').Router();
const multer = require('multer');
const path =require('path');
const File= require('../models/files');
const { v4: uuidv4 } = require('uuid');


// basic config of multer
let storage = multer.diskStorage({

    destination: (req, file, cb) => cb(null, 'uploads/') ,

    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
              cb(null, uniqueName);
    } ,
})
let upload =multer({

storage:storage,
limit:{filesize:1000000 * 100},
   //100 mb limit


}).single('myfile');    // name from insomnia   

//because single file uplaod karni hai
router.post('/',(req,res) =>{

   
    //store the file
upload(req,res, async (err) =>{
     //validate request
     if(!req.file){
        return res.json({error:'all fields required'});
    }
    
    
    if(err){
        return res.status(500).send({error:err.message})
    }

 //store into databse
const file= new File({
    filename: req.file.filename,
    uuid: uuidv4(),
    path: req.file.path,
    size: req.file.size

});
const response= await file.save();   //to save the file
return res.json({file: `${process.env.APP_BASE_URL}/files/${response.uuid}`})

//response
});


});


module.exports = router;