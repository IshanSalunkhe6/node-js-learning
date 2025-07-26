const express = require('express');
const {handleGetAllUser,
       handleGetUserbyId,
       handleUpdateUserbyId,
       handleDeleteUserbyId,
       handleCreateUser}=require('../controllers/user');
//import router
const router=express.Router();



// api endpoints
router.route("/").get(handleGetAllUser).post(handleCreateUser);

router                                      //common route grouping
   .route("/:id")
   .get(handleGetUserbyId)
   .patch(handleUpdateUserbyId)
   .delete(handleDeleteUserbyId)


module.exports=router;