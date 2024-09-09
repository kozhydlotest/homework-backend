const Week = require('../models/Week');
const Assignment = require('../models/Assignment');

// Отримати всі тижні
exports.getWeeks = async (req, res) => {
  try {
    const weeks = await Week.find();
    res.json(weeks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weeks' });
  }
};

// Створити новий тиждень
exports.createWeek = async (req, res) => {
  const { startDate, endDate } = req.body;
  try {
    const week = new Week({ startDate, endDate });
    await week.save();
    res.status(201).json(week);
  } catch (error) {
    res.status(500).json({ message: 'Error creating week' });
  }
};

// Створити нове домашнє завдання
exports.createAssignment = async (req, res) => {
  const { weekId, day, subject, homework } = req.body;
  try {
    const assignment = new Assignment({
      week: weekId,
      day,
      subject,
      homework,
    });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating assignment' });
  }
};

// Отримати домашні завдання для тижня
exports.getAssignmentsForWeek = async (req, res) => {
  const { weekId } = req.params;
  try {
    const assignments = await Assignment.find({ week: weekId });
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching assignments' });
  }
};
