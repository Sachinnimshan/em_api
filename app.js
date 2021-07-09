import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import userRouter from './routes/user.js';
import vendorRouter from './routes/vendor.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true}));

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.DB_CONN;

const server = http.createServer(app);

mongoose.connect(CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Database Connected"))
.catch((error)=> console.log(error));

app.use('/users', userRouter);
app.use('/vendors', vendorRouter);

if(process.env.NODE_ENV === "production"){
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

server.listen(PORT, ()=> console.log(`server started at ${PORT}`));

app.get('/',(req,res)=>{
res.send("Server is Ready");
});
  
mongoose.set('useFindAndModify', false);
  