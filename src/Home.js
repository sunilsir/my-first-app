import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import pic from "./images/slider.gif";
import pic1 from "./images/wad.png";
import pic2 from "./images/mad.png";
import pic3 from "./images/ct.png";
import pic4 from "./images/dm.png";

export const Home = () => {
    const cardTitle=[{title:'Web App Development', desc:'ABC', impath:pic1},
    {title:'Mobile App Development', desc:'ABC', impath:pic2},
    {title:'Corporate Training', desc:'ABC', impath:pic3},
    {title:'Digital Marketing', desc:'ABC', impath:pic4}
]
    return (
        <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>WELCOME TO IT WORLD</h3>
              <p>Quality is not just a word, It's a routine that we follow..</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>

        <Row xs={1} md={2} className="g-4">
      {cardTitle.map((v,i) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={v.impath}/>
            <Card.Body>
                    <Card.Title>{v.title}</Card.Title>
              <Card.Text>
                {v.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
      );
}

export default Home;