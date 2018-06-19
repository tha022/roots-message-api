let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let AudienceSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    date: Date,
    country: String,
    city: String,
    ageFrom: Number,
    ageTo: Number,
    gender: String,
    interests: [String],
    jobs: [String],
    platform: String,
    login: String,
    password: String,
    message: String,
    link: String,
    price: Number,
    timeOfCampaign: Number,
    organicReach: Number,
});

AudienceSchema.plugin(mongoosePaginate);
const Audience = mongoose.model('Audience', AudienceSchema);

module.exports = Audience;
