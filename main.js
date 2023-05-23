const doadores=[];
let resposta;

while (resposta !== 5) {
    resposta = Number(prompt(`
    == SISTEMA DE CADASTRO DE DOADORES DE SANGUE ==

                1. Cadastrar doador
                2. Listar doadores
                3. Buscar doador por tipo sanguíneo
                4. Buscar doador por data da última doação
                5. Sair

Escolha uma opção:`))

    switch(resposta){
        case 1:
            cadastrarDoador();
            break;
        case 2:
            listarDoadores();
            break;
        case 3:
            buscarDoadorTipoSanguineo();
            break;
        case 4:
            BuscarDoadorUltimaDoacao();
            break;
        case 5:
            alert("Agradecemos por acessar o sistema! Volte sempre!")
            break
        default:
            alert("Opção inválida. Tente novamente!")
            break
    }
}


function cadastrarDoador() {
    const nome = prompt("Qual o seu nome?");
    const idade = Number(prompt("Qual a sua idade?"));
    const peso = Number(prompt("Qual o seu peso?"));
    const tipoSanguineo = prompt("Qual o seu tipo sanguíneo?").toLowerCase();
    const dataUltimaDoacao = prompt("Qual a data da sua última doação? DD/MM/AAAA");

    const doador = {
        nome:nome,
        idade:idade,
        peso:peso,
        tipoSanguineo:tipoSanguineo,
        dataUltimaDoacao:dataUltimaDoacao,

    };

    doadores.push(doador)
    alert(`A pessoa doadora ${nome} foi cadastrada com sucesso!`)
}

function listarDoadores() {
    if (doadores.length === 0) {
        alert("Não existem doadores cadastrados")
    }else{
        let mensagem = `
        --------------------------------------------------
        LISTAGEM DE DOADORES:
        --------------------------------------------------
        NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `;

    for (let doador of doadores) {
      mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSanguineo} ||       ${doador.dataUltimaDoacao}`;
    }
    alert(mensagem);
  }
}

function buscarDoadorTipoSanguineo() {
    if (doadores.length === 0) {
        alert("Não existem doadores cadastrados")
    }else{
        const buscaDoadorTipoSanguineo = prompt("Digite o tipo sanguíneo").toLowerCase();

        let mensagem = `
        ---------------------------------------------------------------
        RESULTADO DA BUSCA:
        ---------------------------------------------------------------
        NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        ----------------------------------------------------------------
        `;

    for (let doador of doadores) {
        if (doador.tipoSanguineo.includes(buscaDoadorTipoSanguineo)) {
          mensagem += `\n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSanguineo} ||       ${doador.dataUltimaDoacao}`;
        }
      }
      alert(mensagem);
    }
}
    function BuscarDoadorUltimaDoacao() {
        if (doadores.length === 0) {
          alert("Não existe doadores cadastrados");
        } else {
          const  dataBusca = prompt("Digite o a ultima data? DD/MM/AAAA");
      
          let mensagem = `
              ------------------------
              RESULTADO DA BUSCA:
              ------------------------
              NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
              `;
      
          for (let doador of doadores) {
            if (doador.dataUltimaDoacao === dataBusca) {
              mensagem += `
              \n         ${doador.nome} ||     ${doador.idade} ||      ${doador.peso} ||    ${doador.tipoSanguineo} ||       ${doador.dataUltimaDoacao}
              `;
            }
        }

        alert(mensagem);
    }
}



