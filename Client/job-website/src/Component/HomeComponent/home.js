// import {Container, Row, Col} from 'react-bootstrap'

import ScrollTop from "./bactToTop/topBTN";
import CarouselForHome from "./CarouselComponent/carousel";
import Footer from "./FooterComponent/footer";
import Header from "./HeaderComponent/header";
import LatestNews from "./latestNews";
import WhoeWeAre from "./whoWeAre";

export default function Home() {
    return <>

        <Header />
        <CarouselForHome />
        <WhoeWeAre />
        <LatestNews />
        <ScrollTop />
        <Footer />
    </>
}