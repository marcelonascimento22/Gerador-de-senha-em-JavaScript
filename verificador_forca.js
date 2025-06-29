export class verificador_forca{
    //Construtos da classe
    constructor(senha){
        let total_pontos = 0
        //Executando as validações para atribuir uma nota
        total_pontos += this.verificar_Sequencias(senha)
        total_pontos += this.verificar_caracteres(senha)
        total_pontos += this.verificar_repetidos(senha)

        //Definindo a situação da senha de acirdo com a nota
        if(total_pontos <= 3){
            return {situacao: 'Fraca'}
        }
        if(total_pontos > 3 && total_pontos <= 5){
            return {situacao: 'Media'}
        }
        if(total_pontos >= 6){
            return {situacao: 'Forte'}
        }
    }


    verificar_caracteres(senha){
        let pontuacao = 0;

        pontuacao += Number(senha.search(/[A-Z]/) !== -1 ? 1 : 0)        //Verrificar se tem letras MAIÚSCULAS
        pontuacao += Number(senha.search(/[a-z]/) !== -1 ? 1 : 0)       //Verrificar se tem letras minusculas
        pontuacao += Number(senha.search(/\d/) !== -1 ? 1 : 0)          //Verrificar se tem numeros
        pontuacao += Number(senha.search(/[!@#$%^&*(),.?":{}|<>]/) !== -1 ? 1 : 0) //Verrificar se tem caracteres especiais
        
        return pontuacao

    }

    verificar_Sequencias(senha) {
        let pontuacao = 0;
        let minimo_de_sequencia = 3; //  número mínimo de caracteres em sequência
        let teste_senha = senha.toLowerCase(); // para comparar letras sem diferenciar maiúsculas/minúsculas

        //Percorrendo a senha para verificar sequencias Asc ou Dec
        for (let i = 0; i <= teste_senha.length - minimo_de_sequencia; i++) {
            let Sequencia_Crescente = true;
            let Sequencia_Decrescente = true;

            for (let j = 0; j < minimo_de_sequencia - 1; j++) {
                let atual = teste_senha.charCodeAt(i + j) //Retorna o valor do caractere na tabela Unicode de acordo com a posição passada
                let proximo = teste_senha.charCodeAt(i + j + 1) //Retorna o valor do caractere na tabela Unicode de acordo com a posição passada
                if (proximo !== atual + 1) Sequencia_Crescente = false
                if (proximo !== atual - 1) Sequencia_Decrescente = false
            }

            if (Sequencia_Crescente || Sequencia_Decrescente) {
                return pontuacao += -1 // encontrou uma sequência
            }else{
                return pontuacao += 1
            }
        }

        return pontuacao += 1 // nenhuma sequência encontrada
    }

    verificar_repetidos(senha){
        let pontuacao = 0;

        pontuacao += /([a-zA-Z])\1+/.test(senha) ? -1 : 1  // Verifica letras repetidas
        pontuacao += /(\d)\1+/.test(senha) ? -1: 1 // Verifica números repetidos

        return pontuacao
    }

}


