import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import '../admin.css'
import { useState, useEffect } from 'react'
import PostedJobs from "../../Company/postedJobs/alljobs";
import axios from "axios";
import serverURL from '../../../serverSetting'
export default function CompaniesForAdmin() {
    let history = useHistory()
    let [listOfCompanies, setListOfCompanies] = useState([])
    useEffect(() => {
        if (!localStorage.getItem("adminID")) {
            history.push("/Login", { status: true })
            return
        }
        getAllCompanies()
    }, [])

    const getAllCompanies = () => {

        axios.get(`${serverURL.server_base_URL}/users/AllCompanies`)
            .then(success => {
                setListOfCompanies(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const sendRequestToDeleteCompany = (id) => {
        axios.post(`${serverURL.server_base_URL}/Clients/deleteAllJobs/${id}`)
            .then(success => {
                console.log("deleted")
                let id = localStorage.getItem("allJobsCompanyID")
                axios.post(`${serverURL.server_base_URL}/users/deleteCompany/${id}`)
                    .then(success => {
                        console.log("Deleted All Jobs")
                    })
                    .catch(err => {
                        console.log(err)
                    })
                getAllCompanies()
            })
            .catch(err => {
                console.log(err)
            })
    }
    const companyID = (id) => {

        localStorage.setItem('allJobsCompanyID', id)
    }
    return <>


        <Header />
        <Container fluid>
            <Row>
                <Col className="adminHomePageImage">
                    <div style={{ color: '#fff' }}>
                        <h1 style={{ fontWeight: 900, fontSize: '3rem', textAlign: 'center', padding: '300px 0px' }}>Total Enrolled   <span style={{ color: '#08d9d6' }}>Companies</span></h1>
                    </div>
                </Col>
            </Row>
            <Container>
                {listOfCompanies.length ?
                    <>
                        <Row style={{ margin: '50px 0px' }}>
                            <Col>
                                <div>
                                    <h1 style={{ fontWeight: 800 }}>Total <span style={{ color: '#08d9d6' }}>Companies</span></h1>
                                </div>
                            </Col>
                        </Row>

                        {listOfCompanies.map(name =>
                            <Row>
                                <Col>
                                    <Card style={{ marginBottom: '50px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                        <Card.Header as="h5" style={{ backgroundColor: '#393e46', color: '#fff' }}><h1>{name.companyName}</h1></Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: '600', color: 'lightgray' }}>CEO - {name.firstName + " " + name.lastName}</Card.Title>
                                            <Card.Text>
                                                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                </Card.Text>
                                            <Link to={`/Admin/AllJobs/${name._id}`} style={{ color: '#fff' }}>
                                                <Button
                                                    onClick={() => companyID(name._id)}
                                                    style={{ backgroundColor: '#00adb5', border: 'none' }}>

                                                    View jobs
                                    </Button>
                                            </Link>
                                    &nbsp;&nbsp;
                                    <Button
                                                onClick={() => sendRequestToDeleteCompany(name._id)}
                                                style={{ backgroundColor: '#00adb5', border: 'none' }}>

                                                Delete Company
                                    </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                    </>
                    :
                    <>
                        <p style={{ textAlign: 'center', margin: '50px 0px' }}>No Companies enrolled yet!</p>
                    </>
                }


            </Container>
        </Container>
        <Footer />

    </>
}