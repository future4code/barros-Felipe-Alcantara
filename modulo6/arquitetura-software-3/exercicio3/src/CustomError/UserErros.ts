import { CustomError } from "./CustomError";

export class invalidEmail extends CustomError{
  constructor(){
    super(400, "Invalid email address")
  }
}

  export class invalidPassword extends CustomError{
    constructor(){
      super(400, "Invalid password")
    }
  
  }
