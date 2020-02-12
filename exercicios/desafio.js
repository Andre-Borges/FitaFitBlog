/* Converta o código abaixo para async/await */

function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => idade >= 18 ? resolve('Maior que 18') : reject('Menor que 18'), 2000);
    });
}

async function executaChecagemDeIdade(idade) {
    try {
        const response = await checaIdade(idade);
        console.log(response);
    } catch(err) {
        console.log(err);
    }

    console.log('Será que aparece antes?');
}

executaChecagemDeIdade(20);




