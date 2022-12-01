"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getAllCharacters_1 = require("./endPoints/getAllCharacters");
const createCharacter_1 = require("./endPoints/createCharacter");
app_1.default.get("/character", getAllCharacters_1.getAllCharacters);
app_1.default.put("/character", createCharacter_1.createCharacter);
//# sourceMappingURL=index.js.map