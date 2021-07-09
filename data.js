import bcrypt from 'bcryptjs';

const data = {
    userData: [
        {
            Firstname: 'Sachin Nimshan',
            Lastname: 'K.G.A',
            Email: 'sachinnimshan@gmail.com',
            Contact_Number: '0779012655',
            Password: bcrypt.hashSync('1234', 8),
            Profile: '/Images/sn.jpg',
            Country: 'Sri Lanka',
            User_ID: 'sachinnimshan',
            Status: 'Mr'
        }
    ],
    vendorData:[
        {
            Firstname: 'Sachin Nimshan',
            Lastname: 'K.G.A',
            Company_Name: 'ABC',
            Slug: 'https://localhost:5000/',
            Vendor_ID: 'vd1000',
            Company_Logo: '/Images/sn.jpg',
            Username: 'sachinnimshan',
            Password: bcrypt.hashSync('1234', 8),
            BIR: 'ABC privated limited',
            Contact_Number: '0779012655',
            Email: 'sachinnimshan@gmail.com',
            Status: 'Mr'
        }
    ]
}



export default data;