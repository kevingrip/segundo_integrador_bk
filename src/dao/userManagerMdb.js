import userModel from "./models/user.model.js";

class UserCollectionManager {
    constructor() {
    }

    createUser = async (firstName,lastName,email,password) => {
        try {

            const newUser = {firstName,lastName,email,password}

            await userModel.create(newUser);

        } catch (err) {
            return err.message;
        };
    };

    getUser = async (email) =>{
        try{
            return await userModel.findOne({ email })

        } catch(err) {
            return err.message;
        }
    }

}

export default UserCollectionManager;