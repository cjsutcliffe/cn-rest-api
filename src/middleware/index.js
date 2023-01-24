const bcrypt=require("bcrypt");

exports.hashPass = async (request,response,next) => {
    try {
        // take a password out of the body, hash (encrypt) it using bcrypt and then put back the encrypted password to overwrite the unencrypted password and then pass on the updated body to the next function.
        const passwordCopy = request.body.password;
        const hashedPass = await bcrypt.hash(passwordCopy,10);
        console.log(hashedPass);
        //first parameter of hash is the plain text password to be encrypted, the second parameter is the 'salt' which is the amount of encrypting that is carried out. More salt gives better encryption but takes longer
        request.body.password = hashedPass;
        //here we overwrite the unencrypted password with the encrypted version.
        next();
        //is the next middleware function to be invoked
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message})
    }
};

exports.comparePass = async (request,response,next) => {
    try {
        request.user = await User.findOne({username: request.body.username});
        console.log(request.user);
        //This pulls the user infor from the database including the hashed password
        const passCheck = await bcrypt.compare(request.body.password, request.user.password);
        console.log(passCheck);
        //This used the bcrypt compare methos to compare the unhashed password in the request body to the hashed password stored in the DB (request.user)
        if (request.user && passCheck) {
            console.log("username exists and password is correct");
            next()
        //checks that both values are true if so console logs and moves to next func in router else throws new error.    
        } else{
            throw new Error ("Incorrect username or password");
        }
    } catch (error) {
        console.log(error);
        response.status(401).send({error: error.message})
    }
}
