const { checaIdade } = require('./utils');

async function main(idade) {
    try {
        const response = await checaIdade(idade);
        console.log(response);
    } catch(err) {
        console.log(err);
    }

    console.log('Será que aparece antes?');
}

main(15);