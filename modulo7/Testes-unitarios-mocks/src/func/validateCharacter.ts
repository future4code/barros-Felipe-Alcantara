import { Character } from "../model/Character";

    export const validateCharacter =(input: Character): boolean => {
      if(!input.name || input.life===undefined || input.strength===undefined || input.defense){
        
        return false;
      }

      if(input.life<=0 || input.strength<=0 || input.defense <=0){
        return false;
      }
      return true
    }
