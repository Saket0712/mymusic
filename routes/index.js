var express = require('express');
var router = express.Router();
var express = require('nodemailer');
require('../models/enquiry');
var mongoose = require('mongoose');
var Enquiry = mongoose.model('enqs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/z', function(req, res, next) {
  res.render('z', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/albums-store', function(req, res, next) {
  res.render('albums-store', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.get('/y', function(req, res, next) {
  res.render('y', { title: 'Express' });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Express' });
});

router.get('/a', function(req, res, next) {
  res.render('a', { title: 'Express' });
});

router.get('/b', function(req, res, next) {
  res.render('b', { title: 'Express' });
});

router.get('/c', function(req, res, next) {
  res.render('c', { title: 'Express' });
});

router.get('/d', function(req, res, next) {
  res.render('d', { title: 'Express' });
});

router.get('/e', function(req, res, next) {
  res.render('e', { title: 'Express' });
});

router.get('/f', function(req, res, next) {
  res.render('f', { title: 'Express' });
});

router.get('/g', function(req, res, next) {
  res.render('g', { title: 'Express' });
});

router.get('/h', function(req, res, next) {
  res.render('h', { title: 'Express' });
});

router.get('/i', function(req, res, next) {
  res.render('i', { title: 'Express' });
});

router.get('/j', function(req, res, next) {
  res.render('j', { title: 'Express' });
});

router.get('/k', function(req, res, next) {
  res.render('k', { title: 'Express' });
});

router.get('/l', function(req, res, next) {
  res.render('l', { title: 'Express' });
});

router.get('/m', function(req, res, next) {
  res.render('m', { title: 'Express' });
});

router.get('/n', function(req, res, next) {
  res.render('n', { title: 'Express' });
});

router.get('/o', function(req, res, next) {
  res.render('o', { title: 'Express' });
});

router.get('/p', function(req, res, next) {
  res.render('p', { title: 'Express' });
});

router.get('/q', function(req, res, next) {
  res.render('q', { title: 'Express' });
});

router.get('/r', function(req, res, next) {
  res.render('r', { title: 'Express' });
});

router.get('/s', function(req, res, next) {
  res.render('s', { title: 'Express' });
});

router.get('/t', function(req, res, next) {
  res.render('t', { title: 'Express' });
});

router.get('/u', function(req, res, next) {
  res.render('u', { title: 'Express' });
});

router.get('/v', function(req, res, next) {
  res.render('v', { title: 'Express' });
});

router.get('/w', function(req, res, next) {
  res.render('w', { title: 'Express' });
});

router.get('/x', function(req, res, next) {
  res.render('x', { title: 'Express' });
});


router.post('/enquiry', (req, res) => {
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.number}</li>
      
     
      
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'saketbari2015@gmail.com', // generated ethereal user
        pass: 'saketankitsomu'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'saketbari2015@gmail.com', // sender address
      to: 'vivekideapad12@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:gray;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">We Saved Your Enquiry. We will get in touch with you soon </div></body>`); 
  });
});

router.post('/enq', function(req, res) {
  new Enquiry({name : req.body.name, email :
     req.body.email, subject : req.body.subject,
     message: req.body.message}


)
  .save(function(err, Enquiry) {
    console.log('enqs');
    res.send(`<h1> Your Message has been saved<h1>`);
  });
});



module.exports = router;
