import React, { useState } from 'react'
import { Card, Col, Row } from "react-bootstrap";
import img1 from '../images/Meme/m1.jpg';
import img2 from '../images/Meme/m2.jpg';
import img3 from '../images/Meme/m3.jpg';
import img4 from '../images/Meme/m4.jpg';
import img5 from '../images/Meme/m5.jpg';
import img6 from '../images/Meme/m6.jpg';
import img7 from '../images/Meme/m7.jpg';
import img8 from '../images/Meme/m8.jpg';
import img9 from '../images/Meme/m9.jpg';
import img10 from '../images/Meme/m10.jpg';
import img11 from '../images/Meme/m11.jpeg';
import img12 from '../images/Meme/m12.jpeg';
import img13 from '../images/Meme/m13.jpg';
import img14 from '../images/Meme/m14.jpg';
import img15 from '../images/Meme/m15.jpg';
import img16 from '../images/Meme/m16.jpg';
import img17 from '../images/Meme/m17.jpg';
import img18 from '../images/Meme/m18.jpg';
import img19 from '../images/Meme/m19.jpg';

function Meme() {

  const [start, setStart] = useState(false);

return (
    <div className="container my-5">
    <Row className="mt-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img1}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img2}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img3}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img4}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img5}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img6}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img7}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img8}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img9}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img10}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img11}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img12}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img13}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img14}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={img15}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Meme ;
