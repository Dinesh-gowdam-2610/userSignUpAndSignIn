// Calling Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
const collection_structure = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});
