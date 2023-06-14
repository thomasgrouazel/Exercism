export function score(x: number, y: number): number {
    let result: number = Math.sqrt(x ** 2 + y ** 2);
    if (result >= 0 && result < 1) {
        return 10;
    } else if (result >= 1 && result < 5) {
        return 5;
    } else if (result >= 5 && result <= 10) {
        return 1;
    }
    return 0;
}
console.log(score(0, 10));

// Correction :
// export function score(x: number, y: number): number {
//     let result: number = Math.sqrt(x ** 2 + y ** 2);
//     if (result <= 1) {
//         return 10;
//     } else if (result <= 5) {
//         return 5;
//     } else if (result <= 10) {
//         return 1;
//     }
//     return 0;
// }
