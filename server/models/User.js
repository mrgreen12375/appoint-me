const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const appointSchema = require("./Appointment");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      reqired: true,
      match: [/.+@.+\..+/, "please use a valid email address"],
    },
    password: {
      type: String,
      requred: true,
    },
    appointments: [appointSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//hash password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

//validate password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("appointmentCount").get(function () {
  return this.appointments.length;
});

const User = model("User", userSchema);

module.exports = User;
