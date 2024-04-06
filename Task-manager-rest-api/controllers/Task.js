const Task = require('../models/Task')

// URL          GET /api/tasks
// description  Get all tasks
exports.getTasks = async(req, res, next)=>{
    const tasks = await Task.find();
    res.status(200).json({success: true, data: tasks})
}
// URL          GET /api/tasks/:taskId
// description  Get a single Task
exports.getTask =async(req, res, next)=>{
    const task = await Task.findById(req.params.taskId)
    res.status(200).json({success: true, data: task})

}
// URL          POST /api/tasks
// description  create a task
exports.postTask = async(req, res, next)=>{
    const task = await Task.create(req.body)
    res.status(201).json({success: true, data: task})

}
// URL          PUT/PATCH /api/tasks/:taskId
// description  Edit a task
exports.putTask = async(req, res, next)=>{
   const task =  await Task.findByIdAndUpdate(req.params.taskId, req.body, {new: true, runValidators:true})
   res.status(202).json({success: true, data: task})

}
// URL          DELETE /api/tasks/:taskId
// description  Get all tasks
exports.deleteTask = async(req, res, next)=>{
    await Task.findByIdAndDelete(req.params.taskId)
    res.status(204).json({success: true, data: {}})
}
