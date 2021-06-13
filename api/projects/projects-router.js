const express = require("express");
const Project = require("./projects-model");
const { validateProjectId } = require("../middleware/middleware");

const router = express.Router();

router.get("/", (req, res) => {
  Project.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.log("err:", err);
    });
});

router.get("/:id", validateProjectId, (req, res) => {
  res.status(200).json(req.project);
});
