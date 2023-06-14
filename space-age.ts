export function age(planet: string, seconds: number): number | undefined {
    if (planet === "mercury") {
        let result = seconds / 31557600 / 0.2408467;
        return Math.round(result * 100) / 100;
    } else if (planet === "venus") {
        let result = seconds / 31557600 / 0.61519726;
        return Math.round(result * 100) / 100;
    } else if (planet === "earth") {
        let result = seconds / 31557600;
        return Math.round(result * 100) / 100;
    } else if (planet === "mars") {
        let result = seconds / 31557600 / 1.8808158;
        return Math.round(result * 100) / 100;
    } else if (planet === "jupiter") {
        let result = seconds / 31557600 / 11.862615;
        return Math.round(result * 100) / 100;
    } else if (planet === "saturn") {
        let result = seconds / 31557600 / 29.447498;
        return Math.round(result * 100) / 100;
    } else if (planet === "uranus") {
        let result = seconds / 31557600 / 84.016846;
        return Math.round(result * 100) / 100;
    } else if (planet === "neptune") {
        let result = seconds / 31557600 / 164.79132;
        return Math.round(result * 100) / 100;
    }
}
