const Action = require("../actions/actions-model");
const Project = require("../projects/projects-model");

const validateProjectId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const project = await Project.get(id);
    if (!project) {
      res
        .status(404)
        .json({ message: "No project with the provided ID found." });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const validateActionId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const action = await Action.get(id);
    if (!action) {
      res
        .status(404)
        .json({ message: "No project with the provided ID found." });
    } else {
      req.action = action;
      next();
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  validateProjectId,
  validateActionId,
};
