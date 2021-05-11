import { Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useEffect, useState } from 'react'
import { Checkbox } from "@material-ui/core";
import serverURL from '..//..//..//serverSetting'
import axios from 'axios'
import Header from '../../HomeComponent/HeaderComponent/header';
import Footer from '../../HomeComponent/FooterComponent/footer';
export default function PortfolioForm() {

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [qualification, setQualification] = useState('')
    let [skills, setSkills] = useState('')
    let [experience, setExperience] = useState('')
    let [degree, setDegree] = useState('')
    let [profession, setProfession] = useState('')
    let [gender, setGender] = useState('')
    let [age, setAge] = useState('')
    let [phone, setPhone] = useState('')
    let [country, setCountry] = useState('')
    let [address, setAddress] = useState('')
    let [editingStudentID, setEdditingStudentID] = useState('')
    let params = useParams()
    let history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
    }, [])
    const toRemoveFieldsValue = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setQualification("")
        setSkills("")
        setExperience("")
        setDegree("")
        setProfession("")
        setGender("")
        setAge("")
        setPhone("")
        setCountry("")
        setAddress("")
    }
    function saveStudentProfile(e) {
        if (firstName && lastName && email && qualification && skills && experience && degree && profession && gender && age && phone && country && address) {
            e.preventDefault();
            let studentID = localStorage.getItem('studentID')
            let studentProfileDetails = { firstName, lastName, email, qualification, skills, experience, degree, profession, gender, age, phone, country, address, studentID }
            axios.post(`${serverURL.server_base_URL}/Clients/Profile`, studentProfileDetails)
                .then(success => {
                    toRemoveFieldsValue()
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    useEffect(() => {
        setEdditingStudentID(params.id)
        localStorage.setItem("updatingStudentProfileId", params.id)
        axios.get(`${serverURL.server_base_URL}/Clients/EditingStudProfile/${params.id}`)
            .then(profile => {
                setFirstName(profile.data.data.firstName)
                setLastName(profile.data.data.lastName)
                setEmail(profile.data.data.email)
                setQualification(profile.data.data.qualification)
                setSkills(profile.data.data.skills)
                setExperience(profile.data.data.experience)
                setDegree(profile.data.data.degree)
                setProfession(profile.data.data.profession)
                setGender(profile.data.data.gender)
                setAge(profile.data.data.age)
                setPhone(profile.data.data.phone)
                setCountry(profile.data.data.country)
                setAddress(profile.data.data.address)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function saveEditedStudentProfile(e) {
        if (firstName && lastName && email && qualification && skills && experience && degree && profession && gender && age && phone && country && address) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                e.preventDefault()
                let studentID = localStorage.getItem('studentID')
                let updatedStudentProfileDetails = { firstName, lastName, email, qualification, skills, experience, degree, profession, gender, age, phone, country, address, studentID }
                axios.post(`${serverURL.server_base_URL}/Clients/UpdatedProfile/${params.id}`, updatedStudentProfileDetails)
                    .then(success => {
                        toRemoveFieldsValue()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }

    return <>
        <Header />

        <Container fluid className="signup" >
            <Container style={{ padding: '100px 0px' }}>
                <Row>
                    <Col className="a" style={{ padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <h1 style={{ fontWeight: 800, textAlign: 'center', padding: '10px 0px' }}><span style={{ borderBottom: '4px solid #001d3d', paddingBottom: '5px' }}>Profile</span></h1>
                        <form onSubmit={saveStudentProfile}>
                            <Row>
                                <Col sm={6}>

                                    <TextField
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        id="standard-basic" required label="First Name" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>
                                <Col sm={6}>
                                    <TextField
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

                                    <TextField
                                        value={skills}
                                        onChange={(e) => { setSkills(e.target.value) }}
                                        id="standard-basic" required label="Your skills" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>
                                <Col sm={6}>
                                    <TextField
                                        value={experience}
                                        onChange={(e) => { setExperience(e.target.value) }}
                                        id="standard-basic" required label="Your expereince" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <TextField
                                        value={degree}
                                        onChange={(e) => { setDegree(e.target.value) }}
                                        id="standard-basic" required label="Your degree" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>

                                <Col sm={6}>
                                    <TextField
                                        value={profession}
                                        onChange={(e) => { setProfession(e.target.value) }}
                                        id="standard-basic" required label="Your Profession" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <TextField
                                        value={qualification}
                                        onChange={(e) => { setQualification(e.target.value) }}
                                        id="standard-basic" required type="text" label="Enter your qualification" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
                                            <MenuItem value={"Turkey"} >Turkey</MenuItem>
                                            <MenuItem value={"USA"} >USA</MenuItem>
                                            <MenuItem value={"England"} >England</MenuItem>
                                            <MenuItem value={"India"}>India</MenuItem>
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
                            <Row>
                                <Col sm={6}>

                                    <TextField
                                        value={age}
                                        onChange={(e) => { setAge(e.target.value) }}
                                        id="standard-basic" required label="Your age" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>
                                <Col sm={6}>
                                    <TextField
                                        value={address}
                                        onChange={(e) => { setAddress(e.target.value) }}
                                        id="standard-basic" required label="Your address" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </Col>
                            </Row>
                            {params.id ?
                                <>
                                    <Button
                                        type="submit"
                                        onClick={saveEditedStudentProfile}
                                        variant="contained" color="primary" fullWidth
                                        style={{ marginTop: '20px', padding: '15px 0px', fontWeight: 600 }}>
                                        Edit Profile
                                </Button>
                                </>
                                :
                                <>
                                    <Button
                                        type="submit"
                                        onClick={saveStudentProfile}
                                        variant="contained" color="primary" fullWidth
                                        style={{ marginTop: '20px', padding: '15px 0px', fontWeight: 600 }}>
                                        Create Profile
                                </Button>
                                </>
                            }

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