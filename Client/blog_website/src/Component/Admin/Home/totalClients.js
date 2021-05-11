import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from 'react'
import axios from "axios";
import serverURL from '../../../serverSetting'
import Button from '@material-ui/core/Button';
import Countup from 'react-countup'
import { Link } from 'react-router-dom'
export default function TotalClients() {
    let [totalCompanies, setTotalCompanies] = useState([])
    let [totalJobs, setTotalJobs] = useState([])
    let [totalStudents, setTotalStudents] = useState([])
    useEffect(() => {
        axios.get(`${serverURL.server_base_URL}/users/AllCompanies`)
            .then(success => {
                setTotalCompanies(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`${serverURL.server_base_URL}/users/AllStudents`)
            .then(success => {
                setTotalStudents(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`${serverURL.server_base_URL}/Clients/allJobs`)
            .then(success => {
                setTotalJobs(success.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return <>
        <Row>
            <Col md={4}>
                <div className="totalCounts">
                    <h3>Total Enrolled Companies</h3>
                    <h4>
                        <Countup start={1} end={totalCompanies.length} />
                    &nbsp;+
                    </h4>
                    <Link to="/Admin/Companies">

                        <Button variant="contained" color="primary">
                            View Companies
                    </Button>
                    </Link>
                </div>
            </Col>

            <Col md={4}>
                <div className="totalCounts">
                    <h3>Total Posted Jobs</h3>
                    <h4>
                        <Countup start={1} end={totalJobs.length} />
                    &nbsp;+
                    </h4>
                    <Link to="/Admin/AllJobs/:id">

                        <Button variant="contained" color="primary">
                            View Jobs
                    </Button>
                    </Link>
                </div>
            </Col>

            <Col md={4}>
                <div className="totalCounts">
                    <h3>Total Enrolled Students</h3>
                    <h4>
                        <Countup
                            duration={5}
                            start={1}
                            end={totalStudents.length}
                        />
                    &nbsp;+
                    </h4>
                    <Link to="/Admin/Students">

                        <Button variant="contained" color="primary">
                            View Students
                    </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    </>
}