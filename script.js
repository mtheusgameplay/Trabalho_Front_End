// Altera o texto do parágrafo inicial
function alterarTexto() {
    document.getElementById("text").innerHTML = "Ao clicar, eu mudei!!";
}

// Adicionar um novo parágrafo
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerHTML = "Depois que você clicou, eu apareci🙂  !!";
    document.body.appendChild(novoParagrafo);
}

// Remove o último parágrafo, se houver mais de um
function removeParagrafo() {
const paragrafos = document.querySelectorAll("p");
if (paragrafos.length > 1) {
    paragrafos[paragrafos.length - 1].remove();
} else {
    alert("Não há mais parágrafos para remover😢 !!");
}

}

// Muda a cor de fundo da página para uma cor aleatória
function mudarCorFundo() {
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = corAleatoria;
}

// Muda a cor do texto do parágrafo inicial para uma cor aleatória
function mudaCorTexto() {
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC133"];
    document.getElementById("text").style.color = cores[Math.floor(Math.random() * cores.length)];
}

 









