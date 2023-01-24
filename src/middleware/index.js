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

exports.checkPass = async (plaintextPassword, hash) => {
    try {
        const hashedPass = user.password
        const result = await bcrypt.compare(plaintextPassword, hash);
            if (result = true) {
                console.log("login allowed")
            } else {
                console.log("password incorrect")
            }
        }
    catch (error) {
        console.log(error);
        response.status(500).send({error: error.message})
    }
};