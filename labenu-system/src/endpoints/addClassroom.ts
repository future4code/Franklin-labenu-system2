import { Request, Response } from "express";
import { Classroom } from "../classes/Classroom";
import connection from "../conection";
import { IdGenerator } from "../services/idGenerator";

export default async function addClassroom(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { module, name } = req.body as Classroom;

    if (!name) {
      res.statusCode = 422;
      throw new Error("Insira pelo menos o nome da turma");
    }

    const id: string = new IdGenerator().generateId();

    const newClassroom: Classroom = {
      id,
      module,
      name,
    };

    await connection("lbn_system_classrooms").insert(newClassroom);

    res.status(201).send(`${newClassroom.name} criada(o) com sucesso`);
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
