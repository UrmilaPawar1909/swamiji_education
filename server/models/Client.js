import {model, Schema} from 'mongoose';

const clientSchema= new Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    mobileno:{
        type:String,
        required:true,
        unique:true
    }
})


const Client = model('Client', clientSchema);

export default Client;