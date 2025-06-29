function GerarSenhas(tam_senha, letras_min = true, letras_mai = true, numeros = true, carc_especiais = true){
    /*
    let tam_senha = tam_senha
    let letras_min = letras_min
    let letras_mai = letras_mai
    let numeros = numeros
    let carc_especiais = carc_especiais
    */

    //Dicionario de caractertes
    let MINUSCULOS = "abcdefghijklmnopqrstuvwxyz"
    let MAIUSCULOS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let NUMEROS = "0123456789"
    let ESPECIAIS = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    
    let caracteres = ""
    let senha_gerada = ""
    let indice = ""

    //Adcionando os caracteres para gerar a senha
    if(letras_min){
        caracteres += MINUSCULOS
    }
    if (letras_mai) {
        caracteres += MAIUSCULOS
    } 
    if (numeros){
        caracteres += NUMEROS
    }
    if(carc_especiais){
        caracteres += ESPECIAIS
    }
   
    //gerando a senha
    if(tam_senha >= 4){

        for(let ind = 1; ind <= tam_senha; ind ++){
            indice = parseInt(Math.random() * (caracteres.length -1))
            senha_gerada += caracteres[indice]
        }
    }else{
        
    }
    //Retornando a senha gerada
    return senha_gerada
}
//Exportando a função
export default GerarSenhas