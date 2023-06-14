export enum Colors {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9,
}

export enum Prefixes {
    black = "",
    brown = "0",
    red = "00",
    orange = "000",
    yellow = "0000",
    green = "00000",
    blue = "000000",
    violet = "0000000",
    grey = "00000000",
    white = "000000000",
}
type Color = keyof typeof Colors;
type Zeros = keyof typeof Prefixes;
export function decodedResistorValue([first, second, third]: Color[]): string {
    let result = parseInt(
        `${Colors[first]}${Colors[second]}${Prefixes[third]}`
    );

    if (result < 1000) {
        return `${parseInt(
            `${Colors[first]}${Colors[second]}${Prefixes[third]}`
        )} ohms`;
    } else if (result < 1000000) {
        return `${
            parseInt(`${Colors[first]}${Colors[second]}${Prefixes[third]}`) /
            1000
        } kiloohms`;
    } else if (result < 1000000000) {
        return `${
            parseInt(`${Colors[first]}${Colors[second]}${Prefixes[third]}`) /
            1000000
        } megaohms`;
    }
    return `${
        parseInt(`${Colors[first]}${Colors[second]}${Prefixes[third]}`) /
        1000000000
    } gigaohms`;
}

console.log(decodedResistorValue(["grey", "blue", "white"]));
