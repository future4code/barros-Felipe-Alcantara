"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Exercicio 1
app.get("/", (req, res) => {
    res.send("Hello from express");
});
//Exercicio 4
app.get("/users", (req, res) => {
    const userData = data_1.arrayUsers;
    res.status(200).send(userData);
});
app.get("/post", (req, res) => {
    const userPost = data_1.arrayUsersPost;
    res.status(200).send(userPost);
});
//exercicio 8
app.get("/post/:id", (req, res) => {
    const userPostId = req.params.id;
    const userid = data_1.arrayUsersPost.filter((user) => {
        return user.userId === Number(userPostId);
    });
    if (!userPostId || !userid || userid.length === 0) {
        res.status(404).send("Erro: Informe um ID");
    }
    res.status(200).send(userid);
});
app.listen(3003, () => {
    console.log("servidor rodando na porta 3003");
});
