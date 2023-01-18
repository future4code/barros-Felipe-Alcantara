import {app} from "./app"
import { UserControler } from "./1controller/CreatUser"

const userControler = new UserControler()

app.post("/createUser", userControler.createUser)

app.get('/', (req, res) => {
  console.log("endpoint teste")
})
