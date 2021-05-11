import axios from "axios";
import Footer from "..//..//HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import serverURL from '..//..//..//serverSetting'
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import '..//company.css'
import ScrollTop from "../../HomeComponent/bactToTop/topBTN";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
export default function PostedJobs() {
    const classes = useStyles();
    let [jobs, setJobs] = useState([])
    let loggedInUserID = localStorage.getItem("signedInUserID")
    let history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
        getAllPostedJobs()
    }, [])
    const getAllPostedJobs = () => {
        axios.get(`${serverURL.server_base_URL}/Clients/all-jobs/${loggedInUserID}`)
            .then(success => {
                setJobs(success.data.data)

            })
            .catch(err => {
                console.log(err)
            })

    }

    const toDeleteJob = (id) => {
        axios.post(`${serverURL.server_base_URL}/Clients/delete/${id}`)
            .then(success => {
                console.log("Deleted")
                getAllPostedJobs()
            })
            .catch(err => {
                console.log("Error in deleting the job")
                console.log(err)
            })
    }
    return <>

        <Header />
        <Container fluid>
            <Row>
                <Col className="postedJobPageImage" >

                    <div className="createJob">

                        <h1 style={{ color: "#fff", fontWeight: 700, textAlign: "center" }}>Create your own job</h1>
                        <Link to="/Company/jobForm"><button style={{ padding: '5px 30px', border: "none", fontWeight: 700, color: '#fff', backgroundColor: '#48CAE4' }}>Creat job</button></Link>
                    </div>

                </Col>
            </Row>
            <Container style={{ padding: '100px 0px' }}>

                <Row>
                    <Col>
                        <h1 style={{ textAlign: 'center', marginBottom: '60px', fontWeight: 700 }}>Great companies trust CMS</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/49/15849.jpg" />
                    </Col>

                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/74/12774.jpg" />
                    </Col>
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/80/127380.jpg" />
                    </Col>
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/07/14107.jpg" />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/43/17843.jpg" />
                    </Col >
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/79/3079.jpg" />
                    </Col>
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/84/8584.jpg" />
                    </Col>
                    <Col style={{ marginBottom: '30px' }}>
                        <img src="https://s.rozee.pk/c/i/sprt/comp/80/127380.jpg" />
                    </Col>
                </Row>
            </Container>
            <Row style={{ padding: '50px 10px' }}>
                <Col>
                    <h1 style={{ textAlign: 'center', fontWeight: 700 }}><span style={{ borderBottom: '7px solid #48CAE4' }}> Total </span>  Created Jobs</h1>
                </Col>
            </Row>
            {jobs.length ? <>
                {jobs.map(a =>

                    <Row style={{ padding: '10px 10px' }}>
                        <Col>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading} style={{ fontWeight: 900, fontSize: '16px' }}>{a.companyName}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <table>
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Post</td>
                                                <td>{a.post}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Gender</td>
                                                <td>{a.genderRequired}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Seats</td>
                                                <td>{a.seats}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Skills</td>
                                                <td>{a.skills}</td>
                                            </tr >
                                            <br />
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Experience</td>
                                                <td>{a.experience}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Salary</td>
                                                <td>{a.salaryRange}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Job description</td>
                                                <td>&nbsp;{a.jobDescription}</td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td>
                                                    To check the Response of students <Link to={`/Company/Students/${a._id}`}>Click here</Link>
                                                </td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td >

                                                    <Link to={`/Company/jobForm/${a._id}`}>
                                                        <Button
                                                            variant="contained" color="primary" style={{ padding: '6px 30px' }}>
                                                            Edit
                                            </Button>
                                                    </Link>
                                                </td>
                                                <td style={{ fontWeight: 'bold' }}>
                                                    <Button
                                                        onClick={() => { toDeleteJob(a._id) }}
                                                        variant="contained" color="primary">
                                                        Delete
                                            </Button>
                                                </td>


                                            </tr>
                                        </table>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </Col>
                    </Row>
                )}
            </>
                :
                <p style={{ textAlign: 'center' }}>No jobs created yet!</p>
            }


        </Container>
        <Footer />
        <ScrollTop />

    </>
}