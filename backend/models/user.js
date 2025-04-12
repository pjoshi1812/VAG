import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userType: { type: String, enum: ['artist', 'visitor'], required: true },
  password: { type: String, required: true },
  bio: { type: String }
});

export default mongoose.model('User', userSchema);
