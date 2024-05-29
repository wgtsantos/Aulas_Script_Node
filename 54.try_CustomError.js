// Tratamento de Erros e Exceções - Custom Error

const ler = require('readline-sync');

let dis_obrigatorias = { c1: "matematica", c2: "fisica", c3: "quimica" };

try {

    let nome = ler.question("Digite do aluno: ");
    let curso = ler.question("Digite curso que deseja fazer: ");
    let resp = ler.question("Informe a Disciplina que você já estudou: ");
    let aluno = {
        obrigatorio: (dis_obrigatorias) => dis_obrigatorias.c1 === resp.toLowerCase() 
    };

    if (aluno.obrigatorio(dis_obrigatorias)) {
        console.log(`Prezado(a) ${nome}.`)
        console.log(`Inscrição no curso de ${curso} realizada com sucesso!`);
    } else {

    let erro = new Error(`O aluno ${nome} não pode ser inscrito no curso ${curso}, pois não possui o pré-requisto`);
    erro.c1 = "CustomError";
    throw erro;
    
    }

} catch (e) {
    if (e.c1 === "CustomError") {
        console.error(e.message);
    } else {
        console.error(e);
    }
}