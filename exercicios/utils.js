/* Converta o código abaixo para async/await */

module.exports = {
    checaIdade(idade) {
        return new Promise((resolve, reject) => {
            setTimeout(() => idade >= 18 ? resolve('Maior que 18') : reject('Menor que 18'), 2000);
        });
    }
};