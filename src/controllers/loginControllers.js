// export const getLogin = (req ,res) => {
//      res.status(200).send("enter credentials");
//  }; or use below which is better
//again camel case is not understood by windows
import User from "../user/loginschema.js";

export function getLogin(req ,res) {
     res.status(200).send("enter credentials");
 };

export async function invalidLogin(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && user.password === password) {
    res.status(200).send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
}

export function welcomeUser(req ,res) {
    res.status(202).send("welcome user your account is created");
};

export function updateAccount(req ,res) {
    res.status(202).send("account credentials updated");
}

export function createAccount(req ,res) {
    res.status(200).send("enter credentials");
}

export async function welcomeNewUser(req, res) {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(200).send(`Account created for ${username}`);
  } catch (err) {
    res.status(400).send("Username already exists or invalid input");
  }
}

export async function deleteAccount(req, res) {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(202).send("Account deleted");
  } catch (err) {
    res.status(400).send("Account not found");
  }
}