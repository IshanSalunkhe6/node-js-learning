const User=require('../models/user');


//get all users
async function handleGetAllUser(req,res){
    try {
        const allusers = await User.find();
        res.status(200).json(allusers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get by id
async function handleGetUserbyId(req,res){
    try {
        const user=await User.findById(req.params.id);
        return res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//update
async function handleUpdateUserbyId(req,res){
    try {
        await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"},{ new: true });
        return res.json({"status":"updated"});

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//delete
async function handleDeleteUserbyId(req,res){
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.json({status:"succes"});

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//create
async function handleCreateUser(req,res){
        try {
    const body = req.body;

    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle
    });
    console.log(result)
    return res.status(201).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};




module.exports={
    handleGetAllUser,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateUser
};