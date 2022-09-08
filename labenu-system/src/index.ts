import app from "./app";
import addClassroom from "./endpoints/addClassroom";

app.post("/classroom/new", addClassroom);
