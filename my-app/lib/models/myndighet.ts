import mongoose from "mongoose";

export interface Myndigheter extends mongoose.Document {
  name: string;
  relation: string;
  created : number;
  rule: string;
  info: string;
  logo_url: string;
  epost : string;
  org: string;
  tele : string;
  web : string;
}

/* MyndighetSchema will correspond to a collection in your MongoDB database. */
const Myndigheter = new mongoose.Schema<Myndigheter>({
    name: {
      /* Name of myndighet */
      type: String,
      required: [true, "Please provide the name of the myndighet"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    relation: {
      /* Department */
      type: String,
      required: [true, "Please provide the relation of the myndighet"],
      maxlength: [60, "Owner's Name cannot be more than 60 characters"],
    },
    created: {
      /* Myndighet created */
      type: Number,
      maxlength: [40, "Species specified cannot be more than 40 characters"],
    },
    rule: {
      /* e.g. domstol */
      type: String,
      required: [true, "Please provide the rule of the myndighet"],
    },
    info: {
      /* Info text */
      type: String,
      required: [true, "Please provide info about the myndighet"],
    },
    logo_url: {
      type: String,
    },
    epost: {
      /* Email */
      type: String,
    },
    org: {
      /* Organisation */
      type: String,
      required: [true, "Please provide organisation number"],
    },
    tele: {
      /* Telephone */
      type: String,
    },
    web: {
      /* Web */
      type: String,
    }
  }, {
    collection: 'Myndigheter', // Specify the collection name explicitly
    versionKey: false
  });

export default mongoose.models.Myndighet || mongoose.model<Myndigheter>("Myndighet", Myndigheter);