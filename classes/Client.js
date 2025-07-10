let clientsId = 1;

class Client{
    constructor(dni, password, name, lastName) {
        this.id = clientsId;
        clientsId++;
        this.dni = dni;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.creditCards = [];
        this.savingsBanks = [];
    }
    // FALTA EJERCICIO 20,21,22,23 HACERLOS!!!!!!!
         
}

let clients=[]
clients.push(new Client(48386680,0,"Agustin","Mombelli"));
clients.push(new Client(48384955,0,"Sofia","Cracco"));
clients.push(new Client(48677659,0,"Chiara","Narducci"));
clients.push(new Client(48680134,0,"Tomas","Sanchez"));
clients.push(new Client(48432564,0,"Martin","Suarez"));

