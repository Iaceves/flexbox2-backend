const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        email: {type: String, required:true},
        username:{type: String, required:true},
        password: {type: String, required:true},
    }

)

module.exports = userSchema