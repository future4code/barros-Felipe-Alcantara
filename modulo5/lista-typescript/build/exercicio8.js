function palavra(palavra) {
    let anagrama = palavra.length;
    for (let i = 1; i < palavra.length; i++) {
        anagrama = anagrama * i;
    }
    return anagrama;
}
console.log(palavra("pa"));
//# sourceMappingURL=exercicio8.js.map