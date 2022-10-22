const arrayEstoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
function produtos(arrayEstoque) {
    const valorAjustado = arrayEstoque.map((item) => {
        return { nome: item.nome, quantidade: item.quantidade, valorUnitario: ajustaPreco(item.valorUnitario) };
    });
    function organizar(a, b) {
        if (a.quantidade < b.quantidade) {
            return -1;
        }
        else if (a.quantidade > b.quantidade) {
            return 1;
        }
        else {
            return 0;
        }
    }
    return valorAjustado.sort(organizar);
}
console.table(produtos(arrayEstoque));
//# sourceMappingURL=exercicio7.js.map