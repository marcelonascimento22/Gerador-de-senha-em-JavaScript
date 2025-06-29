//Importando o gerador de senhas
import GerarSenhas from './GerarSenhas.js';
//Importando o verrificador de força
import {verificador_forca} from './verificador_forca.js'

//Criando uma senha estilo token
//GerarSenhas(tam_senha, letras_min, letras_mai, numeros, carc_especiais)
let Token = GerarSenhas(6, false, false, true, false)
console.log(`Token: ${Token.slice(0,3)}-${Token.slice(3)}`);

//Criando uma senha passando a quantidade de caractere
let novaSenha = GerarSenhas(12);
console.log(novaSenha);

//verificando a força da senha
let forca = new verificador_forca(novaSenha)
console.log(forca.situacao)
