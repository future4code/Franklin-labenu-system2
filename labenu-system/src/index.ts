import app from "./app";
import addClassroom from "./endpoints/addClassroom";
import addStudent from "./endpoints/addStudent";
import addTeacher from "./endpoints/addTeacher";
import changeClassroomModule from "./endpoints/changeClassroomModule";
import changeStudentClassroom from "./endpoints/changeStudentClassroom";
import changeTeacher from "./endpoints/changeTeachers";
import getTeachers from "./endpoints/getAllTeachers";
import getClassrooms from "./endpoints/getClassrooms";
import searchStudentByName from "./endpoints/searchStutendByName";

app.post("/classroom/new", addClassroom);
app.get("/classrooms", getClassrooms);
app.put("/classroom/:id", changeClassroomModule);

app.get("/student/:name", searchStudentByName);
app.post("/student/new", addStudent);
app.put("/student/:id", changeStudentClassroom);

app.get("/teacher", getTeachers);
app.post("/teacher/new", addTeacher);
app.put("/teacher/:id", changeTeacher);