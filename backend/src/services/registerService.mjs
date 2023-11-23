import jwt from 'jsonwebtoken';
import cryptoService from "../services/cryptoService.mjs";

import Connection from "../database/dbConnection.mjs";
const db = Connection.getDb();

const register = async (username, password) => {
    const user =  await db.collection("Users").findOne({ username: String(username) });
    if (user) {
        return undefined;
    }
    console.log("Registering user: " + username, "password", password);
    const encryptedPassword = await cryptoService.crypt(password);
    const newUser = {
        username: username,
        password: encryptedPassword
    }
    return await db.collection("Users").insertOne(newUser);
}

export default {
    register: register
}