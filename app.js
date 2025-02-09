//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = [];
indice = 0;
amigosSorteados = [];

function adicionarAmigo(){

    let amigoNovo = document.querySelector('input').value;

    if ( listaAmigos.includes(amigoNovo) == false && amigoNovo !== "") {

            listaAmigos.push(amigoNovo);
            atualizarLista();
    
    } else {

        let alerta = amigoNovo == ""
        ? "Campo nome vazio, digite o nome de um amigo!"
        : "Nome de amigo já inserido, por vaor digite outro!";
        alert(alerta);

    }   
}

function atualizarLista (){

    limparlista();

    for (const amigo of listaAmigos) {
        var novoItem = document.createElement("li");
        novoItem.textContent = amigo;
        document.getElementById("listaAmigos").appendChild(novoItem);
    }
}

function limparlista(){

        var lista = document.getElementById('listaAmigos');
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    
}

function sortearAmigo() {

    let indice = parseInt(Math.random() * (length(listaAmigos) -1 ));
    let amigo = listaAmigos[indice];
    listaAmigos = listaAmigos.filter(item => item !== amigo);

    if (amigosSorteados.includes(amigo)){

        return sortear();

    } else {
        
        atualizarLista();

    }

}