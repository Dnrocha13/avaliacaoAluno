class Aluno {
    constructor(nome, notaUm, notaDois, situacaoAcademica){
        this.nome = nome;
        this.notaUm = notaUm;
        this.notaDois = notaDois;
        this.situacaoAcademica = situacaoAcademica;
    }

    calcularMedia() {
        const media = (this.notaUm + this.notaDois) / 2;
        return media.toFixed(2);
    }

    verificarSituacaoAcademica() {
        return this.calcularMedia() >= 6 ? 'Aprovado' : 'Reprovado'; //if ternaro
    }
}

module.exports = Aluno;