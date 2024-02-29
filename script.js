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

const localStorageaKey = 'to-do-list-gn'

function newTask() {

    let input = document.getElementById('input-new-task')

    //validação

    if (!input.value) {
        alert('Digite algo para incerir em sua lista')
    }
    else {
        let values = JSON.parse(localStorage.getItem(''))
    }
}