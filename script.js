/*inicio do login*/
function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('sucesso');
        location.href = "home.html";
    } else {
        alert('usuario ou senha incorretos');
    }

}
/*fim do login*/

/*inicio da calculadora*/
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada"
    }
}
/*fim da calculadora*/

/*começo to-do-list*/
const localStorageKey = 'to-do-list-gn'

function validateIfExistsNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask() {

    let input = document.getElementById('input-new-task')
    input.style.border = ''
    //validação

    if (!input.value) {
        input.style.border = '1px solid red'
        alert('Digite algo para incerir em sua lista')
    }
    else if (validateIfExistsNewTask()) {
        alert('ja existe uma task com essa descrição')
    }
    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues() {

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>ok</button></li>`;
    }
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

showValues()
/*fim to-do-list*/