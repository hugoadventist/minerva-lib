import sqlite3 from 'sqlite3';

export class DBConnectionHandler {
    #connectionString;
    #conn;
    constructor() {
        this.#connectionString = '/workspaces/firstChallenge/storage.db';
        this.#conn = undefined;
    }
    connect() {
        conn = sqlite3.Database(this.#connectionString, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to SQLite database.')
        });
        this.#conn = conn;
    }
    get_connection() {
        return this.#conn;
    }
}