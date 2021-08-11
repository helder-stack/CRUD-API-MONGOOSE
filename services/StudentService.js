const studentModel = require('../models/Student')
const studentFactory = require('../factory/Student')

class Student{

    async getStudentById(id){
        return await studentModel.find({ "_id": id })
    }
    
    async newStudent(name, lastName, age){
        let newStudentFactory = await studentFactory.Build(name, lastName, age)

        if (newStudentFactory) {

            let student = new studentModel(newStudentFactory)

            student.save()
            return 200

        } else {
            return 400
        }
    }

    async getStudents(){
        return studentModel.find()
    }
    
    async deleteStudent(id){
        return await studentModel.findByIdAndDelete(id)
    }
    
    async updateStudent(name, lastName, age, id){
        let updateStudentFactory = await studentFactory.Build(name, lastName, age)

        if(updateStudentFactory){

            try{
                await studentModel.findByIdAndUpdate(id, updateStudentFactory)
                return 200
            }catch(e){
                console.log(e)
                return 400
            }

        }else{
            return 400
        }
    }
}

module.exports = new Student()