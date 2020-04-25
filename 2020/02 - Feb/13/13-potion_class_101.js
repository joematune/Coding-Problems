// Source: Code Wars - https://www.codewars.com/kata/5981ff1daf72e8747d000091

// My solution - 01

class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(potion2) {
        let mixVolume = this.volume + potion2.volume;
        let mixColor = this.color.map((color1, idx) => {
            return Math.ceil(
                    ((color1 * this.volume) + 
                     (potion2.color[idx] * potion2.volume))
                    / mixVolume
                );
        });
        return new Potion(mixColor, mixVolume);
    }
}