const fastify = require('fastify')();
const Aluno = require('../model/aluno');
const AlunoService = require('../service/alunoservice');

const alunos = [];

const connectionConfig = {
    host: 'localhost', // endereço do servidor de banco de dados
    port: 3306, // porta de conexão com o banco de dados
    user: 'root', // nome de usuário para acessar o banco de dados
    password: '123456', // senha para acessar o banco de dados
    database: 'diego' // nome do banco de dados a ser utilizado
  };

fastify.get('/alunos', (req, res) => {
    const alunoServiceInstance = new AlunoService(connectionConfig);
    res.send(alunoServiceInstance.selectAlunos);
});

fastify.post('/alunos', (req, res) =>{
    const alunoServiceInstance = new AlunoService(connectionConfig);
    const {nome, notaUm, notaDois} = req.body;
    const alunoInstance = new Aluno(nome, notaUm, notaDois, null);
    alunoServiceInstance.insertAluno(alunoInstance);
       res.send("aluno cadastrado com sucesso");
});


// * como era antigamente
// fastify.post('/alunos', (req, res) =>{
//     const nome = req.body.nome;
//     const notaUm = req.body.notaUm;
//     const notaDois = req.body.notaDois;

// }); 

const PORT = 3000;
fastify.listen(PORT, () =>{
console.log(`servidor rodando na porta ${PORT}`)
});