const express = require('express');
const { getAssignments, createAssignment } = require('../Controllers/assignmentController');
const router = express.Router();

router.get('/:weekId', getAssignments);
router.post('/', createAssignment);

module.exports = router;
