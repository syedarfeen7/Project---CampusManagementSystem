import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import '..//student.css'
import serverURL from '..//..//..//serverSetting'
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StudentProfile from "./studentProfile";
export default function Studenthome() {
    let history = useHistory()
    let studentID = localStorage.getItem("studentID")
    let [studentDetails, setStudentDetails] = useState([])
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }

        axios.get(`${serverURL.server_base_URL}/users/details/${studentID}`)
            .then(success => {
                setStudentDetails(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return <>

        <Header />
        <Container fluid>
            <Row>
                <Col className="studentHomePageImage">
                    <div style={{ color: '#fff', padding: '250px 0px' }}>
                        <h1 style={{ fontWeight: 800 }}>Welcome {studentDetails.firstName + " " + studentDetails.lastName}</h1>
                        <p>Thanks fro choosing our services the best platform to get the jobs <br />
                            Haven't created your Profile yet?
                        </p>
                        <Link to="/Student/Profile">
                            <button style={{ padding: '8px 20px', borderRadius: '5px', border: "none", backgroundColor: '#FB8500', color: '#fff' }}>Create your profile</button>
                        </Link>
                    </div>
                </Col>
            </Row>


        </Container>
        <StudentProfile />
        <Footer />

    </>
}