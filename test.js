"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
var colors = {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9,
};
function decodedValue(values) {
    var color1 = values[0], color2 = values[1];
    return 2;
    //return Number(`${colors[color1]}${colors[color2]}`)
}
exports.decodedValue = decodedValue;
