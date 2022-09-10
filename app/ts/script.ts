const p1 = new Pessoa('Valquer', 19, new Date('03/12/2003'))
const pf1 = new PessoaFisica('Erick', '88', 19, new Date('10/13/2002'))
const pj1 = new PessoaJuridica('Manoel', '03', 28, new Date('11/20/1993'))

console.log('Pessoa: ',p1.nome, p1.idade, p1.dataNascimento);
console.log('Pessoa Física: ',pf1.nome, pf1.idade, pf1.cpf, pf1.dataNascimento)
console.log('Pessoa Jurídica', pj1.nome, pj1.idade, pj1.cnpj, pj1.dataNascimento)

