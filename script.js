let nome = "Nicholas Cardoso Santos"
let turma = "2DS"
let curso = "Desenvolvimento de Sistemas"

function clicarMensagem() {
    document.getElementById("msg").innerHTML = "Servidor funcionando!"
}

function clicarAluno() {
    document.getElementById("dados").innerHTML =
    "Nome: " + nome + "<br>" +
    "Turma: " + turma + "<br>" +
    "Curso: " + curso
}