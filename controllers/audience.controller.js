const AudienceService = require('../services/audience.service');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const smtpTransport = require('nodemailer-smtp-transport');

_this = this;


exports.createAudience = async function(req, res, next){
    let audience = {
        name: req.body.name,
        surname: req.body.surname,
        email:  req.body.email,
        country: req.body.country,
        city: req.body.city,
        ageFrom: req.body.ageFrom,
        ageTo: req.body.ageTo,
        gender: req.body.gender,
        interests: req.body.interests,
        jobs: req.body.jobs,
        platform: req.body.platform,
        login: req.body.login,
        password: req.body.password,
        message: req.body.message,
        link: req.body.link,
        price: req.body.price,
        timeOfCampaign: req.body.timeOfCampaign,
        organicReach: req.body.organicReach
    };
    //sending message
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Surname: ${req.body.surname}</li>
      <li>Date: ${req.body.date}</li>
      <li>Email: ${req.body.email}</li>
      <li>Country: ${req.body.country}</li>
      <li>City: ${req.body.city}</li>
      <li>Age from ${req.body.ageFrom} to ${req.body.ageTo}</li>
      <li>Gender: ${req.body.gender}</li>
      <li>Interests: ${req.body.interests}</li>
      <li>Jobs: ${req.body.jobs}</li>
      <li>Platform: ${req.body.platform}</li>
      <li>Login: ${req.body.login}</li>
      <li>Password: ${req.body.password}</li>
      <li>Link: ${req.body.link}</li>
      <li>Price: ${req.body.price}</li>
      <li>Time of campaign: ${req.body.timeOfCampaign}</li>
      <li>Organic reach: ${req.body.organicReach}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    const generator = xoauth2.createXOAuth2Generator({
        user: 'wilsonb2387@gmail.com',
        clientId: '567470633695-729521umur47nmskkdrmbshbj43dpc7p.apps.googleusercontent.com',
        clientSecret: '5k5SZk2EMbu4VI4iq_QGBcUp',
        refreshToken: '1/zoWynEocJZlisG_X3_fkgpt5whovB0oz27FPuhwYGzI',
    });


    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            xoauth2: generator,
        },
    }));

    // setup email data with unicode symbols
    const mailOptions = {
        from: 'wilsonb2387@gmail.com', // sender address
        to: 'akaaa1606@gmail.com, yossiegro@gmail.com', // list of receivers
        subject: 'Roots project', // Subject line
        html: output// plain text body
    };


    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });



    try{
        let createdAudience = await AudienceService.createAudience(audience);
        return res.status(201).json({status: 201, data: createdAudience, message: "Succesfully Created Audience"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Audience Creation was Unsuccesfull"})
    }
};

