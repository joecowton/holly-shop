import mongoose, { Schema } from 'mongoose';

var imageSchema = new Schema({
  path: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('image', imageSchema)
