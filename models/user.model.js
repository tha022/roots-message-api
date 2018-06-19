let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

let UserSchema = new mongoose.Schema({
    login: String,
    password: String,
    message: String,
    link: String
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose('User', UserSchema);

module.exports = User;
