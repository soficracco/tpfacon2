let movementsId = 1;

class Movement{
    constructor(thirdPartyName, amount, cuotes) {
        this.id = movementsId;
        movementsId++;

        this.date = new Date();
        this.thirdPartyName = thirdPartyName;
        this.amount = amount;
        if(cuotes >= 1)
            this.cuotes = cuotes;
    }
}

//Caso gasto de débito
clients[0].savingsBanks[0].movements.push(new Movement("Microondas", 1500))
clients[0].savingsBanks[0].movements.push(new Movement("Verduleria", 1700))
clients[0].savingsBanks[1].movements.push(new Movement("COTO", 1000))
clients[0].savingsBanks[1].movements.push(new Movement("Celular", 100000))
clients[1].savingsBanks[2].movements.push(new Movement("cena", 1000))
clients[1].savingsBanks[0].movements.push(new Movement("Campera", 2000))
clients[2].savingsBanks[1].movements.push(new Movement("Tablet", 10000))
clients[2].savingsBanks[0].movements.push(new Movement("Compra gamer", 1000))

//Asumo que la mitad son por tarjeta de debito
clients[0].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Microondas", 1500))
clients[0].savingsBanks[1].debitCards[0].consumptions.push(new Movement("COTO", 1000))
clients[1].savingsBanks[1].debitCards[0].consumptions.push(new Movement("cena", 1000))

//Caso gasto de crédito
clients[0].creditCards[0].consumptions.push(new Movement("CompraGamer", 200000, 3))
clients[0].creditCards[0].consumptions.push(new Movement("Compra supermercado", 2000000, 6))
clients[0].creditCards[1].consumptions.push(new Movement("Computadora", 1420000, 12))
clients[0].creditCards[1].consumptions.push(new Movement("Ropa", 400000, 3))
clients[1].creditCards[0].consumptions.push(new Movement("Television", 12200000, 3))
clients[1].creditCards[1].consumptions.push(new Movement("Zapatillas", 200000, 3))
clients[1].creditCards[2].consumptions.push(new Movement("Palo de hockey", 1200000, 6))
clients[2].creditCards[0].consumptions.push(new Movement("Regalo navidad", 120000, 6))
clients[2].creditCards[1].consumptions.push(new Movement("Funda celular", 12000, 3))