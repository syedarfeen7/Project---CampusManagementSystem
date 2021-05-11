
import axios from "axios";
import serverURL from '../../../serverSetting'
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import '../student.css'
import { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Header from "../../HomeComponent/HeaderComponent/header";
import Footer from "../../HomeComponent/FooterComponent/footer";
export default function Companies() {
    let [listOfCompanies, setListOfCompanies] = useState([])
    let [copyListOfCompanies, setCopyListOfCompanies] = useState([])

    let history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
        axios.get(`${serverURL.server_base_URL}/users/AllCompanies`)
            .then(success => {
                setListOfCompanies(success.data.data)
                setCopyListOfCompanies(success.data.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const companyID = (id) => {

        localStorage.setItem('allJobsCompanyID', id)
    }
    function fiterArray(companyname) {

        let filterArray = listOfCompanies.filter(company =>
            company.companyName.includes(companyname))
        if (!companyname) {
            filterArray = [...listOfCompanies]
            console.log(filterArray)
        }
        setCopyListOfCompanies(filterArray)
    }
    return <>

        <Header />

        <Container fluid>
            <Row >
                <Col className="allCompanyPageImage">
                    <div style={{ color: '#fff', textAlign: 'center', padding: '250px 0px' }}>
                        <h1 style={{ fontWeight: 800 }}>Find a Job you <span style={{ color: 'red' }}>Love</span></h1>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>

                    </div>
                </Col>
            </Row>
            <Container>
                <Row style={{ margin: '70px 0px' }}>
                    <Col>
                        <h1 style={{ fontWeight: 700 }}><span style={{ borderBottom: '4px solid #00adb5' }}>Our Trusted</span> Companies</h1>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '50px' }}>
                    <Col>
                        <div>
                            <TextField id="standard-basic"
                                onChange={(e) => { fiterArray(e.target.value) }}
                                label="Search company by name"
                                fullWidth />
                            {/* <input type="text" placeholder="Search company by name"/> */}
                        </div>
                    </Col>
                </Row>

                {/* {console.log(copyListOfCompanies)} */}
                {copyListOfCompanies.length ?

                    <>
                        {copyListOfCompanies.map(name =>
                            <Row>
                                <Col >
                                    <Card style={{ marginBottom: '50px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                        <Card.Header as="h5" style={{ backgroundColor: '#393e46', color: '#fff' }}><h1>{name.companyName}</h1></Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: '600', color: 'lightgray' }}>CEO - {name.firstName + " " + name.lastName}</Card.Title>
                                            <Card.Text>
                                                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                                </Card.Text>
                                            <Link to={`/Student/AllJobs/${name._id}`} style={{ color: '#fff' }}>
                                                <Button
                                                    onClick={() => companyID(name._id)}
                                                    style={{ backgroundColor: '#00adb5', border: 'none' }}>

                                                    View jobs
                                                    </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                    </>

                    :

                    <>
                        <p style={{ textAlign: 'center', margin: '20px 0px' }}>No Company Enrolled Yet!</p>
                    </>
                }


            </Container>
        </Container>
        <Footer />
    </>
}