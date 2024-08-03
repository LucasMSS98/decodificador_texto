let x = 'gaitober';
console.log(descriptografando(x));

function criptografar(){
    trocaTela();
    let x = document.getElementById("inserirTexto").value;
    document.getElementById("retornarTexto__texto").value = criptografando(x);
    document.getElementById("inserirTexto").value = '';
}
function descriptografar(){
    trocaTela();
    let x = document.getElementById("inserirTexto").value;
    document.getElementById("retornarTexto__texto").value = descriptografando(x);
}
function trocaTela(){
    document.getElementById("conteudo__imagem__texto").style.display = "none"
    document.getElementById("retornarTexto").style.display = "flex";
}
function criptografando(x){
    let resultado = '';
    for(let i = 0; i < x.length; i++){
        if(x[i] === 'e'){
            resultado  += 'enter';
        }
        else if(x[i] == 'i'){
            resultado  += 'imes';
        }
        else if(x[i] == 'a'){
            resultado  += 'ai';
        }
        else if(x[i] == 'o'){
            resultado  += 'ober';
        }
        else if(x[i] == 'u'){
            resultado  += 'ufat';
        }else{
            resultado  += x[i];
        }
    }
    return resultado;
}
function descriptografando(x){
    let resultado = '';
    for(let i = 0; i < x.length; i++){
        if(x[i] ===  'e' && x[i+1] === 'n' && x[i+2] === 't' && x[i+3] === 'e' && x[i+4] === 'r'){
            resultado  += 'e';
            if(i+5 >= x.length){
                return resultado;
            }else{
                i = i+5;
            }
        }
        if(x[i] ===  'i' && x[i+1] === 'm' && x[i+2] === 'e' && x[i+3] === 's'){
            resultado  += 'i';
            if(i+4 >= x.length){
                return resultado;
            }else{
                i = i+4;
            }
        }
        if(x[i] ===  'a' && x[i+1] === 'i' ){
            resultado  += 'a';
            if(i+2 >= x.length){
                return resultado;
            }else{
                i = i+2;
            }
        }
        if(x[i] ===  'o' && x[i+1] === 'b' && x[i+2] === 'e' && x[i+3] === 'r'){
            resultado  += 'o';
            if(i+4 >= x.length){
                return resultado;
            }else{
                i = i+4;
            }
        }
        if(x[i] ===  'u' && x[i+1] === 'f' && x[i+2] === 'a' && x[i+3] === 't'){
            resultado  += 'u';
            if(i+4 >= x.length){
                return resultado;
            }else{
                i = i+4;
            }
        }
        else{
            resultado  += x[i];
        }
    }
    return resultado;
}