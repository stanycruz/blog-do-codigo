const { promisfy } = require('util');

module.exports = lista => {
    const setAsync = promisfy(lista.set).bind(lista);
    const existsAsync = promisfy(lista.exists).bind(lista);
    const getAsync = promisfy(lista.get).bind(lista);
    const delAsync = promisfy(lista.del).bind(lista);

    return {
        async adiciona(chave, valor, dataExpiracao) {
            await setAsync(chave, valor);
            lista.expireat(chave, dataExpiracao);
        },

        async buscaValor(chave) {
            return getAsync(chave);
        },

        async contemChave(chave) {
            const resultado = await existsAsync(chave);
            return resultado === 1;
        },

        async deleta(chave) {
            await delAsync(chave);
        }
    }
}