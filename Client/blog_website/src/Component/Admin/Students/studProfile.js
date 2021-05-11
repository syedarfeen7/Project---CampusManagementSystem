import { useState, useEffect } from 'react'
import axios from 'axios'
import serverURL from '../../../serverSetting'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Header from '../../HomeComponent/HeaderComponent/header';
import Footer from '../../HomeComponent/FooterComponent/footer';
import { useParams, useHistory } from 'react-router-dom'
export default function StudProfile() {
    let history = useHistory()
    let [studentProfileDetails, setStudentProfileDetails] = useState([])
    let params = useParams()
    localStorage.setItem("profileID", params.id)
    useEffect(() => {
        if (!(localStorage.getItem("adminID") || localStorage.getItem("companyID"))) {
            history.push("/Login", { status: true })
            return
        }
        if (params.id) {
            getSpecficUserDetails(params.id)
        }

    }, [])
    const getSpecficUserDetails = (id) => {
        axios.get(`${serverURL.server_base_URL}/Clients/StudProfile/${id}`)
            .then(success => {
                console.log(success.data.data)
                setStudentProfileDetails(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return <>
        <Header />
        <Container fluid style={{ backgroundColor: 'rgba(211, 211, 211, 0.226)' }}>
            {studentProfileDetails.length === null ?
                <p style={{ textAlign: "center", backgroundColor: '#fff', margin: '100px 0px' }}>"No profile created yet from student"</p>
                : <>
                    {studentProfileDetails &&
                        <>
                            <Row style={{ padding: '50px 0px 0px 10px' }}>
                                <Col>
                                    <h1 style={{ fontWeight: '700' }}>STUDENT <span style={{ color: '#FB8500' }}>PROFILE</span></h1>

                                </Col>
                            </Row>
                            <Row style={{ padding: '60px 10px' }}>
                                <Col lg={5} md={12} style={{ backgroundColor: '#fff' }}>

                                    <div style={{ margin: '10px 0px' }}>
                                        <h3>ABOUT ME</h3>
                                    </div>
                                    <div className="profileImage">

                                    </div>
                                    <table style={{ width: '100%', marginTop: '30px', lineHeight: '40px' }}>
                                        <tr>
                                            <td className="sameText">Name</td>
                                            <td>{studentProfileDetails.firstName + " " + studentProfileDetails.lastName}</td>
                                        </tr>
                                        <tr>
                                            <td className="sameText">Age</td>
                                            <td>{studentProfileDetails.age}</td>
                                        </tr>
                                        <tr>
                                            <td className="sameText">Gender</td>
                                            <td>{studentProfileDetails.gender}</td>
                                        </tr>
                                        <tr>
                                            <td className="sameText">Experience</td>
                                            <td>{studentProfileDetails.experience}</td>
                                        </tr>
                                        <tr>
                                            <td className="sameText">Skills</td>
                                            <td>{studentProfileDetails.skills}</td>

                                        </tr>
                                    </table>
                                </Col>

                                <Col lg={7} md={12}>
                                    <div >
                                        <div style={{ backgroundColor: '#fff', padding: '10px 10px' }}>
                                            <h3>PROFESSIONAL DETAILS</h3>
                                        </div>

                                        <div style={{ backgroundColor: '#fff', padding: '10px 10px', marginTop: '3px' }}>

                                            <table style={{ width: '100%', lineHeight: '50px' }} >

                                                <tr>

                                                    <td className="sameText">Qualification</td>
                                                    <td>{studentProfileDetails.qualification}</td>

                                                </tr>

                                                <tr>

                                                    <td className="sameText">Location</td>
                                                    <td>{studentProfileDetails.country}</td>

                                                </tr>
                                                <tr>

                                                    <td className="sameText">Degree</td>
                                                    <td>{studentProfileDetails.degree}</td>

                                                </tr>
                                                <tr>

                                                    <td className="sameText">Phone</td>
                                                    <td>{studentProfileDetails.phone}</td>

                                                </tr>
                                                <tr>

                                                    <td className="sameText">Email</td>
                                                    <td>{studentProfileDetails.email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="sameText">Address</td>
                                                    <td>{studentProfileDetails.address}</td>
                                                </tr>
                                                <br />
                                                <tr>
                                                    <td colSpan="4" className="sameText" style={{ fontSize: '2rem' }}>I'M A <span style={{ color: '#FB8500' }}>{studentProfileDetails.profession}</span></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div style={{ backgroundColor: '#fff', marginTop: '4px', padding: '10px', lineHeight: '26px' }}>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    }
                </>
            }

        </Container>
        <Footer />
    </>
}