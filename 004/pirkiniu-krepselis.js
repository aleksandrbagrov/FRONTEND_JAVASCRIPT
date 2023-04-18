export default class PirkiniuKrepselis {

    constructor() {
        this.turinis = {};
    };

    idetiSureli(value) {
        this.turinis.surelis ? this.turinis.surelis += value : this.turinis.surelis = value;
    }

    idetiPieno(value) {
        this.turinis.pienas ? this.turinis.pienas += value : this.turinis.pienas = value;
    }

    idetiDuonos(value) {
        this.turinis.duona ? this.turinis.duona += value : this.turinis.duona = value;
    }

    krepselioTurinis() {
        if (this.turinis.surelis || this.turinis.pienas || this.turinis.duona) {
            console.log('Siuo metu jusu krepšelije yra :');
            Object.entries(this.turinis).map(([key, value]) => console.log(`${key}: ${value}`));
        } else {
            console.log(`Siuo metu jusu krepšelis tusčiuas.`);
        }
    }
}