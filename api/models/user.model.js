import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        default: "https://www.google.com/imgres?q=profile%20default%20pic&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2Fz-ppwF62-FuXHMO7q20rrBMZeOnHfx1t9UPkUqtyouuGW7WbeUZECmyeNHAus2Jcxw%3Dw526-h296-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.miniarkano.defaultpfp%26hl%3Den_AU&docid=vbcxB-5DWEY7tM&tbnid=xB5JcLlNDjk7GM&vet=12ahUKEwiiy7KFq5qHAxUtoK8BHTDOCPUQM3oECG0QAA..i&w=297&h=296&hcb=2&ved=2ahUKEwiiy7KFq5qHAxUtoK8BHTDOCPUQM3oECG0QAA"
    }

}, {timestamps : true});

const User = mongoose.model('User', userSchema);

export default User;