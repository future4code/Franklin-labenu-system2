import app from "./app";
import addClassroom from "./endpoints/addClassroom";
import addStudent from "./endpoints/addStudent";
import addTeacher from "./endpoints/addTeacher";
import changeClassroomModule from "./endpoints/changeClassroomModule";
import changeTeacher from "./endpoints/changeTeachers";
import getTeachers from "./endpoints/getAllTeachers";
import getClassrooms from "./endpoints/getClassrooms";
import searchStudentByName from "./endpoints/searchStutendByName";


app.post("/classroom/new", addClassroom);
app.get("/classrooms", getClassrooms);
app.put("/classroom/:id", changeClassroomModule);

app.post("/student/new", addStudent);
app.put("/student/name", searchStudentByName);

app.get("/teacher", getTeachers);
app.post("/teacher/new", addTeacher);
app.put("/teacher/:id", changeTeacher);

