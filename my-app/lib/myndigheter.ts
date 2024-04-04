import mongoose, { Document, Model } from "mongoose";

export interface MovieDocument extends Document {
  id: number;
  title: string;
  // Define other properties here if needed
}

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  // Define other schema properties here if needed
});

const Movie = mongoose.models.Movie || mongoose.model<MovieDocument>("Movie", movieSchema);
export default Movie;
