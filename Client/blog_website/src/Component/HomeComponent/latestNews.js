
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function LatestNews() {
    return <>

        <Container style={{ backgroundColor: '#F8F9FA' }} fluid>
            <Container>
                <Row style={{ padding: '40px 20px' }}>
                    <Col md={6} sm={12}>
                        <div>
                            <h1 style={{ fontWeight: 700 }}>News & Jobs</h1>
                            <p style={{ fontWeight: 700 }}>Our Top Companies</p>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div>
                            <p style={{ borderLeft: '4px solid #000', paddingLeft: '10px' }}>In 1994 we started providing our services under the Larssen® trademark. A few years later we <br />were among the leaders in the field of corporate consulting and corporate services.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '40px' }}>
                    <Col md={6}>
                        <Card style={{ width: 'auto', margin: '10px auto' }} className="Card">
                            <Card.Body>
                                <Card.Title style={{ borderBottom: '3px solid #212529', paddingBottom: '10px' }}>Net Sol. </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Required Position : Manager</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/Login"><Button variant="outline-secondary">Apply Now</Button> &nbsp;</Link>
                                <Button variant="outline-secondary">Get Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: 'auto', margin: '10px auto' }} className="Card">
                            <Card.Body>
                                <Card.Title style={{ borderBottom: '3px solid #212529', paddingBottom: '10px' }} >Systems Limited</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Required Position : Senior Developer</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/Login"><Button variant="outline-secondary">Apply Now</Button> &nbsp;</Link>
                                <Button variant="outline-secondary">Get Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card style={{ width: 'auto', margin: '10px auto' }} className="Card">
                            <Card.Body>
                                <Card.Title style={{ borderBottom: '3px solid #212529', paddingBottom: '10px' }} >S & P Global Pakistan Pvt Ltd</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Required Position : Production Mang.</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/Login"><Button variant="outline-secondary">Apply Now</Button> &nbsp;</Link>
                                <Button variant="outline-secondary">Get Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: 'auto', margin: '10px auto' }} className="Card">
                            <Card.Body>
                                <Card.Title style={{ borderBottom: '3px solid #212529', paddingBottom: '10px' }} >Ovex Technologies.</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Required Position : Full Stack Dev.</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/Login"><Button variant="outline-secondary">Apply Now</Button> &nbsp;</Link>
                                <Button variant="outline-secondary">Get Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ paddingBottom: '100px' }}>
                    <Col>
                        <Card className="Card">
                            <Card.Header style={{ backgroundColor: '#212529' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Pakistan Memon Foundation</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Required Position : Full Stack Dev.</Card.Subtitle>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Link to="/Login"><Button variant="outline-secondary">Apply Now</Button> &nbsp;</Link>
                                <Button variant="outline-secondary">Get Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </Container>
    </>
}