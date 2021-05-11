const express = require('express')
const router = express.Router()
const clientController = require('./clients-controller')


//  ROUTE TO ADD NE JOB 
router.post('/add-new', clientController.addnewJob)

//  ROUTE TO GET ALL JOBS OF SPECIFIC COMPANY BY ID
router.get('/all-jobs/:id', clientController.getJobs)

//  ROUTE TO DELETE SELECTED JOB WITH ID
router.post('/delete/:id', clientController.toDeleteSelectedJob)

//  ROUTE TO GET THE SPECIFIC POSTED JOB BY ID TO EDIT THE DETAILS
router.get('/list/:id', clientController.getRequestedJob)

//  ROUTE TO POST ALL THE EDITED JOB DETAILS
router.post('/update/:id', clientController.updateRequestedJobDetails)

// *************STUDENT PROFILE ROUTE **************

//  ROUTE TO ADD NEW STUDENT PROFILE
router.post('/Profile', clientController.addNewStudentProfile)

//  ROUTE TO GET THE SPECIFIC STUDENT PROFILE BY ID
router.get('/StudProfile/:id', clientController.getStudentProfiel)

//  ROUTE TO GET THE SPECIFIC  STUDENT PROFILE BY ID TO EDIT THE PROFILE DETAILS
router.get('/EditingStudProfile/:id', clientController.getEditingStudentProfile)

//  ROUTE TO POST THE EDITED DETAILS OF SPECIFIC STUDENT PROFILE BY ID
router.post('/UpdatedProfile/:id', clientController.addUpdatedStudentProfile)

//  ROUTE TO DELETE STUDENT PROFILE IN CASE OF A DELETING STUDENT ACCOUNT FROM ADMIN
router.post('/deleteStudProfile/:id', clientController.toDeleteStudProfileFromAdmin)

// ******************* ADMIN ROUTES ******************

//  ROUTE TO GET THE ALL POSTED JOBS OF COMAPNY
router.get('/allJobs', clientController.getAllJobs)

//  ROUTE TO DELETE ALL JOBS BY ADMIN IN CASE OF DELETING COMAPANY ACCOUNTS
router.post('/deleteAllJobs/:id', clientController.toDeleteAllJobs)

//  
router.post('/deleteAppliedJobs/:id', clientController.toDeleteAllAppliedJobsJobs)


router.post('/AppliedJob/:id', clientController.addNewAppliedJob)
router.get('/listAppliedJobs/:id', clientController.getRequesteApplieddJob)
router.post('/deleteAppliedJob/:id', clientController.toDeleteAppliedJob)
router.post('/applied/:id', clientController.addAppliedJobIDInStudentProfile)
router.get('/profileOfAppliedJobs/:id', clientController.getProfilesOfStudentWhoAppliedForJob)

router.post('/removeJobID/:id', clientController.toRemoveJobIDFromStudProfile)
router.post('/deleteJob/:id', clientController.deleteAppliedJobByCompany)
router.post("/sendAprovedCandidateEmail", clientController.sendUserEmail)
module.exports = router