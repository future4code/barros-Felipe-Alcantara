export class ClientCreateInputDTO{
    name:string;
    constructor(name:string) { 
        this.name = name; 
    }
}

export class Client{

    id:string;
    name:string;
    constructor(name:string,id:string) { 
        this.name = name; 
        this.id=id;
    }
    
}
