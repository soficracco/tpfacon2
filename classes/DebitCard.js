let debitCardIds = 1;

let cardNumbers = 1000000000000000;

class DebitCard {
    constructor(provider, emitionDate, securityCode, displayedName) {
        this.id = debitCardIds;
        debitCardIds++;

        this.number = cardNumbers;
        cardNumbers++;

        // VISA, American Express, CABAL, MasterCard...
        this.provider = provider;

        //Esto para que podamos poner distintas fechas de vencimiento.
        this.expireDate = emitionDate;
        this.expireDate.setFullYear(this.expireDate.getFullYear() + 5);

        this.securityCode = securityCode;
        // Ej: NICOLAS AGUST FACON o NICOLAS A FACON
        this.displayedName = displayedName;

        this.consumptions = [];
    }
}

// ejercicio 8
clients[0].savingsBanks[1].debitCards.push(new DebitCard("VISA",new Date(2025, 4, 10),210,"AGUST LEON MOMBELL"))
clients[0].savingsBanks[1].debitCards.push(new DebitCard("MasterCard",new Date(2025, 4, 10),222,"AGUST LEON MOMBELL"))
clients[1].savingsBanks[1].debitCards.push(new DebitCard("American Express",new Date(2025, 2, 21),432,"SOFIA CRA VER"))
clients[1].savingsBanks[1].debitCards.push(new DebitCard("VISA",new Date(2025, 2, 21),227,"SOFIA CRA VER"))
clients[2].savingsBanks[1].debitCards.push(new DebitCard("MasterCard",new Date(2025, 1, 2),134,"CHIAR NARDUCCI"))
clients[2].savingsBanks[1].debitCards.push(new DebitCard("American Express",new Date(2025, 1, 2),685,"CHIAR NARDUCCI"))