const mongoose = require("mongoose");
const fs = require("node:fs");
const path = require("node:path");

const defaultAvatarPath = path.join(__dirname, "default-avatar.png");
const defaultAvatar = fs.readSync(defaultAvatarPath);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 32
    },
    lastName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 32
    },
    avatar: {
        type: Buffer,
        default: defaultAvatar,
        required: false
    },
    role: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 16
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 64
    },
    birthDate: {
        type: Date,
        required: true,       
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;


