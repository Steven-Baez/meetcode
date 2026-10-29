const { model, Schema } = require('mongoose');

const SubmissionSchema = new Schema(
    // definition
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        problemId: { type: String, required: true },
        // trim removes space from the beginning and end so we don't store unnecessary whitespace
        solution: { type: String, required: true, trim: true },
    },
    // options
    {
        // automatically saves createdAt and updatedAt, which is needed for future reference
        timestamps: true
    }
);

module.exports = model('Submission', SubmissionSchema);