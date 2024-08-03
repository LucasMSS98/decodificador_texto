function criptografar(){
    trocaTela();
    let x = document.getElementById("inserirTexto").value;
    document.getElementById("retornarTexto__texto").value = criptografando(x);
}

function trocaTela(){
    document.getElementById("conteudo__imagem__texto").style.display = "none"
    document.getElementById("retornarTexto").style.display = "flex";
}
function criptografando(x){
    let resultado = '';
    for(let i = 0; i < x.length; i++){
        if(x[i] === 'e'){
            resultado  += 'enter'
        }
        else if(x[i] == 'i'){
            resultado  += 'imes'
        }
        else if(x[i] == 'a'){
            resultado  += 'ai';
        }
        else if(x[i] == 'o'){
            resultado  += 'ober'
        }
        else if(x[i] == 'u'){
            resultado  += 'ufat'
        }else{
            resultado  += x[i];
        }
    }
    return resultado;
}