import mongoose from "mongoose";

const lenderSchema = new mongoose.Schema({
    amount: {
        type: Number,
        trim: true,
        required: true,
    },
    
    duration: {
        type: String,
        trim: true,
        required: true,
        index: true,
    },
    upi_id: {
        type: String,
        required: true,
    },
});

const Lender = mongoose.model('send', lenderSchema);

export default Lender;