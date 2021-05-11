import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import serverURL from '../../../serverSetting'
import Pagination from "./pagination";
import TextField from '@material-ui/core/TextField';


export default function AllJobs() {
    let [jobs, setJobs] = useState([])
    let [copyJobs, setCopyJobs] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage] = useState(3)
    const location = useLocation()
    let [isAdminPage, setAdminPage] = useState(false)
    let [appliedJobDetails, setAppliedJobDetails] = useState([])
    let allJobsCompanyID = localStorage.getItem("allJobsCompanyID")
    let studentID = localStorage.getItem("studentID")
    useEffect(() => {
        setAdminPage(location.pathname === `/Admin/AllJobs/${allJobsCompanyID}`)
    }, [])

    let id = localStorage.getItem("allJobsCompanyID")
    useEffect(() => {
        getAllJobs()

    }, [])
    const getAllJobs = () => {
        axios.get(`${serverURL.server_base_URL}/Clients/all-jobs/${id}`)
            .then(success => {
                setJobs(success.data.data)
                setCopyJobs(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const sendRequestToSaveAppliedJobs = (jobID) => {
        axios.get(`${serverURL.server_base_URL}/Clients/list/${jobID}`)
            .then(success => {
                setAppliedJobDetails(success.data.data)
                console.log(success.data.data)
                axios.post(`${serverURL.server_base_URL}/Clients/AppliedJob/${studentID}`, success.data.data)
                    .then(success => {
                        alert("Successfully applied for job")
                    })
                    .catch(err => {
                        console.log("Error in applying job")
                    })
                axios.post(`${serverURL.server_base_URL}/Clients/applied/${studentID}`, success.data.data)
                    .then(success => {
                        console.log("added job id")
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })

            .catch(err => {
                console.log(err)
            })

    }
    const sendRequestToDeleteJob = (jobID) => {
        axios.post(`${serverURL.server_base_URL}/Clients/delete/${jobID}`)
            .then(success => {
                alert("Deleted")
                getAllJobs()
            })
            .catch(err => {
                console.log(err)
            })
    }
    function fiterArray(post) {

        let filterArray = jobs.filter(job =>
            job.post.includes(post))
        if (!post) {
            filterArray = [...jobs]
            console.log(filterArray)
        }
        setCopyJobs(filterArray)
    }
    let indexOfLastPage = currentPage * postsPerPage
    let indexOfFirstPage = indexOfLastPage - postsPerPage
    let currentPosts = jobs.slice(indexOfFirstPage, indexOfLastPage)
    const paginate = (pageNum) => setCurrentPage(pageNum)
    return <>

        {/* <Header /> */}
        <Container style={{ marginTop: '50px', marginBottom: '100px' }}>
            <Row style={{ marginBottom: '50px' }}>
                <Col>
                    <div>
                        <TextField id="standard-basic"
                            onChange={(e) => { fiterArray(e.target.value) }}
                            label="Search Job by post"
                            fullWidth />
                        {/* <input type="text" placeholder="Search company by name"/> */}
                    </div>
                </Col>
            </Row>
            {copyJobs.length ?

                <>
                    {copyJobs.map(job => <>
                        <Row>
                            <Col>
                                <Card style={{ marginBottom: '50px', marginTop: '30px' }}>
                                    <Card.Header as="h5" style={{ backgroundColor: '#393e46', color: '#fff' }}><h1>{job.companyName}</h1></Card.Header>
                                    <Card.Body>

                                        <Card.Text>
                                            <table style={{ width: '100%' }}>
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Post</td>
                                                    <td>{job.post}</td>
                                                </tr>
                                                <br />
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Gender</td>
                                                    <td>{job.genderRequired}</td>
                                                </tr>
                                                <br />
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Seats</td>
                                                    <td>{job.seats}</td>
                                                </tr>
                                                <br />
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Skills</td>
                                                    <td>{job.skills}</td>
                                                </tr >
                                                <br />
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Experience</td>
                                                    <td>{job.experience}</td>
                                                </tr>
                                                <br />
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Salary</td>
                                                    <td>{job.salaryRange}</td>
                                                </tr>
                                                <br />
                                                <tr style={{ borderBottom: '1px solid lightgray' }}>
                                                    <td style={{ fontWeight: 'bold' }}>Job description</td>
                                                    <td>&nbsp;{job.jobDescription}</td>
                                                </tr>
                                                <br />
                                                <tr >
                                                    {isAdminPage ?

                                                        <>
                                                            <td colSpan="3">

                                                                <Button
                                                                    onClick={() => sendRequestToDeleteJob(job._id)}
                                                                    style={{ width: '100%', padding: '15px 0px', backgroundColor: '#393e46', border: 'none', fontWeight: '700' }}>Delete now</Button>
                                                            </td>
                                                        </>

                                                        :

                                                        <>
                                                            <td colSpan="3">

                                                                <Button
                                                                    onClick={() => (sendRequestToSaveAppliedJobs(job._id))}
                                                                    style={{ width: '100%', padding: '15px 0px', backgroundColor: '#393e46', border: 'none', fontWeight: '700' }}>Apply now</Button>
                                                            </td>
                                                        </>

                                                    }

                                                </tr>
                                            </table>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </>)}
                    <Pagination postsPerPage={postsPerPage} totalPosts={jobs.length} paginate={paginate} />
                </>

                :
                <p>No Jobs Posted Yet!</p>}

        </Container>
        {/* <Footer /> */}

    </>
}