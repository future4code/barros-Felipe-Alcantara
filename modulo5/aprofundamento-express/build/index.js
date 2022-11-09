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
app.get("/ping", (req, res) => {
    res.status(200).send("Pong");
});
//Exercicio 4
app.get("/afazeres/status", (req, res) => {
    const tarefas = req.query.status;
    let statusTarefa;
    if (!tarefas) {
        res.status(400).send("Erro: Informe true ou false");
    }
    else if (tarefas === "true") {
        statusTarefa = data_1.arrayAfazeres.filter((item) => {
            return item.completed === true;
        });
    }
    else if (tarefas === "false") {
        statusTarefa = data_1.arrayAfazeres.filter((item) => {
            return item.completed === false;
        });
    }
    res.status(200).send(statusTarefa);
});
//Exercicio 5
app.post("/afazeres", (req, res) => {
    const afazeresAdicionados = req.headers.authorization;
    const { title, completed } = req.body;
    if (!afazeresAdicionados || !title || !completed) {
        res.status(400).send("Erro: Informe os parametros");
    }
    const addTarefas = data_1.arrayAfazeres.push({
        userId: Number(afazeresAdicionados),
        id: Math.random() * 10,
        title,
        completed,
    });
    res.status(200).send(data_1.arrayAfazeres);
});
//exercicio 6 
app.put("/afazeres/:id", (req, res) => {
    const editarTardefas = req.params.id;
    if (!editarTardefas)
        res.status(400).send("Erro:  Informe um id de tarefa.");
    for (let i = 0; i < data_1.arrayAfazeres.length; i++) {
        if (data_1.arrayAfazeres[i].id === Number(editarTardefas)) {
            data_1.arrayAfazeres[i].completed = !data_1.arrayAfazeres[i].completed;
        }
    }
    res.status(200).send(data_1.arrayAfazeres);
});
//exercicio 7
app.delete("/deletar/:id", (req, res) => {
    const del = req.params.id;
    if (!del) {
        res.status(404).send("Erro ao deletar");
    }
    const delTarefas = data_1.arrayAfazeres.filter((tarefa) => {
        return tarefa.id !== Number(del);
    });
    res.status(200).send(delTarefas);
});
//Exercicio8
app.get("/afazerUsuario/:userId", (req, res) => {
    const afazerUsuario = req.params.userId;
    if (!afazerUsuario) {
        res.status(404).send("Deu erro");
    }
    const afazer = data_1.arrayAfazeres.filter((item) => {
        return item.userId === Number(afazerUsuario);
    });
    res.status(200).send(afazer);
});
app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003");
});
