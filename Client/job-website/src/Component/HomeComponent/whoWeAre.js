import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
export default function WhoeWeAre() {
    return <>

        <Container fluid style={{ backgroundColor: '' }}>
            <Container>
                <Row style={{ margin: '40px 0px' }}>
                    <Col>
                        <h1><span style={{ borderBottom: '5px solid #001d3d' }}>Who</span> We Are</h1>
                    </Col>
                </Row>
                <Row>

                    <Col md={6} className="whoWeAreImage">

                    </Col>

                    <Col md={6}>
                        <div>
                            <h5 style={{ fontWeight: 900, color: 'lightgray' }}>CMS - CEO </h5>
                            <h4>Our People Come First</h4>
                        </div>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into <br />electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset <br /> sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button style={{ backgroundColor: '#D00000', color: '#fff', padding: '7px 25px', border: 'none', borderRadius: '5px' }}> Read more</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
}