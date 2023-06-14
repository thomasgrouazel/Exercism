export function hey(message: string): string {
    if (message.trim() === "") {
        return "Fine. Be that way!";
    } else if (!/[a-zA-Z?]/g.test(message)) {
        return "Whatever.";
    } else if (
        !/[a-z]/g.test(message) &&
        message.endsWith("?") &&
        /[A-Z]/g.test(message)
    ) {
        return "Calm down, I know what I'm doing!";
    } else if (!/[a-z]/g.test(message) && /[A-Z]/g.test(message)) {
        return "Whoa, chill out!";
    } else if (message.trim().endsWith("?")) {
        return "Sure.";
    }
    return "Whatever.";
}
