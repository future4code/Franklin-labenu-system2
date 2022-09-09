import app from "./app";
import addClassroom from "./endpoints/addClassroom";
import addStudent from "./endpoints/addStudent";
import changeClassroomModule from "./endpoints/changeClassroomModule";
import getClassrooms from "./endpoints/getClassrooms";
import searchStudentByName from "./endpoints/searchStutendByName";

app.post("/classroom/new", addClassroom);
app.get("/classrooms", getClassrooms);
app.put("/classroom/:id", changeClassroomModule);

app.post("/student/new", addStudent);
app.put("/student/name", searchStudentByName);