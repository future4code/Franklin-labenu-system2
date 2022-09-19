import { Person } from "./Person";

export class Teacher extends Person {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birth_date: string,
        public classroom_id: number,
        public specialties: string) {

        super(id, name, email, birth_date, classroom_id)
    }
}