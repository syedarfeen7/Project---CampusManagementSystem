
import { Carousel } from 'react-bootstrap'
export default function CarouselForHome() {
    return <>

        <Carousel >
            <Carousel.Item>
                <img
                    style={{ height: '80vh' }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1543196614-e046c7d3d82e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=898&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    style={{ height: '80vh' }}
                    className="d-block w-100 "
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Reputed Companies</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    style={{ height: '80vh' }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Daily Jobs Opprtunities</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </>
}