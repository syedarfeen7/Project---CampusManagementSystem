import Header from '../../HomeComponent/HeaderComponent/header'
import Footer from '../../HomeComponent/FooterComponent/footer'
import { Col, Container, Row, Card } from 'react-bootstrap'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import serverURL from '../../../serverSetting'
export default function AppliedJobsForComapny() {
    let params = useParams()
    let ids = {
        id: params.id
    }
    localStorage.setItem("particularJobID", params.id)
    let [appliedJobStudentDetails, setAppliedJobStudentDetails] = useState([])
    useEffect(() => {

        getStudentProfileWhoAppliedForParticularJob()

    }, [])

    const getStudentProfileWhoAppliedForParticularJob = () => {
        axios.get(`${serverURL.server_base_URL}/Clients/profileOfAppliedJobs/${params.id}`)
            .then(success => {
                setAppliedJobStudentDetails(success.data.data)

            })
            .catch(err => {
                console.log(err)
            })
    }
    const toDeleteAppliedJobOfStudent = (profileID) => {
        axios.post(`${serverURL.server_base_URL}/Clients/removeJobID/${profileID}`, ids)
            .then(success => {
                console.log("success")
                getStudentProfileWhoAppliedForParticularJob()
                axios.post(`${serverURL.server_base_URL}/Clients/deleteJob/${params.id}`)
                    .then(success => {
                        console.log("Successfully deleted Applied Job By Company")
                    })
                    .catch(err => {
                        console.log("Error in deleting the applied job by company")
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    const sendUserEmail = (email) => {
        // israr46ansari@gmail.com 
        let data = { email }
        axios.post(`${serverURL.server_base_URL}/Clients/sendAprovedCandidateEmail`, data)
            .then(succ => {
                if (succ.status) {
                    // document.getElementById("approve-btn").innerHTML = "Approved"

                    alert("Successfully send Email to Candidate")
                    return
                }
            })
            .catch(err => {
                console.log("Unable to send Email", err)
            })
    }
    return <>
        <Header />

        <Container >
            <Row style={{ margin: '100px 0px' }}>
                <Col>
                    <h1 style={{ fontWeight: 700 }}>LIST OF ALL ENROLLED <span style={{ color: '#FB8500', fontWeight: 900 }}>STUDENTS</span></h1>
                </Col>
            </Row>


            {appliedJobStudentDetails.length ?

                <>
                    {appliedJobStudentDetails.map(job =>

                        <Row>
                            <Col >
                                <Card style={{ margin: '20px 5px' }}>
                                    <Card.Header as="h5">{job.firstName + " " + job.lastName}</Card.Header>
                                    <Card.Body>

                                        <Card.Text style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
                                            <Button
                                                variant="contained" id="approve-btn" color="primary" style={{ padding: '6px 30px' }} onClick={() => sendUserEmail(job.email)}>
                                                Approve
                                            </Button>

                                            <Link to={`/Admin/StudProfile/${job._id}`} >
                                                <Button
                                                    variant="contained" color="primary" style={{ padding: '6px 30px' }}>
                                                    View Profile
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() => { toDeleteAppliedJobOfStudent(job._id) }}
                                                variant="contained" color="primary" style={{ padding: '6px 30px' }}>
                                                Delete Request
                                            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}

                </>


                :

                <>
                    <p style={{ textAlign: 'center', margin: '20px 0px' }}>No Students Applied For this Job!</p>
                </>
            }

        </Container>
        <Footer />
    </>
}