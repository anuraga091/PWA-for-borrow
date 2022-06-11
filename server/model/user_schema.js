import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        min : 3,
        max: 20
    },
    
    gender: {
        type: String,
        trim: true,
        required: true,
        index: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    
});

const User = mongoose.model('user', userSchema);

export default User;