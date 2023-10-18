import { BebeNatimorto} from "./model/BebeNatimorto";
import { BebeNormal } from "./model/BebeNormal";
import { BebePrematura } from "./model/BebePrematura";

const bb1 = new BebeNormal (`27101989`, `Taylor Alison Swift`, 3412, 50, true );
bb1.setId(`30366523`);
bb1.setNome(`Olivia Grace`);
bb1.setPeso(3245);
bb1.setAltura(44);
console.log(`Id: ${bb1.getId()}`, `Nome: ${bb1.getNome()}`);
console.log(`Peso: ${bb1.getPeso()}`);
console.log(`Altura: ${bb1.getAltura()}`);
console.log(`Vacinado: ${bb1.getVacinado()}`);

const bb2 = new BebePrematura (`45654278`, `Harry James Potter`, 2107, 29, `28` );
bb2.setId(`21347554`);
bb2.setNome(`Ronald Bilius Weasley`);
bb2.setPeso(2145);
bb2.setAltura(32);
console.log(`Id: ${bb2.getId()}`, `Nome: ${bb2.getNome()}`);
console.log(`Peso: ${bb2.getPeso()}`);
console.log(`Altura: ${bb2.getAltura()}`);
console.log(`Semanas de Gestação: ${bb2.getSemanasGestacao()}`);

const bb3 = new BebeNatimorto (`23441989`, `Hermione jean Granger`, 500, 25, `Mãe apresentava problemas na plascenta` );
bb3.setId(`30746522`);
bb3.setNome(`Luna Lovegood`);
bb3.setPeso(470);
bb3.setAltura(24);
console.log(`Id: ${bb3.getId()}`, `Nome: ${bb3.getNome()}`);
console.log(`Peso: ${bb3.getPeso()}`);
console.log(`Altura: ${bb3.getAltura()}`);
console.log(`Causa: ${bb3.getCausa()}`);
