import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import serverURL from '..//..//..//serverSetting'
import axios from 'axios'
export default function PersonalDetails() {
    let [user, setUser] = useState([])
    let loggedInUserID = localStorage.getItem("signedInUserID")
    useEffect(() => {
        axios.get(`${serverURL.server_base_URL}/users/profile/${loggedInUserID}`)
            .then(success => {
                console.log("Found")
                setUser(success.data.data)
            })
            .catch(err => {
                console.log("Not found")
            })
    }, [])
    return <>

        <Container fluid style={{ padding: '100px 50px' }}>
            <Row >
                {/* <Col md={6} xl={4}>
                    <div className="loggedInUserImage">

                    </div>
                </Col> */}
                <Col>
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th colspan="2"><h1 style={{ color: '#48CAE4', fontWeight: 900 }}><span style={{ borderBottom: '7px solid #000' }}> Persoanl </span> Details</h1></th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr>
                                <td><h3>Name</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.firstName + " " + user.lastName}</h4></td>
                            </tr>
                            <br />
                            <tr>
                                <td><h3>Email</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.email}</h4></td>
                            </tr>
                            <br />
                            <tr>
                                <td><h3>Category</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.category}</h4></td>
                            </tr>
                            <br />
                            <tr>
                                <td><h3>Company Name</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.companyName}</h4></td>
                            </tr>
                            <br />
                            <tr>
                                <td><h3>Country</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.country}</h4></td>
                            </tr>
                            <br />
                            <tr>
                                <td><h3>Phone</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.phone}</h4></td>
                            </tr>
                            <br />
                            <tr>
                                <td><h3>Gender</h3></td>
                                <td><h4 style={{ fontWeight: "lighter" }}>{user.gender}</h4></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>

    </>
}