export abstract class Person {

    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected birthDate: string,
        protected classroomId: number) {
    }
}