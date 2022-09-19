import { Request, Response } from "express";
import { Classroom } from "../classes/Classroom";
import connection from "../conection";

export default async function changeClassroomModule(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { module } = req.body as Classroom;

    if (!module) {
      res.statusCode = 422;
      throw new Error("Insira o módulo para prosseguir");
    }

    await connection("lbn_system_classrooms")
      .update({
        module,
      })
      .where({
        id: req.params.id,
      });

    res.status(201).send(`Parabéns! Sua turma agora está no módulo ${module}`);
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
