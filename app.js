function criptografar(){
    trocaTela();
    let x = document.getElementById("inserirTexto").value;
    document.getElementById("retornarTexto__texto").value = criptografando(x);
    limparTexto();
}
function descriptografar(){
    trocaTela();
    let x = document.getElementById("inserirTexto").value;
    document.getElementById("retornarTexto__texto").value = descriptografando(x);
    limparTexto();
}
function copiarTexto(){
    let x = document.getElementById("retornarTexto__texto").value;
    navigator.clipboard.writeText(x).then(() => {})
    .catch(err => {
        console.error("erro ao copia texto: ", err);
    });
    document.getElementById("retornarTexto__texto").value = '';
}
function trocaTela(){
    document.getElementById("conteudo__imagem__texto").style.display = "none"
    document.getElementById("retornarTexto").style.display = "flex";
}
function limparTexto(){
    document.getElementById("inserirTexto").value = '';
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
        if(x.slice(i, i + 5) === 'enter'){
            resultado  += 'e';
            i += 4;
        }
        else if(x.slice(i, i + 4) === 'imes'){
            resultado  += 'i';
            i += 3;
        }
        else if(x.slice(i, i + 2) === 'ai'){
            resultado  += 'a';
            i += 1;
        }
        else if(x.slice(i, i + 4) === 'ober'){
            resultado  += 'o';
            i += 3;
        }
        else if(x.slice(i, i + 4) === 'ufat'){
            resultado  += 'u';
            i += 3;
        }
        else{
            resultado  += x[i];
        }
    }
    return resultado;
}