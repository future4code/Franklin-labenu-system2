import { Person } from "./Person";

export class Student extends Person {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public classroomId: number,
        public hobbies: Array<string>) {

        super(id, name, email, birthDate, classroomId)
    }
}
