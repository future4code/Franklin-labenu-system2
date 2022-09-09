import { Request, Response } from "express";
import { Teacher } from "../classes/Teacher";
import connection from "../conection";
import { IdGenerator } from "../services/idGenerator";

export default async function addTeacher(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, email, birth_date, classroom_id } = req.body as Teacher;

        if (!name || !email || !birth_date || !classroom_id) {
            res.statusCode = 422;
            throw new Error(
                "Insira o nome, email, data de nascimento e a turma do Professor"
            );
        }

        const id: string = new IdGenerator().generateId();

        const newTeacher = {
            id,
            name,
            email,
            birth_date,
            classroom_id,
        };

        await connection("lbn_system_teachers").insert(newTeacher);

        res.status(201).send(`${newTeacher.name} agora é um Professor!`);
    } catch (error: any) {
        if (res.statusCode === 200) {
            console.log(error);
            res.status(500).send({ message: "Internal server error" });
        } else {
            console.log(error);
            res.send({ message: error.message });   
        }
    }
}
