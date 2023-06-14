export function isPangram(sentence: string) {
    let pangram =
        new Set(sentence.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
    return pangram;
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
