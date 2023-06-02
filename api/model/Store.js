import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    currencies: {
      type: Array,
    },
    id: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("details", Schema);
