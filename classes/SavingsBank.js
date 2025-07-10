let savingsBanksId = 1;
//Es un número único de 22 dígitos que identifica la cuenta
let cbuCounter = 1000000000000000000000;

class SavingsBank{
    //Ponemos el límite como último parámetro para no tener que ingresarlo si está en USD.
    //Pero si le pasamos 0 no hay problema.
    constructor(currency, alias, limit) {
        this.id = savingsBanksId;
        savingsBanksId++;
        this.currency = currency;
        this.balance = 0;
        if(currency == "ARS") {
            this.limit = limit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias;
        //Lo tratamos como ID para que no se repitan.
        this.cbu = cbuCounter;
        cbuCounter++;
    }
    // ejercicio 18
   extractMoney(amount) {
    let diferencia = this.limit - this.overdraft
    if (this.currency == "USD") {
        if (amount > this.balance) {
            return false
        } else if (amount <= this.balance) {
            this.balance = this.balance - amount
            return true
            }
        } else if (this.currency == "ARS") {
            if (amount <= this.balance) {
                this.balance = this.balance - amount
                return true
        } else if (amount <= this.balance + diferencia && diferencia >= 0) {
            let gasto = amount - this.balance
            this.balance = 0
            this.overdraft = this.overdraft + gasto
            return true
        } else {
            return false
        }
        }
    }

    //ejercicio 19
    insertMoney(amount){
        if (this.currency == "ARS"){
            if (this.overdraft != 0){
                if (amount >= this.overdraft){
                    let p = amount - this.overdraft
                    this.overdraft = 0
                    this.balance = this.balance + p
                    return this.balance
                }
                if (amount <this.overdraft){
                    this.overdraft -= amount
                    return this.balance
                }

            }else{
                this.balance = this.balance + amount
                return this.balance
            }

        } else if(this.currency == "USD"){
            this.balance = this.balance + amount
            return this.balance
        }
        return -1
    }
}


clients[1].savingsBanks.push(new SavingsBank("USD","soficracco.mp"))
clients[1].savingsBanks.push(new SavingsBank("USD","soficracco.mp"))
clients[1].savingsBanks.push(new SavingsBank("ARS","soficracco.mp",1000000))
clients[0].savingsBanks.push(new SavingsBank("USD","agusmombelli.mp"))
clients[0].savingsBanks.push(new SavingsBank("ARS","agusmombelli.mp", 10000000))
clients[2].savingsBanks.push(new SavingsBank("USD","kikinarducci.mp"))
clients[2].savingsBanks.push(new SavingsBank("ARS","kikinarducci.mp",20000000))