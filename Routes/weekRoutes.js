const express = require('express');
const router = express.Router();
const { getWeeks, createWeek, createAssignment, getAssignmentsForWeek } = require('../Controllers/weekController');

router.get('/weeks', getWeeks);
router.post('/weeks', createWeek);
router.post('/assignments', createAssignment);
router.get('/assignments/:weekId', getAssignmentsForWeek);

module.exports = router;
