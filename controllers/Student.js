const studentService = require('../services/StudentService')
// class Base {
//     name = "base";
//     constructor() {
//       console.log("My name is " + this.name);
//     }
//   }

// class Point {
//     x: number;
//     y: number;
   
//     // Normal signature with defaults
//     constructor(x = 0, y = 0) {
//       this.x = x;
//       this.y = y;
//     }
//   }
class Student {

    async getStudentById(req, res) {
        res.send(await studentService.getStudentById(req.params.id))
    }

    async newStudent(req, res) {

        res.send(await studentService.newStudent(req.body.name, req.body.lastName, req.body.age))

    }

    async getStudents(req, res) {
        res.send(await studentService.getStudents())
    }

    async deleteStudent(req, res) {
        res.send(await studentService.deleteStudent(req.params.id))
    }

    async updateStudent(req, res){
        res.send(await studentService.updateStudent(req.body.name, req.body.lastName, req.body.age, req.params.id))
    }

}

module.exports = new Student()