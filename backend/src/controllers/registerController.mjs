import registerService from '../services/registerService.mjs';

const createUser = async (req, res) => {
    console.log("req.body",req.body)
    const {username, password} = req.body;
    registerService.register(username,password).then(
        createdUser => {
            if (createdUser == undefined) {
                res.status(400).json({ message: "User already exists" });
                return;
            }
            res.status(201).json({ message: "User created", id: createdUser });
            return;
        });
}

export default {
    createUser: createUser
}