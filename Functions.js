// ejercicio 10

function findClient(idClient){
    for(let i = 0; i < clients.length; i++){
        if(clients[i].id == idClient){
            return i 
        }
    }
    return -1
}

function findSavingsBanks(idClient){
    let savingsBanks = []
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == idClient) {
            for (let j = 0; j < clients[i].savingsBanks.length; j++) {
                savingsBanks.push(clients[i].savingsBanks[j])             
                 
            }
        }
    }
    return savingsBanks
}

function findDolarSavingsBanks(idClient) {
    let savingsBanks = findSavingsBanks(idClient)
    let dolarSavingsBanks = [];
    for (let j = 0; j < savingsBanks.length; j++) {
            if (savingsBanks[j].currency == "USD") {
                dolarSavingsBanks.push(savingsBanks[j])
            
        }
    }
    return dolarSavingsBanks
}

function findPesosSavingsBanks(idClient) {
    let savingsBanks = findSavingsBanks(idClient)
    let pesosSavingsBanks = [];
    for (let j = 0; j < savingsBanks.length; j++) {
            if (savingsBanks[j].currency == "ARS") {
                pesosSavingsBanks.push(savingsBanks[j])
        }
    }
    return pesosSavingsBanks
}

// ejercicio 11
function findDebitCards(idClient){
    let debitCards = []
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == idClient) {
            for (let j = 0; j < clients[i].savingsBanks.length; j++) {
                debitCards.push(clients[i].savingsBanks[j].debitCards)             
                 
            }
        }
    }
    return debitCards
}

//ejercicio 12
function findSpecificDebitCard(idDebitCard){
    for (let i = 0; i < clients.length; i++){
        for ( let j = 0; j < clients[i].savingsBanks.length; j++){
            for ( let x = 0; x < clients[i].savingsBanks[j].debitCards.length; x++){
                if (clients[i].savingsBanks[j].debitCards[x].id == idDebitCard){
                    return clients[i].savingsBanks[j].debitCards[x]
                }
            }
        }
    }
}

// ejercicio 13
function findCreditCards(idClient){
    for(let i = 0; i < clients.length; i++){
        if(clients[i].id == idClient){
            return clients[i].creditCards
        }
    }
    return -1
}

// ejercicio 14
function findSpecificCreditCard(idCreditCard){
    for (let i = 0; i < clients.length; i++){
            for ( let x = 0; x < clients[i].creditCards.length; x++){
                if (clients[i].creditCards[x].id == idCreditCard){
                    return clients[i].creditCards[x]
                }
            }
    }
}

// ejercicio 15
function findMovementsSavingsBank(idSavingsBank){
    for (let i = 0; i < clients.length;i++){
        for (let x = 0; x < clients[i].savingsBanks.length; x++){
            if (clients[i].savingsBanks[x].id == idSavingsBank){
                return clients[i].savingsBanks[x].movements
            }
        }
    }
    return -1
}

// ejercicio 16
function findMovementsDebitCard(idDebitCard){
    let debitCard = findSpecificDebitCard(idDebitCard)
    return debitCard.consumptions
}

//ejercicio 17
function findMovementsCreditCard(idCreditCard){
    let creditCard = findSpecificCreditCard(idCreditCard)
    return creditCard.consumptions
}

// ejercicio 20
function login(){
    let password = ui.getLoginPassword()
    let dni = ui.getLoginDni()
    for (let i = 0; i < clients.length;i++){
        if (dni == clients[i].dni){
            if (password == clients[i].password){
                return 1
            } else{
                alert("ERROR! la contraseña que ingresaste está mal.")
                return -1
            }
        }
    }
    alert("ERROR! El dni que ingresaste está mal.")
    return -1

    //document.getElementById("pepiot").style.display = "none";
    //document.getElementById("pepiot").style.display = "";
}

