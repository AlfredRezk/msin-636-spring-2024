const router = require("express").Router();
const taskCtrl = require("../controllers/Task");

// // Get all tasks
// router.get('/')
// // Get a specific task
// router.get('/:taskId')
// //create a task
// router.post('/')
// // Edit a task
// router.put('/:taskId')
// router.patch('/:taskId')
// // Delete
// router.delete('/:taskId')

router.route("/")
    .get(taskCtrl.getTasks)
    .post(taskCtrl.postTask);
router
  .route("/:taskId")
  .get(taskCtrl.getTask)
  .put(taskCtrl.putTask)
  .patch(taskCtrl.putTask)
  .delete(taskCtrl.deleteTask);

module.exports = router;
