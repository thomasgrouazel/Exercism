export function toRna(DNA: string): string {
    const corres: Record<string, string> = {
        G: "C",
        C: "G",
        T: "A",
        A: "U",
    };

    let result = "";

    for (let i = 0; i < DNA.length; i++) {
        const newLetter = corres[DNA[i]];

        if (newLetter) {
            result += newLetter;
        } else {
            throw new Error("Invalid input DNA."); //fonctionne pour exercism mais pas ailleur, c'est un attendu de leurs test
            return "Invalid input DNA.";
            //je ne sais pas comment gérer une erreur via throw sans planter ts
        }
    }
    return result;
}
console.log(toRna("GCTA"));
