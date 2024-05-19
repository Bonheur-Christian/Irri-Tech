const express = require('express');
const cors = require('cors');
const { connectionToDb, getDb } = require('./db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = 4041;

let db;

connectionToDb((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log("App is running on port", port);
        })
        db = getDb();
    }
})

app.post('/signup', async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    const saltRounds = 5;
    const salt = await bcrypt.genSalt(saltRounds);
    hashedPassword = await bcrypt.hash(password, salt)

    const farmerDetails = [{ name, email, hashedPassword }]

    if (!name || !email || !password) {
        console.log("plz fill all the given fields");
    } else {

        db.collection('farmer')
            .insertMany(farmerDetails)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(500).json({ err: "failed to post data", message: err.message })
            })
    }
})

app.post('/login', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const connection = db.collection('farmer')
        var farmer = await connection.findOne({ email });
        if (!farmer) {
            return res.status(400).send("Invalid credentials");
        } else {
            res.status(200).json({message:"User found"})
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
            // res.redirect("")
        }
    } catch (err) {
        res.status(500).json({ err: "error in logging in the system", message: err.message })
    }
});

