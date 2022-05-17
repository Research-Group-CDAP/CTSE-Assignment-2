import Auth from '../models/auth.model.js'
import jwt from "jsonwebtoken"

const Role = {
    Seller: 'seller',
    Buyer: 'buyer',
    Admin: 'admin'
};

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
            return res.status(200).send("Success");

		} else {
            return res.status(500).send("Secret not found");
        }
	} catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}

const authorizeSeller = async (req, res) => {
    try {
		const secret = process.env.JWT_SECRET;
        const privillages = [Role.Seller,Role.Admin]

		if (secret) {
			const authToken = req.header("Authorization");
			const decodedToken = jwt.verify(authToken, secret);
            if(privillages.includes(decodedToken.role)){
                return res.status(200).json({isAuthorized:true});
            }else{
                return res.status(401).json({isAuthorized:false});
            }

		} else {
            return res.status(500).send("Secret not found");
        }
	} catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}

const authorizeBuyer = async (req, res) => {
    try {
		const secret = process.env.JWT_SECRET;
        const privillages = [Role.Seller,Role.Admin,Role.Buyer]
		if (secret) {
			const authToken = req.header("Authorization");
			const decodedToken = jwt.verify(authToken, secret);
            if(privillages.includes(decodedToken.role)){
                return res.status(200).json({isAuthorized:true});
            }else{
                return res.status(401).json({isAuthorized:false});
            }


		} else {
            return res.status(500).send("Secret not found");
        }
	} catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}

const authorizeAdmin = async (req, res) => {
    try {
		const secret = process.env.JWT_SECRET;
        const privillages = [Role.Admin]
		if (secret) {
			const authToken = req.header("Authorization");
            console.log(authToken)
			const decodedToken = jwt.verify(authToken, secret);
            if(privillages.includes(decodedToken.role)){
                return res.status(200).json({isAuthorized:true});
            }else{
                return res.status(200).json({isAuthorized:false});
            }


		} else {
            return res.status(500).send("Secret not found");
        }
	} catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
}


export {addAuthConfig,authorize,authorizeSeller,authorizeBuyer,authorizeAdmin}