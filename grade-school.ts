export class GradeSchool {
    actualRoster: { [key: number]: string[] } = {};

    public roster() {
        return structuredClone(this.actualRoster);
    }

    public add(name: string, grade: number): void {
        console.log(Object.keys(this.actualRoster));
        console.log(Object.keys(this.actualRoster).includes(grade.toString()));
        let alreadySetName: boolean = false;
        //if (Object.keys(this.actualRoster).includes(grade.toString()))
        Object.keys(this.actualRoster).forEach((key) => {
            // this.actualRoster[parseInt(key)].forEach((element: string) => {
            //     if (element === name) {
            this.actualRoster[parseInt(key)] = this.actualRoster[
                parseInt(key)
            ].filter((el) => el !== name);
            // }
            // });
        });

        if (this.actualRoster[grade]) {
            this.actualRoster[grade].push(name);
        } else {
            this.actualRoster[grade] = [name];
        }
        console.log(`Grade ${grade}:`, this.actualRoster[grade]);
        this.actualRoster[grade].sort();
    }

    public grade(grade: number): string[] {
        if (this.actualRoster[grade]) {
            return structuredClone(this.actualRoster[grade]);
        } else {
            return [];
        }
    }
}
