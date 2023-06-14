const resetName = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomLetters = "";
    let randomNumbers = "";
    for (let i = 0; i < 2; i++) {
        randomLetters += chars[Math.floor(Math.random() * chars.length)];
    }

    randomNumbers += 100 + Math.floor(Math.random() * 899);

    return randomLetters + randomNumbers;
};

console.log(resetName());
