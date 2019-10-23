const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require("@sendgrid/mail");
const PORT = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: Working')
});

/**
 * OLD API KEY
 * 
 * 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
 * 
 * NEW API KEY
 * 
 * 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
 */


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sgMail.setApiKey('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');
    const msg = {
        to: 'marcial9595@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sgMail.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

app.listen(PORT);