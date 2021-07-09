import express from 'express';
import Vendor from '../models/vendor.js';
import data from '../data.js';

const router = express.Router();

router.get('/seed', (async(req,res)=>{
    try{
        await Vendor.deleteMany({});
        const vendors = await Vendor.insertMany(data.vendorData);
        res.send(vendors)
    }catch(err){
        res.status(401).send({message: err.message});
    }
}));

router.get('/', (async(req,res)=>{
    try{
        const vendors = await Vendor.find({});
        res.send(vendors);
    }catch(err){
        res.status(401).send({message: err.message});
    }
}));

router.post('/', (async(req,res)=>{
    const vendor = await Vendor.findOne({Email: req.body.Email});
    if(vendor){
        if(bcrypt.compareSync(req.body.Password, vendor.Password)){
            res.send({
                Firstname: vendor.Firstname,
                Lastname: vendor.Lastname,
                Email: vendor.Email,
                Company_Logo: vendor.Company_Logo,
                Vendor_ID: vendor.Vendor_ID
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid Username or Password'});
}));

router.post('/', (async(req,res)=>{
    const vendor = new Vendor({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Company_Name: req.body.Company_Name,
        Slug: req.body.Slug,
        Vendor_ID: req.body.Vendor_ID,
        Company_Log: req.body.Company_Logo,
        Username: req.body.Username,
        Password: req.body.Password,
        BIR: req.body.BIR,
        Email: req.body.Email,
        Contact_Number: req.body.Contact_Number,
        Status: req.body.Status
    });
    const newvendor= await vendor.save();
    if(newvendor){
        res.send({
            Firstname: newvendor.Firstname,
            Lastname: newvendor.Lastname,
            Email: newvendor.Email,
            Company_Logo: newvendor.Company_Logo,
            Vendor_ID: newvendor.Vendor_ID
        });
    }else{
        res.status(401).send({message: "Something Went Wrong"});
    }
}));



export default router;