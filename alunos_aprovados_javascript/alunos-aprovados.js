const alunos = [
    {
        nome:"Fabio",
        nota: 5.0,
        turma:'1A'
    },
    {
        nome:"João",
        nota: 6.0,
        turma:'1A'
    },
    {
        nome:"Gustavo",
        nota: 7.0,
        turma:'1A'
    },
    {
        nome:"Gabi",
        nota: 8.0,
        turma:'1A'
    },
    {
        nome:"Marilene",
        nota: 4.0,
        turma:'1A'
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i=0; i < arr.length; i++){
        const {nota, nome} = arr[i];
        
        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 7));