const express = require('express');
const router = express.Router();
const {
  createApplication,
  getAllApplications,
  getApplicationById,
} = require('../controllers/applicationController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.post('/', createApplication);
router.get('/', authMiddleware, adminMiddleware, getAllApplications);
router.get('/:id', authMiddleware, adminMiddleware, getApplicationById);

module.exports = router;
