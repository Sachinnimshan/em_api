import EmUser from '../models/user.js';
import express from 'express';
import data from '../data.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.get('/seed', (async(req,res)=>{
    try{
        await EmUser.deleteMany({});
        const newusers = await EmUser.insertMany(data.userData);
        res.send(newusers);
    }catch(err){
        res.status(401).send({message: err.message});
    }

}));

router.get('/', (async(req,res)=>{
   try{
    const users = await EmUser.find({})
    res.send(users);
   }catch(error){
       res.status(401).send({message: error.message});
   }
}));

router.post('/sign', (async(req,res)=>{
    const user = await EmUser.findOne({Email: req.body.Email});
    if(user){
        if(bcrypt.compareSync(req.body.Password, user.Password)){
            res.send({
                Firstname: user.Firstname,
                Lastname: user.Lastname,
                Email: user.Email,
                Profile: user.Profile,
                User_ID: user.User_ID
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid Username or Password'});
}));

router.post('/register', (async(req,res)=>{
    const user = new EmUser({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Contact_Number: req.body.Contact_Number,
        Password: req.body.Password,
        Profile: req.body.Profile,
        Country: req.body.Country,
        User_ID: req.body.User_ID,
        Status: req.body.Status
    });
    const newuser= await user.save();
    if(newuser){
        res.send({
            Firstname: newuser.Firstname,
            Lastname: newuser.Lastname,
            Email: newuser.Email,
            Profile: newuser.Profile,
            User_ID: newuser.User_ID
        });
    }else{
        res.status(401).send({message: "Something Went Wrong"});
    }
}));


export default router;