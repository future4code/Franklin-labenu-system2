import app from "./app";
import addClassroom from "./endpoints/addClassroom";
import changeClassroomModule from "./endpoints/changeClassroomModule";
import getClassrooms from "./endpoints/getClassrooms";

app.post("/classroom/new", addClassroom);
app.get("/classrooms", getClassrooms);
app.put("/classroom/:id", changeClassroomModule);
