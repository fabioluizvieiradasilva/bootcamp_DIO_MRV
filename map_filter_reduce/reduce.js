const lista = [
    {
        nome: 'Teclado',
        preco: 200
    },
    {
        nome: 'Monitor',
        preco: 500,
    },
    {
        nome: 'Mouse',
        preco: 70
    }
];

const saldoDisponivel = 1000;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada ' + (index + 1));
        console.log(current);
        console.log(prev);
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));