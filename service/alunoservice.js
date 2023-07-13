const AlunoDAO = require('../persistence/alunodao');


class AlunoService {
    constructor(connectionConfig){
        this.connectionConfig = connectionConfig
    }

    async insertAluno(aluno) {
        const AlunoDaoInstance = new AlunoDAO(this.connectionConfig);
        return await AlunoDaoInstance.insertAluno(aluno);
    } 

    async selectAlunos() {
        const AlunoDaoInstance = new AlunoDAO(this.connectionConfig);
        return await  AlunoDaoInstance.selectAlunos();
    }
}

module.exports = AlunoService;
