const mongoose = require('mongoose')
const userSchema = require('../models/user')

const User = mongoose.model('User', userSchema)

module.exports = { User }