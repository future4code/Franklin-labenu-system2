import { Request, Response } from "express";
import app from "./app";
import connection from "./conection";

app.get("/ping", async (request: Request, response: Response) => {
    try {
        response.send("Pong!")
    } catch (error) {
        console.log(error);
    }
});
