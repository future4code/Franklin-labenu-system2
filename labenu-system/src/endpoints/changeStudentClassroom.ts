import { Request, Response } from "express";
import { Student } from "../classes/Student";
import connection from "../conection";

export default async function changeStudentClassroom(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { classroom_id } = req.body as Student;

    if (!classroom_id) {
      res.statusCode = 422;
      throw new Error("Insira o id da turma para prosseguir");
    }

    await connection("lbn_system_students")
      .update({
        classroom_id,
      })
      .where({
        id: req.params.id,
      });

    res
      .status(201)
      .send(
        `Parabéns! O aluno agora está cadastrado na turma de id ${classroom_id}`
      );
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
