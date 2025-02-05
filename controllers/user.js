const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.redirect("/");
  } catch (error) {
    if (error.code === 11000) {
      return res.render("signup", {
        error: "Email already exists",
      });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.render("login", {
        error: "Invalid Username or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("login", {
        error: "Invalid Username or Password",
      });
    }

    const token = setUser(user._id, user);
    res.cookie("uid", token);
    return res.redirect("/");
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
