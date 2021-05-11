import { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../../HomeComponent/FooterComponent/footer";
import Header from "../../HomeComponent/HeaderComponent/header";
import AllJobs from "./allJobs";

export default function CompleteAllJobs() {
    let history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem("signedInUserID")) {
            history.push("/Login", { status: true })
            return
        }
    }, [])
    return <>
        <Header />
        <AllJobs />
        <Footer />
    </>
}