import { Response } from "express";
import connection from "../conection";

export default async function getTeachers(res: Response): Promise<void> {
  try {
    const activeTeachers = await connection("lbn_system_teachers");
    res.send(activeTeachers);
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
