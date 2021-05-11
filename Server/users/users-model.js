
const mongoose = require('mongoose')
//  ************* SCHEEMA OF SIGNUP USER ***************
let signUPScheema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    category: String,
    companyName: String,
    phone: String,
    gender: String,
    country: String,
    password: String,
})
//  ********** SCHEEMA FOR APPLIED JOBS ***************

let signUpModel = new mongoose.model('Signup', signUPScheema)

//  ******************* COMMAND TO ADD NEW SIGN UP USER IN DATABASE ****************
module.exports.addNewSignupUserInBB = (data) => {

    return new Promise((resolve, reject) => {
        let newSignupUser = new signUpModel(data)

        newSignupUser.save((err, doc) => {
            if (err) {
                console.log("Unable to add user in Database")
                console.log(err)
                reject(err)

            }
            else {
                resolve(doc)
            }
        })
    })
}


//  **************** COMMAND TO GET THE SIGNLE USER BY ID ************

module.exports.getSingleUSerByEmail = (query) => {

    return signUpModel.findOne({ email: query.email, password: query.pass })
}


//  ******************** COMMAND TO GET THE PROFILE OF SPECIFIC COMPANY BY ID **************

module.exports.getProfileOfComapnyById = (query) => {
    return new Promise((resolve, reject) => {
        signUpModel.findOne(query, (err, doc) => {
            if (err) {
                reject(err)
                console.log("Unable to get the profile of Company by id")

            }
            else {

                resolve(doc)
            }

        })
    })
}

//  ***************** COMMAND TO GET THE DETAILS OF STUDENT FROM DATA BASE **************
module.exports.getDetailsFromDB = (query) => {
    return new Promise((resolve, reject) => {
        signUpModel.findOne(query, (err, doc) => {
            if (err) {
                reject(err)

            }
            else {

                resolve(doc)
            }

        })
    })
}


// ****************** COMMAND TO GET ALL THE SIGNED IN COMPANIES **********************

module.exports.getAllCompaniesFromDB = () => {
    return new Promise((resolve, reject) => {
        signUpModel.find({ category: "Company" }, (err, doc) => {
            if (err) {
                reject(err)

            }
            else {
                resolve(doc)
            }
        })
    })
}

//  ************ COMMAN TO GET ALL THE STUDENTS FROM DB ************
module.exports.getAllStudentsFromDB = () => {
    return new Promise((resolve, reject) => {
        signUpModel.find({ category: "Student" }, (err, doc) => {
            if (err) {
                reject(err)

            }
            else {
                resolve(doc)
            }
        })
    })
}

//  ************** COMMAND TO DELETE THE REQUESTED COMPANY FROM DB ***************
module.exports.toDeleteCompanyFromDB = (query) => {
    return new Promise((resolve, reject) => {
        signUpModel.deleteOne({ _id: query }, (err, doc) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(doc)
            }
        })
    })
}
