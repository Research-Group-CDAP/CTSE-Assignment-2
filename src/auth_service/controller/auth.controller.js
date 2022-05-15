import Auth from '../models/auth.model.js'


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


export {  addAuthConfig}