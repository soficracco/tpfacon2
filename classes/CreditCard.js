let creditCardIds = 1;

class CreditCard {
    constructor(provider, emitionDate, securityCode, displayedName, closeDate, expiresBalanceDate) {
        this.id = creditCardIds;
        creditCardIds++;

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

        this.balance = 0;
        //Esto no es la realidad, es por simplificar
        //Si el cliente usa el pago mínimo o paga menos del total
        //Vamos a modificar este valor
        //Si solo pagaron totales = balance * interes (1) = balance
        //Si hicieron algún pago menor = balance * interes (1,algo)
        this.interest = 1;

        //Lo vamos a usar solo a título informativo

        //Cuando cierra tu "mes", hasta los gastos de qué día tenes que pagar este mes
        this.closeDate = closeDate;
        //Cuando tenes que pagar.
        this.expiresBalanceDate = expiresBalanceDate;
    }
}

clients[1].creditCards.push(new CreditCard("VISA",new Date(2025, 2, 21),3476,"SOFIA CRACC VER",new Date(2025, 6, 1),new Date(2025, 6, 11)))
clients[1].creditCards.push(new CreditCard("MasterCard",new Date(2025, 2, 21),2121,"SOFIA CRACC VER",new Date(2025, 6, 1),new Date(2025, 6, 11)))
clients[1].creditCards.push(new CreditCard("MasterCard",new Date(2025, 2, 21),9231,"SOFIA CRACC VER",new Date(2025, 6, 1),new Date(2025, 6, 11)))
clients[0].creditCards.push(new CreditCard("MasterCard",new Date(2025, 2, 21),3491,"AGUSTIN LEON MOMBEL",new Date(2025, 6, 1),new Date(2025, 6, 11)))
clients[0].creditCards.push(new CreditCard("American Express",new Date(2025, 2, 21),6574,"AGUSTIN LEON MOMBEL",new Date(2025, 6, 1),new Date(2025, 6, 11)))
clients[2].creditCards.push(new CreditCard("VISA",new Date(2025, 2, 21),9014,"CHIARA NARDUC",new Date(2025, 6, 1),new Date(2025, 6, 11)))
clients[2].creditCards.push(new CreditCard("American Express",new Date(2025, 2, 21),3284,"CHIARA NARDUC",new Date(2025, 6, 1),new Date(2025, 6, 11)))