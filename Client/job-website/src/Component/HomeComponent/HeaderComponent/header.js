import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation, useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Header(props) {
    let params = useParams()
    let history = useHistory()
    const location = useLocation()
    let [isCompanyPage, setCompanyPage] = useState(false)
    let [isStudentPage, setStudentPage] = useState(false)
    let [isAdminPage, setAdminPage] = useState(false)
    let allJobsCompanyID = localStorage.getItem('allJobsCompanyID')
    let updatingStudentProfileId = localStorage.getItem("updatingStudentProfileId")
    let companyID = localStorage.getItem("companyID")

    useEffect(() => {
        setCompanyPage(location.pathname === "/Company/add-new" || location.pathname === "/Company/jobForm" || location.pathname === "/Company/alljobs" || location.pathname === `/Company/jobForm/${params.id}` || location.pathname === `/Company/Students/${companyID}` || location.pathname === `/Company/Students/${localStorage.getItem("particularJobID")}` || location.pathname === `/Admin/StudProfile/${localStorage.getItem("profileID")}`)
        setStudentPage(location.pathname === "/Student/Home" || location.pathname === "/Student/Companies" || location.pathname === `/Student/AllJobs/${allJobsCompanyID}` || location.pathname === "/Student/AllJobs/#" || location.pathname === "/Student/Profile" || location.pathname === `/Student/Profile/${updatingStudentProfileId}` || location.pathname === "/Student/AppliedJobs")
        setAdminPage(location.pathname === "/Admin/Home" || location.pathname === "/Admin/Companies" || location.pathname === "/Admin/Students" || location.pathname === `/Admin/AllJobs/${allJobsCompanyID}` || location.pathname === `/Admin/StudProfile/${params.id}`)
    }, [])
    function logoutUer() {
        localStorage.removeItem("signedInUserID")
        localStorage.removeItem("companyID")
        localStorage.removeItem("studentID")
        localStorage.removeItem("updatingStudentProfileId")
        localStorage.removeItem("allJobsCompanyID")
        localStorage.removeItem("adminID")
        localStorage.removeItem("particularJobID")
        localStorage.removeItem("profileID")
        localStorage.removeItem("studentProfileID")

        history.push("/Login")
    }
    return <>
        <Container fluid style={{ backgroundColor: '#434343', color: '#fff' }}>
            <Row>
                <Col md={6} sm={6}>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'cnter', margin: '5px auto' }}>
                        <p>Welcome to <b>Campus Management System</b></p>
                    </div>

                </Col>
                <Col md={6} sm={6}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '5px auto' }}>
                        <FaFacebook />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaInstagram />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaTwitter />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid>

            <Row>

                <Navbar sticky="top" expand="lg" style={{ width: '100%', padding: '30px 10px', backgroundColor: '#fff', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>

                    <Navbar.Brand href="#home"> <h4><span style={{ fontSize: '2rem', fontWeight: 700 }}>C</span>ampus <span style={{ fontSize: '2rem', fontWeight: 700 }}>M</span>anagement <span style={{ fontSize: '2rem', fontWeight: 700 }}>S</span>ystem</h4> </Navbar.Brand> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {isAdminPage && localStorage.getItem("adminID") ?
                                <>
                                    <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Admin/Home">Home</Link></Nav.Link>
                                    <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Admin/Companies">Companies</Link></Nav.Link>
                                    <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Admin/Students">Students</Link></Nav.Link>

                                    <button
                                        onClick={() => logoutUer()}
                                        style={{ border: 'none', borderLeft: '2px solid grey', padding: '5px 15px', backgroundColor: '#fff' }}>Logout</button>
                                </>

                                :

                                <>
                                    {isCompanyPage && localStorage.getItem("signedInUserID") ?
                                        <>
                                            <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Company/add-new">Profile</Link></Nav.Link>
                                            <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Company/alljobs">Posted Jobs</Link></Nav.Link>
                                            {/* <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Company/Students">Applied Students</Link></Nav.Link> */}
                                            {/* <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="#">Applied Jobs</Link></Nav.Link> */}

                                            <button
                                                onClick={() => logoutUer()}
                                                style={{ border: 'none', borderLeft: '2px solid grey', padding: '5px 15px', backgroundColor: '#fff' }}>Logout</button>

                                        </>
                                        :
                                        isStudentPage && localStorage.getItem("signedInUserID") ?
                                            <>
                                                <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Student/Home">Home</Link></Nav.Link>
                                                <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Student/Companies">Companies</Link></Nav.Link>
                                                <Nav.Link > <Link style={{ textDecoration: 'none', color: '#000' }} to="/Student/AppliedJobs">Applied Jobs</Link></Nav.Link>

                                                <button
                                                    onClick={() => logoutUer()}
                                                    style={{ border: 'none', borderLeft: '2px solid grey', padding: '5px 15px', backgroundColor: '#fff' }}>Logout</button>
                                            </>
                                            :
                                            <>
                                                <Nav.Link href="#home"><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link href="#link">About us</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link href="#link" style={{ borderLeft: '2px solid black' }}><Link to="/Login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </>}
                                </>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Row>
        </Container>

    </>
}