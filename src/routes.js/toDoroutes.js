let express =require("express");

let router = new express.Router();

let controller = require("../controller.js/toDocontroller")


//router here
router.get("/todos", controller.listToDos)
router.get("/todos", controller.getToDos)
router.post("/todos", controller.createlistToDos)
router.put("/todos", controller.updatelistToDos)
router.delete("/todos", controller.deletelistToDos)


modules.exports = router;