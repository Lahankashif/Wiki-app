import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  query: { type: String, required: true },
  resultsCount: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('History', historySchema);
