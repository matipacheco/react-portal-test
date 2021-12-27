import Canyon from "./Canyon";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./Button";

function App() {
  return (
    <Container>
      <Row className="canyon-row">
        <Col lg={3} className="canyon-container">
          <Canyon />
        </Col>
      </Row>

      <Row className="button-row">
        <Col lg={2}>
          <Button>
            Fire!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
