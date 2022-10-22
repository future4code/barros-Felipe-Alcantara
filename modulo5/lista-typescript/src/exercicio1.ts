
function nascimento(nome: string, nascimento: string) : string {
    const data = nascimento.split("/");
    let dia = data[0];
    let mes = data[1];
    let ano = data[2];
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
}

console.log(nascimento("Felipe", "10/05/1987"))