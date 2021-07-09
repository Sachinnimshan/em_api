import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    Firstname: {type: String, required: true},
    Lastname: {type: String, required: true},
    Company_Name: {type: String, required: true, unique: true},
    Slug: {type: String, required: true},
    Vendor_ID: {type: String, required: true, unique: true},
    Company_Logo: {type: String, required: true},
    Username: {type: String, required: true, unique: true},
    Password: {type: String, required: true},
    BIR:{type: String, required: true},
    Contact_Number: {type: String, required: true},
    Email: {type: String, required: true, unique: true},
    Status: {type: String, required: true}
},{
    timeStamps: true
});

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;