const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
import{hash,compare} from "bcryptjs"

const UserSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
   
});
UserSchema.pre('save',async function (next){
    if(this.isModified('passowrd')){
        this.password=await hash(this.password,10);
        return next()
    }
    return next()
})

UserSchema.methods.comparePassword = async function(enteredPassword){
    return await compare(enteredPassword,this.password)
}
const User= mongoose.model('Subscriber',subscriberSchema)
module.exports = USer;