import { ObjectId } from "mongodb";
import Connection from "../database/dbConnection.mjs";

const db = Connection.getDb();

const getPlayers = async () => {
    // Get users from database
    return await db.collection("totales").find({}).toArray();

}

const getConvocados = async () => {
    // Get users from database
    return await db.collection("convocados").find({}).toArray();


}

const getPlayerById = async (id) => {
    // Get Player from database
    return await db.collection("totales").findOne({ id: id });

}

const createPlayer = async (player) => {
    // Create Player in database
    let response = undefined;
    const res = await db.collection("totales").find({id: player.id}).toArray();

    if (res.length == 0) {
        response = await db.collection("totales").insertOne(player);
        return response.insertedId;
    }
    return response;
}
const insertPlayers = async (array) => {
    // Create Player in database
    let response = undefined;
    const res = await db.collection("totales").find({name: String(array[0].name)}).toArray();

    if (res.length == 0) {
        response = await db.collection("totales").insertMany(array);
        return response.insertedIds;
    }
    return response;
}

const convocarJugadores = async (array) => {

    response = await db.collection("convocados").insertOne(array);
    return response;
    
}

const updatePlayer = async (id, Player) => {
    // Update Player in database
}

const deletePlayer = async (id) => {
    // Delete Player from database
    const res = await db.collection("totales").deleteOne({id: id });
    return res.deletedCount == 1;
}

export default {
    getPlayers: getPlayers,
    getPlayerById: getPlayerById,
    createPlayer: createPlayer,
    updatePlayer: updatePlayer,
    deletePlayer: deletePlayer,
    convocarJugadores: convocarJugadores,
    insertPlayers: insertPlayers,
    getConvocados: getConvocados
}