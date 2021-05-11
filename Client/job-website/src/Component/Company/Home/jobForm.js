import AddnewJob from '..//Form/addJobForm'
import Header from "..//..//HomeComponent/HeaderComponent/header";
import Footer from '..//..//HomeComponent/FooterComponent/footer';
import { useEffect } from 'react';
import { useHistory } from 'react-router';


export default function CompanyJobForm() {
    let history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
    }, [])
    return <>
        <Header />

        <AddnewJob />

        <Footer />

    </>
}