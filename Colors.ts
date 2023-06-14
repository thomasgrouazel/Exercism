export const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
    "returns all colors": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

type Color = keyof typeof colors;

export const colorCode = (first: Color) => {
    if (first === "returns all colors") {
        return colors["returns all colors"];
    }
    return colors[first];
};

console.log(colorCode("black"));
