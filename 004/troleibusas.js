export default class Troleibusas {
    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius() {
        console.log('Šiuo metu visuose autobusose važiuoja ', this.visiKeleiviai, 'keleiviu');
    }

    constructor() {
        this.keleiviuSkaicius = 0
    }

    ilipa(value) {
        this.keleiviuSkaicius += value;
        this.constructor.visiKeleiviai += value;
    }

    islipa(value) {
        if(this.keleiviuSkaicius < value) {
            throw new Error(`Keleiviu negali išlipti daugiau negu ju yra autobuse. Max skaičius ${this.keleiviuSkaicius}`);
        } else {
            this.keleiviuSkaicius -= value;
            this.constructor.visiKeleiviai -=value;
        }
    }

    vaziuoja() {
        console.log('Šiuo metu autobuse važiuoja ', this.keleiviuSkaicius, 'keleiviu');
    }
}