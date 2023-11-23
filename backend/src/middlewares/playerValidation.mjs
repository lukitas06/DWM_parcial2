

const playerValidation = async (player) => {

    switch (player){
        case player.posicion:
            if (player.posicion != "GK" || player.posicion != "DF" || player.posicion != "MD" || player.posicion != "FW"){
                return false;
            }
            break;
    }
}
const playersValidation = async (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].posicion != "GK" || array[i].posicion != "DF" || array[i].posicion != "MD" || array[i].posicion != "FW"){
            return false;
        }
    }
}

const convocadosValidation =  (array) => {
    console.log(array.length);
    console.log("(convocadosValidation method)");
    if (array.length !== 22){
        console.log("salio ");
        return false;
    }
    else{
        for (let i = 0; i < array.length; i++) {

            if(array[i].suspendido === true || array[i].lesionado === true){
                return false;
            }
        }
    }
    console.log("salio de convocadosValidation method ");
    return true;
}

export default {
    playerValidation: playerValidation,
    convocadosValidation: convocadosValidation,
    playersValidation: playersValidation
}