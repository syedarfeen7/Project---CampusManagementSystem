const express = require('express')
const router = express.Router()
const userController = require('./user-controller')

router.post('/signup', userController.signUpWithDetails)
router.post('/login', userController.loginWithDetails)
router.get('/profile/:id', userController.getProfileOfSpecificCompany)
router.get('/details/:id', userController.getDetails)
router.get('/AllCompanies', userController.getAllCompanies)
router.get('/AllStudents', userController.getAllStudents)
router.post('/deleteCompany/:id', userController.toDeleteCompany)

//  ROUTE FOR APPLIED JOBS


module.exports = router