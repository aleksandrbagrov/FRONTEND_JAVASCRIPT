export default class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetos = 0;
        this.banknotai = 0
    }

    ideti(pinigas) {
        if (pinigas > 2) {
            this.popieriniaiPinigai += pinigas
            this.banknotai();
        } else {
            this.metaliniaiPinigai += pinigas;
            this.monetos();
        }

        skaiciuoti() {
            console.log('Visa turima pinigineje suma:  ', this.popieriniaiPinigai + this.metaliniaiPinigai);
        }

        monetos() {
            this.monetos += 1;
        }

        banknotai() {
            this.banknotai += 1;
        }
    }
