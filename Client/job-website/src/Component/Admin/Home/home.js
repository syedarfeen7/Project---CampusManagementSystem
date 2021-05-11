import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import { Container, Col, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import '../admin.css'
import { useEffect } from 'react'
import TotalClients from "./totalClients";
export default function AdminHome() {
    let history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem("adminID")) {
            history.push("/Login", { status: true })
            return
        }
    }, [])
    return <>
        <Header />
        <Container fluid>
            <Row>
                <Col className="adminHomePageImage">
                    <div style={{ color: '#fff', padding: '250px 0px', textAlign: 'center' }}>
                        <h1 style={{ fontWeight: 900, fontSize: '4rem' }}>Welcome <span style={{ color: '#08d9d6' }}>Admin</span></h1>
                        <p>Thanks fro choosing our services the best platform to get the jobs <br />
                            Here you can check the status of your Services
                        </p>

                    </div>
                </Col>
            </Row>


        </Container>
        <Container>
            <Row style={{ padding: '50px 10px' }}>
                <Col>
                    <h1 style={{ fontWeight: '700' }}>DETIALS ABOUT  <span style={{ color: '#08d9d6', fontWeight: 900 }}>YOUR SERVICES</span></h1>
                </Col>
            </Row>
            <TotalClients />
        </Container>
        <Footer />
    </>
}