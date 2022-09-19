import { Person } from "./Person";

export class Student extends Person {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birth_date: string,
        public classroom_id: number) {

        super(id, name, email, birth_date, classroom_id)
    }
}
