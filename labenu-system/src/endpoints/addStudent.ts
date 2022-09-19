import { Request, Response } from "express";
import { Student } from "../classes/Student";
import connection from "../conection";
import { IdGenerator } from "../services/idGenerator";

export default async function addStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, birth_date, classroom_id } = req.body as Student;

    if (!name || !email || !birth_date || !classroom_id) {
      res.statusCode = 422;
      throw new Error(
        "Insira o nome, email, data de nascimento e a turma do aluno"
      );
    }

    const id: string = new IdGenerator().generateId();

    const newStudent: Student = {
      id,
      name,
      email,
      birth_date,
      classroom_id,
    };

    await connection("lbn_system_students").insert(newStudent);

    res.status(201).send(`${newStudent.name} agora é um aluno!`);
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
