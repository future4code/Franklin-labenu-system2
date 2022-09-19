import { Request, Response } from "express";
import connection from "../conection";

export default async function searchStutendByName(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const researchedStudent = await connection("lbn_system_students").where({
      name: req.params.name,
    });

    res.send(researchedStudent);
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
