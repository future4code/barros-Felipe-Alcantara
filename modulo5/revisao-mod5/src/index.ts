import app from './app';
import {getAllCharacters} from './endPoints/getAllCharacters';
import  {createCharacter}  from './endPoints/createCharacter';

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)


