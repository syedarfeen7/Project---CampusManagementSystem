import { Container, Row, Col } from 'react-bootstrap'
import '..//Home.css'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
export default function Footer() {

    return <>

        <Container fluid className="footer">
            <Row style={{ padding: '40px 0px' }}>
                <Col sm={12}>
                    <h4><span style={{ fontSize: '2rem', fontWeight: 700 }}>C</span>ampus <span style={{ fontSize: '2rem', fontWeight: 700 }}>M</span>anagement <span style={{ fontSize: '2rem', fontWeight: 700 }}>S</span>ystem</h4>
                    <hr style={{ backgroundColor: '#fff' }} />
                </Col>
            </Row>
            <Row>
                <Col lg={4} sm={4} >
                    <div>
                        <h3>Social Links</h3>
                        <div className="socialLinks">
                            <FaFacebook className="icons" style={{ marginBottom: '20px' }} />
                            <FaInstagram className="icons" style={{ marginBottom: '20px' }} />
                            <FaTwitter className="icons" style={{ marginBottom: '20px' }} />
                            <FaWhatsapp className="icons" style={{ marginBottom: '20px' }} />
                        </div>
                    </div>
                </Col>
                <Col lg={4} sm={4} >
                    <h3>Services</h3>
                    <div>
                        <ul>
                            <li>Daily Jobs</li>
                            <li>Career Building</li>
                            <li>Online Earning</li>
                            <li>Create Account</li>
                            <li>Newest Jobs</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                </Col>

                <Col lg={4} sm={12}>
                    <h3>Newsletter Subscription</h3>
                    <div style={{ marginTop: '20px' }}>
                        <input
                            required
                            style={{ padding: '12px 30px 12px 10px' }}
                            type='email'
                            placeholder="Subscribe to our newsletter"
                        />
                        <button style={{ padding: '13px 20px' }} className="btn-grad">Subscribe</button>
                    </div>
                </Col>
            </Row>
            <Row style={{ backgroundColor: '#434343' }}>
                <Col sm={12}>
                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                        <p>Copyright &copy; All rights reserved. to CMS </p>
                    </div>
                </Col>
            </Row>
        </Container>

    </>
}