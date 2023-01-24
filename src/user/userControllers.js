const User = require("./userModels");
const {checkPass} = require("./userControllers");


exports.createUser = async (request, response) => {
    console.log(request);
    try {
        const newUser = await User.create(request.body);
        response.status(201).send({user: newUser});        
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    };
};

exports.listUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(218).send({user: users});        
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    };
};

exports.compare = async (request, response) => {
    try {
        const user = await User.findOne(request.body);
        response.status(218).send({user: request.body});
        checkPass(request.body.password, user.password);
        
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    };
};