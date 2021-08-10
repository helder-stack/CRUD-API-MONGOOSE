const mongoose = require('mongoose')
const studentModel = require('../models/Student')
const studentFactory = require('../factory/Student')

class StudentService {

    async getStudentById(req, res) {
        res.send(await studentModel.find({ "_id": req.params.id }))
    }

    async newStudent(req, res) {

        let newStudentFactory = await studentFactory.Build(req.body.name, req.body.lastName, req.body.age)

        if (newStudentFactory) {

            let student = new studentModel(newStudentFactory)

            student.save()
            res.send("Cadastrado")

        } else {
            res.send(400)
        }

    }

    async getStudents(req, res) {
        res.send(await studentModel.find())
    }

    async deleteStudent(req, res) {
        res.send(await studentModel.findByIdAndDelete(req.params.id))
    }

    async updateStudent(req, res){
        let updateStudentFactory = await studentFactory.Build(req.body.name, req.body.lastName, req.body.age)

        if(updateStudentFactory){

            try{
                await studentModel.findByIdAndUpdate(req.params.id, updateStudentFactory)
                res.send(200)
            }catch(e){
                console.log(e)
                res.send(400)
            }

        }else{
            res.send(400)
        }
    }

}

module.exports = new StudentService()