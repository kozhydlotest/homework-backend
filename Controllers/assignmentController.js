const Assignment = require('../models/Assignment');

exports.getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ week: req.params.weekId });
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAssignment = async (req, res) => {
    const { weekId, day, subject, homework } = req.body;
    try {
        const newAssignment = new Assignment({ week: weekId, day, subject, homework });
        await newAssignment.save();
        res.status(201).json(newAssignment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
