//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = [];
indice = 0;
amigosSorteados = [];

function adicionarAmigo(){

    let amigoNovo = document.querySelector('input').value;

    if ( listaAmigos.includes(amigoNovo) == false && amigoNovo !== "") {

            listaAmigos.push(amigoNovo);
            limparlista('listaAmigos')
            atualizarLista(listaAmigos, 'listaAmigos');
    
    } else {

        let alerta = amigoNovo == ""
        ? "Campo nome vazio, digite o nome de um amigo!"
        : "Nome de amigo já inserido, por vaor digite outro!";
        alert(alerta);

    }   
}

function atualizarLista (listaTemp, texto){

    for (const amigo of listaTemp) {
        var novoItem = document.createElement("li");
        novoItem.textContent = texto == 'resultado' 
        ? ` O amigo secreto sorteado é: ${amigo}`
        : amigo;
        document.getElementById(texto).appendChild(novoItem);
    }
}

function limparlista(texto){

        var lista = document.getElementById(texto);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    
}

function sortearAmigo() {

    if (listaAmigos.length !== 0) {
        
        let indice = parseInt(Math.random() * (listaAmigos.length));
        let escolhido = listaAmigos[indice];
        
        listaAmigos = listaAmigos.filter(item => item !== escolhido);
        limparlista('listaAmigos')
        atualizarLista(listaAmigos, 'listaAmigos');

        if (amigosSorteados.length > 0) {
            limparlista('resultado');
            amigosSorteados = [];
        }
        amigosSorteados.push(escolhido);
        console.log(amigosSorteados);
        atualizarLista(amigosSorteados, 'resultado');
        
    } else {

        if (amigosSorteados.length > 0) {
            limparlista('resultado');
            amigosSorteados = [];
        }
        alert("A lista de amigos está vazia, insira alguns nomes.")

    }
   
}