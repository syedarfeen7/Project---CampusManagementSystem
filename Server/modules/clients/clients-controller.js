const jobModel = require('./clients-model')
const studentProfileModel = require('./clients-model')
const appliedJobModel = require('./clients-model')
const conformationEmail = require('../../nodemailer/conformationEmail')
//  **********TO ADD NEW JOB FROM CLIENT************

module.exports.addnewJob = (req, res) => {
    let jobDetailsFromClient = {
        companyName: req.body.companyName,
        post: req.body.post,
        genderRequired: req.body.genderRequired,
        seats: req.body.seats,
        skills: req.body.skills,
        experience: req.body.experience,
        salaryRange: req.body.salaryRange,
        jobDescription: req.body.jobDescription,
        id: req.body.id
    }
    jobModel.addNewJobInDb(jobDetailsFromClient)
        .then(success => {
            res.send({ status: true })
        })
        .catch(err => {
            res.send({ status: false })
        })
}

//  ********* TO GET THE SPECIFIC JOBS FROM DATABASE BY ID **********

module.exports.getJobs = (req, res) => {
    let id = req.params.id
    jobModel.getAllPostedJobsFromDB({ id: id })
        .then(success => {
            res.send({ status: true, found: true, data: success })

        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

//  ************ TO GET REQUESTED JOB FROM DATABASE **********

module.exports.getRequestedJob = (req, res) => {
    let id = req.params.id
    jobModel.getRequestedJobFromDB(id)
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

//  ************* TO DELETE REQUESTED JOB FROM CLIENT ************

module.exports.toDeleteSelectedJob = (req, res) => {

    let id = req.params.id
    jobModel.deleteJobFromDB(id)
        .then(success => {
            res.send({ status: true, deleted: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, delete: false })
        })

}

//  **************** TO UPDATE REQUESTED JOB FROM CLIENT ***************

module.exports.updateRequestedJobDetails = (req, res) => {
    let id = req.params.id
    let jobDetailsFromClient = {
        companyName: req.body.companyName,
        post: req.body.post,
        genderRequired: req.body.genderRequired,
        seats: req.body.seats,
        skills: req.body.skills,
        experience: req.body.experience,
        salaryRange: req.body.salaryRange,
        jobDescription: req.body.jobDescription,
        id: req.body.id,

    }
    jobModel.updateRequestedJobDetailFromDB(id, jobDetailsFromClient)
        .then(success => {
            res.send({ status: true, updated: true })

        })
        .catch(err => {
            res.send({ status: false, updated: false })

        })
}

//  ************ TO ADD STUDENT PROFILE IN DATABASE ***********
module.exports.addNewStudentProfile = (req, res) => {
    let studentProfileDetialsFromClient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        qualification: req.body.qualification,
        skills: req.body.skills,
        experience: req.body.experience,
        degree: req.body.degree,
        profession: req.body.profession,
        gender: req.body.gender,
        age: req.body.age,
        phone: req.body.phone,
        country: req.body.country,
        address: req.body.address,
        studentID: req.body.studentID,
    }
    studentProfileModel.addNewProfileOfStudentInDB(studentProfileDetialsFromClient)
        .then(success => {
            res.send({ status: true, added: true })
        })
        .catch(err => {
            res.send({ status: false, added: false })
        })
}

//  ************ TO GET THE LOGGED IN STUDENT PROFILE FROM DATABSE ************

module.exports.getStudentProfiel = (req, res) => {
    let id = req.params.id
    // db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
    studentProfileModel.getStudentProfileFromDB({ $or: [{ studentID: id }, { _id: id }] })
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false, data: [] })
        })
}

//  *************** COMMAND TO GET THE EDITING STUDENT PROFILE ******************

module.exports.getEditingStudentProfile = (req, res) => {
    let id = req.params.id
    studentProfileModel.getStudentProfileFromDB({ _id: id })
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

module.exports.addUpdatedStudentProfile = (req, res) => {
    let id = req.params.id

    let UpdatedStudentProfileDetialsFromClient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        qualification: req.body.qualification,
        skills: req.body.skills,
        experience: req.body.experience,
        degree: req.body.degree,
        profession: req.body.profession,
        gender: req.body.gender,
        age: req.body.age,
        phone: req.body.phone,
        country: req.body.country,
        address: req.body.address,
        studentID: req.body.studentID,
    }
    studentProfileModel.updateRequestedStudentProfileDetailFromDB(id, UpdatedStudentProfileDetialsFromClient)
        .then(success => {
            res.send({ status: true, updated: true })
        })
        .catch(err => {
            res.send({ status: false, updated: false })
        })
}

module.exports.toDeleteStudProfileFromAdmin = (req, res) => {
    let id = req.params.id
    studentProfileModel.deleteStudProfileFromDb(id)
        .then(success => {
            res.send({ status: true, deleted: true })
        })
        .catch(err => {
            res.send({ status: false, deleted: false })
        })
}

//  ********** COMMAND TO GET ALL THE POPSTED JOBS **********

module.exports.getAllJobs = (req, res) => {
    let id = req.params.id
    jobModel.getAllJobsFromDB()
        .then(success => {
            res.send({ status: true, found: true, data: success })

        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

//  ************* COMMAND TO DELETE ALL THE POSTED JOBS BY SPECIFIC COMAPNAY *********
module.exports.toDeleteAllJobs = (req, res) => {
    let id = req.params.id
    jobModel.toDeleteAllTheJobsOfSpecificCompanyFromDB(id)
        .then(success => {
            res.send({ status: true, deleted: true })
        })
        .catch(err => {
            res.send({ status: false, deleted: false })
        })
}


//  *********************** APPLIED JOB COMMANDS START FROM HERE *********************

module.exports.addNewAppliedJob = (req, res) => {

    let appliedJobDetails = {
        companyName: req.body.companyName,
        post: req.body.post,
        genderRequired: req.body.genderRequired,
        seats: req.body.seats,
        skills: req.body.skills,
        experience: req.body.experience,
        salaryRange: req.body.salaryRange,
        jobDescription: req.body.jobDescription,
        companyID: req.body.id,
        jobID: req.body._id,
        studentID: req.params.id,
    }
    appliedJobModel.addNewAppliedJobInDB(appliedJobDetails)
        .then(success => {
            res.send({ status: true, added: true })
        })
        .catch(err => {
            res.send({ status: false, added: false })
        })
}

module.exports.getRequesteApplieddJob = (req, res) => {
    let id = req.params.id
    appliedJobModel.getRequestedAppliedJobFromDB(id)
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

module.exports.toDeleteAllAppliedJobsJobs = (req, res) => {
    let id = req.params.id
    appliedJobModel.toDeleteAllTheAppliedJobsOfSpecificCompanyFromDB(id)
        .then(success => {
            res.send({ status: true, deleted: true })
        })
        .catch(err => {
            res.send({ status: false, deleted: false })
        })
}

//  ************* TO DELETE Applied  JOB FROM CLIENT ************

module.exports.toDeleteAppliedJob = (req, res) => {

    let id = req.params.id
    appliedJobModel.deleteAppliedJobFromDB(id)
        .then(success => {
            res.send({ status: true, deleted: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, delete: false })
        })

}



module.exports.addAppliedJobIDInStudentProfile = (req, res) => {
    let id = req.params.id
    let updates = {
        $push: {
            appliedJobs: {
                appliedJobID: req.body._id

            }
        }
    }
    studentProfileModel.addAplliedJobIDInStudentProfileInDB({ studentID: id }, updates)
        .then(success => {
            res.send({ status: true })
        })
        .catch(err => {
            res.send({ status: false })
        })

}


module.exports.getProfilesOfStudentWhoAppliedForJob = (req, res) => {
    let jobID = req.params.id
    studentProfileModel.getAllStudentProfileWhoAppliedForJobFromDB(jobID)
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false, data: [] })
        })
}


module.exports.toRemoveJobIDFromStudProfile = (req, res) => {
    let profileID = req.params.id
    let jobID = req.body.id
    console.log(profileID)
    console.log(jobID)
    let updates = {

        $pull: {
            appliedJobs: {
                appliedJobID: jobID
            }
        }
    }
    studentProfileModel.toRemoveParticularJobIDFromStudProfile({ _id: profileID }, updates)
        .then(success => {
            res.send({ status: true })
        })
        .catch(err => {
            res.send({ status: false })
        })

}

module.exports.deleteAppliedJobByCompany = (req, res) => {

    let id = req.params.id
    appliedJobModel.deleteAppliedJobFromDBByCompany(id)
        .then(success => {
            res.send({ status: true, deleted: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, delete: false })
        })

}

module.exports.sendUserEmail = (req, res) => {
    console.log(req.body.email)
    conformationEmail.conformationEmail(req.body.email)
        .then(succ => {
            res.send({ status: true, send: succ })
        }).catch(err => {
            res.send({ status: false, err: err })
        })

}