import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    amount: {
        type: Number,
        trim: true,
        required: true,
    },
    reason: {
        type: String,
        trim: true,
        required: true,
        index: true,
        lowercase: true
    },
    
    duration: {
        type: String,
        trim: true,
        required: true,
        index: true,
        lowercase: true
    },
    upi_id: {
        type: String,
        required: true,

    },
});

const Borrower = mongoose.model('borrow', borrowSchema);

export default Borrower;