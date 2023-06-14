export function commands(input: number) {
    let binary = input.toString(2).split("").reverse();

    let instructions: string[] = [];
    if (binary[0] === "1") instructions.push("wink");
    if (binary[1] === "1") instructions.push("double blink");
    if (binary[2] === "1") instructions.push("close your eyes");
    if (binary[3] === "1") instructions.push("jump");
    if (binary[4] === "1") instructions = instructions.reverse();

    return instructions;
}
console.log(commands(3));
