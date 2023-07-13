const mysql = require('mysql2/promise');

class Dao {
    constructor(connectionConfig){
        this.pool = mysql.createPool(connectionConfig);
    }

    async insert(query) {
        try {
            const [rows] = await this.pool.execute(query);
            return rows[0];
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    async select(table) {
        const query = `select * from ${table}`;

        try {
            const [rows] = await this.pool.execute(query);
            return rows;
        }catch(error) {
            console.error(error);
            throw error;
        }
    }

    async close(){
        await this.pool.end();
    }
}

module.exports = Dao;
