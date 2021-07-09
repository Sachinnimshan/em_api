import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    Firstname: {type: String, required: true},
    Lastname: {type: String, required: true},
    Email: {type: String, required: true, unique: true},
    Contact_Number: {type: String, required: true},
    Password: {type: String, required: true},
    Profile: {type: String, required: true},
    Country: {type: String, required: true},
    User_ID: {type: String, required: true},
    Status: {type: String, required: true}
},{
    timestamps: true
});

const EmUser = mongoose.model('EmUser', userSchema);

export default EmUser;