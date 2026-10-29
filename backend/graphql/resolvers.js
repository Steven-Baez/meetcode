const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Submission = require("../models/Submission");
const problems = require("../problems")

// if this grows past 2-3 types, split it into a dedicated resolvers/ folder with one file per type

// function that creates a user token w/ a expiration of at least 1 day
function createToken(user) {
    return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

// make sure the user is logged in
function requireUser(context) {
    if (!context.userId) { throw new Error('You must be logged in.'); }
    return context.userId;
}

const resolvers = {
    // Sample Hello / ME Query (similar to getters)
    Query: {
        hello: () => 'hello from the meetcode website!',

        me: (parent, args, context) => {
            return context.userId || 'Not logged in';
        },

        problems: () => problems,

        mySubmissions: async (parent, args, context) => {
            const userId = requireUser(context);

            // finds and sorts submissions by newest to oldest
            return Submission.find({ userId }).sort({ createdAt: -1 });
        },
    },

    // Login & Register mutation (similar to setters)
    Mutation: {
        register: async (parent, { username, email, password }) => {
            //TODO: check if an existing user exists

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ username, email, password: hashedPassword });
            return createToken(user);
        },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) throw new Error('User not found.');

            const valid = await bycrpt.compare(password, user.password);
            if (!valid) throw new Error('Invalid password');

            return createToken(user);
        },

        submitSolution: async (parent, { problemId, solution }, context) => {
            const userId = requireUser(context);
            const problem = problems.find((item) => item.id === problemId);

            if (!problem) throw new Error('Problem not found.');
            if (!solution.trim()) throw new Error('Solution can\'t be empty.');

            return Submission.create({ userId, problemId: problem.id, solution });
        },
    },

    Submission: { createdAt: (submission) => submission.createdAt.toISOString(), },
};

module.exports = resolvers;