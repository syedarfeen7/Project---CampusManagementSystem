import Footer from "../HomeComponent/FooterComponent/footer";
import Header from "../HomeComponent/HeaderComponent/header";
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react'
import serverSetting from '..//..//serverSetting'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    let history = useHistory()
    let [userEmail, setUserEmail] = useState('')
    let [userPass, setUserPass] = useState('')
    let [check, setCheck] = useState("");



    function requestOfLoginDetails(e) {
        e.preventDefault()
        let loginDetails = { userEmail, userPass }
        if (userEmail === "admin@gmail.com" && userPass === "admin") {
            let id = 1234
            localStorage.setItem("adminID", id)
            history.push("/Admin/Home")
        }

        else {


            axios.post(`${serverSetting.server_base_URL}/users/login`, loginDetails)
                .then(loginSuccess => {
                    if (loginSuccess.data.data)
                        localStorage.setItem("signedInUserID", loginSuccess.data.data._id)
                    else {
                        document.querySelector("#showError").innerHTML = '<div role="alert" class="fade alert alert-danger show">Invalid email or password!</div>';
                    }
                    if (loginSuccess.data.data.category === "Company") {
                        setCheck(true)
                        localStorage.setItem("companyID", loginSuccess.data.data._id)
                        history.push('/Company/add-new')
                    }
                    else {
                        document.querySelector("#showError").innerHTML = '<div role="alert" class="fade alert alert-danger show">Invalid email or password!</div>';
                    }
                    if (loginSuccess.data.data.category === "Student") {

                        localStorage.setItem("studentID", loginSuccess.data.data._id)
                        history.push('/Student/Home')
                    }
                    else {
                        document.querySelector("#showError").innerHTML = '<div role="alert" class="fade alert alert-danger show">Invalid email or password!</div>';
                    }

                })
                .catch(err => {
                    console.log("Unable to login")
                    console.log(err)
                })


        }

    }
    return <>

        <Header />

        <Container fluid className="signup" >
            <Container style={{ padding: '100px 20px' }}>

                <Row>
                    <Col className="a" style={{ padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <h1 style={{ fontWeight: 800, textAlign: 'center', padding: '10px 0px' }}><span style={{ borderBottom: '4px solid #001d3d', paddingBottom: '5px' }}>Login</span></h1>
                        <form autoComplete="off" onSubmit={requestOfLoginDetails} >


                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>



                                <EmailIcon style={{ marginTop: '25px', color: '#3f51b5' }} /> &nbsp;&nbsp;&nbsp;

                                <TextField
                                    onChange={(e) => { setUserEmail(e.target.value) }}
                                    value={userEmail}
                                    required type="email"
                                    id="input-with-icon-grid" label="Enter email here" fullWidth />


                            </div>

                            <br />

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>



                                <LockIcon style={{ marginTop: '25px', color: '#3f51b5' }} /> &nbsp;&nbsp;&nbsp;

                                    <TextField
                                    onChange={(e) => { setUserPass(e.target.value) }}
                                    value={userPass}
                                    required type="password"
                                    id="input-with-icon-grid" label="Enter password here" fullWidth />

                            </div>
                            <br />

                            <p>Don't have an account?<Link to='/SignUp'>Create an account</Link></p>
                            <div id="showError"></div>
                            <Button
                                onClick={requestOfLoginDetails}
                                variant="contained" color="primary" fullWidth style={{ marginTop: '20px', padding: '15px 0px', fontWeight: 600 }}>
                                Login
                            </Button>
                        </form>


                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </Container>
        <Footer />
    </>
}