const Application = require('../models/Application');
const { applicationSchema } = require('../utils/validators');

exports.createApplication = async (req, res, next) => {
  try {
    const { error } = applicationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const application = new Application(req.body);
    await application.save();

    res.status(201).json({
      message: 'Application submitted successfully',
      application,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    next(err);
  }
};

exports.getApplicationById = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ error: 'Application not found' });
    res.json(application);
  } catch (err) {
    next(err);
  }
};
