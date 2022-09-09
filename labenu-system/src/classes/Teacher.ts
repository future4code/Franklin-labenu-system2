import { Person } from "./Person";

export class Teacher extends Person {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public classroomId: number,
        public specialties: string) {

        super(id, name, email, birthDate, classroomId)
    }
}