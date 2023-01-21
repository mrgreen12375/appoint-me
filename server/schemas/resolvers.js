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
    //Searches for all users
    users: async () => {
      return User.find();
    },
    //Searches a specific user
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("appointments");
    },
  },
  Mutation: {
    //addUser tested and working
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    //login tested and working
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("User not found");
      }
      const correctpw = await user.isCorrectPassword(password);
      if (!correctpw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
    //removeUser tested and working
    //try to implement jwt here so that remove user only works when logged in
    removeUser: async (parent, { email, password }) => {
      const user = User.findOneAndDelete(
        {
          email: email,
        },
        { password: password }
      );
      return user;
    },
    createAppointment: async (parent, { input }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointments: input } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateAppointment: async (parent, { appointID }, context) => {
      if (context.user) {
        const appt = await User.findOneAndUpdate({
          _id: context.user._id,
        });
      }
    },
    deleteAppointment: async (parent, { appointID }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appointments: { _id: appointID } } },
          { new: true }
        );
      }
      throw new AuthenticationError("Couldnt get context.user!");
    },
  },
};

module.exports = resolvers;
//cant figure out how to incorporate context in apollo server sandbox
