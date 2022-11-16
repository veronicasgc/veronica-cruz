export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
      super(message);
    }
  }
  
  export class InvalidName extends CustomError {
    constructor() {
      super(400, "Nome inválido");
    }
  }
  
  export class InvalidEmail extends CustomError {
    constructor() {
      super(400, "Email inválido");
    }
  }
  
  export class InvalidRole extends CustomError {
    constructor() {
      super(400, "Cargo inválido");
    }
  }
  
  export class InvalidPassword extends CustomError {
    constructor() {
      super(400, "Senha inválida. Insira uma senha de pelo menos 6 caracteres!");
    }
  }
  
  export class UserNotFound extends CustomError {
    constructor() {
      super(404, "Usuário não encontrado");
    }
  }
  
  export class Unauthorized extends CustomError {
    constructor() {
      super(401, "Usuário não autorizado");
    }
  }

  //==============================================================================================
  //RECEITAS ERRORS

   
  export class RecipeNotCreated extends CustomError {
    constructor() {
      super(404, "Receita não foi criada pois está faltando algum dado ou está incorreto. Por favor, insira título, descrição e data de criação!");
    }
  }