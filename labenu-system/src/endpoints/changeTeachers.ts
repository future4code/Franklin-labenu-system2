import { Request, Response } from "express";
import { Classroom } from "../classes/Classroom";
import { Teacher } from "../classes/Teacher";
import connection from "../conection";

export default async function changeTeacher(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { classroom_id } = req.body as Teacher;

    if (!classroom_id) {
      res.statusCode = 422;
      throw new Error("Insira o módulo para prosseguir");
    }

    await connection("lbn_system_teachers")
      .update({
        classroom_id,
      })
      .where({
        id: req.params.id,
      });

    res.status(201).send(`Parabéns! Sua turma agora está no módulo ${classroom_id}`);
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
