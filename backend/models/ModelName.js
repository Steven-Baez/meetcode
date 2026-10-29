// TODO: this is a template schema

const { model, Schema } = require('mongoose');

const ModelNameSchema = new Schema({
    field1: String,
    field2: Number,
    // tying a document to user: userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// mongoose turns 'ModelName' into a collection named 'modelnames'
module.exports = model('ModelName', ModelNameSchema);