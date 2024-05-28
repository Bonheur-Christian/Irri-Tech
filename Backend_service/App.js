const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const Farmer = require('./models/userModel')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = 4041;

const url = 'mongodb://localhost:27017/Farmers';

mongoose.connect(url)
    .then(() => {
        app.listen(port, () => {
            console.log("Connected to DB.");
        })
    })
    .catch((err) => {
        console.log("Error in connecting to the db.");
    })

app.post('/signup', async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    try {
        const farmerEmail = await Farmer.findOne({ email })
        if (farmerEmail) {
            console.log("email already used");
        } else {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);//generating random text to be assigned to the password before hashing
            hashedPassword = await bcrypt.hash(password, salt)
            // const farmerDetails = [{ name, email, hashedPassword }]

            if (!name || !email || !password) {
                console.log("plz fill all the given fields");
            } else {
                const newFarmer = new Farmer({
                    name: name,
                    password: hashedPassword,
                    email: email
                })

                newFarmer.save()
                    .then((response) => {
                        res.status(200).json(response)
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "Error in saving farmer into the databasecd " })
                    })
            }
        }
    } catch (err) {
        console.log(err);
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        var farmer = await Farmer.findOne({ email });
        if (!farmer) {
            return res.status(400).send("Invalid credentials");
        } else {
            res.status(200).json({ message: "User found" })
        }
        const isMatch = await bcrypt.compare(password, farmer.hashedPassword);
        if (!isMatch) {
            return res.status(400).json("Invalid credentials");
        } else {
            const token = jwt.sign(
                { farmer_id: farmer._id },
                'SECRET',
                { expiresIn: "1h" }

            );
            res.cookie("token", token, {
                httpOnly: true
            })
            res.status(200).json({ farmer: "you are now logged in", token: token })
        }
    } catch (err) {
        res.status(500).json({ err: "error in logging in the system", message: err.message })
    }
});

app.get('/farmer', async (req, res) => {
    const { email } = req.body
    try {
        var farmer = await Farmer.findOne({ email })
        console.log(farmer);
        if (farmer) {
            console.log("here");
            res.status(200).json(farmer)
        }
    } catch (err) {
        res.status(500).json("farmer not found")
    }
})

