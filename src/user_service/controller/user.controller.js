import User from '../models/user.model.js'

const login = async (req, res) => {
    res.status(200).send({ "msg": "tokencalled" })
}

const register = async (req, res) => {
    const { first_name, last_name, email, mobileNumber, address } = req.body;
    try {
        //See if user Exist
        let user = await User.findOne({ email });

        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "User already exist" }] });
        }

        var date = new Date()
        const createdAt = date;
        const updatedAt = date;
        //create a user instance
        user = new User({
            first_name, last_name, email, mobileNumber, address, createdAt, updatedAt
        });
        //save user to the database
        await user.save().then((response) => {
            res.json(response);
        });
    } catch (err) {
        //Something wrong with the server
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user != null) {
            User.findByIdAndUpdate(req.params.id).then(async (userProfile) => {
                if (req.body.first_name) {
                    userProfile.first_name = req.body.first_name;
                }
                if (req.body.last_name) {
                    userProfile.last_name = req.body.last_name;
                }
                if (req.body.email) {
                    userProfile.email = req.body.email;
                }
                if (req.body.mobileNumber) {
                    userProfile.mobileNumber = req.body.mobileNumber;
                }
                if (req.body.address) {
                    userProfile.address = req.body.address;
                }
                var date = new Date()
                userProfile.updatedAt = date
                userProfile
                    .save()
                    .then((response) => res.json(response))
                    .catch((err) => res.status(400).json("Error: " + err));
            });
        }

    } catch (err) {
        //Something wrong with the server
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
            .then(() => {
                res.json("Employee Deleted");
            })
            .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }

}
const getUserDetailsbyID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}
const getUserList = async (req, res) => {
    try {
        const userList = await User.find()
        res.json(userList);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}

export { login, register, updateUser, deleteUser, getUserDetailsbyID, getUserList }