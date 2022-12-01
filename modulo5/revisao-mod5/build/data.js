"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = exports.movies = void 0;
const types_1 = require("./types");
exports.movies = [
    {
        id: 1,
        title: "x-man: O filme",
        year: 2000
    },
    {
        id: 2,
        title: "DeadPool",
        year: 2016
    }
];
exports.characters = [
    {
        id: 1,
        name: "Storm",
        gender: types_1.GENDER.FEMALE,
    },
    {
        id: 2,
        name: "DeadPool",
        gender: types_1.GENDER.OTHER,
        description: "Sexy motherf***",
    },
    {
        id: 3,
        name: "Colossus",
        gender: types_1.GENDER.MALE,
    }
];
//# sourceMappingURL=data.js.map