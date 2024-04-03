const numero = [];
let linhas = '';

function limitarTamanho(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
} /*usado para validar o oninput usado no form*/

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');
 
    if (numero.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já foi inserido`);
        return; /*importante sempre colocar a função return apos o alert para parar o loop e impedir que o numero repetido seja adicionado a tabela*/
    } else {
        numero.push(inputNumero.value);
	}
 
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputNumero.value = '';

    atualizaTabela();
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('#tabela-corpo'); /*o # e colocado antes do id para sinaliza-lo*/
    corpoTabela.innerHTML = linhas;

    const totalContatos = corpoTabela.getElementsByTagName('tr').length;
    document.getElementById('resultado').textContent = `Total de contatos: ${totalContatos - 1}`;
}

function calculaContatos() {
    let contatos = 1;

    for (let i = 1; i < numero.length; i++) {
        resultados += numero[i];
    }
}

