var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function infoFilme(nome, ano, genero, pontos) {
    let info1 = { nome: nome, ano: ano, genero: genero, pontuacao: pontos };
    let info2 = { nome: nome, ano: ano, genero: genero };
    if (typeof pontos === "number") {
        return info1;
    }
    else {
        return info2;
    }
}
console.log(infoFilme("x-man", 2000, GENERO.ACAO, 80));
console.log(infoFilme("x-man", 2000, GENERO.ACAO));
//# sourceMappingURL=exercicio3.js.map