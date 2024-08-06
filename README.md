<h1 align='center'>Desafio de Codigo </h1>
<p><strong>Decodificador de Texto:</strong> Este projeto tem o objetivo de criar uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.</p>

As chaves de criptografia utilizadas são:

- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"
  
<h2 align='center'> :hammer: Funcionalidades do projeto</h2>

- `Criptografar`: essa função tem o objetivo de capturar o texto escrito no campo input do HTML, converter todas as strings para o minúsculo e verificar se possui acentuação, apos isso, ele chama a função criptografando(x) que faz a parte logica da criptografia e retorna o texto criptografado.
- `descriptografar`: essa função, assim como a de criptografia, tem o objetivo de capturar o texto escrito no campo input do HMTL, converter todas as strings para o minúsculo e verificar se possui acentuação, apos isso, ele chama a função descriptografando(x) que faz a parte logica da descriptografia e retorna o texto descriptografado.
- `copiarTexto`: essa função utiliza o Clipboard API e tem o objetivo de copiar o texto retornado apos o usuário criptografar ou descriptografar o texto.
- `possuiAcento`: essa função é usada para procurar qualquer um dos caracteres acentuados listados no código e retorna true se possui acento ou false caso nao possua.

<h2 align='center'>:information_source: Instalação e Uso</h2>

Voce pode <a target="_blank" href="https://github.com/LucasMSS98/decodificador_texto.git">acessar o codigo fonte do projeto</a> ou <a target="_blank" href="https://github.com/LucasMSS98/decodificador_texto/archive/refs/heads/main.zip">baixá-lo aqui.</a>

1. Clone o repositório ou baixe-o.
2. Abra o arquivo `index.html` em seu navegador.
3. Insira o texto que deseja criptografar ou descriptografar.
