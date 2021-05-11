const signupModel = require('./users-model')

//  **************** USER SIGN UP DETAILS **************************************
module.exports.signUpWithDetails = (req, res) => {
    signupModel.addNewSignupUserInBB(req.body.userDetails)
        .then(newSignupUser => {
            res.send({ status: true, created: true, id: newSignupUser._id })
        })
        .catch(err => {
            res.send({ status: false, created: false })
        })
}
//  ******************* USER LOGIN COMMANDS TO CHECH THE LOGIN DETAILS*****************

module.exports.loginWithDetails = (req, res) => {
    let query = { email: req.body.userEmail, pass: req.body.userPass }
    signupModel.getSingleUSerByEmail(query)

        .then(loginUSer => {
            res.send({ status: true, found: true, data: loginUSer })
        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

//  *******************COMMANDS T GET THE PROFILE OF SPECIFIC COMPANY*******************

module.exports.getProfileOfSpecificCompany = (req, res) => {
    let id = req.params.id;

    signupModel.getProfileOfComapnyById({ _id: id })
        .then(success => {
            res.send({ status: true, fouond: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, foound: false })
        })
}
//  *************** TO GET THE DETAILS OF SIGNED IN STUDENT****************
module.exports.getDetails = (req, res) => {
    let id = req.params.id;

    signupModel.getDetailsFromDB({ _id: id })
        .then(success => {
            res.send({ status: true, fouond: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, foound: false })
        })
}

// **************** LIST OF ALL COMPANIES COMMANDS**************************
module.exports.getAllCompanies = (req, res) => {
    signupModel.getAllCompaniesFromDB()
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

//  ************ COMMAND TO GET ALL THE STUDENTS ***********
module.exports.getAllStudents = (req, res) => {
    signupModel.getAllStudentsFromDB()
        .then(success => {
            res.send({ status: true, found: true, data: success })
        })
        .catch(err => {
            res.send({ status: false, found: false })
        })
}

//  ************* COMMAND TO DELETE REQUESTED COMPANY *********
module.exports.toDeleteCompany = (req, res) => {
    let id = req.params.id;
    signupModel.toDeleteCompanyFromDB(id)
        .then(success => {
            res.send({ status: true, deleted: true })
        })
        .catch(err => {
            res.send({ status: false, deleted: false })
        })
}


