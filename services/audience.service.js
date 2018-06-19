let Audience = require('../models/audience.model');

_this = this;

exports.createAudience = async function(audience){

    let newAudience = new Audience({
        name: audience.name,
        surname: audience.surname,
        email: audience.email,
        date: new Date(),
        country: audience.country,
        city: audience.city,
        ageFrom: audience.ageFrom,
        ageTo: audience.ageTo,
        gender: audience.gender,
        interests: audience.interests,
        jobs: audience.jobs,
        platform: audience.platform,
        login: audience.login,
        password: audience.password,
        message: audience.message,
        link: audience.link,
        price: audience.price,
        timeOfCampaign: audience.timeOfCampaign,
        organicReach: audience.organicReach
    });

    try{
        let savedAudience = await newAudience.save();
        return savedAudience;
    }catch(e){
        throw Error("Error while Creating Audience")
    }
};

