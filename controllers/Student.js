const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const student = require('../services/StudentService')

router.get('/', student.getStudents)
router.get('/:id', student.getStudentById)
router.post('/add', student.newStudent)
router.delete('/:id', student.deleteStudent)
router.put('/:id', student.updateStudent)
module.exports = router