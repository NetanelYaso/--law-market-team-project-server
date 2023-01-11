const departmentModel = require("../models/departmentsModel");
const subDepartmentModel = require("../models/subDepartmentsModel");
const validateDepartment = require("../validation/departmentValidation");
const cloudinary = require("../cloudinary/cloudinary");

const getAll = async (req, res) => {
  await departmentModel.find({}).then((departments, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (departments.length === 0) {
      return res.json({ success: false, massage: "no departments found" });
    }
    res.status(200).json({ success: true, departments });
  });
};

const getById = async (req, res) => {
  await departmentModel
    .findById(req.params.id)
    .then((department) => {
      if (!department) {
        return res.json({ success: false, massage: "department is not found" });
      }
      return res.status(200).json({ success: true, department });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const create = async (req, res) => {
  const { error } = validateDepartment(req.body);
  if (error) return res.status(400).json(error);
  const coverImage = req.body.coverImage;
  const result = await cloudinary.uploader.upload(coverImage, {
    folder: "team_project_departments",
  });
  req.body.coverImage = {
    public_id: result.public_id,
    url: result.secure_url,
  };
  const subDepartment = await subDepartmentModel.insertMany({ name: req.body.subDepartments.name, description: req.body.subDepartments.description })
  req.body.subDepartments = subDepartment

  try {
    return await departmentModel
      .insertMany(req.body)
      .then((result) => res.status(300).json({ success: true, result }))
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  };

}


const update = async (req, res) => {
  departmentModel
    .findByIdAndUpdate(req.body.department)
    .then((departments) => res.status(200).json({ sucsess: true, departments }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

const deleteDepartment = async (req, res) => {
  await departmentModel
    .findByIdAndDelete(req.params.id)
    .then((departments) => res.status(200).json({ success: true, departments }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteDepartment,
};
