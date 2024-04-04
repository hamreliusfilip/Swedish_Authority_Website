import mongoose from "mongoose";

export interface Movie extends mongoose.Document {
  _id: string;
  title: string;
}

/* correspond to a collection in your MongoDB database. */
const MovieSchema = new mongoose.Schema<Movie>({
  title: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
});

const MovieModel = mongoose.models.Movie || mongoose.model<Movie>("Movie", MovieSchema);

export default MovieModel




