
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react'
import serverURL from '../../../serverSetting'
import axios from 'axios'
import '..//..//HomeComponent/Home.css'
export default function AddJobForm() {
    let params = useParams()
    let [companyName, setCompanyName] = useState('')
    let [post, setPost] = useState('')
    let [genderRequired, setGenderRequired] = useState('')
    let [seats, setSeats] = useState('')
    let [skills, setSkills] = useState('')
    let [experience, setExperience] = useState('')
    let [salaryRange, setSalaryRange] = useState('')
    let [jobDescription, setJobDescription] = useState('')
    let [editingJobID, setEditingJobID] = useState('')
    let history = useHistory();
    const toRemoveFieldsValue = () => {
        setCompanyName('')
        setPost('')
        setGenderRequired('')
        setSeats('')
        setSkills('')
        setExperience('')
        setSalaryRange('')
        setJobDescription('')
    }
    function saveJobDetails(e) {
        if (companyName && post && genderRequired && seats && skills && experience && salaryRange && jobDescription) {

            let id = localStorage.getItem("signedInUserID")
            e.preventDefault();
            let jobDetails = { companyName, post, genderRequired, seats, skills, experience, salaryRange, jobDescription, id }

            axios.post(`${serverURL.server_base_URL}/Clients/add-new`, jobDetails)
                .then(success => {
                    // toRemoveFieldsValue()
                })
                .catch(err => {
                    console.log("Unable to signup")
                    console.log(err)
                })
        }

    }

    useEffect(() => {
        setEditingJobID(params.id)
        axios.get(`${serverURL.server_base_URL}/Clients/list/${params.id}`)
            .then(job => {
                // console.log(job.data.data)
                setCompanyName(job.data.data.companyName)
                setPost(job.data.data.post)
                setGenderRequired(job.data.data.genderRequired)
                setSeats(job.data.data.seats)
                setSkills(job.data.data.skills)
                setExperience(job.data.data.experience)
                setSalaryRange(job.data.data.salaryRange)
                setJobDescription(job.data.data.jobDescription)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function saveEditedJobDetails(e) {
        e.preventDefault()
        let id = localStorage.getItem("signedInUserID")
        let updatedDetials = { companyName, post, genderRequired, seats, skills, experience, salaryRange, jobDescription, id }


        axios.post(`${serverURL.server_base_URL}/Clients/update/${editingJobID}`, updatedDetials)
            .then(success => {
                console.log("success")
            })
            .catch(err => {
                console.log(err)
            })
    }



    return <>


        <Container fluid style={{ backgroundColor: '#F5F3F4' }}>
            <Container style={{ padding: '100px 0px' }}>
                <Row>
                    <Col className="a" style={{ padding: '20px', backgroundColor: '#fff' }}>
                        <h1 style={{ fontWeight: 800, textAlign: 'center', padding: '10px 0px' }}><span style={{ borderBottom: '4px solid #001d3d', paddingBottom: '5px' }}>Create Job</span></h1>
                        <form onSubmit={saveJobDetails} >
                            <Row>
                                <Col sm={6}>

                                    <TextField
                                        value={companyName}
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        id="standard-basic" required label="Company Name" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Col>
                                <Col sm={6}>
                                    <TextField
                                        value={post}
                                        onChange={(e) => { setPost(e.target.value) }}
                                        id="standard-basic" required label="Required Post" fullWidth /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <TextField
                                        value={genderRequired}
                                        onChange={(e) => { setGenderRequired(e.target.value) }}
                                        id="standard-basic" required type="text" label="Gender Required" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </Col>
                                <Col>
                                    <TextField
                                        value={seats}
                                        onChange={(e) => { setSeats(e.target.value) }}
                                        id="standard-basic" required type="text" label="Number of Seats" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Col>
                            </Row>
                            <TextField
                                value={salaryRange}
                                onChange={(e) => { setSalaryRange(e.target.value) }}
                                id="standard-basic" required type="text" label="Salary Range" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <TextField
                                value={skills}
                                onChange={(e) => { setSkills(e.target.value) }}
                                id="standard-basic" required type="text" label="Skills required" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                            <TextField
                                value={experience}
                                onChange={(e) => { setExperience(e.target.value) }}
                                id="standard-basic" required type="text" label="Experience (Optional)" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <TextField
                                value={jobDescription}
                                onChange={(e) => { setJobDescription(e.target.value) }}
                                id="standard-basic" required type="text" label="Job Description (Optional)" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                            <div id="showError"></div>
                            {params.id ? <>
                                <Button
                                    type="submit"
                                    onClick={saveEditedJobDetails}
                                    variant="contained" color="primary" fullWidth
                                    style={{ marginTop: '20px', padding: '15px 0px', fontWeight: 600 }}>
                                    Edit Job
                         </Button>
                            </>
                                :
                                <>

                                    <Button
                                        type="submit"
                                        onClick={saveJobDetails}
                                        variant="contained" color="primary" fullWidth
                                        style={{ marginTop: '20px', padding: '15px 0px', fontWeight: 600 }}>
                                        Create Job
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

    </>
}