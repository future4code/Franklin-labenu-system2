import app from "./app";
import addClassroom from "./endpoints/addClassroom";
import getClassrooms from "./endpoints/getClassrooms";

app.post("/classroom/new", addClassroom);
app.get("/classrooms", getClassrooms);
