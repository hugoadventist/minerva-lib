export default class Cliente {

    constructor(nome, email) {
        this._nome = nome;
        this._email = email;
        
    }

    getNome() {
        return this._nome;
    }

    getEmail() {
        return this._email;
    }
}