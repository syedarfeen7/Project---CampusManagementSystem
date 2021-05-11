import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../../HomeComponent/FooterComponent/footer'
import Header from '../../HomeComponent/HeaderComponent/header'
import "..//company.css"
import axios from 'axios'
import serverURL from '../../../serverSetting'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PersonalDetails from './personalDetails'
import AddCarousel from './addCarousel'
import ScrollTop from '../../HomeComponent/bactToTop/topBTN'
export default function Profile() {
    let history = useHistory()
    let [user, setUser] = useState([])
    let [jobs, setJobs] = useState([])
    let loggedInUserID = localStorage.getItem("signedInUserID")
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
        axios.get(`${serverURL.server_base_URL}/users/profile/${loggedInUserID}`)
            .then(success => {
                setUser(success.data.data)

            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`${serverURL.server_base_URL}/Clients/all-jobs/${loggedInUserID}`)
            .then(success => {
                setJobs(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return <>
        <Header />
        <Container fluid>
            <Row>
                <Col className="CompanyPic">
                    <div className="userName">
                        <h1 >Hello, <span style={{ color: '#48CAE4' }}>{user.firstName + " " + user.lastName}</span> </h1>
                        <h5 style={{ color: '#fff' }}>Welcome to our portal want to create your job?</h5>
                        <Link to="/Company/jobForm"><button>Click here</button></Link>
                    </div>
                </Col>
            </Row>
        </Container>

        <PersonalDetails />
        <hr style={{ border: '1px solid grey' }} />
        <Container fluid style={{ padding: '50px 50px' }}>
            <Row style={{ padding: '50px 10px' }}>
                <Col>
                    <h1 style={{ textAlign: 'center', fontWeight: 900 }}><span style={{ borderBottom: '7px solid #48CAE4' }}> Total </span> Jobs</h1>
                </Col>
            </Row>
            <Row >
                <Col md={6} sm={12}>
                    <Card style={{ margin: '100px auto' }}>
                        <Card.Header>Number of Jobs You Posted</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                Youo have currently {jobs.length} active jobs
                            </Card.Text>
                            <button style={{ padding: '5px 50px', border: 'none', backgroundColor: '#48CAE4', color: "#fff" }}>View All</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <AddCarousel />
                </Col>
            </Row>
        </Container>
        <Footer />
        <ScrollTop />

    </>
}