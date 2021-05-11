import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useHistory } from "react-router";
import serverSetting from "../../../serverSetting";
import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";

export default function AppliedJobsStudent() {
    let history = useHistory()
    let [appliedJobDetails, setAppliedJobbDetails] = useState([])
    let [activeStudentProfileDetails, setActiveStudentProfileDetails] = useState([])
    let [appliedID, setAppliedID] = useState('')
    let appliedStudentID = localStorage.getItem("studentID")
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
        getAllAppliedJobs()

    }, [])
    const getAllAppliedJobs = () => {

        axios.get(`${serverSetting.server_base_URL}/Clients/listAppliedJobs/${appliedStudentID}`)
            .then(success => {

                setAppliedJobbDetails(success.data.data)


            })
            .catch(err => {
                console.log(err)
            })
    }
    const toDeleteAppliedJob = (id) => {
        axios.post(`${serverSetting.server_base_URL}/Clients/deleteAppliedJob/${id}`)
            .then(success => {
                getAllAppliedJobs()
            })
            .catch(err => {
                console.log(err)
            })
    }


    return <>
        <Header />

        <Container>
            <Row>
                <Col>
                    <h1 style={{ fontWeight: '800', margin: '100px 0px' }}> Your Applied Jobs</h1>
                </Col>
            </Row>
            {appliedJobDetails.length ?

                <>
                    {appliedJobDetails.map(job =>
                        <Row>
                            <Col>
                                <Card style={{ marginBottom: '50px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <Card.Header as="h5" style={{ backgroundColor: '#393e46', color: '#fff' }}><h1>{job.companyName}</h1></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Details</Card.Title>
                                        <Card.Text>
                                            <table style={{ width: '100%' }}>
                                                <tr>
                                                    <td>Post  </td>
                                                    <td>{job.post}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>{job.genderRequired}</td>
                                                </tr>
                                                <tr>
                                                    <td>Experience</td>
                                                    <td>{job.experience}</td>
                                                </tr>

                                            </table>
                                        </Card.Text>

                                        <Button
                                            variant="danger"
                                            onClick={() => { toDeleteAppliedJob(job._id) }}
                                            style={{ border: 'none', padding: '15px 0px', width: "100%" }}>

                                            Undo job
                                        </Button>


                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </>

                :

                <>
                    <p style={{ textAlign: 'center', margin: '20px 0px' }}>No Applied Job Yet!</p>
                </>
            }

        </Container>

        <Footer />

    </>
}