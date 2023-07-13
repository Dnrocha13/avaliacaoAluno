const Dao = require('./dao');

class AlunoDAO extends Dao {
    constructor(connectionConfig){
        super(connectionConfig);
    }

    async insertAluno(aluno) {
        const query = `insert into alunos (id, nome, nota_um, nota_dois) values (null, '${aluno.nome}', ${aluno.notaUm}, ${aluno.notaDois})`;
        return await this.insert(query);
    } 

    async selectAlunos() {
        return await this.select('alunos');
    }
}

module.exports = AlunoDAO;