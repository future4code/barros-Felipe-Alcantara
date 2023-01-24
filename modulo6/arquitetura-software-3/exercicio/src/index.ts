import express from "express";
import {app} from "./app"
import { UserControler } from "./1controller/CreatUser"

const userControler = new UserControler()

app.get('/', (req, res) => {
  console.log("endpoint teste")
})

app.post("/createUser", userControler.postUserController)
app.get("/all", userControler.getAllController)
app.delete("/:id", userControler.deleteController)