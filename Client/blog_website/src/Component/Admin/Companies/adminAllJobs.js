import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from 'react-bootstrap'
import serverURL from '../../../serverSetting'
import { useHistory } from 'react-router-dom'
import Posts from "../../Student/AllJobs/jobs";
import ScrollTop from '../../HomeComponent/bactToTop/topBTN'
import Pagination from "../../Student/AllJobs/pagination";
import Header from "../../HomeComponent/HeaderComponent/header";
import Footer from "../../HomeComponent/FooterComponent/footer";
import AllJobs from "../../Student/AllJobs/allJobs";


export default function AdminAllJobs() {
    let [jobs, setJobs] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage] = useState(3)
    let history = useHistory()

    let id = localStorage.getItem("allJobsCompanyID")
    useEffect(() => {
        if (!localStorage.getItem("adminID")) {
            history.push("/Login", { status: true })
            return
        }

        axios.get(`${serverURL.server_base_URL}/Clients/all-jobs/${id}`)
            .then(success => {
                setJobs(success.data.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    let indexOfLastPage = currentPage * postsPerPage
    let indexOfFirstPage = indexOfLastPage - postsPerPage
    let currentPosts = jobs.slice(indexOfFirstPage, indexOfLastPage)
    const paginate = (pageNum) => setCurrentPage(pageNum)
    return <>

        <Header />
        <Container style={{ marginTop: '50px', marginBottom: '100px' }}>
            {jobs.length ?

                <>
                    <AllJobs />
                    {/* <Posts jobs={currentPosts}/> */}
                    {/* <Pagination postsPerPage={postsPerPage} totalPosts={jobs.length} paginate={paginate}/> */}
                </>

                :
                <p>No Jobs Posted Yet!</p>}

        </Container>

        <Footer />
        {/* <ScrollTop /> */}
    </>
}