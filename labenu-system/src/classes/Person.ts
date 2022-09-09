export abstract class Person {

    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected birth_date: string,
        protected classroom_id: number) {
    }
}