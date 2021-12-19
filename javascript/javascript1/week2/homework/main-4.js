//STUDENT MANAGER
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    //excludes empty string
    return "Please, add a student name!";
  } else if (class07Students.includes(studentName) === true) {
    //doesn't allow to add the same student
    return "You cannot add same student.";
  } else if (studentName == "Queen") {
    //allows add Queen even if the class is full
    class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
    //allows only 6 students in the class
    return "This class is already full. You cannot add more students.";
  } else class07Students.push(studentName);
}

function getNumberOfStudents() {
  return "Total numbet of students in class is " + class07Students.length;
}

//example
addStudentToClass("");
addStudentToClass("Lucas");
addStudentToClass("Lucas");
addStudentToClass("Maria");
addStudentToClass("Liam");
addStudentToClass("Emma");
addStudentToClass("Emil");
addStudentToClass("Mark");
addStudentToClass("Queen");

getNumberOfStudents();
