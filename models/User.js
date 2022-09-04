const mongoose = require ("mongoose");
const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:Number,required:true},
    isAdmin:{
        type:Boolean,
        default:false,
    }

},
{timestamps:true}
);

module.exports = mongoose.model("User",UserSchema)