// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req,res) => {
    res.status(200).json({message:"get goals"})
}

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req,res) => {
    console.log(req.body)
    res.status(200).json({message:"set goal"})
}

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
}
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}