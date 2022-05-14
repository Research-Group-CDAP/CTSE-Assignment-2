import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    mobileNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
    
});

const User = mongoose.model("User", UserSchema);
export default User;