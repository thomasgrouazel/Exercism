export class Matrix {
    rows: number[][];
    columns: number[][];

    constructor(string: string) {
        this.rows = string.split("\n").map((row) => {
            return row.split(/\s+/).map(Number);
        });

        this.columns = this.rows[0].map((_, i) => {
            return this.rows.map((row) => row[i]);
        });
    }
}
