import { useState, useEffect } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import serverURL from '../../../serverSetting'
export default function Posts({ jobs }) {
    const location = useLocation()
    let [isAdminPage, setAdminPage] = useState(false)
    let allJobsCompanyID = localStorage.getItem("allJobsCompanyID")
    useEffect(() => {
        setAdminPage(location.pathname === `/Admin/AllJobs/${allJobsCompanyID}`)
    }, [])
    let [appliedJobDetails, setAppliedJobDetails] = useState([])
    function sendRequestToSaveAppliedJobs(jobID) {
        axios.get(`${serverURL.server_base_URL}/Clients/list/${jobID}`)
            .then(success => {
                setAppliedJobDetails(success.data.data)
                console.log(appliedJobDetails)
                // axios.post(`${serverURL.server_base_URL}/Clients/AppliedJob`)
            })

            .catch(err => {
                console.log(err)
            })
    }
    function sendRequestToDeleteJob(jobID) {
        axios.post(`${serverURL.server_base_URL}/Clients/delete/${jobID}`)
            .then(success => {
                alert("Deleted")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return <>


        {jobs.map(a =>
            <>

                <Row>
                    <Col>
                        <Card style={{ marginBottom: '50px', marginTop: '30px' }}>
                            <Card.Header as="h5" style={{ backgroundColor: '#393e46', color: '#fff' }}><h1>{a.companyName}</h1></Card.Header>
                            <Card.Body>

                                <Card.Text>
                                    <table style={{ width: '100%' }}>
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Post</td>
                                            <td>{a.post}</td>
                                        </tr>
                                        <br />
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Gender</td>
                                            <td>{a.genderRequired}</td>
                                        </tr>
                                        <br />
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Seats</td>
                                            <td>{a.seats}</td>
                                        </tr>
                                        <br />
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Skills</td>
                                            <td>{a.skills}</td>
                                        </tr >
                                        <br />
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Experience</td>
                                            <td>{a.experience}</td>
                                        </tr>
                                        <br />
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Salary</td>
                                            <td>{a.salaryRange}</td>
                                        </tr>
                                        <br />
                                        <tr style={{ borderBottom: '1px solid lightgray' }}>
                                            <td style={{ fontWeight: 'bold' }}>Job description</td>
                                            <td>&nbsp;{a.jobDescription}</td>
                                        </tr>
                                        <br />
                                        <tr >
                                            {isAdminPage ?

                                                <>
                                                    <td colSpan="3">

                                                        <Button
                                                            onClick={() => sendRequestToDeleteJob(a._id)}
                                                            style={{ width: '100%', padding: '15px 0px', backgroundColor: '#393e46', border: 'none', fontWeight: '700' }}>Delete now</Button>
                                                    </td>
                                                </>

                                                :

                                                <>
                                                    <td colSpan="3">

                                                        <Button
                                                            onClick={() => sendRequestToSaveAppliedJobs(a._id)}
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


            </>

        )
        }

    </>
}