import playerService from '../services/playerService.mjs'
import cryptoService from '../services/cryptoService.mjs';
import playerValidation from '../middlewares/playerValidation.mjs';
//import players from '../database/players.mjs';
//import Player from '../models/Player.mjs';

const createPlayer = async  (req, res) => {
    const { id,name,position,suspended, injured } = req.body;

    const player = {
        id: id,
        nombre: name,
        posicion: position,
        suspendido: suspended,
        lesionado: injured    
    }

    const playerOk = await playerValidation.playerValidation(player);
    if (playerOk == undefined) {
        playerService.createPlayer(player).then(
            createdplayer => {
                if (createdplayer == undefined) {
                    res.status(400).json({ message: "Player already exists" });
                    return;
                }
                res.status(201).json({ message: "Player created", id: createdplayer });
                return;
            });
    }
    else{
        res.status(400).json({ message: "Invalid params" });
        return;
    }
    //por las dudas
    /*players.createplayer(Player);
    res.status(201).json({ message: "Player created", id: Player.id });*/
}

const insertPlayers = async (req, res) => {
    const { array } = req.body;
    console.log(array);
    const playersOk = await playerValidation.playersValidation(array);
    if (playersOk == undefined) {
        playerService.insertPlayers(array).then(
            createdplayers => {
                if (createdplayers == undefined) {
                    res.status(400).json({ message: "Players already exists" });
                    return;
                }
                res.status(201).json({ message: "Players created", id: createdplayers });
                return;
            });
    }
    else {
        res.status(400).json({ message: "Invalid params" });
        return;
    }

}

const convocarJugadores =  (req, res) => {
    console.log("(convocarJugadores playerController)");
    const convocadosOk =  playerValidation.convocadosValidation(req.body);

    if(convocadosOk === true){
        console.log("salio de convocarJugadores method ");
        playerService.convocarJugadores()
        .then(id => {
            if (id == undefined) {
                res.status(404).json({ message: "There are problems with the players" });
                return;
            }
            res.status(200).json({message: "Players convocados", id: id});
            return;
        })
    }
    else{
        res.status(400).json({ message: "Invalid params" });
        return;
    
    }
    
}

const getPlayers =  (req, res) => {

    playerService.getPlayers()
        .then(players => {
            if (players.length == 0) {
                res.status(404).json({ message: "There are no players" });
                return;
            }
            res.status(200).json(players);
        })
        .catch((err) => {
            res.status(500).json(err);
        });  
    //Por las dudas
    /*const players= players.getplayers();
    res.status(200).json(players);*/
}

const getConvocados =  (req, res) => {
    
        playerService.getConvocados()
            .then(players => {
                if (players.length == 0) {
                    res.status(404).json({ message: "There are no players" });
                    return;
                }
                res.status(200).json(players);
            })
            .catch((err) => {
                res.status(500).json(err);
            });  

}

const getPlayerById =  (req, res) => {
    playerService.getPlayerById(String(req.params.id))
    .then(Player => {
        if (!Player) {
            res.status(404).json({ message: "There are no players" });
            return;
        }
        res.status(200).json(Player);
    });
}

const updatePlayer =  (req, res) => {
    playerService.updateplayer();
}

const deletePlayer =  (req, res) => {
    playerService.deletePlayer(String(req.params.id)).then(
        deletedplayer => {
            if (deletedplayer == false) {
                res.status(400).send({ message: "Player not found" });
                return;
            }
            res.status(200).send({ message: "Player deleted" });
            return;
        });
}

export default {
    createPlayer: createPlayer,
    getPlayers: getPlayers,
    getPlayerById: getPlayerById,
    updatePlayer: updatePlayer,
    deletePlayer: deletePlayer,
    convocarJugadores: convocarJugadores,
    insertPlayers: insertPlayers,
    getConvocados: getConvocados
}