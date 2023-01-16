const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be signed in!");
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("appointments");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("User not found");
      }
      const correctpw = await user.isCorrectPassword(password);
      if (!correctpw) {
        throw new AuthenticationError("Incorrect password!");
      }
    },
    removeUser: async () => {},
    createAppointment: async () => {},
    updateAppointment: async () => {},
    deleteAppointment: async () => {},
  },
};

module.exports = resolvers;
