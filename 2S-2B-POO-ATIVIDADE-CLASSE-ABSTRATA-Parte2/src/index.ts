import { PessoaFisica } from "./model/PessoaFisica";
import { PessoaJuridica } from "./model/PessoaJuridica";

const p1 = new PessoaFisica (`Lily Bloom`, `26394856078`);
p1.setNome(`Julietta`);
console.log(`Nome: ${p1.getNome()}`, `CPF: ${p1.getCpf()}`);

const p2 = new PessoaJuridica (`Douglas`, `3657645435478`);
p2.setNome(`Jubisvaldo`);
console.log(`Nome: ${p2.getNome()}`, `CNPJ: ${p2.getCnpj()}`);



