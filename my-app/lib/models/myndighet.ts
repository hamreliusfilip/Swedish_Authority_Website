import mongoose from "mongoose";

export interface Myndigheter extends mongoose.Document {
  name: String;
  relation: String;
  created: Number;
  rule: String;
  info: String;
  logo_url: Buffer;
}

/* MyndighetSchema will correspond to a collection in your MongoDB database. */
const Myndigheter = new mongoose.Schema<Myndigheter>({
    name: {
      /* Name of myndighet */
      type: String,
      required: [true, "Please provide a name for this pet."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    relation: {
      /* Department */
      type: String,
      required: [true, "Please provide the pet owner's name"],
      maxlength: [60, "Owner's Name cannot be more than 60 characters"],
    },
    created: {
      /* Myndighet created */
      type: Number,
      required: [true, "Please specify the species of your pet."],
      maxlength: [40, "Species specified cannot be more than 40 characters"],
    },
    rule: {
      /* e.g. domstol */
      type: String,
    },
    info: {
      /* Info text */
      type: String,
    },
    logo_url: {
      /* binary */
      type: Buffer,
      required: [true, "Please provide an image url for this pet."],
    }
  }, {
    collection: 'Myndigheter' // Specify the collection name explicitly
  });

export default mongoose.models.Myndighet || mongoose.model<Myndigheter>("Myndighet", Myndigheter);