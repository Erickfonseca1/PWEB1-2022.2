class PessoaFisica extends Pessoa {
    private readonly _cpf: string;
    
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
    
    get nome(): string {
        return this._nome += '-Física';
    }

    toString(): string {
        return `${super.toString()}, ${this._cpf}`;
    }
}
