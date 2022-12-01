"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCharacters = void 0;
const data_1 = require("../data");
function getAllCharacters(req, res) {
    res.send(data_1.characters);
}
exports.getAllCharacters = getAllCharacters;
//# sourceMappingURL=getAllCharacters.js.map