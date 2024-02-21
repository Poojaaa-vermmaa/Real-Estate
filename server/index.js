const express= require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('./db/config');
const Users = require("./db/Users"); 
const Rent = require("./db/Rent");
const Buy = require("./db/Buy");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


//signin
app.post("/userlogin", async (req,res)=>{
    console.log(req.body)
    if(req.body.email && req.body.password){
    let user = await Users.findOne(req.body).select("-password");

    if(user){
       res.send(user);
    }
    else{
        res.send("no user found");
    }
}
    
})

//signup
app.post("/register", async (req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);

})

// subscription
app.post('/sendemail',(req,res) => {
const {email}= req.body;
try {
 const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"poojaverma4743@gmail.com",
        pass:"vrgqreqbjuzwjtlq"
    }

 })
 const mailOption = {
    from: "poojaverma4743@gmail.com",
    to : email,
    subject :"Subscription",
    html:"<h1>You are now a subscriber of Hommie Dommie</h1>"
 }
 transporter.sendMail(mailOption,(error,info)=>{
    console.log("sending email");
    if (error){
        console.log("Error", error)
    }
else{
    console.log("email Send" + info.res)
}
 })
    
} catch (error) {
    res.status(201).json({status:401,error})
}
})


//Rent
app.post('/rent',async (req,res)=>{
    let rent = new Rent(req.body);
    let result = await rent.save();
    res.send(result);
})
app.get('/getrent',async(req,res)=>{
    let rent= await Rent.find();
    res.send(rent);
    console.log(rent);
})

// get by location
app.get("/location", async(req,res)=>{
    const {place} = req.query;
    try{
    const location= await Rent.find({location:place});
    res.json(location);
    }
    catch(error){
        res.status(500).json({error:"failed to fetch"});
    }
});

//buy

app.post('/buy',async(req,res)=>{
    let buy= new Buy(req.body);
    let result = await buy.save();
    res.send(result);
})


// get by location
app.get("/locationbuy", async(req,res)=>{
    const {place} = req.query;
    try{
    const location= await Buy.find({location:place});
    res.json(location);
    }
    catch(error){
        res.status(500).json({error:"failed to fetch"});
    }
});
app.listen(5000, ()=>{
    console.log("server started");
});