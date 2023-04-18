import Pinigine from './pinigine.js';
import Troleibusas from './troleibusas.js';
import PirkiniuKrepselis from './pirkiniu-krepselis.js';

console.log('\nTask #2 - Pinigine\n');
const pinigine = new Pinigine();
console.log('Metaliniai pinigai pinigineje:  ', pinigine.metaliniaiPinigai);
console.log('Poperiniai pinigai pinigineje:  ', pinigine.popieriniaiPinigai);

pinigine.ideti(1.8);

console.log('Metaliniai pinigai pinigineje:  ', pinigine.metaliniaiPinigai);
console.log('Poperiniai pinigai pinigineje:  ', pinigine.popieriniaiPinigai);

pinigine.ideti(2.2);

console.log('Metalinia pinigai pinigineje:  ', pinigine.metaliniaiPinigai);
console.log('Poperiniai pinigai pinigineje:  ', pinigine.popieriniaiPinigai);
pinigine.skaiciuoti();

console.log('\nTask #3 - Troleibusas\n');
const troleibusas = new Troleibusas();
troleibusas.vaziuoja();

troleibusas.ilipa(5);
troleibusas.vaziuoja();

troleibusas.islipa(3);
troleibusas.vaziuoja();

troleibusas.islipa(1);
troleibusas.ilipa(10);
troleibusas.vaziuoja();

troleibusas.islipa(11);
troleibusas.vaziuoja();

console.log('\nTask #4 - Visi Troleibusai\n');

const troleibusas2 = new Troleibusas();
const troleibusas3 = new Troleibusas();


troleibusas2.ilipa(8);
troleibusas2.islipa(5);
troleibusas2.vaziuoja();

troleibusas3.ilipa(10);
troleibusas3.islipa(3);
troleibusas3.vaziuoja();

Troleibusas.bendrasKeleiviuSkaicius();

console.log('\nTask #5 - Pirkiniu Krepselis\n');

const pirkiniuKrepselis = new PirkiniuKrepselis();

pirkiniuKrepselis.krepselioTurinis();

pirkiniuKrepselis.idetiSureli(2);
pirkiniuKrepselis.krepselioTurinis();
pirkiniuKrepselis.idetiPieno(1);
pirkiniuKrepselis.krepselioTurinis();
pirkiniuKrepselis.idetiDuonos(2);
pirkiniuKrepselis.krepselioTurinis();
pirkiniuKrepselis.idetiPieno(1);
pirkiniuKrepselis.idetiSureli(2);
pirkiniuKrepselis.krepselioTurinis();
