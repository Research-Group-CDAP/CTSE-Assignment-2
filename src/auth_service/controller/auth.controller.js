import Auth from '../models/auth.model.js'
import jwt from "jsonwebtoken"

const addAuthConfig = async (req, res) => {
    const { first_name,email, password , authToken ,role} = req.body;
    try {
        //See if user Exist
        let auth = await Auth.findOne({ email });
        if (auth) {
            auth.authToken = authToken;
            auth.save()
        }else{
            auth = new Auth({
                first_name,email, password , authToken ,role
            });
            await auth.save()

        }
    } catch (err) {
        //Something wrong with the server
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}

const authorize = async (req, res) => {
    try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			const authToken = req.header("Authorization");
			const decodedToken = jwt.verify(authToken, secret);
            console.log(decodedToken)
            return res.status(500).send("Success");

		} else {
            return res.status(500).send("Secret not found");
        }
	} catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}


export {addAuthConfig,authorize}