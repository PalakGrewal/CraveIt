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
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        openingHours: [
            {
              startTime: { type: String, required: true },
              endTime: { type: String, required: true },
            },
          ],
        regularPrice: {
            type: Number,
            required: true,
        },
        discountPrice: {
            type: Number,
            required: true,
        },
        ratings: {
            type: Number,
            default: 0,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;