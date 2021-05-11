import Footer from "../HomeComponent/FooterComponent/footer";
import Header from "../HomeComponent/HeaderComponent/header";
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react'
import { Checkbox } from "@material-ui/core";
import serverURL from '..//..//serverSetting'
import axios from 'axios'
export default function SignUp() {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [category, setCategoryt] = useState('')
    let [companyName, setCompanyName] = useState('')
    let [phone, setPhone] = useState("")
    let [gender, setGender] = useState("")
    let [country, setCountry] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let history = useHistory();
    function saveSignupDetails(e) {
        e.preventDefault();
        let userData = {
            userDetails: { firstName, lastName, email, category, companyName, phone, gender, country, password }
        }
        if (firstName && lastName && email && category && phone && gender && country && password && confirmPassword) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                if (password === confirmPassword) {
                    axios.post(`${serverURL.server_base_URL}/users/signup`, userData)
                        .then(signUpSuccess => {
                            if (signUpSuccess.data.status) {
                                history.push('/Login')
                            }
                        })
                        .catch(err => {
                            console.log("Unable to signup")
                        })
                }
                else {

                    document.querySelector("#showError").innerHTML = "<div role='alert' class='fade alert alert-danger show'>Password didn't match!</div>";
                }
            }
            else {
                document.querySelector("#showError").innerHTML = '<div role="alert" class="fade alert alert-danger show">Please enter an valid EMAIL ID!</div>';
            }
        }
        else {
            document.querySelector("#showError").innerHTML = '<div role="alert" class="fade alert alert-danger show">Please fill out all the mandotary fields!</div>';
        }
    }



    return <>
        <Header />

        <Container fluid className="signup" >
            <Container style={{ padding: '100px 0px' }}>
                <Row>
                    <Col className="a" style={{ padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <h1 style={{ fontWeight: 800, textAlign: 'center', padding: '10px 0px' }}><span style={{ borderBottom: '4px solid #001d3d', paddingBottom: '5px' }}>Sign up</span></h1>
                        <form onSubmit={saveSignupDetails}>
                            <Row>
                                <Col sm={6}>

                                    <TextField
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        id="standard-basic" required label="First Name" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>
                                <Col sm={6}>
                                    <TextField
                                        required
                                        value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        id="standard-basic" required label="Last Name" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </Col>
                            </Row>
                            <TextField
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                id="standard-basic" required type="email" label="Enter email here" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <Row>
                                <Col sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" required>Select Category</InputLabel>
                                        <Select
                                            value={category}
                                            onChange={(e) => { setCategoryt(e.target.value) }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                        >
                                            <MenuItem selected disabled>Select One</MenuItem>
                                            <MenuItem value={"Company"} >Company</MenuItem>
                                            <MenuItem value={"Student"}>Student</MenuItem>
                                        </Select>
                                    </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>

                                <Col sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" required>Select Gender</InputLabel>
                                        <Select
                                            value={gender}
                                            onChange={(e) => { setGender(e.target.value) }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                        >
                                            <MenuItem selected disabled>Select</MenuItem>
                                            <MenuItem value={"Male"} >Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                        </Select>
                                    </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>

                            </Row>
                            {category === "Company" ?
                                <>
                                    <TextField
                                        value={companyName}
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        id="standard-basic" type="text" label="Your company name" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </>
                                :
                                ""
                            }
                            <Row>
                                <Col sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" required>Select Country</InputLabel>
                                        <Select
                                            value={country}
                                            onChange={(e) => { setCountry(e.target.value) }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                        >
                                            <MenuItem selected disabled>Select</MenuItem>
                                            <MenuItem value={"Pakistan"} >Pakistan</MenuItem>
                                            <MenuItem value={"Turkey"}>Turkey</MenuItem>
                                        </Select>
                                    </FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                                <Col sm={6}>
                                    <TextField
                                        value={phone}
                                        onChange={(e) => { setPhone(e.target.value) }}
                                        id="standard-basic" required type="text" label="Enter Phone here" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                            </Row>

                            <TextField
                                onChange={(e) => { setPassword(e.target.value) }}
                                id="standard-basic" required type="password" label="Enter password here" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                id="standard-basic" required type="password" label="Confirm your password" fullWidth />

                            <Checkbox color="primary" /><label>I accept the <span style={{ color: 'blue' }}>Terms of Use</span > & <span style={{ color: 'blue' }}>Privacy Policy</span></label>
                            <p>Already have an account?<Link to='/Login'> Let's Login</Link></p>
                            <div id="showError"></div>
                            <Button
                                type="submit"
                                onClick={saveSignupDetails}
                                variant="contained" color="primary" fullWidth
                                style={{ marginTop: '20px', padding: '15px 0px', fontWeight: 600 }}>
                                Sign up
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