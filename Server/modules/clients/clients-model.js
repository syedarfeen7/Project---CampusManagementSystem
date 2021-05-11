const { query } = require('express');
const mongoose = require('mongoose');

// ********* CLIENTS JOB SCHEEMA************
let jobScheema = new mongoose.Schema({
    companyName: String,
    post: String,
    genderRequired: String,
    seats: String,
    skills: String,
    experience: String,
    salaryRange: String,
    jobDescription: String,
    id: mongoose.Schema.Types.ObjectId,
    // expire_at: {type: Date, default: new Date("April 25, 2021 15:25:00"), expires:120}
})

let jobModel = new mongoose.model('Jobs', jobScheema);

//  *********** STUDENT PROFILE SCHEEMA ************

let studentprofileScheema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    qualification: String,
    skills: String,
    experience: String,
    degree: String,
    profession: String,
    gender: String,
    age: String,
    phone: Number,
    country: String,
    address: String,
    studentID: mongoose.Schema.Types.ObjectId,
    appliedJobs: [{
        appliedJobID: mongoose.Schema.Types.ObjectId,
    }]
})

let studentProfileModel = new mongoose.model('Student-Profile', studentprofileScheema)

//  ********** SCHEEMA FOR APPLIED JOBS ***************
let appliedJobScheema = new mongoose.Schema({
    companyName: String,
    post: String,
    genderRequired: String,
    seats: String,
    skills: String,
    experience: String,
    salaryRange: String,
    jobDescription: String,
    companyID: mongoose.Schema.Types.ObjectId,
    jobID: mongoose.Schema.Types.ObjectId,
    studentID: mongoose.Schema.Types.ObjectId,

})
let appliedJobModel = new mongoose.model("Applied-Jobs", appliedJobScheema)


// *********************** THIS ALL QUERIES FOR JOB MODEL WHICH STARTS FROM HERE ******************

module.exports.addNewJobInDb = (data) => {
    return new Promise((resolve, reject) => {
        let newJob = new jobModel(data)
        newJob.save((err, docs) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(docs)

            }
        })
    })


}

module.exports.getAllPostedJobsFromDB = (query) => {
    return new Promise((resolve, reject) => {
        jobModel.find(query, (err, recivedAllJobs) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(recivedAllJobs)
            }
        })
    })
}
module.exports.getRequestedJobFromDB = (id) => {
    return new Promise((resolve, reject) => {
        jobModel.findOne({ _id: id }, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

module.exports.deleteJobFromDB = (id) => {

    return new Promise((resolve, reject) => {
        jobModel.deleteOne({ _id: id }, ((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        }))
    })
}
module.exports.updateRequestedJobDetailFromDB = (query, updates) => {
    return new Promise((resolve, reject) => {
        jobModel.updateOne({ _id: query }, updates, ((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        }))

    })
}

//  ************** THE QUERIES FOR JOB MODEL END HERE **************************

//  ************** THE QUERIES FOR STUDENT PROFILE MODEL STARTS FROM HERE ******

//  ************** TO ADD THE STUDENT PROFILE IN DATABSE ************************
module.exports.addNewProfileOfStudentInDB = (data) => {

    return new Promise((resolve, reject) => {
        let newStudentProfile = new studentProfileModel(data)
        newStudentProfile.save((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

//  ************** TO GET THE LOGGED IN STUDENT PROFILE FROM DATABSE *************

module.exports.getStudentProfileFromDB = (query) => {
    return new Promise((resolve, reject) => {
        studentProfileModel.findOne(query, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

//  ************ QUERY TO UPDATE THE REQUESTED PROFILE OF STUDENT **********

module.exports.updateRequestedStudentProfileDetailFromDB = (query, updates) => {
    return new Promise((resolve, reject) => {
        studentProfileModel.updateOne({ _id: query }, updates, ((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        }))

    })
}

module.exports.deleteStudProfileFromDb = (query) => {
    return new Promise((resolve, reject) => {
        studentProfileModel.deleteOne({ studentID: query }, (err, doc) => {

            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

//  *********** QUERY TO GET ALL THE JOBS FROM BD ************* 

module.exports.getAllJobsFromDB = () => {
    return new Promise((resolve, reject) => {
        jobModel.find((err, recivedAllJobs) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(recivedAllJobs)
            }
        })
    })
}

//  *********** QUERY TO DELETE ALL THE POSTED JOBS BY SPECIFIC COMPANY FROM DB **********
module.exports.toDeleteAllTheJobsOfSpecificCompanyFromDB = (query) => {
    return new Promise((resolve, reject) => {
        jobModel.deleteMany({ id: query }, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}


//  ****************** QUERIES ABOUT APPLIED JOB***********************

//  ************ QUERY TO ADD NEW APPLIED JOB IN APPPLIED JOB SCHEEMA *************
module.exports.addNewAppliedJobInDB = (data) => {
    return new Promise((resolve, reject) => {
        let newAppliedJob = appliedJobModel(data)
        newAppliedJob.save((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

//  **************** QUERY TO GET THE REQUESTED APPLIED JOB FROM DATABSE ****************

module.exports.getRequestedAppliedJobFromDB = (id) => {
    return new Promise((resolve, reject) => {
        appliedJobModel.find({ studentID: id }, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

//  ******************** QUERY TO DELETE APPLIED JOB FROM DB ***********************
module.exports.deleteAppliedJobFromDB = (id) => {

    return new Promise((resolve, reject) => {
        appliedJobModel.deleteOne({ _id: id }, ((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        }))
    })
}

module.exports.toDeleteAllTheAppliedJobsOfSpecificCompanyFromDB = (query) => {
    return new Promise((resolve, reject) => {
        appliedJobModel.deleteMany({ studentID: query }, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}



//  ************** QUERY TO ADD APPLIED JOB ID IN STUDENT PROFILE ***************

module.exports.addAplliedJobIDInStudentProfileInDB = (query, updates) => {
    return new Promise((resolve, reject) => {
        studentProfileModel.updateOne(query, updates, (err, doc) => {
            if (err) {
                console.log("not updated")
                reject(err)
            }
            else {
                console.log("updated")
                resolve(doc)
            }
        })

    })
}

//  *********** QUERY TO GET ALL THE STUDENT PROFILE WHO APPLIED FOR A PARTICULAR JOB ***************

module.exports.getAllStudentProfileWhoAppliedForJobFromDB = (query) => {
    return new Promise((resolve, reject) => {
        studentProfileModel.find({ appliedJobs: { $elemMatch: { appliedJobID: query } } }, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}

//  ***************** QUERY TO ADD JOB ID AS A APPROVAL STATUS FOR APPLIED JOB ****************



module.exports.toRemoveParticularJobIDFromStudProfile = (query, updates) => {
    return new Promise((resolve, reject) => {
        studentProfileModel.update(query, updates, (err, doc) => {
            if (err) {
                console.log("not updated")
                reject(err)
            }
            else {
                console.log("updated")
                resolve(doc)
            }
        })

    })
}

module.exports.deleteAppliedJobFromDBByCompany = (id) => {

    return new Promise((resolve, reject) => {
        appliedJobModel.deleteOne({ jobID: id }, ((err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        }))
    })
}