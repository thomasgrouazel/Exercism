export class Robot {
    robotName: string = "";
    static allNames: string[] = [];

    constructor() {
        this.resetName();
        Robot.releaseNames();
    }

    public get name(): string {
        return this.robotName;
    }

    public resetName(): void {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomLetters = "";
        let randomNumbers = "";
        for (let i = 0; i < 2; i++) {
            randomLetters += chars[Math.floor(Math.random() * chars.length)];
        }

        randomNumbers += 100 + Math.floor(Math.random() * 899);

        this.robotName = randomLetters + randomNumbers;
        if (!Robot.allNames.includes(this.robotName)) {
            Robot.allNames.push(this.robotName);
        } else if (Robot.allNames.includes(this.robotName)) {
            for (let i = 0; i < 2; i++) {
                randomLetters +=
                    chars[Math.floor(Math.random() * chars.length)];
            }

            randomNumbers += 100 + Math.floor(Math.random() * 899);

            this.robotName = randomLetters + randomNumbers;
        }
    }

    public static releaseNames(): void {
        Robot.allNames;
    }
}
