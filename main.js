const tarefa = document.querySelector('.cadastro')
const listaTarefas = []

let linhas = ''

tarefa.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputTarefa = document.getElementById('tarefa')

    if (listaTarefas.includes(inputTarefa.value)) {
        alert(`A tarefa: ${inputTarefa.value} já foi inserida!`)
    } else {
        listaTarefas.push(inputTarefa.value)
    
        let linha = '<li>'
        linha += `<li>${inputTarefa.value}</li>`
        linha += `</li>`
    
        linhas += linha
    }

    inputTarefa.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('.tarefas-adicionadas ul')
    corpoTabela.innerHTML = linhas
}

$(document).ready(function() {
    $('.tarefas-adicionadas ul').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    })
})