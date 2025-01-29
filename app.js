const express = require("express");
const app = express();
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await usermodel.create({
    name: "sunny",
    email: "hiaman5121@gmail.com",
    username: "Dancer",
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateduser = await usermodel.findOneAndUpdate(
    { username: "King" },
    { name: "Aman is King" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/read", async (req, res) => {
  let readuser = await usermodel.find({ username: "Dancer" });
  res.send(readuser);
});

app.get("/delete", async (req, res) => {
  let deleteduser = await usermodel.findOneAndDelete({ username: "King" });
  res.send(deleteduser);
});

app.listen(4000, function (req, res) {
  console.log("server has started");
});
