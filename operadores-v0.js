function Somar(){

    let v1 = parseFloat(prompt('Digite o valor 01.'));
    alert(`O valor digitado foi ${v1}.`);
    let v2 = parseFloat(prompt('Digite o valor 02.'));
    alert(`O valor digitado foi ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v1+v2}.`;

}

function Subtrair(){
    let v1 = parseFloat(prompt('Digite o valor 01.'));
    alert(`O valor digitado foi ${v1}.`);
    let v2 = parseFloat(prompt('Digite o valor 02.'));
    alert(`O valor digitado foi ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v1-v2}.`;
}

function Multiplicar(){
    let v1 = parseFloat(prompt('Digite o valor 01.'));
    alert(`O valor digitado foi ${v1}.`);
    let v2 = parseFloat(prompt('Digite o valor 02.'));
    alert(`O valor digitado foi ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v1*v2}.`;
}

function Dividir(){
    let v1 = parseFloat(prompt('Digite o valor 01.'));
    alert(`O valor digitado foi ${v1}.`);
    let v2 = parseFloat(prompt('Digite o valor 02.'));
    alert(`O valor digitado foi ${v2}.`);

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é: ${v1/v2}.`;
}