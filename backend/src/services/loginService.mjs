import jwt from 'jsonwebtoken';
import cryptoService from "../services/cryptoService.mjs";

import Connection from "../database/dbConnection.mjs";
const db = Connection.getDb();

const login = async (username, password) => {
    console.log(username);
    const token = await db.collection("Users").findOne({ username: username }).then(async (user) => {
        if (user) {
            const comparedPsw = await cryptoService.compare(password, user.password);

            if (!comparedPsw) {
                return false;
            }
            delete user.password;
            const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: '1h' });
            return token;
        }
        return false;
    });

    return token;
}

export default { login: login };