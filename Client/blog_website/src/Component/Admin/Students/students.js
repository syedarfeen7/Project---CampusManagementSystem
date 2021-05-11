import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import axios from 'axios'
import { useEffect, useState } from 'react'
import serverURL from '../../../serverSetting'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import '../admin.css'
export default function Students() {
    let history = useHistory()
    let [allStudents, setAllStudents] = useState([])
    useEffect(() => {
        if (!localStorage.getItem("adminID")) {
            history.push("/Login", { status: true })
            return
        }

        getAllStudents()
    }, [])
    const getAllStudents = () => {
        axios.get(`${serverURL.server_base_URL}/users/AllStudents`)
            .then(success => {
                console.log(success.data.data)
                setAllStudents(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const sendRequestToDeleteStudent = (id) => {
        axios.post(`${serverURL.server_base_URL}/Clients/deleteAppliedJobs/${id}`)
            .then(success => {
                console.log("Deleted All Jobs")
                getAllStudents()
            })
            .catch(err => {
                console.log(err)
            })
        axios.post(`${serverURL.server_base_URL}/users/deleteCompany/${id}`)
            .then(success => {
                console.log("Account Deleted")
            })
            .catch(err => {
                console.log(err)
            })
        axios.post(`${serverURL.server_base_URL}/Clients/deleteStudProfile/${id}`)
            .then(success => {
                console.log("Succcessfully deleted stud profile")

            })
            .catch(err => {
                console.log("Error in deletinf student profile")
            })
    }
    return <>

        <Header />
        <Container fluid>
            <Row>
                <Col className="adminAllStudentPageImage">
                    <h1 style={{ fontWeight: 900, color: '#fff', fontSize: '3rem', textAlign: 'center', padding: '300px 0px' }}>Total Enrolled <span style={{ color: '#08d9d6' }}>Students</span></h1>
                </Col>
            </Row>
            <Container>
                {allStudents.length ?


                    <>
                        <Row style={{ margin: '50px 0px' }}>
                            <Col>
                                <div>
                                    <h1 style={{ fontWeight: 800 }}>Total Students</h1>
                                </div>
                            </Col>
                        </Row>
                        {allStudents.map(stud =>
                            <Row>
                                <Col >
                                    <Card style={{ margin: '20px 0px' }}>
                                        <Card.Header as="b">{stud.firstName + " " + stud.lastName}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{stud.profession}</Card.Title>
                                            <Card.Text>
                                                {stud.email + " | "}
                                                {stud.country}
                                            </Card.Text>
                                            <Button
                                                onClick={() => sendRequestToDeleteStudent(stud._id)}
                                                variant="primary">Delete Student</Button> &nbsp;
                                            <Link to={`/Admin/StudProfile/${stud._id}`}><Button variant="primary">View Profile</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                    </>

                    :

                    <>
                        <p style={{ textAlign: "center", backgroundColor: '#fff', margin: '100px 0px' }}>"No Students  enrolled yet!"</p>
                    </>

                }
            </Container>
        </Container>
        <Footer />

    </>
}