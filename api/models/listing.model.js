import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        menu:{
            type: String,
            required: true,
        }
    }
)